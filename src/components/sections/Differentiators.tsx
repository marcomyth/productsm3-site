import { Section } from "@/components/layout/Section";
import { TituloSecao } from "@/components/layout/TituloSecao";
import type { DifferentiatorsContent } from "@/lib/types";

type Props = {
  data: DifferentiatorsContent;
};

/**
 * Bloco de diferenciação: por que este trabalho não é o pacote genérico do
 * mercado. Cada ponto entra com régua em cima e não como card — o card diz
 * "objeto separado", e aqui os quatro pontos são um argumento só, lido em
 * sequência.
 */
export function Differentiators({ data }: Props) {
  if (data.items.length === 0) return null;

  return (
    <Section id="diferenciais" tom="claro-alt">
      <TituloSecao
        destaque={data.eyebrow}
        afirmacao={data.title}
        descricao={data.description}
        className="mb-space-xl"
      />

      <div className="grid grid-cols-1 gap-x-gutter-desktop gap-y-space-lg md:grid-cols-2">
        {data.items.map((item) => (
          <div key={item.title} className="border-t border-regua pt-space-sm">
            <h3 className="font-sans text-headline-sm font-semibold t-forte">{item.title}</h3>
            <p className="mt-space-2xs font-sans text-body-default leading-relaxed t-fraco">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
