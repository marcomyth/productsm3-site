import "server-only";
import { unstable_cache } from "next/cache";
import type { BlogPost, SiteContent } from "./types";
import { supabase } from "./supabase";

/**
 * Camada de conteúdo do site — lê do Supabase (site_content + blog_posts,
 * ver supabase/migrations/). As assinaturas ficam iguais às da versão com
 * conteúdo estático em src/content/ de propósito: nenhum consumidor
 * precisa mudar.
 *
 * getBlogPosts/getBlogPostBySlug/getBlogPostSlugs passam por
 * unstable_cache com tag "blog-posts" (+ "blog-post-<slug>" na busca por
 * slug) — src/lib/ingest/revalidate.ts invalida essas tags depois de
 * cada create/update via /api/blog-posts.
 */

export async function getSiteContent(): Promise<SiteContent> {
  const { data, error } = await supabase
    .from("site_content")
    .select("data")
    .eq("id", 1)
    .single();

  if (error) throw new Error(`Falha ao carregar site_content: ${error.message}`);

  return data.data as SiteContent;
}

// ---- Blog ----

const BLOG_SELECT = `
  id, document_id, slug, title, excerpt, content, author, category, tags,
  reading_time, source, external_id, seo, published_at, created_at, updated_at,
  cover:media ( id, url, alternative_text, width, height, mime )
`;

type MediaRow = {
  id: number;
  url: string;
  alternative_text: string | null;
  width: number | null;
  height: number | null;
  mime: string | null;
};

type BlogPostRow = {
  id: number;
  document_id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: BlogPost["content"] | null;
  author: string | null;
  category: BlogPost["category"] | null;
  tags: string[] | null;
  reading_time: number | null;
  source: BlogPost["source"] | null;
  external_id: string | null;
  seo: BlogPost["seo"] | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  cover: MediaRow | null;
};

function fromRow(row: BlogPostRow): BlogPost {
  return {
    id: row.id,
    documentId: row.document_id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt ?? undefined,
    content: row.content ?? undefined,
    cover: row.cover
      ? {
          id: row.cover.id,
          url: row.cover.url,
          alternativeText: row.cover.alternative_text,
          width: row.cover.width ?? undefined,
          height: row.cover.height ?? undefined,
          mime: row.cover.mime ?? undefined,
        }
      : undefined,
    author: row.author ?? undefined,
    category: row.category ?? undefined,
    tags: row.tags ?? undefined,
    readingTime: row.reading_time ?? undefined,
    source: row.source ?? undefined,
    externalId: row.external_id ?? undefined,
    seo: row.seo ?? undefined,
    publishedAt: row.published_at ?? undefined,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export async function getBlogPosts(opts?: {
  page?: number;
  pageSize?: number;
  category?: string;
}): Promise<{ posts: BlogPost[]; pageCount: number; total: number }> {
  const page = Math.max(1, opts?.page ?? 1);
  const pageSize = Math.max(1, opts?.pageSize ?? 12);
  const category = opts?.category;

  return unstable_cache(
    async () => {
      const from = (page - 1) * pageSize;
      const to = from + pageSize - 1;

      let query = supabase
        .from("blog_posts")
        .select(BLOG_SELECT, { count: "exact" })
        .order("published_at", { ascending: false, nullsFirst: false })
        .range(from, to);

      if (category) query = query.eq("category", category);

      const { data, count, error } = await query;
      if (error) throw new Error(`Falha ao carregar blog_posts: ${error.message}`);

      const total = count ?? 0;
      return {
        posts: (data ?? []).map((row) => fromRow(row as unknown as BlogPostRow)),
        pageCount: Math.max(1, Math.ceil(total / pageSize)),
        total,
      };
    },
    ["blog-posts-list", String(page), String(pageSize), category ?? ""],
    { tags: ["blog-posts"] },
  )();
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return unstable_cache(
    async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select(BLOG_SELECT)
        .eq("slug", slug)
        .maybeSingle();

      if (error) throw new Error(`Falha ao carregar post "${slug}": ${error.message}`);
      return data ? fromRow(data as unknown as BlogPostRow) : null;
    },
    ["blog-post-by-slug", slug],
    { tags: ["blog-posts", `blog-post-${slug}`] },
  )();
}

export async function getBlogPostSlugs(): Promise<string[]> {
  return unstable_cache(
    async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("slug")
        .order("published_at", { ascending: false, nullsFirst: false });

      if (error) throw new Error(`Falha ao carregar slugs: ${error.message}`);
      return (data ?? []).map((row) => row.slug);
    },
    ["blog-post-slugs"],
    { tags: ["blog-posts"] },
  )();
}
