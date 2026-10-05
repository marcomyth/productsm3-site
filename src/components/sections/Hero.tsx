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
      // -mt-[72px] cancela o respiro que o <main> reserva para a barra fixa:
      // é o que faz a animação subir até a borda da tela, como na referência.
      // O padding próprio (144px) já passa longe dos 72px da barra.
      className="-mt-[72px] pt-[11rem] md:pt-[14rem]"
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

        <div className="grid grid-cols-1 gap-gutter-tablet border-t border-regua pt-space-md sm:grid-cols-3">
          {data.meta.map((question) => (
            <span key={question} className="font-body-sm text-body-sm font-medium t-fraco">
              {question}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
