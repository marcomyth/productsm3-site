import { Section } from "@/components/layout/Section";
import { BOTAO_ACAO, externalLinkProps } from "@/lib/utils";
import type { FinalCtaContent } from "@/lib/types";

type Props = {
  data: FinalCtaContent;
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
export function FinalCta({ data }: Props) {
  return (
    <Section id="auditoria" tom="claro" respiro="grande">
      {/* Titulo estreito a esquerda e texto ao lado, com o botao centralizado
          embaixo dos dois: e a composicao do fecho da referencia, e o unico
          lugar em que ela centraliza alguma coisa. */}
      <div className="grid grid-cols-1 gap-x-gutter-desktop gap-y-space-md lg:grid-cols-12">
        {/* Mesma proporcao das demais secoes: a serifada e maior que a
            afirmacao. Aqui ela estava menor, e o fecho da pagina era a unica
            parte do site com a hierarquia invertida. */}
        <p className="font-serif text-display-xl-mobile font-normal leading-[1.1] t-acento md:text-display-xl lg:col-span-4">
          {data.eyebrow}
        </p>
        <div className="lg:col-span-8" />

        <h2 className="font-sans text-display-lg-mobile font-extrabold leading-[1.1] tracking-[0.01em] t-forte md:text-display-lg lg:col-span-4">
          {data.title}
        </h2>
        <p className="font-sans text-body-default leading-relaxed t-fraco lg:col-span-7 lg:pt-space-2xs">
          {data.description}
        </p>
      </div>

      <div className="mt-space-xl flex justify-center">
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
