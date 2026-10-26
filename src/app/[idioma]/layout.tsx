import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Instrument_Serif } from "next/font/google";
import { getSiteContent } from "@/lib/content";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SeletorIdiomaCanto } from "@/components/layout/SeletorIdiomaCanto";
import { siteConfig } from "@/config/site";
import { alternativas } from "@/lib/seo";
import { textos } from "@/i18n/dicionario";
import { ehIdioma, IDIOMAS, IDIOMA_HTML, IDIOMA_OG, rota } from "@/i18n/config";
import "../globals.css";

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

type Props = {
  children: React.ReactNode;
  params: Promise<{ idioma: string }>;
};

/**
 * Os três idiomas são gerados no build.
 *
 * Sem isto, `[idioma]` seria um parâmetro dinâmico e cada visita renderizaria
 * a página no servidor — trocando páginas estáticas com revalidação por
 * execução a cada requisição, que é justamente o que este site não precisa.
 */
export function generateStaticParams() {
  return IDIOMAS.map((idioma) => ({ idioma }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { idioma } = await params;
  if (!ehIdioma(idioma)) notFound();

  const { seo } = await getSiteContent(idioma);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: seo.title,
      template: `%s — M3 Brasil`,
    },
    description: seo.description,
    keywords: seo.keywords,
    alternates: alternativas(idioma, "/"),
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website",
      url: rota(idioma, "/"),
      siteName: "M3 Brasil",
      locale: IDIOMA_OG[idioma],
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

export default async function RootLayout({ children, params }: Props) {
  const { idioma } = await params;
  if (!ehIdioma(idioma)) notFound();

  const { header, footer, seo } = await getSiteContent(idioma);
  const t = textos(idioma);

  return (
    <html
      lang={IDIOMA_HTML[idioma]}
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
          {t.layout.pularParaConteudo}
        </a>
        <div className="flex min-h-screen flex-col">
          {/* A barra e fixa, mas nao ha padding de compensacao aqui: ela traz o
              proprio espacador, com a altura vinda do mesmo token. Compensar
              aqui foi o primeiro elo da corrente de remendos da versao
              anterior, e e justamente o que nao se repete. */}
          <Header content={header} idioma={idioma} />
          <main id="conteudo" className="flex-1">
            {children}
          </main>
          <Footer content={footer} idioma={idioma} />
        </div>
        {/* Fora da coluna da página, porque é fixo na tela e não parte do
            fluxo. Vem depois do rodapé na marcação para quem navega por
            teclado só chegar nele no fim: é um controle persistente, não um
            passo da leitura. */}
        <SeletorIdiomaCanto idioma={idioma} />
      </body>
    </html>
  );
}
