import { getSiteContent } from "@/lib/content";
import { Hero } from "@/components/sections/Hero";
import { FaixaCorrida } from "@/components/layout/FaixaCorrida";
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
export default async function HomePage() {
  const { hero, proofBar, services, cases, method, differentiators, formats, faq, finalCta, footer } =
    await getSiteContent();
  // `cases` continua sendo lido: a grade de logos vive dele. O que saiu da
  // home foi a galeria com os sete cards, que agora tem pagina propria.

  return (
    <>
      <Hero data={hero} />
      {/* Faixa e linha de servicos vem coladas no hero, como na referencia:
          sao a transicao entre a promessa e o conteudo. */}
      <FaixaCorrida frases={footer.tagline} />
      <LinhaServicos data={services} />
      <Declaracao />
      <ProofBar data={proofBar} />
      <Clientes data={cases} comLink id="cases" />
      <Services data={services} />
      <Method data={method} />
      {differentiators?.items.length ? <Differentiators data={differentiators} /> : null}
      {formats?.items.length ? <Formats data={formats} /> : null}
      {faq?.items.length ? <Faq data={faq} /> : null}
      <FinalCta data={finalCta} />
      <UltimosPosts />
    </>
  );
}
