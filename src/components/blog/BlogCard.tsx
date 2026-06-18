import Link from "next/link";
import Image from "next/image";
import { Clock, Tag } from "lucide-react";
import { mediaUrl } from "@/lib/media";
import type { BlogPost } from "@/lib/types";

const CATEGORY_LABEL: Record<NonNullable<BlogPost["category"]>, string> = {
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
    month: "short",
    year: "numeric",
  });
}

export function BlogCard({ post }: { post: BlogPost }) {
  const cover = post.cover?.url ? mediaUrl(post.cover.url) : null;
  const categoryLabel = post.category ? CATEGORY_LABEL[post.category] : null;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg"
    >
      {cover ? (
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          <Image
            src={cover}
            alt={post.cover?.alternativeText ?? post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="aspect-video w-full bg-gradient-to-br from-primary/20 via-primary/5 to-accent/20" />
      )}

      <div className="flex flex-1 flex-col gap-3 p-5">
        {categoryLabel && (
          <span className="inline-flex w-fit items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
            <Tag className="h-3 w-3" /> {categoryLabel}
          </span>
        )}

        <h3 className="font-display text-lg font-bold leading-snug text-foreground group-hover:text-primary md:text-xl">
          {post.title}
        </h3>

        {post.excerpt && (
          <p className="line-clamp-3 text-sm text-foreground/70">{post.excerpt}</p>
        )}

        <div className="mt-auto flex items-center justify-between gap-2 pt-2 text-xs text-muted-foreground">
          <span>{formatDate(post.publishedAt)}</span>
          {post.readingTime && (
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" /> {post.readingTime} min
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
