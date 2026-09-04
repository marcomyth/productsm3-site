import type { MethodPhase } from "@/lib/types";

type Props = {
  data: MethodPhase[];
};

export function Method({ data }: Props) {
  return (
    <section
      id="metodo"
      className="w-full border-t border-surface-variant bg-surface-container-low px-grid-margin-mobile py-space-2xl md:px-grid-margin-tablet lg:px-grid-margin-desktop"
    >
      <div className="mb-space-xl max-w-3xl">
        <span className="font-label-index text-label-index uppercase tracking-[0.2em] text-secondary">
          03 / Método de Trabalho
        </span>
        <h2 className="mt-space-2xs font-serif text-display-lg-mobile font-normal tracking-tight text-primary md:text-display-lg">
          Rigor analítico em quatro fases irredutíveis
        </h2>
        <p className="mt-space-xs font-sans text-body-lead text-on-surface-variant">
          Eliminamos o desperdício antes de acelerar. A escala só acontece após a estabilização da
          margem.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-gutter-desktop md:grid-cols-2 lg:grid-cols-4">
        {data.map((phase) => (
          <div
            key={phase.index}
            className="flex h-full flex-col justify-between rounded border border-surface-variant/80 bg-surface-container-lowest p-space-md shadow-sm"
          >
            <div>
              <div className="mb-space-md flex items-center justify-between border-b border-surface-variant pb-space-xs">
                <span className="font-serif text-headline-md font-normal text-primary">
                  {phase.index}
                </span>
                <span className="font-label-meta text-label-meta uppercase tracking-widest text-outline">
                  {phase.phaseLabel}
                </span>
              </div>
              <h3 className="mb-space-xs font-sans text-headline-sm font-semibold text-primary">
                {phase.title}
              </h3>
              <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                {phase.description}
              </p>
            </div>
            <div className="mt-space-md border-t border-surface-variant/70 pt-space-md">
              <span className="font-label-meta text-label-meta font-semibold uppercase text-secondary">
                {phase.timeframe}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
