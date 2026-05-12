import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { readEnv } from "@/lib/env";

export const dynamic = "force-dynamic";

/**
 * Strapi 5 preview entry point.
 *
 * Strapi's preview handler should be configured to send editors here:
 *   https://<site>/api/preview?secret=<STRAPI_PREVIEW_SECRET>&slug=/
 *
 * We validate the secret, enable Next.js Draft Mode (sets a signed cookie),
 * then redirect to the target page. While Draft Mode is on, lib/strapi.ts
 * appends `status=draft` to every Strapi fetch so the editor sees unpublished
 * content.
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const provided = url.searchParams.get("secret");
  const slug = url.searchParams.get("slug") || "/";

  const expected = readEnv("STRAPI_PREVIEW_SECRET");
  if (!expected) {
    return new Response("STRAPI_PREVIEW_SECRET not configured on server", { status: 500 });
  }
  if (!provided || provided !== expected) {
    return new Response("Unauthorized", { status: 401 });
  }

  // Only allow redirects to relative paths on this site (no open-redirect).
  const safeSlug = slug.startsWith("/") && !slug.startsWith("//") ? slug : "/";

  const dm = await draftMode();
  dm.enable();
  redirect(safeSlug);
}
