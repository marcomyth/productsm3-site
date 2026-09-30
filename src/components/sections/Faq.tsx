import { Plus } from "lucide-react";
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
 */
export function Faq({ data, index }: Props) {
  if (data.items.length === 0) return null;

  return (
    <section
      id="faq"
      className="w-full bg-surface px-grid-margin-mobile py-space-2xl md:px-grid-margin-tablet lg:px-grid-margin-desktop"
    >
      <div className="mb-space-xl max-w-3xl">
        <span className="font-label-index text-label-index uppercase tracking-[0.2em] text-secondary">
          {index} / {data.eyebrow}
        </span>
        <h2 className="mt-space-2xs font-serif text-display-lg-mobile font-normal tracking-tight text-primary md:text-display-lg">
          {data.title}
        </h2>
        {data.description && (
          <p className="mt-space-xs font-sans text-body-lead leading-relaxed text-on-surface-variant">
            {data.description}
          </p>
        )}
      </div>

      <div className="max-w-3xl divide-y divide-surface-variant border-y border-surface-variant">
        {data.items.map((item) => (
          <details key={item.question} className="acordeao group">
            <summary className="flex items-start justify-between gap-space-sm py-space-sm">
              <h3 className="font-sans text-headline-sm font-semibold text-primary transition-colors group-hover:text-secondary">
                {item.question}
              </h3>
              <Plus
                aria-hidden="true"
                className="mt-1 h-4 w-4 shrink-0 text-secondary transition-transform duration-300 group-open:rotate-45"
              />
            </summary>
            <p className="pb-space-sm pr-space-xl font-sans text-body-default leading-relaxed text-on-surface-variant">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
