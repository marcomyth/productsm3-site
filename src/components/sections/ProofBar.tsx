import type { ProofStat } from "@/lib/types";

type Props = {
  data: ProofStat[];
};

export function ProofBar({ data }: Props) {
  return (
    <section className="w-full border-y border-dark-border bg-dark-surface text-on-dark">
      <div className="w-full px-grid-margin-mobile py-space-xl md:px-grid-margin-tablet lg:px-grid-margin-desktop">
        <div className="grid grid-cols-2 gap-gutter-desktop divide-y divide-dark-divider lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {data.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col pt-space-sm first:lg:pl-0 last:lg:pr-0 lg:px-space-md lg:pt-0"
            >
              <span className="font-serif text-display-lg-mobile font-normal tracking-tight text-on-dark md:text-display-lg">
                {stat.value}
              </span>
              <span className="mt-space-2xs font-label-index text-label-index uppercase tracking-wider text-secondary-fixed-dim">
                {stat.label}
              </span>
              <p className="mt-space-xs font-body-sm text-body-sm text-on-dark-variant">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
