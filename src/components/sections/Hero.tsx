import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { HeroContent } from "@/lib/types";

type Props = {
  data: HeroContent;
};

export function Hero({ data }: Props) {
  return (
    <section className="w-full border-b border-surface-variant/60 px-grid-margin-mobile pb-space-2xl pt-space-lg md:px-grid-margin-tablet md:pt-space-xl lg:px-grid-margin-desktop">
      <div className="grid grid-cols-1 items-center gap-gutter-desktop lg:grid-cols-12">
        <div className="flex flex-col justify-between space-y-space-md lg:col-span-7 lg:pr-space-md">
          <div className="space-y-space-xs">
            <div className="inline-flex items-center gap-2 rounded-full border border-surface-variant/80 bg-surface-container px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              <span className="font-label-meta text-[10.5px] font-medium uppercase tracking-[0.2em] text-on-surface-variant">
                {data.eyebrow}
              </span>
            </div>
            <h1 className="mt-space-xs font-serif text-display-xl-mobile font-normal leading-[1.05] tracking-tight text-primary md:text-display-xl">
              {data.title}
            </h1>
          </div>
          <p className="max-w-2xl pt-space-2xs font-sans text-body-lead font-normal leading-relaxed text-on-surface-variant">
            {data.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
            <Link
              href={data.primaryCta.url}
              className="inline-flex items-center justify-center rounded bg-secondary px-space-md py-space-sm font-label-meta text-label-meta uppercase tracking-[0.14em] text-on-secondary shadow-sm transition-all duration-150 hover:brightness-105"
            >
              {data.primaryCta.label}
            </Link>
            <Link
              href={data.secondaryCta.url}
              className="group inline-flex items-center gap-2 font-sans text-body-default text-primary transition-colors hover:text-secondary"
            >
              <span className="border-b border-outline pb-0.5 group-hover:border-secondary">
                {data.secondaryCta.label}
              </span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-gutter-tablet border-t border-surface-variant/80 pt-space-lg sm:grid-cols-3">
            {data.meta.map((question) => (
              <div key={question} className="pt-space-xs">
                <span className="block font-body-sm text-body-sm font-medium text-on-surface">
                  {question}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-space-md flex flex-col lg:col-span-5 lg:mt-0">
          <div className="rounded-lg border border-surface-variant bg-surface-container-low p-2.5 shadow-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded bg-surface-container-high">
              <Image
                src={data.figure.imageUrl}
                alt={data.figure.imageAlt}
                fill
                className="object-cover object-center transition-all duration-700 hover:scale-[1.02]"
                priority
              />
            </div>
            <div className="flex items-center justify-between px-2 pb-1 pt-2 text-[11px] text-outline">
              <span className="font-label-index text-label-index uppercase">{data.figure.caption}</span>
              <span className="font-label-meta tracking-widest text-on-surface-variant">
                {data.figure.year}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
