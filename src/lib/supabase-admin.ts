import "server-only";
import { createClient } from "@supabase/supabase-js";
import { readEnv } from "./env";

/**
 * Client de escrita — service role, ignora RLS. Só as rotas de ingest em
 * src/app/api/ usam isso; nunca importar daqui em código que responde
 * request de visitante (essas usam src/lib/supabase.ts, com a anon key).
 */

const url = readEnv("SUPABASE_URL");
const serviceRoleKey = readEnv("SUPABASE_SERVICE_ROLE_KEY");

if (!url || !serviceRoleKey) {
  throw new Error(
    "SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY não configuradas — veja .env.local.example",
  );
}

export const supabaseAdmin = createClient(url, serviceRoleKey, {
  auth: { persistSession: false },
});
