"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/CtaButton";
import { ThemeToggle } from "@/components/ThemeToggle";
import type { Header as HeaderData } from "@/lib/types";
import { cn } from "@/lib/utils";

type Props = {
  header?: HeaderData;
  siteName?: string;
  /**
   * Logo src resolved on the server (already prefixed with the Strapi host).
   * Passed in by the layout so this client component doesn't need to know
   * how to build media URLs.
   */
  logoSrc?: string | null;
};

export function Header({ header, siteName, logoSrc }: Props) {
  const [open, setOpen] = React.useState(false);
  const logoText = header?.logoText || siteName || "productsm3";
  const links = header?.links ?? [];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2.5 text-lg font-bold tracking-tight">
          {logoSrc ? (
            <Image
              src={logoSrc}
              alt={logoText}
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
          ) : (
            <span
              className="inline-block h-7 w-7 rounded-lg bg-brand-gradient shadow-brand-glow"
              aria-hidden="true"
            />
          )}
          <span className="text-brand-gradient">{logoText}</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {links.map((link, i) => (
            <Link
              key={link.id ?? `${link.url}-${i}`}
              href={link.url}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden md:block">
            <CtaButton cta={header?.cta ?? undefined} size="default" />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden border-t border-border/60 transition-[max-height] duration-300",
          open ? "max-h-[400px]" : "max-h-0",
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {links.map((link, i) => (
            <Link
              key={link.id ?? `m-${link.url}-${i}`}
              href={link.url}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="rounded-md px-3 py-2 text-sm text-foreground hover:bg-accent"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2">
            <CtaButton cta={header?.cta ?? undefined} size="default" className="w-full" />
          </div>
        </div>
      </div>
    </header>
  );
}
