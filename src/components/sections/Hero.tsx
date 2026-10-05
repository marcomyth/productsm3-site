import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { BOTAO_ACAO } from "@/lib/utils";
import type { HeroContent } from "@/lib/types";

type Props = {
  data: HeroContent;
};

/**
 * Hero no formato da referência: fundo escuro em gradiente, conteúdo na
 * medida larga (1600px, a única seção que abre além dos 1140px), texto à
 * esquerda e imagem à direita.
 *
 * O título caiu de 78px para 40px junto com a escala nova. Não é perda de
 * presença: a referência ganha presença pelo fundo escuro e pelo botão em
 * pílula, não pelo corpo da letra.
 */
export function Hero({ data }: Props) {
  return (
    <Section tom="gradiente" largura="ampla" respiro="grande">
      <div className="grid grid-cols-1 items-center gap-gutter-desktop lg:grid-cols-12">
        <div className="flex flex-col justify-between space-y-space-md lg:col-span-6 lg:pr-space-md">
          <div className="space-y-space-xs">
            <div className="inline-flex items-center gap-2 rounded-full border border-regua bg-painel px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-secondary-fixed-dim" />
              <span className="font-label-meta text-[10.5px] font-medium uppercase tracking-[0.2em] t-fraco">
                {data.eyebrow}
              </span>
            </div>
            <h1 className="mt-space-xs font-sans text-display-xl-mobile font-bold uppercase leading-[1.1] tracking-[0.01em] t-forte md:text-display-xl">
              {data.title}
            </h1>
          </div>
          <p className="max-w-2xl pt-space-2xs font-sans text-body-lead font-normal leading-relaxed t-fraco">
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
          <div className="grid grid-cols-1 gap-gutter-tablet border-t border-regua pt-space-lg sm:grid-cols-3">
            {data.meta.map((question) => (
              <div key={question} className="pt-space-xs">
                <span className="block font-body-sm text-body-sm font-medium t-texto">
                  {question}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-space-md flex flex-col lg:col-span-6 lg:mt-0">
          <div className="rounded-lg border border-regua bg-painel p-2.5 shadow-sm">
            {/* 17:10 é o recorte da foto, que corta fora teto, chão e cadeira:
                os monitores já ocupavam 96% da largura, então o desperdício
                era todo vertical.

                As duas colunas são metades iguais, como na referência. A
                divisão 7/5 anterior existia porque o título tinha 78px e
                quebrava em quatro linhas numa caixa de 440px; com 40px ele
                cabe em meia tela. */}
            <div className="relative aspect-[17/10] overflow-hidden rounded bg-dark-surface">
              <Image
                src={data.figure.imageUrl}
                alt={data.figure.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-all duration-700 hover:scale-[1.02]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
