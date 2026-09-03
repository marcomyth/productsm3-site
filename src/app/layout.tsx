import type { Metadata } from "next";
import { Inter, Instrument_Serif, Newsreader } from "next/font/google";
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

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
  fallback: ["Georgia", "ui-serif", "serif"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
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
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { header, footer } = await getSiteContent();

  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${instrumentSerif.variable} ${newsreader.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-body-default text-foreground antialiased selection:bg-secondary selection:text-on-secondary">
        <div className="flex min-h-screen flex-col">
          <Header content={header} />
          <main className="flex-1 pt-16">{children}</main>
          <Footer content={footer} />
        </div>
      </body>
    </html>
  );
}
