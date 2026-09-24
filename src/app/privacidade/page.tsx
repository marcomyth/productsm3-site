import type { Metadata } from "next";
import { getSiteContent } from "@/lib/content";

/**
 * Texto jurídico fica no repositório, não no Supabase como o resto do
 * conteúdo: mudança em política de privacidade precisa de histórico, revisão
 * e data, coisas que um campo editável direto no banco não dá.
 *
 * Cada afirmação aqui descreve a prática real do site, auditada no código:
 * nenhum script de medição, nenhum cookie, nenhum formulário. E cada seção
 * cita o dispositivo que a sustenta, para o texto poder ser conferido em vez
 * de ter que ser acreditado. Isso não substitui revisão de advogado.
 */
export const metadata: Metadata = {
  title: "Privacidade & Governança",
  description:
    "Como este site trata dados pessoais: controlador, bases legais, registros de acesso, direitos do titular pela LGPD e canal para exercê-los.",
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

export default async function PrivacidadePage() {
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
        Governança de Dados
      </span>
      <h1 className="mt-space-2xs font-serif text-display-lg-mobile font-normal tracking-tight text-primary md:text-display-lg">
        Privacidade &amp; Governança
      </h1>
      <p className="mt-space-2xs font-label-meta text-label-meta uppercase tracking-wider text-outline">
        Última atualização: {ATUALIZADO_EM}
      </p>

      <p className="mt-space-md font-sans text-body-lead leading-relaxed text-on-surface-variant">
        Esta página descreve o que este site faz com dados pessoais de quem o visita, sob quais
        fundamentos legais, e como você exerce os seus direitos. Hoje a resposta curta é que o site
        não coleta nada por conta própria, e o texto abaixo explica exatamente o que isso significa
        e o que continua existindo mesmo assim.
      </p>

      <Secao titulo="1. Quem é o controlador">
        <p>
          {footer.copyrightHolder} é a controladora dos dados pessoais tratados em razão deste site,
          por ser quem decide sobre a finalidade e os meios desse tratamento. Contato para qualquer
          assunto de privacidade: {email}.
        </p>
        <Base>
          Base legal: Lei 13.709/2018 (LGPD), art. 5º, VI, que define controlador como a pessoa a
          quem competem as decisões sobre o tratamento.
        </Base>
      </Secao>

      <Secao titulo="2. O que este site coleta por conta própria">
        <p>
          Nada que identifique você. Não há formulário de cadastro, não há cookie de rastreamento e
          não há ferramenta de medição de audiência instalada, nem Google Analytics, nem Meta Pixel,
          nem Hotjar, nem equivalente. Também não há cookie de publicidade nem construção de perfil
          de navegação.
        </p>
        <p>
          Essa ausência é uma decisão, não um descuido: a LGPD exige que o tratamento se limite ao
          mínimo necessário para a finalidade pretendida, e a finalidade deste site é apresentar
          serviços, não observar quem os lê.
        </p>
        <Base>
          Base legal: LGPD, art. 6º, III (necessidade) e art. 6º, I (finalidade específica e
          informada).
        </Base>
      </Secao>

      <Secao titulo="3. Registros de acesso ao site">
        <p>
          Como qualquer aplicação na internet, o servidor que entrega estas páginas registra
          automaticamente dados técnicos de cada acesso: endereço IP, data e hora com fuso, e a
          página solicitada. Esses registros não são usados para identificar visitantes, não são
          cruzados com outra base e não alimentam nenhuma análise comercial.
        </p>
        <p>
          A guarda desses registros não é opcional para nós. O Marco Civil da Internet obriga o
          provedor de aplicação constituído como pessoa jurídica com fins econômicos a manter os
          registros de acesso à aplicação por seis meses, em ambiente controlado e de segurança, e
          proíbe que eles sejam fornecidos a terceiros fora das hipóteses legais.
        </p>
        <Base>
          Base legal: Lei 12.965/2014 (Marco Civil da Internet), art. 15, caput e §2º, e Decreto
          8.771/2016, arts. 13 a 15, sobre padrões de segurança na guarda. Na LGPD, o fundamento é o
          art. 7º, II, cumprimento de obrigação legal pelo controlador.
        </Base>
      </Secao>

      <Secao titulo="4. O que acontece quando você usa os botões de contato">
        <p>
          Os botões de diagnóstico levam a uma conversa no WhatsApp, com a mensagem já escrita. Nada
          é enviado até que você mesmo envie, e nenhum dado seu passa por este site no caminho: o
          link apenas abre o aplicativo, sem informar ao WhatsApp de que página você veio.
        </p>
        <p>
          A partir daí a conversa acontece dentro do WhatsApp, serviço do grupo Meta, que é
          controlador independente do tratamento feito na própria plataforma e tem política de
          privacidade própria. Como a Meta opera servidores fora do Brasil, essa etapa envolve
          transferência internacional de dados, submetida ao capítulo próprio da LGPD. O que você
          nos escrever é usado apenas para responder você e para avaliar um eventual contrato.
        </p>
        <p>
          O endereço de e-mail no rodapé funciona do mesmo jeito: abre o seu próprio programa de
          e-mail, com o destinatário preenchido, e a mensagem trafega pelo seu provedor.
        </p>
        <Base>
          Base legal: LGPD, art. 7º, V, quando o contato se destina a medidas preliminares de
          contrato a seu pedido, e art. 7º, IX, legítimo interesse, quando se trata apenas de
          responder a uma mensagem sua. Transferência internacional: arts. 33 a 36.
        </Base>
      </Secao>

      <Secao titulo="5. Quem mais toca nesses dados">
        <p>
          O conteúdo do site e os registros técnicos ficam com os prestadores de infraestrutura que
          hospedam a aplicação e a sua base de conteúdo. Eles atuam como operadores, ou seja, tratam
          os dados por nossa conta e seguindo as nossas instruções, sem finalidade própria. Não
          vendemos, cedemos nem compartilhamos dados pessoais com terceiros para fins comerciais.
        </p>
        <Base>
          Base legal: LGPD, art. 5º, VII (operador) e art. 39, que vincula o operador às instruções
          do controlador.
        </Base>
      </Secao>

      <Secao titulo="6. Por quanto tempo guardamos">
        <p>
          Os registros de acesso à aplicação são mantidos pelo prazo legal de seis meses e depois
          eliminados, salvo ordem judicial em contrário. As mensagens que você nos envia ficam
          enquanto durar o atendimento e o prazo em que precisamos delas para defender um direito, e
          são eliminadas depois disso.
        </p>
        <Base>
          Base legal: Marco Civil, art. 15, caput, e LGPD, art. 15, I e IV, e art. 16, que admite a
          conservação para cumprimento de obrigação legal e para exercício regular de direitos.
        </Base>
      </Secao>

      <Secao titulo="7. Segurança e incidentes">
        <p>
          Adotamos medidas técnicas e administrativas para proteger os dados de acesso não
          autorizado e de situações acidentais ou ilícitas. O tráfego do site é cifrado, e as rotas
          internas que recebem conteúdo editorial exigem autenticação por token, com comparação em
          tempo constante para não vazar informação pelo tempo de resposta.
        </p>
        <p>
          Se ocorrer incidente de segurança capaz de acarretar risco ou dano relevante a você,
          comunicaremos a Autoridade Nacional de Proteção de Dados e os titulares afetados em prazo
          razoável.
        </p>
        <Base>
          Base legal: LGPD, arts. 46 a 49 (segurança e boas práticas) e art. 48 (comunicação de
          incidente).
        </Base>
      </Secao>

      <Secao titulo="8. Seus direitos">
        <p>
          A qualquer momento, e sem custo, você pode nos pedir: confirmação da existência de
          tratamento; acesso aos dados; correção de dados incompletos, inexatos ou desatualizados;
          anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em
          desconformidade com a lei; portabilidade a outro fornecedor; eliminação dos dados tratados
          com o seu consentimento; informação sobre com quem compartilhamos; informação sobre a
          possibilidade de não consentir e as consequências disso; e revogação do consentimento.
        </p>
        <p>
          Para exercer qualquer um deles, escreva para {email}. Respondemos de imediato, em formato
          simplificado, ou de forma completa em até quinze dias contados do seu pedido. Se você se
          opuser a um tratamento fundado em legítimo interesse, basta dizer, e reavaliamos.
        </p>
        <p>
          Você também pode peticionar diretamente à Autoridade Nacional de Proteção de Dados contra
          o controlador, se entender que algum direito seu não foi atendido.
        </p>
        <Base>
          Base legal: LGPD, art. 18, I a IX, art. 19, I e II (prazos de resposta), art. 18, §1º
          (petição à ANPD) e art. 18, §2º (oposição a tratamento dispensado de consentimento).
        </Base>
      </Secao>

      <Secao titulo="9. Canal do encarregado">
        <p>
          O endereço {email} é o canal oficial para comunicação sobre proteção de dados, e é por ele
          que a ANPD e os titulares devem nos procurar. Operamos em escala compatível com a de
          agente de tratamento de pequeno porte, condição em que a indicação formal de encarregado é
          facultativa, mas a existência deste canal não é.
        </p>
        <Base>
          Base legal: LGPD, art. 41, e Resolução CD/ANPD nº 2/2022, art. 11, que dispensa agentes de
          pequeno porte de indicar encarregado desde que mantenham canal de comunicação.
        </Base>
      </Secao>

      <Secao titulo="10. Atuação fora do Brasil">
        <p>
          Se o tratamento vier a ocorrer no contexto de atividades de estabelecimento nosso na União
          Europeia, ou a oferta de serviços for dirigida a pessoas que ali estejam, aplica-se também
          o Regulamento Geral de Proteção de Dados europeu, cumulativamente com a LGPD. Nesse caso,
          esta página será atualizada para descrever os direitos adicionais correspondentes.
        </p>
        <Base>
          Base legal: Regulamento (UE) 2016/679 (RGPD), art. 3º, 1 e 2, sobre âmbito territorial, e
          LGPD, art. 3º, I e II.
        </Base>
      </Secao>

      <Secao titulo="11. Quando isso mudar">
        <p>
          O texto acima descreve a situação de hoje. Se passarmos a usar ferramentas de medição,
          cookies não essenciais ou formulários no site, atualizamos esta página antes de a mudança
          entrar no ar, com a data no topo indicando a revisão, porque informação prévia e adequada
          sobre o tratamento é direito do titular e não cortesia.
        </p>
        <Base>
          Base legal: LGPD, art. 6º, VI (transparência) e art. 9º, que garante acesso facilitado às
          informações sobre o tratamento.
        </Base>
      </Secao>
    </div>
  );
}
