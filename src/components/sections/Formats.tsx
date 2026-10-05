import { Section } from "@/components/layout/Section";
import { TituloSecao } from "@/components/layout/TituloSecao";
import type { FormatsContent } from "@/lib/types";

type Props = {
  data: FormatsContent;
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
export function Formats({ data }: Props) {
  if (data.items.length === 0) return null;

  return (
    <Section id="formatos" tom="escuro">
      <TituloSecao
        destaque={data.eyebrow}
        afirmacao={data.title}
        descricao={data.description}
        className="mb-space-xl"
      />

      <div className="grid grid-cols-1 gap-gutter-desktop md:grid-cols-2">
        {data.items.map((item) => (
          <article
            key={item.title}
            className="flex flex-col rounded border border-painel-regua bg-painel p-space-md shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <span className="font-label-meta text-label-meta font-semibold uppercase tracking-[0.16em] t-acento">
              {item.label}
            </span>
            <h3 className="mt-space-xs font-sans text-headline-md-mobile font-extrabold uppercase leading-tight t-forte md:text-headline-md">
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
