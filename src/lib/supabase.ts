import "server-only";
import { createClient } from "@supabase/supabase-js";
import { readEnv } from "./env";

/**
 * Client de leitura pública — usa a anon key, sujeita às RLS policies de
 * supabase/migrations/20260903000000_content_backend.sql. Nunca usar a
 * service role key aqui (isso é só para scripts/seed-supabase.ts).
 */

const url = readEnv("SUPABASE_URL");
const anonKey = readEnv("SUPABASE_ANON_KEY");

if (!url || !anonKey) {
  throw new Error(
    "SUPABASE_URL / SUPABASE_ANON_KEY não configuradas — veja .env.local.example",
  );
}

export const supabase = createClient(url, anonKey, {
  auth: { persistSession: false },
});
