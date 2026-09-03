import { Fragment } from "react";

type Props = {
  data: string[];
};

export function TechStackTicker({ data }: Props) {
  return (
    <section className="w-full border-y border-surface-variant bg-surface-container-low py-space-md">
      <div className="scrollbar-none w-full overflow-x-auto px-grid-margin-mobile md:px-grid-margin-tablet lg:px-grid-margin-desktop">
        <div className="flex min-w-max items-center justify-between gap-space-lg text-outline">
          <span className="font-label-index text-label-index font-bold uppercase tracking-[0.2em] text-on-surface">
            Stack de Engenharia &amp; Dados:
          </span>
          {data.map((tech, i) => (
            <Fragment key={tech}>
              {i > 0 && <span className="font-mono text-outline-variant">·</span>}
              <span className="font-label-meta text-label-meta font-medium uppercase tracking-[0.2em] text-on-surface-variant transition-colors hover:text-primary">
                {tech}
              </span>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
