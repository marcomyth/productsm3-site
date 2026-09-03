"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { SiteHeader } from "@/lib/types";
import { cn } from "@/lib/utils";

type Props = {
  content: SiteHeader;
};

export function Header({ content }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-surface-variant/80 bg-surface/90 shadow-[0_1px_10px_rgba(24,24,27,0.03)] backdrop-blur-md">
      <div className="flex h-16 w-full items-center justify-between px-grid-margin-mobile md:px-grid-margin-tablet lg:px-grid-margin-desktop">
        <Link href="/" className="group flex items-center gap-4">
          <span className="flex items-baseline gap-1.5">
            <span className="font-serif text-[28px] font-bold leading-none tracking-tight text-primary">
              {content.logoLabel}
            </span>
            <span className="font-sans text-[11px] font-semibold tracking-[0.25em] text-secondary">
              {content.logoSuffix}
            </span>
          </span>
          <span className="ml-1 hidden border-l border-outline-variant pl-3 font-label-meta text-label-meta uppercase tracking-wider text-on-surface-variant sm:inline-block">
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
              className="font-body-sm text-body-sm tracking-wide text-on-surface-variant transition-colors hover:text-on-surface"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-space-sm">
          <div className="hidden items-center gap-1.5 rounded-full bg-sage-light/70 px-2.5 py-1 text-[11px] font-medium tracking-wide text-sage lg:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sage" />
            <span>{content.uptimeLabel}</span>
          </div>
          <Link
            href={content.ctaUrl}
            className="hidden items-center rounded border border-outline-variant bg-surface-container-lowest px-4 py-2 font-label-meta text-label-meta uppercase tracking-wider text-primary transition-all duration-150 hover:border-secondary hover:text-secondary sm:inline-flex"
          >
            {content.ctaLabel}
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded text-primary md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-surface-variant/80 transition-[max-height] duration-300 md:hidden",
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
              className="rounded px-3 py-2 font-body-sm text-body-sm text-on-surface hover:bg-accent"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={content.ctaUrl}
            className="mt-2 inline-flex items-center justify-center rounded bg-secondary px-space-md py-space-sm font-label-meta text-label-meta uppercase tracking-[0.14em] text-on-secondary"
            onClick={() => setOpen(false)}
          >
            {content.ctaLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}
