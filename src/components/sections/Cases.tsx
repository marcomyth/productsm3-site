import Image from "next/image";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/lib/types";

type Props = {
  data: CaseStudy[];
};

export function Cases({ data }: Props) {
  return (
    <section
      id="cases"
      className="w-full bg-surface px-grid-margin-mobile py-space-2xl md:px-grid-margin-tablet lg:px-grid-margin-desktop"
    >
      <div className="mb-space-xl flex flex-col justify-between border-b border-surface-variant pb-space-sm md:flex-row md:items-end">
        <div>
          <span className="font-label-index text-label-index uppercase tracking-[0.2em] text-secondary">
            04 / Evidências Práticas
          </span>
          <h2 className="mt-space-2xs font-serif text-display-lg font-normal tracking-tight text-primary">
            Cases Selecionados
          </h2>
        </div>
        <span className="font-label-meta text-label-meta uppercase text-outline">
          Período de Análise: 2023–2024
        </span>
      </div>

      <div className="grid grid-cols-1 items-start gap-gutter-desktop lg:grid-cols-12">
        {data.map((item, i) => (
          <article
            key={item.reference}
            className={cn(
              "flex flex-col justify-between space-y-space-md rounded border border-surface-variant/80 bg-surface-container-lowest p-space-md shadow-sm",
              i === 0 ? "lg:col-span-7" : "lg:col-span-5",
            )}
          >
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between">
                <span className="rounded bg-surface-container px-space-xs py-1 font-label-meta text-label-meta font-semibold uppercase tracking-[0.16em] text-on-surface">
                  {item.category}
                </span>
                <span className="font-label-index text-label-index uppercase text-outline">
                  {item.reference}
                </span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded bg-surface-container">
                <Image
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <div className="pt-space-xs">
                <div className="flex items-baseline gap-3">
                  <span
                    className={cn(
                      "font-serif text-display-xl font-normal tracking-tight",
                      item.metricAccent ? "text-secondary" : "text-primary",
                    )}
                  >
                    {item.metricValue}
                  </span>
                  <span className="font-sans text-headline-sm font-normal text-primary">
                    {item.metricLabel}
                  </span>
                </div>
                <p className="mt-space-xs font-sans text-body-default leading-relaxed text-on-surface-variant">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-surface-variant pt-space-sm">
              <span className="font-body-sm text-body-sm font-medium text-on-surface-variant">
                {item.platform}
              </span>
              <span
                className={cn(
                  "font-label-meta text-label-meta font-semibold uppercase tracking-wider",
                  item.metricAccent ? "text-sage" : "text-secondary",
                )}
              >
                {item.badge}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
