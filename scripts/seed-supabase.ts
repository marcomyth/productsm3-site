/**
 * Seed one-shot: popula site_content e blog_posts no Supabase a partir do
 * conteúdo estático em src/content/. Rodar uma vez, depois de aplicar
 * supabase/migrations/20260903000000_content_backend.sql.
 *
 * Uso:
 *   npm run seed:supabase
 *
 * Precisa de SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY no .env.local — a
 * service role key ignora RLS. Nunca importar esse arquivo no código do app.
 */
import { readFileSync } from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";
import { siteContent } from "../src/content/site";
import { blogPosts } from "../src/content/blog-posts";

function loadEnvLocal(): void {
  let text: string;
  try {
    text = readFileSync(path.join(process.cwd(), ".env.local"), "utf8");
  } catch {
    return;
  }
  for (const line of text.split("\n")) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)\s*$/);
    if (!match) continue;
    const [, key, rawValue] = match;
    if (process.env[key] !== undefined) continue;
    process.env[key] = rawValue.replace(/^["']|["']$/g, "");
  }
}

loadEnvLocal();

const url = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.error("Faltam SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY no .env.local");
  process.exit(1);
}

const supabase = createClient(url, serviceKey);

async function main() {
  console.log("Seed site_content...");
  const { error: contentError } = await supabase
    .from("site_content")
    .upsert({ id: 1, data: siteContent, updated_at: new Date().toISOString() });
  if (contentError) throw contentError;
  console.log("  ✓ site_content");

  if (blogPosts.length > 0) {
    console.log(`Seed blog_posts (${blogPosts.length})...`);
    const rows = blogPosts.map((post) => ({
      document_id: post.documentId,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt ?? null,
      content: post.content ?? null,
      // Capa é uma FK pra media (id devolvido por /api/upload) — conteúdo
      // estático não tem media row, então nasce sem capa.
      cover_id: null,
      author: post.author ?? null,
      category: post.category ?? null,
      tags: post.tags ?? [],
      reading_time: post.readingTime ?? null,
      source: post.source ?? null,
      external_id: post.externalId ?? null,
      seo: post.seo ?? null,
      published_at: post.publishedAt ?? null,
    }));
    const { error: postsError } = await supabase
      .from("blog_posts")
      .upsert(rows, { onConflict: "slug" });
    if (postsError) throw postsError;
    console.log("  ✓ blog_posts");
  } else {
    console.log("Nenhum blog post estático pra migrar (blogPosts está vazio).");
  }

  console.log("\nSeed concluído.");
}

main().catch((err) => {
  console.error("\nFalhou:", err instanceof Error ? err.message : err);
  process.exit(1);
});
