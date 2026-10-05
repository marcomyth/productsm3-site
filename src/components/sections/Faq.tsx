import { Plus } from "lucide-react";
import { Section } from "@/components/layout/Section";
import type { FaqContent } from "@/lib/types";

type Props = {
  data: FaqContent;
  /** Número da seção, calculado na ordem de renderização em page.tsx. */
  index: string;
};

/**
 * FAQ em <details> nativo, e não em acordeão de JavaScript: abre e fecha sem
 * estado no cliente, já vem navegável por teclado e anunciado por leitor de
 * tela, e a seção continua sendo Server Component. A animação de altura é do
 * CSS (`.acordeao` em globals.css), que degrada para abertura instantânea
 * onde `::details-content` ainda não existe.
 *
 * O ícone é um "+" que gira 45° e vira "×" quando abre. Rotação anima bem em
 * qualquer navegador, ao contrário da altura.
 *
 * Em gradiente, como na referência, onde o FAQ é a única seção que troca de
 * cor no meio dela mesma.
 */
export function Faq({ data, index }: Props) {
  if (data.items.length === 0) return null;

  return (
    <Section id="faq" tom="gradiente">
      <div className="mb-space-xl max-w-3xl">
        <span className="font-label-index text-label-index uppercase tracking-[0.2em] t-acento">
          {index} / {data.eyebrow}
        </span>
        <h2 className="mt-space-2xs font-serif text-display-lg-mobile font-normal tracking-tight t-forte md:text-display-lg">
          {data.title}
        </h2>
        {data.description && (
          <p className="mt-space-xs font-sans text-body-lead leading-relaxed t-fraco">
            {data.description}
          </p>
        )}
      </div>

      <div className="max-w-3xl divide-y divide-regua border-y border-regua">
        {data.items.map((item) => (
          <details key={item.question} className="acordeao group">
            <summary className="flex items-start justify-between gap-space-sm py-space-sm">
              <h3 className="font-sans text-headline-sm font-semibold t-forte transition-colors group-hover:t-acento">
                {item.question}
              </h3>
              <Plus
                aria-hidden="true"
                className="mt-1 h-4 w-4 shrink-0 t-acento transition-transform duration-300 group-open:rotate-45"
              />
            </summary>
            <p className="pb-space-sm pr-space-xl font-sans text-body-default leading-relaxed t-fraco">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
