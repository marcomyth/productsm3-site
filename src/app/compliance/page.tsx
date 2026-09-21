import type { Metadata } from "next";
import { getSiteContent } from "@/lib/content";

/**
 * Como em privacidade/page.tsx, o texto mora no repositório e não no Supabase:
 * o que é jurídico precisa de histórico e revisão, não de edição direta.
 *
 * A seção sobre os números dos cases existe porque a seção "Cases de Sucesso"
 * mostra percentuais de mercado ao lado de logos de clientes. O card já diz
 * isso em três lugares (rótulo, fonte e selo); aqui fica por escrito.
 */
export const metadata: Metadata = {
  title: "Compliance Jurídico",
  description:
    "Identificação da empresa, natureza do conteúdo do site, origem dos números apresentados nos cases e uso de marcas de terceiros.",
};

const ATUALIZADO_EM = "21 de setembro de 2026";

function Secao({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section className="mt-space-xl">
      <h2 className="font-sans text-headline-sm font-semibold text-primary">{titulo}</h2>
      <div className="mt-space-xs space-y-space-sm font-sans text-body-default leading-relaxed text-on-surface-variant">
        {children}
      </div>
    </section>
  );
}

export default async function CompliancePage() {
  const { footer } = await getSiteContent();

  return (
    <div className="mx-auto max-w-[40rem] px-grid-margin-mobile py-space-2xl md:px-grid-margin-tablet lg:px-grid-margin-desktop">
      <span className="font-label-index text-label-index uppercase tracking-[0.2em] text-secondary">
        Informações Legais
      </span>
      <h1 className="mt-space-2xs font-serif text-display-lg-mobile font-normal tracking-tight text-primary md:text-display-lg">
        Compliance Jurídico
      </h1>
      <p className="mt-space-2xs font-label-meta text-label-meta uppercase tracking-wider text-outline">
        Última atualização: {ATUALIZADO_EM}
      </p>

      <p className="mt-space-md font-sans text-body-lead leading-relaxed text-on-surface-variant">
        Esta página reúne as informações legais deste site: quem responde por ele, o que o conteúdo
        significa e de onde vêm os números apresentados.
      </p>

      <Secao titulo="Identificação">
        <p>
          Este site é mantido por {footer.copyrightHolder}. Contato:{" "}
          <a
            href={`mailto:${footer.contactEmail}`}
            className="text-secondary underline-offset-4 hover:underline"
          >
            {footer.contactEmail}
          </a>
          .
        </p>
      </Secao>

      <Secao titulo="Natureza do conteúdo">
        <p>
          As páginas deste site têm caráter informativo. Descrições de serviço, prazos, formatos de
          trabalho e o diagnóstico oferecido não constituem proposta comercial vinculante: cada
          trabalho é definido em contrato próprio, firmado entre as partes.
        </p>
      </Secao>

      <Secao titulo="Os números apresentados nos cases">
        <p>
          Na seção de cases, os percentuais exibidos ao lado de cada cliente são{" "}
          <strong className="font-semibold text-on-surface">dados de mercado</strong> do setor em
          que aquela empresa atua — não resultados obtidos por nós para ela. A fonte de cada número
          aparece no próprio card, junto com o selo &ldquo;Dado de mercado&rdquo;.
        </p>
        <p>
          Quando um resultado de trabalho nosso for publicado, ele virá identificado como tal, com o
          período e a métrica a que se refere.
        </p>
      </Secao>

      <Secao titulo="Marcas de terceiros">
        <p>
          Nomes e logotipos de empresas exibidos neste site pertencem aos respectivos titulares e
          são usados apenas para identificar relações comerciais. Sua presença aqui não implica
          endosso, patrocínio ou qualquer vínculo além do comercial existente.
        </p>
      </Secao>

      <Secao titulo="Propriedade intelectual">
        <p>
          O conteúdo editorial, a identidade visual e o código deste site são de titularidade de{" "}
          {footer.copyrightHolder}, salvo o material de terceiros identificado acima. Reprodução
          depende de autorização prévia.
        </p>
      </Secao>

      <Secao titulo="Limitação de responsabilidade">
        <p>
          Os dados de mercado citados vêm de fontes públicas, identificadas caso a caso, e refletem
          o que essas fontes publicaram na data da última atualização desta página. Não respondemos
          por decisões tomadas com base neles sem análise do caso concreto.
        </p>
      </Secao>

      <Secao titulo="Legislação aplicável">
        <p>
          Aplica-se a legislação brasileira a este site e ao seu conteúdo. O tratamento de dados
          pessoais está descrito em{" "}
          <a href="/privacidade" className="text-secondary underline-offset-4 hover:underline">
            Privacidade &amp; Governança
          </a>
          .
        </p>
      </Secao>
    </div>
  );
}
