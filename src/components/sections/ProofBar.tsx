import { Section } from "@/components/layout/Section";
import type { ProofStat } from "@/lib/types";

type Props = {
  data: ProofStat[];
};

/**
 * Faixa de números logo abaixo do hero.
 *
 * Virou clara porque é o lugar que ela ocupa na referência: lá o bloco de
 * dados é o primeiro respiro claro depois do hero escuro, e é esse contraste
 * que faz os percentuais saltarem. Antes ela era escura e vinha depois de um
 * hero claro, ou seja, o mesmo contraste na direção oposta.
 */
export function ProofBar({ data }: Props) {
  return (
    <Section tom="claro-alt" ziguezague>
      <div className="grid grid-cols-2 gap-gutter-desktop divide-y divide-regua lg:grid-cols-4 lg:divide-x lg:divide-y-0">
        {data.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col pt-space-sm first:lg:pl-0 last:lg:pr-0 lg:px-space-md lg:pt-0"
          >
            <span className="font-sans text-display-lg-mobile font-extrabold tracking-[-0.01em] t-forte md:text-display-lg">
              {stat.value}
            </span>
            <span className="mt-space-2xs font-label-index text-label-index uppercase tracking-wider t-acento">
              {stat.label}
            </span>
            <p className="mt-space-xs font-body-sm text-body-sm t-fraco">{stat.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
