import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

/**
 * Disables Next.js Draft Mode and returns the editor to the home page (or to
 * the `slug` query param if provided).
 *
 *   GET /api/preview/exit            -> redirect to /
 *   GET /api/preview/exit?slug=/...  -> redirect to that path
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const slug = url.searchParams.get("slug") || "/";
  const safeSlug = slug.startsWith("/") && !slug.startsWith("//") ? slug : "/";

  const dm = await draftMode();
  dm.disable();
  redirect(safeSlug);
}
