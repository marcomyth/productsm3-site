import type { BlogPost, SiteContent } from "./types";
import { siteContent } from "@/content/site";
import { blogPosts } from "@/content/blog-posts";

/**
 * Camada de conteúdo do site — conteúdo estático tipado no repo.
 *
 * Continua `async` de propósito: é o que permite plugar uma fonte remota
 * (Supabase) depois sem tocar em nenhum consumidor.
 */

export async function getSiteContent(): Promise<SiteContent> {
  return siteContent;
}

// ---- Blog ----

/** Mais novo primeiro. Post sem `publishedAt` vai para o fim. */
function byPublishedDesc(a: BlogPost, b: BlogPost): number {
  const ta = a.publishedAt ? Date.parse(a.publishedAt) : 0;
  const tb = b.publishedAt ? Date.parse(b.publishedAt) : 0;
  return tb - ta;
}

export async function getBlogPosts(opts?: {
  page?: number;
  pageSize?: number;
  category?: string;
}): Promise<{ posts: BlogPost[]; pageCount: number; total: number }> {
  const page = Math.max(1, opts?.page ?? 1);
  const pageSize = Math.max(1, opts?.pageSize ?? 12);

  const filtered = opts?.category
    ? blogPosts.filter((p) => p.category === opts.category)
    : blogPosts;

  const sorted = [...filtered].sort(byPublishedDesc);
  const total = sorted.length;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const start = (page - 1) * pageSize;

  return { posts: sorted.slice(start, start + pageSize), pageCount, total };
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return blogPosts.find((p) => p.slug === slug) ?? null;
}

export async function getBlogPostSlugs(): Promise<string[]> {
  return [...blogPosts].sort(byPublishedDesc).map((p) => p.slug).filter(Boolean);
}
