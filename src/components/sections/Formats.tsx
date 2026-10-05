import { Section } from "@/components/layout/Section";
import type { FormatsContent } from "@/lib/types";

type Props = {
  data: FormatsContent;
  /** Número da seção, calculado na ordem de renderização em page.tsx. */
  index: string;
};

/**
 * Formatos de contratação, um card por formato. Aqui o card se justifica:
 * são caminhos alternativos entre os quais o visitante escolhe, e a borda é
 * o que diz que ele precisa comparar um com o outro.
 *
 * Sem `items-start` no grid, pelo mesmo motivo de Cases.tsx: o padrão
 * `stretch` é o que faz os dois cards terminarem na mesma altura quando um
 * texto é mais longo que o outro.
 */
export function Formats({ data, index }: Props) {
  if (data.items.length === 0) return null;

  return (
    <Section id="formatos" tom="escuro">
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

      <div className="grid grid-cols-1 gap-gutter-desktop md:grid-cols-2">
        {data.items.map((item) => (
          <article
            key={item.title}
            className="flex flex-col rounded border border-painel-regua bg-painel p-space-md shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <span className="font-label-meta text-label-meta font-semibold uppercase tracking-[0.16em] t-acento">
              {item.label}
            </span>
            <h3 className="mt-space-xs font-serif text-headline-md-mobile font-normal leading-tight t-forte md:text-headline-md">
              {item.title}
            </h3>
            <p className="mt-space-sm font-sans text-body-default leading-relaxed t-fraco">
              {item.description}
            </p>
          </article>
        ))}
      </div>

      {data.closing && (
        <p className="mt-space-xl max-w-2xl font-sans text-body-lead leading-relaxed t-texto">
          {data.closing}
        </p>
      )}
    </Section>
  );
}
