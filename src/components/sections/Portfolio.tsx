import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioSection } from "@/lib/types";
import { mediaUrl } from "@/lib/utils";

function techName(t: string | { name: string }): string {
  return typeof t === "string" ? t : t.name;
}

export function Portfolio({ data }: { data: PortfolioSection }) {
  return (
    <section id="portfolio" className="scroll-mt-20 py-20 md:py-28 px-4 md:px-8">
      <div className="mx-auto max-w-7xl space-y-14">
        <div className="mx-auto max-w-2xl text-center space-y-4">
          {data.eyebrow && (
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {data.eyebrow}
            </p>
          )}
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            <span className="text-brand-gradient">{data.title}</span>
          </h2>
          {data.subtitle && (
            <p className="text-sm md:text-lg text-muted-foreground max-w-lg mx-auto">
              {data.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.projects?.map((p) => {
            const cover = p.cover?.url ? mediaUrl(p.cover.url) : null;
            const techs = (p.technologies ?? []).slice(0, 4);
            const card = (
              <article className="group glass flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 card-lift hover:border-border">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  {cover ? (
                    <Image
                      src={cover}
                      alt={p.cover?.alternativeText || p.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-muted to-background" />
                  )}
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex w-full items-end justify-between text-sm">
                      <div>
                        {p.client && <p className="font-medium">{p.client}</p>}
                        {p.year && <p className="text-white/70">{p.year}</p>}
                      </div>
                      {p.liveUrl && <ArrowUpRight className="h-5 w-5" aria-hidden="true" />}
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex items-center justify-between text-xs uppercase tracking-wider text-muted-foreground">
                    {p.category && <span>{p.category}</span>}
                    {p.year && <span>{p.year}</span>}
                  </div>
                  <h3 className="text-lg font-bold tracking-tight">{p.title}</h3>
                  {p.shortDescription && (
                    <p className="text-sm text-muted-foreground">{p.shortDescription}</p>
                  )}
                  {techs.length > 0 && (
                    <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                      {techs.map((t, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted-foreground"
                        >
                          {techName(t)}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            );

            return p.liveUrl ? (
              <Link
                key={p.id}
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir projeto ${p.title}`}
              >
                {card}
              </Link>
            ) : (
              <div key={p.id}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
