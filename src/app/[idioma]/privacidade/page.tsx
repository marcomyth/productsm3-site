import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSiteContent } from "@/lib/content";
import { legal } from "@/content/legal";
import { PaginaLegalView } from "@/components/legal/PaginaLegalView";
import { alternativas } from "@/lib/seo";
import { ehIdioma } from "@/i18n/config";

/**
 * O texto desta página vive em src/content/legal/, um arquivo por idioma, e é
 * desenhado por PaginaLegalView. Aqui fica só o que é rota: o idioma, os
 * metadados e os dois campos que vêm do conteúdo do site (e-mail de contato e
 * razão social), para que a política não repita dados que já existem em outro
 * lugar e possam divergir.
 */
type Props = { params: Promise<{ idioma: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { idioma } = await params;
  if (!ehIdioma(idioma)) notFound();

  const dados = legal(idioma).privacidade;
  return {
    title: dados.metaTitulo,
    description: dados.metaDescricao,
    alternates: alternativas(idioma, "/privacidade"),
  };
}

export default async function PrivacidadePage({ params }: Props) {
  const { idioma } = await params;
  if (!ehIdioma(idioma)) notFound();

  const { footer } = await getSiteContent(idioma);
  const conteudo = legal(idioma);

  return (
    <PaginaLegalView
      dados={conteudo.privacidade}
      idioma={idioma}
      email={footer.contactEmail}
      controlador={footer.copyrightHolder}
      rotuloPrivacidade={conteudo.privacidade.titulo}
    />
  );
}
