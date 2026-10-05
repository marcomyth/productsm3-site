import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";

/**
 * Declaração de abertura: a serifada grande em caixa baixa à esquerda e os
 * parágrafos ao lado. É o bloco com que a referência abre o conteúdo, depois
 * da linha de serviços, e o último que faltava espelhar.
 *
 * O texto é novo, e é a única copy que escrevi para este site. Cada parágrafo
 * só reformula algo que a M3 já afirma em outro lugar, para não inventar
 * promessa nova:
 *
 * - o primeiro vem da fase 01 do método ("isolar o que é receita assistida e
 *   o que é pura canibalização");
 * - o segundo, da fase 03 ("orçamento indexado à margem de contribuição
 *   líquida");
 * - o terceiro, da fase 04 ("reuniões semanais de P&L") somada à diretriz
 *   operacional do rodapé ("transparência total da gestão de fontes de
 *   tráfego").
 *
 * Nenhum número aparece aqui: os números têm lugar próprio na faixa logo
 * abaixo e nos cases, e repeti-los aqui tiraria peso dos dois.
 */
export function Declaracao() {
  return (
    <Section tom="claro">
      <div className="grid grid-cols-1 gap-x-gutter-desktop gap-y-space-lg lg:grid-cols-12">
        <h2 className="font-serif text-display-xl-mobile font-normal leading-[1.1] t-forte md:text-display-xl lg:col-span-5 lg:pr-space-md">
          como uma operação de tráfego para de desperdiçar
        </h2>

        <div className="space-y-space-md lg:col-span-7">
          <p className="font-sans text-body-default leading-relaxed t-fraco">
            O desperdício quase nunca aparece no relatório de mídia. Ele aparece na margem, quando a
            receita que o painel comemora já estava acontecendo sem o anúncio. Por isso o trabalho
            começa isolando o que é receita assistida e o que é pura canibalização.
          </p>
          <p className="font-sans text-body-default leading-relaxed t-fraco">
            Só depois disso a verba sobe, e ela sobe indexada à margem de contribuição líquida, não
            ao faturamento. É o que separa crescer de simplesmente gastar mais.
          </p>
          <p className="font-sans text-body-default leading-relaxed t-fraco">
            A operação fica aberta enquanto roda. Há reunião semanal de P&amp;L com o seu time, e
            cada sinal enviado ao algoritmo é documentado. Transparência total da gestão de fontes
            de tráfego é uma diretriz da casa, e é também o que torna o resultado auditável por
            você.
          </p>

          {/* O bloco terminava no ponto final do terceiro parágrafo e deixava
              o leitor sem próximo passo. Os dois caminhos daqui são ver como o
              trabalho é feito e ver o que ele produziu, e são exatamente as
              duas seções seguintes. */}
          <div className="flex flex-wrap items-center gap-x-space-lg gap-y-space-xs pt-space-xs">
            <Link
              href="/#servicos"
              className="group inline-flex items-center gap-2 font-label-meta text-label-meta font-semibold uppercase tracking-widest t-acento transition-colors hover:t-forte"
            >
              Como trabalhamos
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/cases"
              className="group inline-flex items-center gap-2 font-label-meta text-label-meta font-semibold uppercase tracking-widest t-acento transition-colors hover:t-forte"
            >
              O que entregamos
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
