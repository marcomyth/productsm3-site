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
 * Hero no arranjo da referência: imagem à esquerda, texto à direita.
 *
 * A inversão não é detalhe. Lá o container é `row-reverse`, e o bloco de
 * texto encostado na direita com a peça visual à esquerda é a primeira coisa
 * que diferencia aquela página de uma landing comum. Eu tinha lido isso no
 * CSS e deixado passar, montando texto à esquerda como todo mundo faz.
 *
 * O botão ocupa a largura inteira da coluna de texto, também como lá: não é
 * um botão com letra grande, é uma barra, e é o elemento de maior peso visual
 * da tela depois do título.
 */
export function Hero({ data }: Props) {
  return (
    <Section tom="gradiente" largura="ampla" respiro="grande" className="pt-[8rem] md:pt-[11rem]">
      <div className="grid grid-cols-1 items-center gap-gutter-desktop lg:grid-cols-12">
        {/* Primeiro no DOM e à esquerda na tela. A referência inverte pelo
            CSS, mas a ordem visual é esta, e aqui ela já nasce certa — assim
            quem navega por teclado ou leitor de tela percorre a página na
            mesma ordem em que ela é vista. */}
        <div className="order-2 lg:order-1 lg:col-span-5">
          <div className="relative aspect-[17/10] overflow-hidden rounded-lg border border-regua">
            <Image
              src={data.figure.imageUrl}
              alt={data.figure.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        <div className="order-1 space-y-space-md lg:order-2 lg:col-span-7 lg:pl-space-lg">
          <span className="block font-label-meta text-label-meta font-semibold uppercase tracking-[0.2em] t-acento">
            {data.eyebrow}
          </span>

          <h1 className="font-sans text-display-xl-mobile font-bold uppercase leading-[1.1] tracking-[0.01em] t-forte md:text-display-xl">
            {data.title}
          </h1>

          <p className="max-w-xl font-sans text-body-lead font-normal leading-relaxed t-fraco">
            {data.subtitle}
          </p>

          <div className="space-y-space-sm pt-space-xs">
            <Link href={data.primaryCta.url} className={`${BOTAO_ACAO} w-full`}>
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
      </div>
    </Section>
  );
}
