import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getSiteContent } from "@/lib/content";
import { Cases } from "@/components/sections/Cases";
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
export const metadata: Metadata = {
  title: "Cases de Sucesso",
  description:
    "Resultados entregues pela Agência M3 em projetos de tráfego, e-commerce e construção de marca, com a métrica e o período de cada um.",
};

export default async function CasesPage() {
  const { cases, finalCta } = await getSiteContent();

  return (
    <>
      <Cases data={cases} />
      <Clientes data={cases} />
      <FinalCta data={finalCta} />

      <div className="mx-auto w-full max-w-content px-grid-margin-mobile pb-space-2xl md:px-grid-margin-tablet lg:px-grid-margin-desktop">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-label-meta text-label-meta font-semibold uppercase tracking-widest text-secondary transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-3 w-3" />
          Voltar para a home
        </Link>
      </div>
    </>
  );
}
