import { Section } from "@/components/layout/Section";
import { BOTAO_ACAO, externalLinkProps } from "@/lib/utils";
import type { FinalCtaContent } from "@/lib/types";

type Props = {
  data: FinalCtaContent;
  /** Número da seção, calculado na ordem de renderização em page.tsx. */
  index: string;
};

/**
 * Fechamento da página.
 *
 * Claro, como na referência: lá o último bloco antes do rodapé é o respiro
 * claro que faz o botão de ação ser a única coisa colorida na tela. Com o
 * rodapé escuro logo abaixo, o contraste recai sobre o botão em vez de se
 * diluir num terceiro bloco escuro seguido.
 */
export function FinalCta({ data, index }: Props) {
  return (
    <Section id="auditoria" tom="claro" respiro="grande">
      <div className="flex flex-col gap-gutter-desktop lg:flex-row lg:items-start">
        <div className="space-y-space-md lg:basis-7/12">
          <span className="block font-label-index text-label-index font-medium uppercase tracking-[0.22em] t-acento">
            {index} / {data.eyebrow}
          </span>
          <h2 className="font-serif text-display-xl-mobile font-normal leading-[1.08] tracking-tight t-forte md:text-display-xl">
            {data.title}
          </h2>
          <p className="max-w-2xl font-sans text-body-lead font-normal leading-relaxed t-fraco">
            {data.description}
          </p>
          <div className="pt-space-md">
            <a href={data.ctaUrl} {...externalLinkProps(data.ctaUrl)} className={BOTAO_ACAO}>
              {data.ctaLabel}
            </a>
          </div>
          <div className="grid grid-cols-1 gap-gutter-desktop border-t border-regua pt-space-xl sm:grid-cols-3">
            {data.meta.map((item) => (
              <div key={item.label} className="space-y-1">
                <span className="block font-label-index text-label-index uppercase t-fraco">
                  {item.label}
                </span>
                <span className="font-body-sm text-body-sm t-texto">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* A régua é borda da própria coluna, e não um filho de 1px: assim ela
            desaparece junto com a divisão quando o layout empilha no celular,
            sem precisar de uma classe `hidden` para escondê-la. */}
        <div className="space-y-space-sm lg:basis-5/12 lg:border-l lg:border-regua lg:pl-space-lg lg:pt-space-xl">
          <p className="font-sans text-body-lead font-semibold leading-relaxed t-forte">
            {data.painPoints.intro}
          </p>
          <div className="space-y-space-xs pt-space-xs">
            {data.painPoints.items.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="t-acento">•</span>
                <span className="font-body-sm text-body-sm t-fraco">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
