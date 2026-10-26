import { notFound } from "next/navigation";
import { getSiteContent } from "@/lib/content";
import { ehIdioma } from "@/i18n/config";
import { Hero } from "@/components/sections/Hero";
import { FaixaCorrida } from "@/components/layout/FaixaCorrida";
import { FaixaFios } from "@/components/layout/FaixaFios";
import { LinhaServicos } from "@/components/sections/LinhaServicos";
import { Declaracao } from "@/components/sections/Declaracao";
import { ProofBar } from "@/components/sections/ProofBar";
import { Clientes } from "@/components/sections/Clientes";
import { Services } from "@/components/sections/Services";
import { Method } from "@/components/sections/Method";
import { Differentiators } from "@/components/sections/Differentiators";
import { Formats } from "@/components/sections/Formats";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { UltimosPosts } from "@/components/sections/UltimosPosts";

/**
 * A ordem das seções é a argumentação da página: o problema (Hero), o tamanho
 * dele (ProofBar), com quem já trabalhamos (Clientes), o que fazemos
 * (Services), a prova do que entregamos (Clientes), como fazemos (Method), por
 * que nós (Differentiators), como contratar (Formats), o que ainda pesa na
 * decisão (Faq) e o próximo passo (FinalCta).
 *
 * Clientes entra logo no começo, como na home da referência: a grade de logos
 * faz num relance o trabalho que os cases fazem em dois minutos de leitura, e
 * as logos já existiam, só que escondidas uma a uma dentro dos cards.
 *
 * A numeração "02 / 03 / 04" que existia nos rótulos saiu: a referência não
 * numera seção nenhuma, e o número era invenção nossa. No lugar dele, cada
 * seção abre com a linha serifada em caixa baixa que a nomeia (TituloSecao).
 */
export default async function HomePage({ params }: { params: Promise<{ idioma: string }> }) {
  const { idioma } = await params;
  if (!ehIdioma(idioma)) notFound();

  const { hero, proofBar, services, cases, method, differentiators, formats, faq, finalCta, footer } =
    await getSiteContent(idioma);
  // `cases` continua sendo lido: a grade de logos vive dele. O que saiu da
  // home foi a galeria com os sete cards, que agora tem pagina propria.

  return (
    <>
      <Hero data={hero} />
      {/* A faixa corrida continua colada no hero, como na referencia: e a
          transicao entre a promessa e o conteudo. */}
      <FaixaCorrida frases={footer.tagline} />
      {/* Os numeros vem antes de qualquer argumento. O hero termina com tres
          perguntas de qualificacao, e o que responde pergunta assim e volume
          declarado, nao mais texto. Estavam em quarto lugar, depois da linha
          de servicos e da declaracao, onde so chegava quem ja tinha decidido
          continuar lendo. */}
      <ProofBar data={proofBar} />
      <LinhaServicos data={services} idioma={idioma} />
      <Declaracao idioma={idioma} />
      <Clientes data={cases} idioma={idioma} comLink id="cases" />
      <Services data={services} idioma={idioma} />
      <Method data={method} idioma={idioma} />
      {differentiators?.items.length ? <Differentiators data={differentiators} /> : null}
      {formats?.items.length ? <Formats data={formats} /> : null}
      {faq?.items.length ? <Faq data={faq} /> : null}
      <FinalCta data={finalCta} />
      {/* Mesma posicao da referencia: respiro animado entre o fecho e os
          artigos, devolvendo a assinatura do hero no meio da pagina. */}
      <FaixaFios />
      <UltimosPosts idioma={idioma} />
    </>
  );
}
