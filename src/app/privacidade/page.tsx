import type { Metadata } from "next";
import { getSiteContent } from "@/lib/content";

/**
 * Texto jurídico fica no repositório, não no Supabase como o resto do
 * conteúdo: mudança em política de privacidade precisa de histórico, revisão
 * e data — coisas que um campo editável direto no banco não dá.
 *
 * O que está escrito aqui descreve a prática real do site, auditada no código:
 * nenhum script de medição, nenhum cookie, nenhum formulário. Se isso mudar,
 * este arquivo muda junto, antes de a mudança ir pro ar.
 */
export const metadata: Metadata = {
  title: "Privacidade & Governança",
  description:
    "O que este site faz com dados de quem o visita: hoje, nada. Controlador, direitos do titular pela LGPD e canal para exercê-los.",
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

export default async function PrivacidadePage() {
  const { footer } = await getSiteContent();

  return (
    <div className="mx-auto max-w-[40rem] px-grid-margin-mobile py-space-2xl md:px-grid-margin-tablet lg:px-grid-margin-desktop">
      <span className="font-label-index text-label-index uppercase tracking-[0.2em] text-secondary">
        Governança de Dados
      </span>
      <h1 className="mt-space-2xs font-serif text-display-lg-mobile font-normal tracking-tight text-primary md:text-display-lg">
        Privacidade &amp; Governança
      </h1>
      <p className="mt-space-2xs font-label-meta text-label-meta uppercase tracking-wider text-outline">
        Última atualização: {ATUALIZADO_EM}
      </p>

      <p className="mt-space-md font-sans text-body-lead leading-relaxed text-on-surface-variant">
        Esta página descreve o que este site faz com os dados de quem o visita. Hoje a resposta é
        curta: ele não coleta nada.
      </p>

      <Secao titulo="Quem é o controlador">
        <p>
          {footer.copyrightHolder}. Para qualquer assunto relacionado a dados pessoais, escreva para{" "}
          <a
            href={`mailto:${footer.contactEmail}`}
            className="text-secondary underline-offset-4 hover:underline"
          >
            {footer.contactEmail}
          </a>
          .
        </p>
      </Secao>

      <Secao titulo="O que este site coleta">
        <p>
          Nada que identifique você. Não há formulário de cadastro, não há cookie de rastreamento e
          não há ferramenta de medição de audiência — nem Google Analytics, nem Meta Pixel, nem
          Hotjar, nem equivalente. Também não usamos cookies para publicidade ou para traçar perfil
          de navegação.
        </p>
      </Secao>

      <Secao titulo="O que acontece quando você clica em um botão de contato">
        <p>
          Os botões abrem o seu próprio programa de e-mail, com destinatário e assunto já
          preenchidos. Nada é enviado até que você mesmo envie, e a mensagem trafega pelo seu
          provedor de e-mail — não por este site. O que você nos escrever fica na nossa caixa de
          entrada e é usado apenas para responder você.
        </p>
      </Secao>

      <Secao titulo="Registros do servidor">
        <p>
          Como qualquer site na internet, o servidor que hospeda estas páginas registra
          automaticamente dados técnicos de cada acesso: endereço IP, data e hora, navegador e
          página solicitada. Esses registros existem por segurança e estabilidade, ficam sob guarda
          do provedor de hospedagem e não são usados para identificar visitantes nem cruzados com
          qualquer outra base.
        </p>
      </Secao>

      <Secao titulo="Seus direitos">
        <p>
          A Lei Geral de Proteção de Dados (Lei 13.709/2018) garante a você confirmação de
          tratamento, acesso, correção, anonimização, portabilidade e eliminação dos seus dados,
          além da revogação do consentimento a qualquer momento.
        </p>
        <p>
          Para exercer qualquer um desses direitos, basta escrever para{" "}
          <a
            href={`mailto:${footer.contactEmail}`}
            className="text-secondary underline-offset-4 hover:underline"
          >
            {footer.contactEmail}
          </a>
          . Respondemos em até quinze dias.
        </p>
      </Secao>

      <Secao titulo="Quando isso mudar">
        <p>
          O texto acima descreve a situação de hoje. Se passarmos a usar ferramentas de medição,
          atendimento por WhatsApp ou formulários no site, atualizamos esta página antes de a
          mudança entrar no ar, e a data no topo indica a revisão.
        </p>
      </Secao>
    </div>
  );
}
