import { getCloudflareContext } from "@opennextjs/cloudflare";

/**
 * Portable env var read for both Node (dev / `next dev`) and Cloudflare Workers
 * (production via OpenNext).
 *
 * Why this exists:
 *   - In Node, env vars come from process.env and are available everywhere.
 *   - On Cloudflare Workers, dashboard env vars arrive as Worker bindings
 *     and aren't always reflected in process.env inside route handlers.
 *     OpenNext exposes them via getCloudflareContext().env.
 *
 * Always read via this helper instead of touching process.env directly so we
 * don't get stuck again when something is set in the dashboard but invisible
 * to process.env.
 */
export function readEnv(name: string): string | undefined {
  const fromProcess = process.env?.[name];
  if (fromProcess && fromProcess.length > 0) return fromProcess;

  try {
    const ctx = getCloudflareContext();
    const env = ctx?.env as Record<string, unknown> | undefined;
    const value = env?.[name];
    if (typeof value === "string" && value.length > 0) return value;
  } catch {
    // Not running under the Cloudflare runtime (e.g. plain `next dev` without
    // initOpenNextCloudflareForDev). That's fine — return undefined and let
    // the caller decide what to do.
  }
  return undefined;
}
