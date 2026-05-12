import type { Global, LandingPage, LeadPayload, StrapiResponse } from "./types";
import { readEnv } from "./env";

// On Cloudflare Workers (OpenNext), env vars from the dashboard are injected
// per request and may not always be on process.env. readEnv() falls back to
// the Cloudflare context bindings.
function getStrapiUrl(): string | null {
  const url = readEnv("STRAPI_URL") || readEnv("NEXT_PUBLIC_STRAPI_URL");
  return url && url.trim().length > 0 ? url : null;
}

type FetchOptions = {
  tags?: string[];
  revalidate?: number | false;
};

// Revalidate every 24h. Manual invalidation via revalidateTag("landing-page" / "global")
// from a Strapi webhook gives near-instant updates between TTL windows.
const ONE_DAY_SECONDS = 60 * 60 * 24;

// Hard cap on each Strapi request — keeps build from hanging if Strapi is
// down or env vars are missing on the build environment.
const FETCH_TIMEOUT_MS = 8000;

async function strapiFetch<T>(
  path: string,
  { tags = [], revalidate = ONE_DAY_SECONDS }: FetchOptions = {},
): Promise<T | null> {
  const STRAPI_URL = getStrapiUrl();
  if (!STRAPI_URL) {
    console.warn(
      `[strapi] STRAPI_URL/NEXT_PUBLIC_STRAPI_URL not set — skipping fetch for ${path}`,
    );
    return null;
  }

  const url = `${STRAPI_URL}${path}`;
  try {
    const res = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      next: { tags, revalidate: revalidate === false ? undefined : revalidate },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
    if (!res.ok) {
      // Use warn (not error) to avoid Next.js dev overlay — the caller handles null gracefully.
      console.warn(`[strapi] ${res.status} ${res.statusText} for ${url}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (err) {
    console.warn(`[strapi] fetch failed for ${url}`, err);
    return null;
  }
}

// Strapi 5 dynamic zone populate uses the `on` syntax per component.
// Mixing `populate[sections][populate]=*` with deeper keys breaks qs parsing
// and Strapi returns 500. This per-component form is the supported one.
const LANDING_PAGE_QUERY = [
  // shared
  "populate[seo][populate]=*",

  // sections.hero
  "populate[sections][on][sections.hero][populate][image]=true",
  "populate[sections][on][sections.hero][populate][primaryCta]=true",
  "populate[sections][on][sections.hero][populate][secondaryCta]=true",

  // sections.stats
  "populate[sections][on][sections.stats][populate][items]=true",

  // sections.feature-grid
  "populate[sections][on][sections.feature-grid][populate][features]=true",

  // sections.services-list
  "populate[sections][on][sections.services-list][populate][services][populate]=*",

  // sections.process
  "populate[sections][on][sections.process][populate][steps]=true",

  // sections.portfolio
  "populate[sections][on][sections.portfolio][populate][projects][populate]=*",

  // sections.testimonials
  "populate[sections][on][sections.testimonials][populate][testimonials][populate]=*",

  // sections.faq
  "populate[sections][on][sections.faq][populate][items]=true",

  // sections.cta
  "populate[sections][on][sections.cta][populate][primaryCta]=true",
  "populate[sections][on][sections.cta][populate][secondaryCta]=true",

  // sections.contact-form (only scalars, but include via populate=* for completeness)
  "populate[sections][on][sections.contact-form][populate]=*",
].join("&");

const GLOBAL_QUERY = [
  "populate[defaultSeo][populate]=*",
  "populate[header][populate]=*",
  "populate[footer][populate]=*",
  "populate[contact]=*",
].join("&");

export async function getLandingPage(): Promise<LandingPage | null> {
  const res = await strapiFetch<StrapiResponse<LandingPage>>(
    `/api/landing-page?${LANDING_PAGE_QUERY}`,
    { tags: ["landing-page", "strapi"], revalidate: 60 },
  );
  return res?.data ?? null;
}

export async function getGlobal(): Promise<Global | null> {
  const res = await strapiFetch<StrapiResponse<Global>>(`/api/global?${GLOBAL_QUERY}`, {
    tags: ["global", "strapi"],
    revalidate: ONE_DAY_SECONDS,
  });
  return res?.data ?? null;
}

export async function postLead(payload: LeadPayload): Promise<{ ok: boolean; error?: string }> {
  const STRAPI_URL = getStrapiUrl();
  if (!STRAPI_URL) {
    return { ok: false, error: "STRAPI_URL not configured on server" };
  }
  try {
    const res = await fetch(`${STRAPI_URL}/api/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: payload }),
    });
    if (!res.ok) {
      const text = await res.text();
      return { ok: false, error: `Strapi ${res.status}: ${text}` };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "unknown error" };
  }
}

export { getStrapiUrl };
