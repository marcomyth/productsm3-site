import { NextResponse } from "next/server";
import { readEnv } from "@/lib/env";

export const dynamic = "force-dynamic";

/**
 * TEMPORARY debug endpoint. Remove after the Strapi connectivity issue is
 * resolved. Returns env-var presence (without leaking values) and the result
 * of a probe fetch to the Strapi /api/global endpoint.
 */
export async function GET() {
  const strapiUrl = readEnv("STRAPI_URL");
  const publicStrapiUrl = readEnv("NEXT_PUBLIC_STRAPI_URL");
  const revalidateSecret = readEnv("REVALIDATE_SECRET");

  const url = strapiUrl || publicStrapiUrl;
  let probe: {
    attempted: boolean;
    url?: string;
    status?: number;
    statusText?: string;
    bodyPreview?: string;
    error?: string;
    durationMs?: number;
  } = { attempted: false };

  if (url) {
    const probeUrl = `${url}/api/global`;
    const start = Date.now();
    try {
      const res = await fetch(probeUrl, {
        signal: AbortSignal.timeout(10_000),
      });
      const text = await res.text();
      probe = {
        attempted: true,
        url: probeUrl,
        status: res.status,
        statusText: res.statusText,
        bodyPreview: text.slice(0, 200),
        durationMs: Date.now() - start,
      };
    } catch (err) {
      probe = {
        attempted: true,
        url: probeUrl,
        error: err instanceof Error ? `${err.name}: ${err.message}` : String(err),
        durationMs: Date.now() - start,
      };
    }
  }

  return NextResponse.json({
    env: {
      STRAPI_URL: strapiUrl ? `set (${strapiUrl.length} chars, starts with ${strapiUrl.slice(0, 20)}…)` : "MISSING",
      NEXT_PUBLIC_STRAPI_URL: publicStrapiUrl
        ? `set (${publicStrapiUrl.length} chars, starts with ${publicStrapiUrl.slice(0, 20)}…)`
        : "MISSING",
      REVALIDATE_SECRET: revalidateSecret ? `set (${revalidateSecret.length} chars)` : "MISSING",
    },
    probe,
    runtime: typeof navigator !== "undefined" ? navigator.userAgent : "unknown",
    at: new Date().toISOString(),
  });
}
