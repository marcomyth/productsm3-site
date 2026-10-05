"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import type { SiteHeader } from "@/lib/types";
import { cn, externalLinkProps, BOTAO_ACAO_COMPACTO } from "@/lib/utils";

type Props = {
  content: SiteHeader;
};

/**
 * Barra fixa do topo.
 *
 * Escura, acompanhando o hero e a referência. O que viabilizou isso foi a
 * logo: `logo-m3.png` é um traço todo escuro (luminância média 16,7, zero
 * pixel claro) e desapareceria aqui, mas `logo-m3-claro.png`, que o rodapé
 * já usava, é o inverso (241,4, tudo claro). A marca do cliente não precisou
 * ser alterada, só a variante certa precisou ser usada.
 */
export function Header({ content }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="tom-escuro fixed inset-x-0 top-0 z-50 w-full border-b border-regua bg-dark-surface/90 shadow-[0_1px_14px_rgba(0,0,0,0.18)] backdrop-blur-md">
      {/* Mesma medida larga do hero, pra logo alinhar com a primeira palavra
          do título em vez de encostar na borda da tela. */}
      <div className="mx-auto flex h-[72px] w-full max-w-content-wide items-center justify-between px-grid-margin-mobile md:px-grid-margin-tablet lg:px-grid-margin-desktop">
        <Link href="/" className="group flex items-center gap-4">
          <Image
            src="/images/logo-m3-claro.png"
            alt="Agência M3"
            width={548}
            height={442}
            priority
            className="h-11 w-auto"
          />
          <span className="ml-1 hidden border-l border-regua pl-3 font-label-meta text-label-meta uppercase tracking-wider t-fraco sm:inline-block">
            {content.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-space-md md:flex" aria-label="Principal">
          {content.navLinks.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="font-body-sm text-body-sm tracking-wide t-fraco transition-colors hover:t-forte"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-space-sm">
          <Link
            href={content.ctaUrl}
            {...externalLinkProps(content.ctaUrl)}
            className={cn(BOTAO_ACAO_COMPACTO, "hidden sm:inline-flex")}
          >
            {content.ctaLabel}
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded t-forte md:hidden"
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
          "overflow-hidden border-t border-regua transition-[max-height] duration-300 md:hidden",
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
              className="rounded px-3 py-2 font-body-sm text-body-sm t-texto hover:bg-painel"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={content.ctaUrl}
            {...externalLinkProps(content.ctaUrl)}
            className={cn(BOTAO_ACAO_COMPACTO, "mt-2 w-full")}
            onClick={() => setOpen(false)}
          >
            {content.ctaLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}
