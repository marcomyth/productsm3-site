import { Section } from "@/components/layout/Section";
import type { MethodPhase } from "@/lib/types";

type Props = {
  data: MethodPhase[];
  /** Número da seção, calculado na ordem de renderização em page.tsx. */
  index: string;
};

/**
 * Método, em narrativa vertical.
 *
 * Era uma grade de quatro cards, e essa era a maior diferença de composição
 * em relação à referência: lá a metodologia é a seção mais longa da página,
 * com cada etapa ocupando a largura inteira, uma embaixo da outra, lida como
 * sequência. Em card de 1/4 de largura as quatro fases viram quatro colunas
 * paralelas, que é exatamente o oposto: sugere que podem ser lidas em
 * qualquer ordem, quando o argumento é que uma depende da anterior.
 *
 * Cada etapa é número e título à esquerda, texto à direita. A régua em cima
 * de cada uma substitui a borda do card: separa sem fechar, porque as fases
 * são partes de um percurso e não objetos avulsos.
 */
export function Method({ data, index }: Props) {
  return (
    <Section id="metodo" tom="verde">
      <div className="mb-space-xl max-w-3xl">
        <span className="font-label-index text-label-index uppercase tracking-[0.2em] t-acento">
          {index} / Método de Trabalho
        </span>
        <h2 className="mt-space-2xs font-sans text-display-lg-mobile font-extrabold uppercase tracking-[0.01em] t-forte md:text-display-lg">
          Rigor analítico em quatro fases irredutíveis
        </h2>
        <p className="mt-space-xs font-sans text-body-lead t-fraco">
          Eliminamos o desperdício antes de acelerar. A escala só acontece após a estabilização da
          margem.
        </p>
      </div>

      <div className="flex flex-col">
        {data.map((phase) => (
          <article
            key={phase.index}
            className="grid grid-cols-1 gap-x-gutter-desktop gap-y-space-sm border-t border-regua py-space-lg lg:grid-cols-12"
          >
            <div className="lg:col-span-4">
              <div className="flex items-baseline gap-space-sm">
                <span className="font-sans text-display-lg-mobile font-extrabold leading-none t-acento md:text-display-lg">
                  {phase.index}
                </span>
                <span className="font-label-meta text-label-meta uppercase tracking-widest t-fraco">
                  {phase.phaseLabel}
                </span>
              </div>
              <h3 className="mt-space-xs font-sans text-headline-md-mobile font-extrabold uppercase leading-tight t-forte md:text-headline-md">
                {phase.title}
              </h3>
            </div>

            <div className="space-y-space-sm lg:col-span-8">
              <p className="font-sans text-body-default leading-relaxed t-fraco">
                {phase.description}
              </p>

              {phase.deliverables && phase.deliverables.length > 0 && (
                /* Dois por linha, porque na largura cheia uma lista de uma
                   coluna só deixaria metade da seção vazia. */
                <ul className="grid grid-cols-1 gap-x-gutter-desktop gap-y-space-sm pt-space-2xs md:grid-cols-2">
                  {phase.deliverables.map((deliverable) => (
                    <li key={deliverable.title} className="border-l-2 border-regua pl-space-xs">
                      <span className="font-sans text-body-sm font-semibold t-forte">
                        {deliverable.title}
                      </span>
                      <p className="mt-1 font-body-sm text-body-sm leading-relaxed t-fraco">
                        {deliverable.description}
                      </p>
                    </li>
                  ))}
                </ul>
              )}

              <p className="font-label-meta text-label-meta font-semibold uppercase tracking-widest t-acento">
                {phase.timeframe}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
