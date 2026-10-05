import Image from "next/image";
import { ImageOff } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { TituloSecao } from "@/components/layout/TituloSecao";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/lib/types";

type Props = {
  data: CaseStudy[];
};

export function Cases({ data }: Props) {
  return (
    <Section id="cases" tom="claro">
      <TituloSecao
        destaque="evidências práticas"
        afirmacao="Cases de Sucesso"
        descricao="Período de análise: 2022 a 2026."
        className="mb-space-xl"
      />

      {/* Sem `items-start`: o padrão do grid é esticar, e é isso que faz os
          dois cards de uma mesma linha terminarem na mesma altura, ainda
          que uma descrição seja mais longa que a outra. É a borda de baixo
          alinhada que dá a sensação de organizado. */}
      <div className="grid grid-cols-1 gap-gutter-desktop sm:grid-cols-2">
        {data.map((item) => (
          <article
            key={item.reference}
            className="flex flex-col justify-between space-y-space-md rounded border border-painel-regua bg-painel p-space-md shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <div className="space-y-space-sm">
              <div className="flex items-center">
                <span className="rounded-full bg-surface-container px-space-xs py-1 font-label-meta text-label-meta font-semibold uppercase tracking-[0.16em] t-texto">
                  {item.category}
                </span>
              </div>
              {/* Foto do próprio site do cliente ao fundo, bem apagada, com a
                  logo menor por cima. Diminuir a logo é o que devolve nitidez:
                  vários arquivos são pequenos — o do CIMVI tem 138px de largura
                  — e no tamanho anterior o navegador ampliava e borrava. Agora
                  ele reduz, que é a operação que preserva o traço. */}
              <div className="relative aspect-[16/10] overflow-hidden rounded border border-regua bg-surface">
                {item.imageUrl ? (
                  <div className="absolute inset-0 flex items-center justify-center p-space-md">
                    {/* Caixa fixa com `contain`: cada logo entra no próprio
                        formato e é limitada pela largura OU pela altura, o que
                        vier primeiro — assim uma marca vertical ocupa a altura
                        inteira em vez de encolher dentro de um quadro largo.
                        190px é o teto: seis das sete logos têm arquivo maior que
                        isso e só reduzem; a do CIMVI, de 138px, é a única que
                        amplia, e ganhar tamanho é o que torna o subtítulo dela
                        legível; a altura de 144px existe pro brasão vertical do
                        Vale Europeu, e não afeta as horizontais, que travam na
                        largura antes. */}
                    <div className="relative h-36 w-[190px]">
                      <Image
                        src={item.imageUrl}
                        alt={item.imageAlt ?? ""}
                        fill
                        sizes="170px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 t-apagado">
                    <ImageOff className="h-6 w-6" />
                    <span className="font-label-meta text-label-meta uppercase tracking-wider">
                      Imagem pendente
                    </span>
                  </div>
                )}
              </div>
              {/* Um cliente pode entrar só com a logo. Enquanto o case não
                  fecha, o card não inventa um "+000%" nem uma descrição
                  vazia — simplesmente não mostra o bloco. */}
              {(item.metricValue || item.extraMetrics?.length || item.description) && (
                <div className="pt-space-xs">
                  {item.metricValue && (
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span
                        className={cn(
                          "font-sans text-display-xl-mobile font-extrabold tracking-[-0.01em] md:text-display-xl",
                          item.metricAccent ? "t-acento" : "t-forte",
                        )}
                      >
                        {item.metricValue}
                      </span>
                      {item.metricLabel && (
                        <span className="font-sans text-headline-sm font-normal t-forte">
                          {item.metricLabel}
                        </span>
                      )}
                    </div>
                  )}
                  {/* Mesma estrutura do número principal, um degrau abaixo na
                      escala. Antes era sans em corpo de texto ao lado de um
                      serifado gigante: a troca de família somada ao salto de
                      tamanho fazia os dois lerem como coisas diferentes, e não
                      como resultado principal e resultado de apoio. */}
                  {item.extraMetrics && item.extraMetrics.length > 0 && (
                    <ul className="mt-space-2xs space-y-space-2xs">
                      {item.extraMetrics.map((metric) => (
                        <li
                          key={metric.label}
                          className="flex flex-wrap items-baseline gap-x-3 gap-y-1"
                        >
                          <span className="font-sans text-headline-md-mobile font-bold tracking-[-0.01em] t-acento md:text-headline-md">
                            {metric.value}
                          </span>
                          <span className="font-sans text-body-lead font-normal t-fraco">
                            {metric.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.description && (
                    <p className="mt-space-xs font-sans text-body-default leading-relaxed t-fraco">
                      {item.description}
                    </p>
                  )}
                </div>
              )}
            </div>
            {(item.platform || item.badge) && (
              <div className="flex items-center justify-between border-t border-regua pt-space-sm">
                {/* Condicional, e não um span vazio: com `justify-between`, um
                    único filho encosta à esquerda. Assim o selo sozinho alinha
                    com o resto do card em vez de flutuar na margem direita, e
                    volta pra direita sozinho quando a frase do cliente chegar. */}
                {item.platform && (
                  <span className="font-body-sm text-body-sm font-medium t-fraco">
                    {item.platform}
                  </span>
                )}
                {/* Sempre teal: os dois badges ocupam a mesma posição e fazem o
                    mesmo trabalho — variar a cor entre eles lia como
                    inconsistência, não como sinal. A distinção fica no número,
                    que é teal quando o case é destaque e preto quando não é. */}
                <span className="font-label-meta text-label-meta font-semibold uppercase tracking-wider t-acento">
                  {item.badge}
                </span>
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
