import { Plus } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { TituloSecao } from "@/components/layout/TituloSecao";
import type { FaqContent } from "@/lib/types";

type Props = {
  data: FaqContent;
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
export function Faq({ data }: Props) {
  if (data.items.length === 0) return null;

  return (
    <Section id="faq" tom="gradiente">
      <TituloSecao
        destaque={data.eyebrow}
        afirmacao={data.title}
        descricao={data.description}
        className="mb-space-xl"
      />

      {/* Duas colunas, como na referência, onde os acordeões ficam em duas
          metades e não numa lista única: com `columns` em vez de grid, os
          itens se distribuem sozinhos entre as colunas conforme a quantidade,
          sem eu precisar fatiar o array e sem deixar uma coluna vazia quando
          houver um número ímpar de perguntas. */}
      <div className="md:columns-2 md:gap-gutter-desktop">
        {data.items.map((item) => (
          <details
            key={item.question}
            className="acordeao group break-inside-avoid border-b border-regua first:border-t"
          >
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
