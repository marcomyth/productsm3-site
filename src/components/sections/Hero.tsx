import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { BOTAO_ACAO } from "@/lib/utils";
import type { HeroContent } from "@/lib/types";

type Props = {
  data: HeroContent;
};

/**
 * Hero no arranjo da home da referência, que é diferente do da página de
 * serviço: não são duas colunas com imagem ao lado. É um bloco escuro de ponta
 * a ponta, com a peça visual ocupando o fundo inteiro e o texto alinhado à
 * esquerda por cima dela.
 *
 * O título também muda de tratamento: na home deles é caixa normal e bem maior
 * (cerca de 64px), enquanto a caixa alta pesada fica restrita à página de
 * serviço. Eu tinha aplicado caixa alta no site todo.
 *
 * No lugar da foto, um fundo animado de fios luminosos, desenhado em canvas e
 * reagindo ao ponteiro. A foto da estação de trabalho saiu junto com as demais
 * imagens do site, por decisão do cliente: ficam só as logos.
 */
export function Hero({ data }: Props) {
  return (
    <Section
      tom="escuro"
      fios
      largura="ampla"
      respiro="grande"
      // A margem negativa saiu junto com a barra fixa: agora o hero começa
      // logo abaixo dela, no fluxo normal.
      className="pt-space-2xl md:pt-[9rem]"
    >
      <div className="max-w-3xl space-y-space-md">
        <span className="block font-label-meta text-label-meta font-semibold uppercase tracking-[0.22em] t-acento">
          {data.eyebrow}
        </span>

        {/* Medido na home da referência: ~64px no desktop. Fora da escala de
            tokens de propósito — é o único texto da página nesse corpo, e
            promover isso a token criaria um degrau que nada mais usa. */}
        <h1 className="font-sans text-[2.75rem] font-bold leading-[1.05] tracking-[-0.01em] t-forte md:text-[4rem]">
          {data.title}
        </h1>

        <p className="max-w-2xl font-sans text-body-lead font-normal leading-relaxed t-fraco">
          {data.subtitle}
        </p>

        {/* Um botão só, como na referência. O link secundário para os cases
            saiu daqui: dois caminhos lado a lado dividem a atenção logo na
            primeira tela, e os cases já têm entrada pelo menu e pela grade de
            logos logo abaixo. O campo `secondaryCta` continua no conteúdo,
            intacto, caso ele volte a ser usado em outro lugar. */}
        <div className="pt-space-xs">
          <Link href={data.primaryCta.url} className={BOTAO_ACAO}>
            {data.primaryCta.label}
          </Link>
        </div>

        {/* No celular as tres perguntas viram uma lista empilhada e cada uma
            ganha regua propria: sem isso elas encostavam umas nas outras e
            liam como um paragrafo so. Em tela larga voltam a ser colunas. */}
        <ul className="grid grid-cols-1 gap-space-sm border-t border-regua pt-space-md sm:grid-cols-3 sm:gap-gutter-tablet">
          {data.meta.map((question) => (
            <li
              key={question}
              className="border-b border-regua pb-space-sm font-body-sm text-body-sm font-medium t-fraco last:border-b-0 sm:border-b-0 sm:pb-0"
            >
              {question}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
