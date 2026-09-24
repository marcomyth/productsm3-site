import type { Metadata } from "next";
import { getSiteContent } from "@/lib/content";

/**
 * Como em privacidade/page.tsx, o texto mora no repositório e não no Supabase:
 * o que é jurídico precisa de histórico e revisão, não de edição direta.
 *
 * A seção sobre os números dos cases é a que mais pesa aqui. A home exibe
 * percentuais de resultado ao lado de logos de clientes, e publicidade que
 * apresenta resultado sem dizer que ele é específico daquele caso entra no
 * terreno do art. 37 do CDC. O texto abaixo faz essa ressalva no lugar certo.
 */
export const metadata: Metadata = {
  title: "Compliance Jurídico",
  description:
    "Identificação da empresa, natureza do conteúdo do site, origem e alcance dos números apresentados nos cases, uso de marcas de terceiros e legislação aplicável.",
};

const ATUALIZADO_EM = "23 de setembro de 2026";

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

/** Rodapé de seção com o dispositivo legal que sustenta o que foi dito. */
function Base({ children }: { children: React.ReactNode }) {
  return (
    <p className="border-l-2 border-secondary/40 pl-space-xs font-sans text-body-sm text-outline">
      {children}
    </p>
  );
}

export default async function CompliancePage() {
  const { footer } = await getSiteContent();
  const email = (
    <a
      href={`mailto:${footer.contactEmail}`}
      className="text-secondary underline-offset-4 hover:underline"
    >
      {footer.contactEmail}
    </a>
  );

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
        significa, de onde vêm os números apresentados e até onde eles podem ser lidos como promessa.
        Cada seção indica o dispositivo que a sustenta, para que o texto possa ser conferido.
      </p>

      <Secao titulo="1. Identificação">
        <p>
          Este site é mantido por {footer.copyrightHolder}. Canal de contato para qualquer assunto
          tratado nesta página: {email}.
        </p>
        <Base>
          Base legal: Lei 12.965/2014 (Marco Civil da Internet), art. 7º, que assegura ao usuário
          informações claras sobre quem presta o serviço, e Lei 8.078/1990 (Código de Defesa do
          Consumidor), art. 31, sobre o dever de informação correta e ostensiva.
        </Base>
      </Secao>

      <Secao titulo="2. Natureza do conteúdo">
        <p>
          As páginas deste site têm caráter informativo e publicitário. Descrições de serviço,
          prazos e formatos de trabalho apresentam o que fazemos, e o escopo de cada trabalho, com
          entregáveis, prazos e valores, é definido em contrato firmado entre as partes.
        </p>
        <p>
          Isso não significa que o que está escrito aqui possa ser desdito depois. A informação
          publicitária suficientemente precisa obriga quem a veicula e integra o contrato que vier a
          ser celebrado. Por isso o texto do site é escrito para ser cumprido, e não como peça de
          efeito.
        </p>
        <Base>
          Base legal: CDC, arts. 30 e 35, sobre vinculação da oferta, e Código Civil, art. 427,
          sobre a força obrigatória da proposta.
        </Base>
      </Secao>

      <Secao titulo="3. Os números apresentados nos cases">
        <p>
          Os percentuais exibidos ao lado de cada cliente são{" "}
          <strong className="font-semibold text-on-surface">
            resultados obtidos em trabalho nosso para aquela empresa
          </strong>
          . Cada card nomeia a métrica a que o número se refere, como crescimento de marca ou
          aumento de venda na loja online, e o cabeçalho da seção informa a janela de análise.
        </p>
        <p>
          Esses números são específicos de cada caso. Eles dependem do setor, do ponto de partida,
          da verba, do produto e do tempo de trabalho, e{" "}
          <strong className="font-semibold text-on-surface">
            não constituem promessa nem previsão de resultado equivalente para outro cliente
          </strong>
          . Nenhuma contratação é feita com garantia de reprodução desses índices.
        </p>
        <p>
          Os dados de origem de cada número ficam disponíveis a quem pedir pelo e-mail acima, dentro
          do que a confidencialidade acordada com cada cliente permitir. Se algum card passar a
          exibir dado de mercado em vez de resultado nosso, ele nomeará o setor a que o número se
          refere, e a fonte será igualmente informada.
        </p>
        <Base>
          Base legal: CDC, art. 37, §1º, que considera enganosa a publicidade capaz de induzir a erro
          sobre a natureza ou as características do serviço, e art. 36, parágrafo único, que obriga o
          anunciante a manter os dados fáticos e técnicos que dão sustentação à mensagem. No mesmo
          sentido, Código Brasileiro de Autorregulamentação Publicitária, art. 27, §1º e §2º, sobre
          veracidade e comprovação.
        </Base>
      </Secao>

      <Secao titulo="4. Marcas e nomes de terceiros">
        <p>
          Nomes e logotipos de empresas exibidos neste site pertencem aos respectivos titulares e
          são usados para identificar relações comerciais reais, sem sugerir que sejam de nossa
          titularidade e sem implicar endosso ou patrocínio além do vínculo existente.
        </p>
        <p>
          Se você é titular de alguma dessas marcas e quer que a menção seja ajustada ou removida,
          escreva para {email} e atendemos.
        </p>
        <Base>
          Base legal: Lei 9.279/1996 (Lei da Propriedade Industrial), art. 130, III, sobre o direito
          de zelar pela integridade e reputação da marca, e art. 132, IV, que ressalva o uso da marca
          por terceiros quando não houver conotação comercial indevida.
        </Base>
      </Secao>

      <Secao titulo="5. Propriedade intelectual do site">
        <p>
          O conteúdo editorial, a identidade visual, as fotografias produzidas para este site e o
          código que o executa são de titularidade de {footer.copyrightHolder}, salvo o material de
          terceiros identificado na seção anterior. Reprodução, distribuição ou adaptação dependem
          de autorização prévia e expressa.
        </p>
        <Base>
          Base legal: Lei 9.610/1998 (Lei de Direitos Autorais), art. 7º, sobre obras protegidas,
          e arts. 28 e 29, que condicionam a utilização à autorização prévia do titular. Para o
          código, Lei 9.609/1998, art. 2º.
        </Base>
      </Secao>

      <Secao titulo="6. Conteúdo do blog">
        <p>
          Os textos publicados no blog têm finalidade informativa e refletem a análise dos seus
          autores na data de publicação. Eles não constituem consultoria individualizada, e decisão
          de negócio tomada com base neles deve considerar o caso concreto.
        </p>
        <Base>
          Base legal: CDC, art. 31, sobre informação adequada, e Lei 9.610/1998, art. 24, sobre
          direitos morais do autor, incluindo o de ter o nome indicado na obra.
        </Base>
      </Secao>

      <Secao titulo="7. Legislação aplicável e foro">
        <p>
          Aplica-se a legislação brasileira a este site e ao seu conteúdo. Eventual controvérsia
          entre empresas será dirimida no foro da comarca da sede da controladora, salvo disposição
          contratual específica.
        </p>
        <p>
          Quando a relação for de consumo, essa eleição não prevalece: o consumidor pode propor ação
          no foro do seu próprio domicílio, e é nula a cláusula que dificulte a sua defesa.
        </p>
        <Base>
          Base legal: Código de Processo Civil, art. 63, sobre eleição de foro, e art. 63, §3º, que
          permite ao juiz reputá-la ineficaz quando abusiva. CDC, art. 101, I, sobre o foro do
          domicílio do consumidor, e art. 51, IV e XV, sobre nulidade de cláusulas abusivas.
        </Base>
      </Secao>

      <Secao titulo="8. Reclamações e tratamento de dados">
        <p>
          Reclamações sobre qualquer ponto desta página podem ser enviadas para {email}, e são
          respondidas pelo mesmo canal. O tratamento de dados pessoais está descrito em{" "}
          <a href="/privacidade" className="text-secondary underline-offset-4 hover:underline">
            Privacidade &amp; Governança
          </a>
          , com as bases legais de cada finalidade.
        </p>
      </Secao>
    </div>
  );
}
