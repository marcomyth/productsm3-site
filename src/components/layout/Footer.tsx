import Link from "next/link";
import Image from "next/image";
import type { SiteFooter } from "@/lib/types";

type Props = {
  content: SiteFooter;
};

export function Footer({ content }: Props) {
  return (
    <footer className="relative w-full overflow-hidden border-t border-dark-border bg-dark-surface text-on-dark">
      <div className="w-full px-grid-margin-mobile py-space-xl md:px-grid-margin-tablet lg:px-grid-margin-desktop">
        <div className="grid grid-cols-1 gap-gutter-desktop md:grid-cols-12">
          {/* Marca + diretriz operacional */}
          <div className="flex flex-col justify-between md:col-span-5">
            <div className="space-y-space-sm">
              <Image
                src="/images/logo-m3-claro.png"
                alt="Agência M3"
                width={548}
                height={442}
                className="h-11 w-auto"
              />
              <div className="max-w-sm space-y-space-2xs">
                {content.tagline.map((line) => (
                  <div key={line} className="flex items-start gap-2">
                    <span className="mt-0.5 text-secondary-fixed-dim">•</span>
                    <span className="font-body-sm text-body-sm text-on-dark-variant">{line}</span>
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
                <span className="font-label-index text-label-index uppercase tracking-wider text-on-dark-variant">
                  {col.title}
                </span>
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.url}
                    className="font-body-sm text-body-sm text-on-dark transition-colors hover:text-secondary-fixed-dim"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="col-span-2 flex flex-col space-y-space-xs sm:col-span-1">
              <span className="font-label-index text-label-index uppercase tracking-wider text-on-dark-variant">
                Contato Direto
              </span>
              <a
                href={`mailto:${content.contactEmail}`}
                className="font-body-sm text-body-sm text-on-dark hover:text-secondary-fixed-dim"
              >
                {content.contactEmail}
              </a>
              <a
                href={`tel:${content.contactPhone.replace(/[^\d+]/g, "")}`}
                className="font-body-sm text-body-sm text-on-dark hover:text-secondary-fixed-dim"
              >
                {content.contactPhone}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-space-xl flex flex-col items-center justify-between gap-space-sm border-t border-dark-divider pt-space-md sm:flex-row">
          <span className="font-label-meta text-label-meta uppercase text-on-dark-variant">
            © {new Date().getFullYear()} {content.copyrightHolder}
          </span>
          <div className="flex items-center gap-space-md">
            {/* Eram <span>: tinham cara de link, mas não levavam a lugar
                nenhum — nem com o cursor de mão, nem pelo teclado. */}
            {content.legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                className="font-label-meta text-label-meta uppercase text-on-dark-variant transition-colors hover:text-on-dark"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Wordmark monumental cortado, estilo revista editorial */}
      <div
        aria-hidden="true"
        className="pointer-events-none -mb-10 flex w-full select-none justify-center overflow-hidden opacity-10 md:-mb-16 lg:-mb-24"
      >
        <span className="font-serif text-[160px] font-normal leading-none tracking-tighter text-on-dark-variant md:text-[280px] lg:text-[400px]">
          M3
        </span>
      </div>
    </footer>
  );
}
