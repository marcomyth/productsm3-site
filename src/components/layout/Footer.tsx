import Link from "next/link";
import Image from "next/image";
import type { SiteFooter } from "@/lib/types";

type Props = {
  content: SiteFooter;
};

/**
 * Rodapé no arranjo da referência: marca com contato logo abaixo dela à
 * esquerda, colunas de links à direita, e o copyright centralizado depois de
 * uma régua.
 *
 * O contato subiu para debaixo da logo. Antes era uma quarta coluna chamada
 * "Contato Direto", espremida ao lado das outras três — e-mail e telefone são
 * a informação que mais se procura num rodapé, e estavam no lugar de menos
 * destaque. Junto da marca, viram parte da identificação.
 *
 * Saiu o "M3" monumental cortado no pé da página. Era o elemento mais nosso e
 * o mais distante da referência, que fecha limpo. Fica registrado aqui porque
 * é uma linha para voltar, se fizer falta.
 */
export function Footer({ content }: Props) {
  const telefoneUrl = `tel:${content.contactPhone.replace(/[^\d+]/g, "")}`;

  return (
    <footer className="w-full border-t border-dark-border bg-dark-surface text-on-dark">
      {/* Mesma medida das seções da página, senão o rodapé é o único bloco
          que vaza para fora da coluna de 1140px e a quebra de alinhamento
          aparece justamente no fim da leitura. */}
      <div className="mx-auto w-full max-w-content px-grid-margin-mobile py-space-2xl md:px-grid-margin-tablet lg:px-grid-margin-desktop">
        <div className="grid grid-cols-1 gap-x-gutter-desktop gap-y-space-xl md:grid-cols-12">
          <div className="md:col-span-4">
            <Image
              src="/images/logo-m3-claro.png"
              alt="Agência M3"
              width={548}
              height={442}
              className="h-12 w-auto"
            />
            <div className="mt-space-md space-y-space-2xs">
              <a
                href={`mailto:${content.contactEmail}`}
                className="block font-body-sm text-body-sm text-on-dark-variant transition-colors hover:text-secondary-fixed-dim"
              >
                {content.contactEmail}
              </a>
              <a
                href={telefoneUrl}
                className="block font-body-sm text-body-sm text-on-dark-variant transition-colors hover:text-secondary-fixed-dim"
              >
                {content.contactPhone}
              </a>
            </div>
            <p className="mt-space-md max-w-xs font-body-sm text-body-sm text-on-dark-variant">
              {content.locations}
            </p>
          </div>

          {/* Duas colunas, nao tres: o conteudo tem dois grupos de links, e uma
              grade de tres deixava o terco da direita vazio justo no fim da
              pagina, onde o olho repara. */}
          <div className="grid grid-cols-1 gap-x-gutter-desktop gap-y-space-lg sm:grid-cols-2 md:col-span-8">
            {content.columns.map((col) => (
              <div key={col.title} className="flex flex-col space-y-space-xs">
                <span className="font-label-index text-label-index font-semibold uppercase tracking-[0.14em] text-on-dark">
                  {col.title}
                </span>
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.url}
                    className="font-body-sm text-body-sm text-on-dark-variant transition-colors hover:text-secondary-fixed-dim"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Diretriz operacional: continua no rodapé, mas depois dos links e
            sem o rótulo numerado, que era resto da numeração de seções que
            saiu do site inteiro. */}
        <ul className="mt-space-xl grid grid-cols-1 gap-space-2xs border-t border-dark-divider pt-space-lg md:grid-cols-3 md:gap-gutter-desktop">
          {content.tagline.map((line) => (
            <li key={line} className="flex items-start gap-2">
              <span aria-hidden="true" className="mt-0.5 text-secondary-fixed-dim">
                •
              </span>
              <span className="font-body-sm text-body-sm text-on-dark-variant">{line}</span>
            </li>
          ))}
        </ul>

        <div className="mt-space-xl flex flex-col items-center gap-space-xs border-t border-dark-divider pt-space-md text-center">
          <div className="flex flex-wrap items-center justify-center gap-space-md">
            {/* Eram <span>: tinham cara de link, mas não levavam a lugar
                nenhum — nem com o cursor de mão, nem pelo teclado. */}
            {content.legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                className="font-label-meta text-label-meta uppercase tracking-wider text-on-dark-variant transition-colors hover:text-on-dark"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <span className="font-label-meta text-label-meta uppercase tracking-wider text-on-dark-variant">
            © {new Date().getFullYear()} {content.copyrightHolder}
          </span>
        </div>
      </div>
    </footer>
  );
}
