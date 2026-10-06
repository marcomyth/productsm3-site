"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import type { SiteHeader } from "@/lib/types";
import { cn, externalLinkProps } from "@/lib/utils";

type Props = {
  content: SiteHeader;
};

/**
 * Barra do topo, fixa.
 *
 * Ela já foi fixa antes, e aquela versão arrastava uma corrente de remendos:
 * padding de compensação no <main>, margem negativa no hero para desfazer o
 * padding, estado de rolagem para alternar entre transparente e sólida,
 * `usePathname` porque só a home tinha hero atrás, e um ResizeObserver medindo
 * a altura do hero para saber a hora de trocar. Cinco peças, cada uma
 * existindo para consertar o problema criada pela anterior.
 *
 * Nada disso voltou, e o motivo é uma coincidência de paleta: a barra e o topo
 * do hero são ambos `dark-surface`. Uma barra permanentemente sólida é, no
 * topo da página, visualmente idêntica a uma transparente — então não há o que
 * alternar, não há rolagem a observar e não há rota a distinguir. Sobre as
 * seções claras, o mesmo sólido escuro é o que mantém a navegação legível.
 *
 * O lugar no fluxo é reservado por um espaçador irmão, com a altura vinda do
 * mesmo token da barra. Fica aqui, e não como padding no <main>, porque é esta
 * barra que tem altura: quem define a medida é quem deve reservá-la.
 *
 * A logo clara é obrigatória aqui: `logo-m3.png` é um traço todo escuro
 * (luminância média 16,7, zero pixel claro) e sumiria sobre este fundo.
 */
export function Header({ content }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <header className="tom-escuro fixed inset-x-0 top-0 z-50 bg-dark-surface">
        {/* Mesma medida larga do hero, pra logo alinhar com a primeira palavra
            do título em vez de encostar na borda da tela. */}
        <div className="mx-auto flex h-barra w-full max-w-content-wide items-center justify-between px-grid-margin-mobile md:px-grid-margin-tablet lg:px-grid-margin-desktop">
          {/* Só a marca, sem rótulo ao lado. O "CONSULTORIA" que ficava aqui,
              separado por uma régua, não tem equivalente na referência e era o
              que deixava o canto esquerdo apertado. Continua no conteúdo
              (`header.tagline`), disponível para outro lugar. */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-m3-claro.png"
              alt="Agência M3"
              width={548}
              height={442}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Navegação e botão num grupo só, encostados à direita, como lá.
              Separados — navegação ao centro e botão na ponta — os três blocos
              do cabeçalho ficavam equidistantes e nada parecia pertencer a nada.
              Juntos, a leitura é: marca de um lado, o que fazer do outro. */}
          <div className="flex items-center gap-space-sm">
            <nav className="hidden items-center gap-space-md lg:flex" aria-label="Principal">
              {content.navLinks.map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="font-label-meta text-label-meta font-semibold uppercase tracking-[0.14em] t-fraco transition-colors hover:t-forte"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Compacto e discreto, no formato do "fale conosco" deles: a barra
                é navegação, não o lugar de gritar. O botão grande em pílula
                continua no hero e no fecho da página, onde ele é o assunto. */}
            <Link
              href={content.ctaUrl}
              {...externalLinkProps(content.ctaUrl)}
              className="hidden items-center rounded-md bg-action px-4 py-2 font-label-meta text-label-meta font-semibold uppercase tracking-[0.12em] text-on-action transition-all duration-300 hover:brightness-95 sm:inline-flex"
            >
              {content.ctaLabel}
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded t-forte lg:hidden"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="menu-mobile"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* `inert` tira os links da ordem de tabulação quando o menu está
            fechado — max-h-0 só os esconde visualmente, e sem isso quem navega
            por teclado passava por 5 links invisíveis. */}
        <div
          id="menu-mobile"
          inert={!open}
          className={cn(
            "overflow-hidden border-t border-regua transition-[max-height] duration-300 lg:hidden",
            open ? "max-h-[360px]" : "max-h-0",
          )}
        >
          <div className="flex flex-col gap-1 px-grid-margin-mobile py-space-sm">
            {content.navLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="rounded px-3 py-2 font-label-meta text-label-meta font-semibold uppercase tracking-[0.14em] t-texto hover:bg-painel"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={content.ctaUrl}
              {...externalLinkProps(content.ctaUrl)}
              className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-action px-4 py-2 font-label-meta text-label-meta font-semibold uppercase tracking-[0.12em] text-on-action transition-all duration-300 hover:brightness-95"
              onClick={() => setOpen(false)}
            >
              {content.ctaLabel}
            </Link>
          </div>
        </div>
      </header>

      {/* Reserva o lugar da barra no fluxo. Mesmo tom escuro por garantia: ele
          fica sempre coberto pela barra, mas se algum arredondamento de
          subpixel abrir uma fresta, ela é da cor do que está em cima. */}
      <div aria-hidden="true" className="h-barra bg-dark-surface" />
    </>
  );
}
