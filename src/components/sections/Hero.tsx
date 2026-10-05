import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { BOTAO_ACAO } from "@/lib/utils";
import type { HeroContent } from "@/lib/types";

type Props = {
  data: HeroContent;
};

/**
 * Hero no arranjo da home da referência, que é diferente do da página de
 * serviço: não são duas colunas com imagem ao lado. É um bloco escuro de
 * ponta a ponta, com a peça visual ocupando o fundo inteiro e o texto
 * alinhado à esquerda por cima dela.
 *
 * O título também muda de tratamento: na home dele é caixa normal e bem
 * maior (cerca de 64px), enquanto a caixa alta pesada fica restrita à página
 * de serviço. Eu tinha aplicado caixa alta no site todo.
 *
 * A foto entra como fundo da seção (`tom="foto"`), o que traz junto o véu de
 * contraste e o desfoque ligado ao scroll — o único efeito de scroll que a
 * referência usa, e que até aqui estava construído mas sem lugar.
 */
export function Hero({ data }: Props) {
  return (
    <Section
      tom="foto"
      fotoUrl={data.figure.imageUrl}
      largura="ampla"
      respiro="grande"
      className="pt-[9rem] md:pt-[12rem]"
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

        <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
          <Link href={data.primaryCta.url} className={BOTAO_ACAO}>
            {data.primaryCta.label}
          </Link>
          <Link
            href={data.secondaryCta.url}
            className="group inline-flex items-center gap-2 font-sans text-body-default t-texto transition-colors hover:t-acento"
          >
            <span className="border-b border-regua pb-0.5 group-hover:border-secondary-fixed-dim">
              {data.secondaryCta.label}
            </span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
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
