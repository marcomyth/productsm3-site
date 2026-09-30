import { getSiteContent } from "@/lib/content";
import { Hero } from "@/components/sections/Hero";
import { ProofBar } from "@/components/sections/ProofBar";
import { Services } from "@/components/sections/Services";
import { Cases } from "@/components/sections/Cases";
import { Method } from "@/components/sections/Method";
import { Differentiators } from "@/components/sections/Differentiators";
import { Formats } from "@/components/sections/Formats";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

/**
 * A ordem das seções é a argumentação da página, e é ela que muda aqui:
 * o problema (Hero), o tamanho dele (ProofBar), o que fazemos (Services),
 * a prova de que já fizemos (Cases), como fazemos (Method), por que nós
 * (Differentiators), como contratar (Formats), o que ainda pesa na decisão
 * (Faq) e o próximo passo (FinalCta).
 *
 * Cases passou para antes de Method: a credibilidade vem antes da
 * explicação, porque quem ainda não acredita no resultado não lê o método.
 */
export default async function HomePage() {
  const { hero, proofBar, services, cases, method, differentiators, formats, faq, finalCta } =
    await getSiteContent();

  /**
   * O número de cada seção vem da ordem em que ela aparece, e não de um valor
   * escrito no conteúdo. Differentiators, Formats e Faq são opcionais: com
   * numeração fixa, a contagem abriria buraco ("02, 03, 04, 08") enquanto
   * elas não tivessem texto. Começa em 01 no Hero, que não exibe número.
   */
  let secao = 1;
  const proximo = () => String(++secao).padStart(2, "0");

  return (
    <>
      <Hero data={hero} />
      <ProofBar data={proofBar} />
      <Services data={services} index={proximo()} />
      <Cases data={cases} index={proximo()} />
      <Method data={method} index={proximo()} />
      {differentiators?.items.length ? (
        <Differentiators data={differentiators} index={proximo()} />
      ) : null}
      {formats?.items.length ? <Formats data={formats} index={proximo()} /> : null}
      {faq?.items.length ? <Faq data={faq} index={proximo()} /> : null}
      <FinalCta data={finalCta} index={proximo()} />
    </>
  );
}
