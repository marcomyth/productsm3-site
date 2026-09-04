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
        <div className="grid grid-cols-1 items-start gap-gutter-desktop lg:grid-cols-12">
          <div className="space-y-space-md lg:col-span-7">
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

          <div className="space-y-space-sm rounded border border-[#2E2E33] bg-[#1D1D20] p-space-md lg:col-span-5">
            <p className="font-sans text-body-default leading-relaxed text-[#A1A1AA]">
              {data.painPoints.intro}
            </p>
            <div className="space-y-space-2xs pt-space-2xs">
              {data.painPoints.items.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 font-mono text-secondary">—</span>
                  <span className="font-body-sm text-body-sm text-[#FBF9F5]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
