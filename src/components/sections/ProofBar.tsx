import { Section } from "@/components/layout/Section";
import type { ProofStat } from "@/lib/types";

type Props = {
  data: ProofStat[];
};

/**
 * Faixa de números logo abaixo do hero.
 *
 * Eram quatro colunas com o número em cima da legenda. Na referência cada
 * dado é uma linha: o percentual à esquerda e a legenda ao lado dele, em
 * blocos empilhados. A diferença não é cosmética — número sobre legenda
 * estreita obriga a quebrar a legenda em três ou quatro linhas, e o olho lê
 * quatro colunas de texto picado; número ao lado deixa a legenda correr e o
 * par vira uma afirmação só.
 *
 * Duas por linha em vez das três empilhadas da referência, porque aqui são
 * quatro dados e não três, e quatro empilhados em meia largura deixariam a
 * outra metade vazia: lá esse espaço é ocupado por um parágrafo e um botão
 * que a M3 não tem nesta seção.
 */
export function ProofBar({ data }: Props) {
  return (
    <Section tom="claro-alt" ziguezague>
      <div className="grid grid-cols-1 gap-x-gutter-desktop gap-y-space-lg md:grid-cols-2">
        {data.map((stat) => (
          <div
            key={stat.label}
            className="flex items-start gap-space-sm border-t border-regua pt-space-sm"
          >
            <span className="font-sans text-display-lg-mobile font-extrabold leading-none tracking-[-0.01em] t-acento md:text-display-lg">
              {stat.value}
            </span>
            <div className="pt-1">
              <span className="block font-label-index text-label-index uppercase tracking-wider t-forte">
                {stat.label}
              </span>
              <p className="mt-space-2xs font-body-sm text-body-sm leading-relaxed t-fraco">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
