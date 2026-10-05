import { Section } from "@/components/layout/Section";
import type { DifferentiatorsContent } from "@/lib/types";

type Props = {
  data: DifferentiatorsContent;
  /** Número da seção, calculado na ordem de renderização em page.tsx. */
  index: string;
};

/**
 * Bloco de diferenciação: por que este trabalho não é o pacote genérico do
 * mercado. Cada ponto entra com régua em cima e não como card — o card diz
 * "objeto separado", e aqui os quatro pontos são um argumento só, lido em
 * sequência.
 */
export function Differentiators({ data, index }: Props) {
  if (data.items.length === 0) return null;

  return (
    <Section id="diferenciais" tom="claro-alt">
      <div className="mb-space-xl max-w-3xl">
        <span className="font-label-index text-label-index uppercase tracking-[0.2em] t-acento">
          {index} / {data.eyebrow}
        </span>
        <h2 className="mt-space-2xs font-sans text-display-lg-mobile font-extrabold uppercase tracking-[0.01em] t-forte md:text-display-lg">
          {data.title}
        </h2>
        {data.description && (
          <p className="mt-space-xs font-sans text-body-lead leading-relaxed t-fraco">
            {data.description}
          </p>
        )}
      </div>

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
