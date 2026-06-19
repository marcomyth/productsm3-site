import Link from "next/link";
import Image from "next/image";
import type { Footer as FooterData, Contact } from "@/lib/types";
import { mediaUrl } from "@/lib/media";
import { siteConfig } from "@/config/site";

type Props = {
  footer?: FooterData;
  contact?: Contact;
  siteName?: string;
};

export function Footer({ footer, contact, siteName }: Props) {
  const logoSrc = footer?.logo?.url ? mediaUrl(footer.logo.url) : (siteConfig.defaultLogo ?? null);
  const logoText = footer?.logoText || siteName || siteConfig.name;
  // Quando há logo PNG (que já tem o nome embutido), esconde o texto pra não duplicar.
  const showLogoText = !logoSrc;
  const columns = footer?.columns ?? [];
  const year = new Date().getFullYear();
  // siteConfig.copyright tem prioridade (override fixo); Strapi como fallback.
  const copyright = siteConfig.copyright ?? footer?.copyright ?? `© ${year} ${logoText}. Todos os direitos reservados.`;

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            {logoSrc ? (
              <Image
                src={logoSrc}
                alt={logoText}
                width={160}
                height={48}
                className="h-12 w-auto object-contain"
              />
            ) : (
              <span className="inline-block h-7 w-7 rounded-md bg-foreground" aria-hidden="true" />
            )}
            {showLogoText && <span>{logoText}</span>}
          </Link>
          {footer?.tagline && (
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">{footer.tagline}</p>
          )}
          {(() => {
            // Email do siteConfig.contact.email (override do Strapi).
            // Telefone e endereço removidos — decisão de produto, footer enxuto.
            const displayEmail = siteConfig.contact?.email ?? contact?.email;
            if (!displayEmail) return null;
            return (
              <ul className="mt-6 space-y-1 text-sm text-muted-foreground">
                <li>
                  <a href={`mailto:${displayEmail}`} className="hover:text-foreground">
                    {displayEmail}
                  </a>
                </li>
              </ul>
            );
          })()}
        </div>

        {columns.length > 0 && (
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-2">
            {columns.map((col, i) => (
              <div key={col.id ?? `col-${i}`}>
                <h3 className="text-sm font-semibold">{col.title}</h3>
                <ul className="mt-4 space-y-2">
                  {col.links?.map((link, j) => (
                    <li key={link.id ?? `${i}-${j}`}>
                      <Link
                        href={link.url}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Conecte-se: hardcoded com link pro Ascendly (override do Strapi social). */}
        <div className="lg:col-span-1">
          <h3 className="text-sm font-semibold">Conecte-se</h3>
          <div className="mt-4 flex gap-3">
            <Link
              href="https://ascendly.com.br"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ascendly"
              className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <Image
                src="/ascendly-icon.svg"
                alt="Ascendly"
                width={20}
                height={20}
                className="h-5 w-5"
              />
              <span>Ascendly</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-muted-foreground sm:px-6 lg:px-8">
          {copyright}
        </div>
      </div>
    </footer>
  );
}
