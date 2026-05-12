import type { Global, LandingPage, LeadPayload, StrapiResponse } from "./types";

const STRAPI_URL =
  process.env.STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

type FetchOptions = {
  tags?: string[];
  revalidate?: number | false;
};

async function strapiFetch<T>(
  path: string,
  { tags = [], revalidate = 60 }: FetchOptions = {},
): Promise<T | null> {
  const url = `${STRAPI_URL}${path}`;
  try {
    const res = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      next: { tags, revalidate: revalidate === false ? undefined : revalidate },
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
    revalidate: 60,
  });
  return res?.data ?? null;
}

export async function postLead(payload: LeadPayload): Promise<{ ok: boolean; error?: string }> {
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

export { STRAPI_URL };
