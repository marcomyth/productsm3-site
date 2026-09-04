import type { FinalCtaContent } from "@/lib/types";

type Props = {
  data: FinalCtaContent;
};

export function FinalCta({ data }: Props) {
  return (
    <section
      id="auditoria"
      className="relative w-full overflow-hidden bg-[#18181B] py-space-3xl text-surface-bright"
    >
      <div className="relative z-10 w-full px-grid-margin-mobile md:px-grid-margin-tablet lg:px-grid-margin-desktop">
        <div className="flex flex-col gap-gutter-desktop lg:flex-row lg:items-start">
          <div className="space-y-space-md lg:basis-7/12">
            <span className="block font-label-index text-label-index font-medium uppercase tracking-[0.22em] text-secondary-fixed-dim">
              {data.eyebrow}
            </span>
            <h2 className="font-serif text-display-xl-mobile font-normal leading-[1.02] tracking-tight text-[#FBF9F5] md:text-display-xl">
              {data.title}
            </h2>
            <p className="max-w-2xl font-sans text-body-lead font-normal leading-relaxed text-[#A1A1AA]">
              {data.description}
            </p>
            <div className="flex flex-col gap-space-md pt-space-md sm:flex-row sm:items-center">
              <a
                href={data.ctaUrl}
                className="inline-flex items-center justify-center rounded bg-secondary px-space-md py-space-sm font-label-meta text-label-meta uppercase tracking-[0.16em] text-on-secondary shadow-md transition-all hover:brightness-110"
              >
                {data.ctaLabel}
              </a>
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="font-label-meta text-label-meta uppercase tracking-wider text-[#A1A1AA]">
                  {data.capacityLabel}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-gutter-desktop border-t border-[#2E2E33] pt-space-xl sm:grid-cols-3">
              {data.meta.map((item) => (
                <div key={item.label} className="space-y-1">
                  <span className="block font-label-index text-label-index uppercase text-[#A1A1AA]">
                    {item.label}
                  </span>
                  <span className="font-body-sm text-body-sm text-[#FBF9F5]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div aria-hidden="true" className="hidden w-px shrink-0 self-stretch bg-[#2E2E33] lg:block" />

          <div className="space-y-space-sm lg:basis-5/12 lg:pl-space-md">
            <p className="font-sans text-body-lead font-semibold leading-relaxed text-[#FBF9F5]">
              {data.painPoints.intro}
            </p>
            <div className="space-y-space-xs pt-space-xs">
              {data.painPoints.items.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">•</span>
                  <span className="font-body-sm text-body-sm text-[#A1A1AA]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
