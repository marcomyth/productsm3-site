import { getSiteContent } from "@/lib/content";
import { Hero } from "@/components/sections/Hero";
import { ProofBar } from "@/components/sections/ProofBar";
import { Clientes } from "@/components/sections/Clientes";
import { Services } from "@/components/sections/Services";
import { Cases } from "@/components/sections/Cases";
import { Method } from "@/components/sections/Method";
import { Differentiators } from "@/components/sections/Differentiators";
import { Formats } from "@/components/sections/Formats";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { UltimosPosts } from "@/components/sections/UltimosPosts";

/**
 * A ordem das seções é a argumentação da página: o problema (Hero), o tamanho
 * dele (ProofBar), com quem já trabalhamos (Clientes), o que fazemos
 * (Services), a prova do que entregamos (Cases), como fazemos (Method), por
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
  const { hero, proofBar, services, cases, method, differentiators, formats, faq, finalCta } =
    await getSiteContent();

  return (
    <>
      <Hero data={hero} />
      <ProofBar data={proofBar} />
      <Clientes data={cases} />
      <Services data={services} />
      <Cases data={cases} />
      <Method data={method} />
      {differentiators?.items.length ? <Differentiators data={differentiators} /> : null}
      {formats?.items.length ? <Formats data={formats} /> : null}
      {faq?.items.length ? <Faq data={faq} /> : null}
      <FinalCta data={finalCta} />
      {/* Nao renderiza enquanto nao houver post publicado. */}
      <UltimosPosts />
    </>
  );
}
