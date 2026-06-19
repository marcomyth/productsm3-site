import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Tag, User } from "lucide-react";
import { getBlogPostBySlug } from "@/lib/strapi";
import { mediaUrl } from "@/lib/media";
import { BlocksRenderer } from "@/components/blog/BlocksRenderer";

export const dynamic = "force-dynamic";

const CATEGORY_LABEL: Record<string, string> = {
  noticia: "Notícia",
  tutorial: "Tutorial",
  case: "Case",
  novidade: "Novidade",
  tendencia: "Tendência",
  geral: "Geral",
};

function formatDate(iso?: string): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "Post não encontrado" };
  const ogImage = post.cover?.url ? mediaUrl(post.cover.url) : undefined;
  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    keywords: post.seo?.keywords?.split(",").map((k) => k.trim()) ?? post.tags,
    alternates: post.seo?.canonicalURL ? { canonical: post.seo.canonicalURL } : undefined,
    openGraph: {
      type: "article",
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      images: ogImage ? [{ url: ogImage }] : undefined,
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author] : undefined,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const cover = post.cover?.url ? mediaUrl(post.cover.url) : null;
  const categoryLabel = post.category ? CATEGORY_LABEL[post.category] : null;

  return (
    <article>
      {/* Voltar — fica acima da capa, alinhado com o container do post */}
      <div className="container mx-auto max-w-4xl px-4 pt-6 md:pt-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar para o blog
        </Link>
      </div>

      {/* Cover — agora ANTES do título, no topo */}
      {cover && (
        <div className="container mx-auto mt-4 max-w-4xl px-4">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-muted shadow-xl">
            <Image
              src={cover}
              alt={post.cover?.alternativeText ?? post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* Hero (título + meta) — agora DEPOIS da capa */}
      <header className="container mx-auto max-w-3xl px-4 pt-10 pb-2 md:pt-14">
        {categoryLabel && (
          <span className="mb-4 inline-flex w-fit items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Tag className="h-3 w-3" /> {categoryLabel}
          </span>
        )}

        <h1 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="mt-4 text-lg text-foreground/70 md:text-xl">{post.excerpt}</p>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {post.author && (
            <span className="inline-flex items-center gap-1.5">
              <User className="h-4 w-4" /> {post.author}
            </span>
          )}
          {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
          {post.readingTime && (
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {post.readingTime} min de leitura
            </span>
          )}
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto max-w-3xl px-4 py-12 md:py-16">
        <BlocksRenderer blocks={post.content} />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 flex flex-wrap gap-2 border-t border-border pt-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA voltar */}
        <div className="mt-12 border-t border-border pt-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar para o blog
          </Link>
        </div>
      </div>
    </article>
  );
}
