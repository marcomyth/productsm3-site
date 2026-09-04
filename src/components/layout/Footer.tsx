import Link from "next/link";
import type { SiteFooter } from "@/lib/types";

type Props = {
  content: SiteFooter;
};

export function Footer({ content }: Props) {
  return (
    <footer className="relative w-full overflow-hidden border-t border-[#2A2A2E] bg-[#18181B] text-surface-bright">
      <div className="w-full px-grid-margin-mobile py-space-xl md:px-grid-margin-tablet lg:px-grid-margin-desktop">
        <div className="grid grid-cols-1 gap-gutter-desktop md:grid-cols-12">
          {/* Marca + diretriz operacional */}
          <div className="flex flex-col justify-between md:col-span-5">
            <div className="space-y-space-sm">
              <span className="flex items-baseline gap-1.5">
                <span className="font-serif text-[28px] font-bold leading-none tracking-tight text-surface-bright">
                  M3
                </span>
                <span className="font-sans text-[11px] font-semibold tracking-[0.25em] text-secondary">
                  BRASIL
                </span>
              </span>
              <div className="max-w-sm space-y-space-2xs">
                {content.tagline.map((line) => (
                  <div key={line} className="flex items-start gap-2">
                    <span className="mt-0.5 text-secondary">•</span>
                    <span className="font-body-sm text-body-sm text-[#A1A1AA]">{line}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-space-lg">
              <span className="mb-space-2xs block font-label-index text-label-index uppercase text-secondary-fixed-dim">
                01 / Diretriz Operacional
              </span>
              <span className="font-body-sm text-body-sm text-surface-container-high">
                {content.locations}
              </span>
            </div>
          </div>

          {/* Colunas de navegação + contato */}
          <div className="grid grid-cols-2 gap-gutter-desktop sm:grid-cols-3 md:col-span-7">
            {content.columns.map((col) => (
              <div key={col.title} className="flex flex-col space-y-space-xs">
                <span className="font-label-index text-label-index uppercase tracking-wider text-[#A1A1AA]">
                  {col.title}
                </span>
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.url}
                    className="font-body-sm text-body-sm text-surface-bright transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="col-span-2 flex flex-col space-y-space-xs sm:col-span-1">
              <span className="font-label-index text-label-index uppercase tracking-wider text-[#A1A1AA]">
                Contato Direto
              </span>
              <a
                href={`mailto:${content.contactEmail}`}
                className="font-body-sm text-body-sm text-surface-bright hover:text-secondary"
              >
                {content.contactEmail}
              </a>
              <span className="font-body-sm text-body-sm text-surface-bright">
                {content.contactPhone}
              </span>
              <div className="mt-space-sm flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="font-label-meta text-label-meta uppercase text-emerald-300">
                  {content.statusLabel}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-space-xl flex flex-col items-center justify-between gap-space-sm border-t border-[#2E2E33] pt-space-md sm:flex-row">
          <span className="font-label-meta text-label-meta uppercase text-[#A1A1AA]">
            © {new Date().getFullYear()} {content.copyrightHolder}
          </span>
          <div className="flex items-center gap-space-md">
            {content.legalLinks.map((link) => (
              <span key={link.label} className="font-label-meta text-label-meta uppercase text-[#A1A1AA]">
                {link.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Wordmark monumental cortado, estilo revista editorial */}
      <div
        aria-hidden="true"
        className="pointer-events-none -mb-10 flex w-full select-none justify-center overflow-hidden opacity-10 md:-mb-16 lg:-mb-24"
      >
        <span className="font-serif text-[160px] font-normal leading-none tracking-tighter text-[#A1A1AA] md:text-[280px] lg:text-[400px]">
          M3
        </span>
      </div>
    </footer>
  );
}
