import type { Metadata } from "next";
import Link from "next/link";
import { Newspaper } from "lucide-react";
import { getBlogPosts } from "@/lib/strapi";
import { BlogCard } from "@/components/blog/BlogCard";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Blog | productsm3",
    description:
      "Conteúdo sobre desenvolvimento web, SaaS, e-commerce, performance e SEO. Artigos práticos pra quem cria produtos digitais.",
  };
}

interface PageProps {
  searchParams: Promise<{ page?: string; cat?: string }>;
}

export default async function BlogIndexPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  const page = Math.max(1, parseInt(sp.page ?? "1", 10) || 1);
  const category = sp.cat;
  const { posts, pageCount, total } = await getBlogPosts({ page, category });

  return (
    <main className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
      <header className="mb-12 max-w-2xl space-y-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          <Newspaper className="h-3.5 w-3.5" /> Blog
        </span>
        <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
          Ideias, insights e bastidores
        </h1>
        <p className="text-base text-foreground/70 md:text-lg">
          Conteúdo sobre criação de produtos digitais, performance, SEO e gestão de negócio.
        </p>
        {total > 0 && (
          <p className="text-xs text-muted-foreground">
            {total} {total === 1 ? "artigo publicado" : "artigos publicados"}
          </p>
        )}
      </header>

      {posts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
          <Newspaper className="mx-auto mb-3 h-10 w-10 text-muted-foreground" />
          <p className="text-muted-foreground">
            {category
              ? `Nenhum artigo na categoria "${category}" ainda.`
              : "Nenhum artigo publicado ainda. Volte em breve!"}
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {pageCount > 1 && <Pagination current={page} total={pageCount} category={category} />}
        </>
      )}
    </main>
  );
}

function Pagination({
  current,
  total,
  category,
}: {
  current: number;
  total: number;
  category?: string;
}) {
  const qs = (p: number) => {
    const params = new URLSearchParams();
    if (p > 1) params.set("page", String(p));
    if (category) params.set("cat", category);
    const q = params.toString();
    return q ? `/blog?${q}` : "/blog";
  };
  return (
    <nav className="mt-12 flex items-center justify-center gap-2">
      {current > 1 && (
        <Link
          href={qs(current - 1)}
          className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40"
        >
          ← Anterior
        </Link>
      )}
      <span className="px-4 py-2 text-sm text-muted-foreground">
        Página {current} de {total}
      </span>
      {current < total && (
        <Link
          href={qs(current + 1)}
          className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40"
        >
          Próxima →
        </Link>
      )}
    </nav>
  );
}
