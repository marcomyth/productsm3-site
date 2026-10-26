import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSiteContent } from "@/lib/content";
import { legal } from "@/content/legal";
import { PaginaLegalView } from "@/components/legal/PaginaLegalView";
import { alternativas } from "@/lib/seo";
import { ehIdioma } from "@/i18n/config";

/**
 * Como em privacidade/page.tsx, o texto mora em src/content/legal/ e o
 * desenho em PaginaLegalView.
 *
 * A seção sobre os números dos cases é a que mais pesa aqui. O site exibe
 * percentuais de resultado ao lado de logos de clientes, e publicidade que
 * apresenta resultado sem dizer que ele é específico daquele caso entra no
 * terreno do art. 37 do CDC. O texto faz essa ressalva no lugar certo, nos
 * três idiomas.
 */
type Props = { params: Promise<{ idioma: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { idioma } = await params;
  if (!ehIdioma(idioma)) notFound();

  const dados = legal(idioma).compliance;
  return {
    title: dados.metaTitulo,
    description: dados.metaDescricao,
    alternates: alternativas(idioma, "/compliance"),
  };
}

export default async function CompliancePage({ params }: Props) {
  const { idioma } = await params;
  if (!ehIdioma(idioma)) notFound();

  const { footer } = await getSiteContent(idioma);
  const conteudo = legal(idioma);

  return (
    <PaginaLegalView
      dados={conteudo.compliance}
      idioma={idioma}
      email={footer.contactEmail}
      controlador={footer.copyrightHolder}
      rotuloPrivacidade={conteudo.privacidade.titulo}
    />
  );
}
