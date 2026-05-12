/**
 * Read an environment variable with portable access for both Node (dev / `next dev`)
 * and Cloudflare Workers (production via OpenNext).
 *
 * Why this exists:
 *   - In Node, env vars come from process.env and are available everywhere.
 *   - On Cloudflare Workers, dashboard env vars arrive as Worker bindings
 *     and aren't always reflected in process.env at every call site.
 *     OpenNext exposes them via `getCloudflareContext().env`.
 *
 * Always read via this helper instead of touching process.env directly so we
 * don't get stuck again when something is set in the dashboard but invisible
 * to process.env.
 */
export function readEnv(name: string): string | undefined {
  // Prefer process.env — works in Node and in OpenNext when bindings are
  // patched into it.
  const fromProcess = process.env?.[name];
  if (fromProcess && fromProcess.length > 0) return fromProcess;

  // Fall back to the Cloudflare Workers binding via OpenNext.
  try {
    // Require lazily so we don't choke in Node-only environments where this
    // package isn't on the module graph.

    const mod = require("@opennextjs/cloudflare") as {
      getCloudflareContext?: () => { env?: Record<string, unknown> };
    };
    const ctx = mod.getCloudflareContext?.();
    const value = ctx?.env?.[name];
    if (typeof value === "string" && value.length > 0) return value;
  } catch {
    // Not running under Cloudflare or context not ready yet — fine, return undefined.
  }

  return undefined;
}
