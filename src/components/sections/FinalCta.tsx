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
        {/* Mesmo rotulo das demais secoes. Aqui ele ja foi menor que a
            afirmacao, e o fecho da pagina era a unica parte do site com a
            hierarquia invertida. */}
        <p className="rotulo-serifado lg:col-span-4">{data.eyebrow}</p>
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

      {/* 3/9, não 7/5. Os três metadados em fileira comiam mais da metade da
          largura para dizer três coisas curtas, e sobrava embaixo deles uma
          altura inteira de nada, porque quem define a altura da linha é a
          lista ao lado. Empilhados numa coluna estreita eles enchem a própria
          altura, e a lista — que é o argumento de verdade deste bloco — passa
          a ter 75% do espaço. */}
      <div className="mt-space-xl grid grid-cols-1 gap-x-gutter-desktop gap-y-space-md border-t border-regua pt-space-lg lg:grid-cols-12">
        {/* `dl` e não `div`: cada item é um par rótulo/valor, que é exatamente
            o que uma lista de definições descreve. Para quem usa leitor de
            tela, "requisito de verba" passa a anunciar o valor que vem junto
            em vez de serem dois textos soltos vizinhos. */}
        <dl className="divide-y divide-regua lg:col-span-3">
          {data.meta.map((item) => (
            <div key={item.label} className="py-space-xs first:pt-0 last:pb-0">
              <dt className="font-label-index text-label-index uppercase t-fraco">{item.label}</dt>
              <dd className="mt-space-3xs font-body-sm text-body-sm t-texto">{item.value}</dd>
            </div>
          ))}
        </dl>

        <div className="space-y-space-sm lg:col-span-9 lg:border-l lg:border-regua lg:pl-space-lg">
          <p className="font-sans text-body-lead font-semibold leading-relaxed t-forte">
            {data.painPoints.intro}
          </p>
          {/* Lista de verdade, e em duas colunas a partir de `sm`: são oito
              itens de uma linha cada: numa coluna só eles viram uma tira
              estreita com 75% da largura vazia ao lado. O marcador fica fora
              da árvore de acessibilidade — sem isso o leitor de tela anuncia
              "marcador" antes de cada um, já tendo dito que é uma lista. */}
          <ul className="grid grid-cols-1 gap-x-gutter-desktop gap-y-space-xs sm:grid-cols-2">
            {data.painPoints.items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span aria-hidden="true" className="text-body-sm leading-relaxed t-acento">
                  •
                </span>
                <span className="font-body-sm text-body-sm leading-relaxed t-fraco">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
