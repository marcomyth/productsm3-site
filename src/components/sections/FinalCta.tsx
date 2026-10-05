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
 *
 * A composição também é a dela: título e texto lado a lado numa linha, e o
 * botão sozinho embaixo dos dois. Era título e texto empilhados à esquerda
 * com uma segunda coluna ao lado, o que empurrava o botão para o meio da
 * altura e deixava o fechamento sem um ponto final claro.
 *
 * As dores e os metadados, que a referência não tem, descem para depois de
 * uma régua: continuam na página, sem disputar a linha do título.
 */
export function FinalCta({ data, index }: Props) {
  return (
    <Section id="auditoria" tom="claro" respiro="grande">
      <span className="block font-label-index text-label-index font-medium uppercase tracking-[0.22em] t-acento">
        {index} / {data.eyebrow}
      </span>

      <div className="mt-space-sm grid grid-cols-1 gap-x-gutter-desktop gap-y-space-md lg:grid-cols-12">
        <h2 className="font-sans text-display-xl-mobile font-bold uppercase leading-[1.1] tracking-[0.01em] t-forte md:text-display-xl lg:col-span-7">
          {data.title}
        </h2>
        <p className="font-sans text-body-lead font-normal leading-relaxed t-fraco lg:col-span-5 lg:pt-space-2xs">
          {data.description}
        </p>
      </div>

      <div className="mt-space-lg">
        <a href={data.ctaUrl} {...externalLinkProps(data.ctaUrl)} className={BOTAO_ACAO}>
          {data.ctaLabel}
        </a>
      </div>

      <div className="mt-space-xl grid grid-cols-1 gap-x-gutter-desktop gap-y-space-md border-t border-regua pt-space-lg lg:grid-cols-12">
        <div className="grid grid-cols-1 gap-gutter-desktop sm:grid-cols-3 lg:col-span-7">
          {data.meta.map((item) => (
            <div key={item.label} className="space-y-1">
              <span className="block font-label-index text-label-index uppercase t-fraco">
                {item.label}
              </span>
              <span className="font-body-sm text-body-sm t-texto">{item.value}</span>
            </div>
          ))}
        </div>

        <div className="space-y-space-sm lg:col-span-5 lg:border-l lg:border-regua lg:pl-space-lg">
          <p className="font-sans text-body-lead font-semibold leading-relaxed t-forte">
            {data.painPoints.intro}
          </p>
          <div className="space-y-space-xs">
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
