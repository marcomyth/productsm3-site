import type { Metadata } from "next";
import { getLandingPage } from "@/lib/strapi";
import { mediaUrl } from "@/lib/utils";
import { SectionRenderer } from "@/components/sections/SectionRenderer";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getLandingPage();
  const seo = page?.seo;
  if (!seo) return {};
  const ogImage = seo.shareImage?.url ? mediaUrl(seo.shareImage.url) : undefined;
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords?.split(",").map((k) => k.trim()),
    alternates: seo.canonicalURL ? { canonical: seo.canonicalURL } : undefined,
    openGraph: {
      title: seo.metaTitle ?? undefined,
      description: seo.metaDescription ?? undefined,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.metaTitle ?? undefined,
      description: seo.metaDescription ?? undefined,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function HomePage() {
  const page = await getLandingPage();

  if (!page) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight">Conteúdo indisponível</h1>
        <p className="mt-3 text-muted-foreground">
          Não foi possível carregar a landing page. Verifique se o Strapi está rodando em{" "}
          <code className="rounded bg-muted px-1.5 py-0.5">
            {process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"}
          </code>{" "}
          e se o single type <strong>landing-page</strong> existe e está publicado.
        </p>
      </div>
    );
  }

  return (
    <>
      {page.sections?.map((section) => (
        <SectionRenderer key={`${section.__component}-${section.id}`} section={section} />
      ))}
    </>
  );
}
