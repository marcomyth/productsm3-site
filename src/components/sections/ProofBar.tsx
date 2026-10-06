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
 *
 * O número vive numa coluna de medida fixa, não na largura que ele pede. Em
 * flex, "R$ 40 mi+" é quase o dobro de "+30", e o rótulo ao lado começava num
 * ponto diferente em cada item: na coluna da esquerda, "FUNIL SINÉRGICO DE
 * VENDAS" e "DE MERCADO" nasciam desalinhados um do outro, que é o tipo de
 * desencontro que se nota sem saber nomear. Com a coluna travada, os quatro
 * rótulos partem do mesmo lugar.
 *
 * A medida é generosa de propósito: cabe o maior valor atual numa linha só,
 * então nenhum número quebra e as quatro linhas ficam da mesma altura. Se um
 * dia entrar um valor mais longo, ele quebra dentro da própria coluna em vez
 * de empurrar o rótulo.
 *
 * Duas colunas só a partir de `lg`. Em tablet, metade da largura não comporta
 * a coluna do número mais uma legenda que corra, e era ali que o bloco mais
 * apertava.
 */
export function ProofBar({ data }: Props) {
  return (
    <Section tom="claro-alt" ziguezague>
      <div className="grid grid-cols-1 gap-x-gutter-desktop gap-y-space-lg lg:grid-cols-2">
        {data.map((stat) => (
          <div
            key={stat.label}
            className="grid grid-cols-[9rem_1fr] items-start gap-space-sm border-t border-regua pt-space-sm md:grid-cols-[11rem_1fr]"
          >
            <span className="font-sans text-display-lg-mobile font-extrabold leading-none tracking-[-0.01em] tabular-nums t-acento md:text-display-lg">
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
