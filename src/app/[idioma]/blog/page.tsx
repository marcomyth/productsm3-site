import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Newspaper } from "lucide-react";
import { getBlogPosts } from "@/lib/content";
import { BlogCard } from "@/components/blog/BlogCard";
import { ehIdioma, rota, type Idioma } from "@/i18n/config";
import { preencher, textos } from "@/i18n/dicionario";
import { alternativas } from "@/lib/seo";

interface PageProps {
  params: Promise<{ idioma: string }>;
  searchParams: Promise<{ page?: string; cat?: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { idioma } = await params;
  if (!ehIdioma(idioma)) notFound();

  const t = textos(idioma).blog;
  return {
    title: t.metaTitulo,
    description: t.metaDescricao,
    alternates: alternativas(idioma, "/blog"),
  };
}

export default async function BlogIndexPage({ params, searchParams }: PageProps) {
  const { idioma } = await params;
  if (!ehIdioma(idioma)) notFound();

  const sp = await searchParams;
  const page = Math.max(1, parseInt(sp.page ?? "1", 10) || 1);
  const category = sp.cat;
  const { posts, pageCount, total } = await getBlogPosts({ page, category });
  const t = textos(idioma).blog;

  return (
    <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
      <header className="mb-12 max-w-2xl space-y-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary">
          <Newspaper className="h-3.5 w-3.5" /> {t.selo}
        </span>
        <h1 className="font-sans text-display-lg-mobile font-bold tracking-tight md:text-display-lg">
          {t.titulo}
        </h1>
        <p className="text-base text-foreground/70 md:text-lg">{t.subtitulo}</p>
        {total > 0 && (
          <p className="text-xs text-muted-foreground">
            {preencher(total === 1 ? t.umArtigo : t.varios, { n: total })}
          </p>
        )}
      </header>

      {posts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
          <Newspaper className="mx-auto mb-3 h-10 w-10 text-muted-foreground" />
          <p className="text-muted-foreground">
            {category ? preencher(t.vazioNaCategoria, { categoria: category }) : t.vazio}
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} idioma={idioma} />
            ))}
          </div>

          {pageCount > 1 && (
            <Pagination current={page} total={pageCount} category={category} idioma={idioma} />
          )}
        </>
      )}
    </div>
  );
}

function Pagination({
  current,
  total,
  category,
  idioma,
}: {
  current: number;
  total: number;
  category?: string;
  idioma: Idioma;
}) {
  const t = textos(idioma).blog;
  const qs = (p: number) => {
    const params = new URLSearchParams();
    if (p > 1) params.set("page", String(p));
    if (category) params.set("cat", category);
    const q = params.toString();
    const base = rota(idioma, "/blog");
    return q ? `${base}?${q}` : base;
  };
  return (
    <nav className="mt-12 flex items-center justify-center gap-2">
      {current > 1 && (
        <Link
          href={qs(current - 1)}
          className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-secondary/40"
        >
          {t.anterior}
        </Link>
      )}
      <span className="px-4 py-2 text-sm text-muted-foreground">
        {preencher(t.paginacao, { atual: current, total })}
      </span>
      {current < total && (
        <Link
          href={qs(current + 1)}
          className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-secondary/40"
        >
          {t.proxima}
        </Link>
      )}
    </nav>
  );
}
