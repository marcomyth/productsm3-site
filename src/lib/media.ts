import "server-only";
import { readEnv } from "./env";

/**
 * Server-only Strapi media URL builder. Prepends the Strapi host to relative
 * upload paths (e.g. "/uploads/foo.jpg" -> "https://cms.example.com/uploads/foo.jpg").
 *
 * Kept out of lib/utils.ts because readEnv() depends on @opennextjs/cloudflare,
 * which must NOT end up in the client bundle (it crashes the browser with
 * __name is not defined).
 */
export function mediaUrl(url: string | null | undefined): string {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  const base =
    readEnv("STRAPI_URL") || readEnv("NEXT_PUBLIC_STRAPI_URL") || "http://localhost:1337";
  return `${base}${url}`;
}
