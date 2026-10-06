import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { getSiteContent } from "@/lib/content";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
});

/**
 * A referencia usa duas familias, nao uma: sans pesada em caixa alta para a
 * afirmacao, e uma segunda face de display em caixa baixa, na cor de acento,
 * para a linha que nomeia a secao ("metodologia e entregaveis", "dois
 * formatos,"). A Instrument Serif cumpre exatamente esse segundo papel, e e
 * por isso que ela voltou depois de eu te-la removido: sem ela o site ficava
 * com uma familia so, ou seja, menos parecido com a referencia, nao mais.
 */
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  // O italico entrou para o botao de acao. E a face mais proxima de caligrafia
  // que o site ja tem — a alternativa seria uma terceira familia so para um
  // botao, com mais um arquivo para baixar antes da primeira tela.
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
  fallback: ["Georgia", "ui-serif", "serif"],
});

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getSiteContent();

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: seo.title,
      template: `%s — M3 Brasil`,
    },
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website",
      url: siteConfig.url,
      siteName: "M3 Brasil",
      locale: "pt_BR",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

/**
 * Schema Organization — é o que alimenta o Knowledge Panel do Google em busca
 * por marca. Os dados saem do próprio conteúdo em vez de duplicados aqui; o
 * CNPJ e a razão social vêm de `copyrightHolder`, que os traz numa string só
 * ("Razão Social — CNPJ 00.000.000/0001-00"), então são extraídos com guarda:
 * se o formato mudar, o campo é omitido em vez de entrar errado.
 */
function organizationSchema(
  footer: Awaited<ReturnType<typeof getSiteContent>>["footer"],
  description: string,
) {
  const cnpj = footer.copyrightHolder.match(/\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/)?.[0];
  const legalName = footer.copyrightHolder.split("—")[0]?.trim();

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "M3 Brasil",
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.png`,
    image: `${siteConfig.url}/opengraph-image`,
    description,
    email: footer.contactEmail,
    telephone: footer.contactPhone,
    areaServed: "BR",
    ...(legalName ? { legalName } : {}),
    ...(cnpj ? { taxID: cnpj } : {}),
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { header, footer, seo } = await getSiteContent();

  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${instrumentSerif.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-body-default text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema(footer, seo.description)).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-secondary focus:px-space-sm focus:py-space-xs focus:font-label-meta focus:text-label-meta focus:uppercase focus:tracking-wider focus:text-on-secondary"
        >
          Pular para o conteúdo
        </a>
        <div className="flex min-h-screen flex-col">
          {/* A barra e fixa, mas nao ha padding de compensacao aqui: ela traz o
              proprio espacador, com a altura vinda do mesmo token. Compensar
              aqui foi o primeiro elo da corrente de remendos da versao
              anterior, e e justamente o que nao se repete. */}
          <Header content={header} />
          <main id="conteudo" className="flex-1">
            {children}
          </main>
          <Footer content={footer} />
        </div>
      </body>
    </html>
  );
}
