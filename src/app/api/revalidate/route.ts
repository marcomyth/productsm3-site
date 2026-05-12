import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export const runtime = "edge";
// This route must not be cached — it's the cache buster itself.
export const dynamic = "force-dynamic";

type StrapiWebhookBody = {
  event?: string;
  model?: string;
  entry?: Record<string, unknown>;
};

function extractSecret(req: Request): string | null {
  const url = new URL(req.url);
  const fromQuery = url.searchParams.get("secret");
  if (fromQuery) return fromQuery;

  // Strapi 5 allows custom headers on webhooks. Common conventions:
  const auth = req.headers.get("authorization");
  if (auth?.startsWith("Bearer ")) return auth.slice("Bearer ".length);

  const xSecret = req.headers.get("x-revalidate-secret");
  if (xSecret) return xSecret;

  return null;
}

async function handle(req: Request) {
  const expected = process.env.REVALIDATE_SECRET;
  if (!expected) {
    return NextResponse.json(
      { error: "REVALIDATE_SECRET not configured on server" },
      { status: 500 },
    );
  }

  const provided = extractSecret(req);
  if (!provided || provided !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: StrapiWebhookBody | null = null;
  try {
    body = (await req.json()) as StrapiWebhookBody;
  } catch {
    // Empty body is fine — manual triggers via curl don't need one.
  }

  // Any change in Strapi content that feeds the landing page or the global
  // singleton should bust both tags. Over-invalidating here is cheap (next
  // request just refetches once) and avoids missing edge cases.
  revalidateTag("landing-page");
  revalidateTag("global");

  return NextResponse.json({
    revalidated: true,
    tags: ["landing-page", "global"],
    event: body?.event,
    model: body?.model,
    at: new Date().toISOString(),
  });
}

export async function POST(req: Request) {
  return handle(req);
}

// GET is allowed so you can manually trigger from the browser/curl during setup:
//   curl "https://your-domain/api/revalidate?secret=XYZ"
export async function GET(req: Request) {
  return handle(req);
}
