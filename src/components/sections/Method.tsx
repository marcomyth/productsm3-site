import { Section } from "@/components/layout/Section";
import { TituloSecao } from "@/components/layout/TituloSecao";
import type { MethodPhase } from "@/lib/types";

type Props = {
  data: MethodPhase[];
};

/**
 * Método, em cartões arredondados empilhados.
 *
 * É a seção mais longa da referência e a que mais define a leitura dela: cada
 * etapa é um painel de canto bem arredondado, preenchido em tom mais claro
 * que o fundo, com o título da etapa na cor de acento e os entregáveis em
 * marcadores. Passei por duas versões erradas antes desta — grade de quatro
 * colunas, depois lista com régua — porque estava lendo o HTML e não a página.
 *
 * O raio grande é o que mais distingue: com canto de 4px os painéis leem como
 * tabela, e é a curva que os faz lerem como cartão.
 */
export function Method({ data }: Props) {
  return (
    <Section id="metodo" tom="verde">
      <TituloSecao
        destaque="método e entregáveis"
        afirmacao="Rigor analítico em quatro fases irredutíveis"
        descricao="Eliminamos o desperdício antes de acelerar. A escala só acontece após a estabilização da margem."
      />

      <div className="mt-space-xl flex flex-col gap-space-md">
        {data.map((phase) => (
          <article
            key={phase.index}
            className="rounded-[1.5rem] bg-dark-green-panel p-space-md md:p-space-lg"
          >
            <h3 className="font-sans text-headline-sm font-extrabold tracking-[0.02em] t-acento">
              {phase.index}. {phase.title}
            </h3>

            <p className="mt-space-xs max-w-4xl font-sans text-body-default leading-relaxed t-fraco">
              {phase.description}
            </p>

            {phase.deliverables && phase.deliverables.length > 0 && (
              <ul className="mt-space-sm space-y-space-xs">
                {phase.deliverables.map((deliverable) => (
                  <li key={deliverable.title} className="flex gap-space-xs">
                    <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-secondary-fixed-dim" />
                    <p className="font-sans text-body-default leading-relaxed t-fraco">
                      <span className="font-semibold t-forte">{deliverable.title}:</span>{" "}
                      {deliverable.description}
                    </p>
                  </li>
                ))}
              </ul>
            )}

            <p className="mt-space-sm font-label-meta text-label-meta font-semibold uppercase tracking-widest t-acento">
              {phase.timeframe}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
