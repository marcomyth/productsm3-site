import "server-only";
import type { BlogPost, SiteContent } from "./types";
import { supabase } from "./supabase";

/**
 * Camada de conteúdo do site — lê do Supabase (site_content + blog_posts,
 * ver supabase/migrations/20260903000000_content_backend.sql). As
 * assinaturas ficam iguais às da versão com conteúdo estático em
 * src/content/ de propósito: nenhum consumidor precisa mudar.
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

type BlogPostRow = {
  id: number;
  document_id: string | null;
  slug: string;
  title: string;
  excerpt: string | null;
  content: BlogPost["content"] | null;
  cover: BlogPost["cover"] | null;
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
};

function fromRow(row: BlogPostRow): BlogPost {
  return {
    id: row.id,
    documentId: row.document_id ?? row.slug,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt ?? undefined,
    content: row.content ?? undefined,
    cover: row.cover ?? undefined,
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
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  let query = supabase
    .from("blog_posts")
    .select("*", { count: "exact" })
    .order("published_at", { ascending: false, nullsFirst: false })
    .range(from, to);

  if (opts?.category) query = query.eq("category", opts.category);

  const { data, count, error } = await query;
  if (error) throw new Error(`Falha ao carregar blog_posts: ${error.message}`);

  const total = count ?? 0;
  return {
    posts: (data ?? []).map(fromRow),
    pageCount: Math.max(1, Math.ceil(total / pageSize)),
    total,
  };
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw new Error(`Falha ao carregar post "${slug}": ${error.message}`);
  return data ? fromRow(data) : null;
}

export async function getBlogPostSlugs(): Promise<string[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("slug")
    .order("published_at", { ascending: false, nullsFirst: false });

  if (error) throw new Error(`Falha ao carregar slugs: ${error.message}`);
  return (data ?? []).map((row) => row.slug);
}
