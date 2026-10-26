import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getSiteContent } from "@/lib/content";
import { ehIdioma, rota } from "@/i18n/config";
import { textos } from "@/i18n/dicionario";
import { alternativas } from "@/lib/seo";
import { Cases, CasesIntro } from "@/components/sections/Cases";
import { CasesHero } from "@/components/sections/CasesHero";
import { Clientes } from "@/components/sections/Clientes";
import { FinalCta } from "@/components/sections/FinalCta";

/**
 * Página própria dos cases.
 *
 * Eles saíram da home a pedido do cliente, para que a primeira página fique
 * com o mesmo peso da referência, que não tem galeria de cases: lá a prova
 * social na home é só a grade de logos, e o detalhe de cada trabalho vive em
 * outro lugar.
 *
 * Aqui os sete cases aparecem por inteiro, e o fecho da página repete o CTA,
 * porque quem chega até o fim de uma leitura de prova é exatamente quem está
 * pronto para falar.
 */
type Props = { params: Promise<{ idioma: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { idioma } = await params;
  if (!ehIdioma(idioma)) notFound();

  const t = textos(idioma).cases;
  return {
    title: t.metaTitulo,
    description: t.metaDescricao,
    alternates: alternativas(idioma, "/cases"),
  };
}

export default async function CasesPage({ params }: Props) {
  const { idioma } = await params;
  if (!ehIdioma(idioma)) notFound();

  const t = textos(idioma);
  const { cases, casesPage, finalCta } = await getSiteContent(idioma);

  return (
    <>
      <CasesHero data={casesPage} cases={cases} ctaUrl={finalCta.ctaUrl} />
      <CasesIntro pagina={casesPage} />
      {/* A fileira de marcas entra entre a introdução e as faixas: o texto
          anuncia as sete, a fileira mostra as sete, e só então a página abre
          uma por uma. Depois das faixas ela repetiria o que acabou de ser dito
          em detalhe. */}
      <Clientes data={cases} idioma={idioma} />
      <Cases data={cases} pagina={casesPage} ctaUrl={finalCta.ctaUrl} />
      <FinalCta data={finalCta} />

      <div className="mx-auto w-full max-w-content px-grid-margin-mobile pb-space-2xl md:px-grid-margin-tablet lg:px-grid-margin-desktop">
        <Link
          href={rota(idioma, "/")}
          className="inline-flex items-center gap-2 font-label-meta text-label-meta font-semibold uppercase tracking-widest text-secondary transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-3 w-3" />
          {t.cases.voltar}
        </Link>
      </div>
    </>
  );
}
