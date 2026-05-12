import type { Metadata } from "next";
// Never prerender layouts that depend on Strapi — keeps /_not-found and any
// other static pages from hanging when the build env can't reach Strapi.
export const dynamic = "force-dynamic";

import { Inter, Sora } from "next/font/google";
import { getGlobal } from "@/lib/strapi";
import { mediaUrl } from "@/lib/media";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PreviewBanner } from "@/components/PreviewBanner";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
});

export async function generateMetadata(): Promise<Metadata> {
  const global = await getGlobal();
  const seo = global?.defaultSeo;
  const title = seo?.metaTitle || global?.siteName || siteConfig.name;
  const description = seo?.metaDescription || siteConfig.description;
  const ogImage = seo?.shareImage?.url ? mediaUrl(seo.shareImage.url) : siteConfig.ogImage;

  return {
    title: {
      default: title,
      template: `%s — ${global?.siteName || siteConfig.name}`,
    },
    description,
    keywords: seo?.keywords?.split(",").map((k) => k.trim()),
    openGraph: {
      title,
      description,
      images: ogImage ? [{ url: ogImage }] : undefined,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const global = await getGlobal();
  const headerLogoSrc = global?.header?.logo?.url ? mediaUrl(global.header.logo.url) : null;

  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${inter.variable} ${sora.variable}`}>
      <head>
        {/*
          esbuild --keep-names sprinkles __name(fn, "name") through bundles for
          stack-trace fidelity. next-themes' precompiled inline theme script
          contains __name(...) but the helper isn't defined inline, crashing
          the page on Cloudflare Workers (and other strict runtimes) with
          "Uncaught ReferenceError: __name is not defined". A no-op polyfill
          loaded before any inline scripts run avoids the crash without losing
          the actual theme detection.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "globalThis.__name||Object.defineProperty(globalThis,'__name',{value:function(f){return f}});",
          }}
        />
      </head>
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <PreviewBanner />
          <div className="flex min-h-screen flex-col">
            <Header header={global?.header} siteName={global?.siteName} logoSrc={headerLogoSrc} />
            <main className="flex-1">{children}</main>
            <Footer footer={global?.footer} contact={global?.contact} siteName={global?.siteName} />
          </div>
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
