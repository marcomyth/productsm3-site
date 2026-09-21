import Image from "next/image";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/lib/types";

type Props = {
  data: CaseStudy[];
};

export function Cases({ data }: Props) {
  return (
    <section
      id="cases"
      className="w-full bg-surface px-grid-margin-mobile py-space-2xl md:px-grid-margin-tablet lg:px-grid-margin-desktop"
    >
      <div className="mb-space-xl flex flex-col justify-between border-b border-surface-variant pb-space-sm md:flex-row md:items-end">
        <div>
          <span className="font-label-index text-label-index uppercase tracking-[0.2em] text-secondary">
            04 / Evidências Práticas
          </span>
          <h2 className="mt-space-2xs font-serif text-display-lg-mobile font-normal tracking-tight text-primary md:text-display-lg">
            Cases de Sucesso
          </h2>
        </div>
        <span className="font-label-meta text-label-meta uppercase text-outline">
          Período de Análise: 2022–2026
        </span>
      </div>

      <div className="grid grid-cols-1 items-start gap-gutter-desktop sm:grid-cols-2">
        {data.map((item) => (
          <article
            key={item.reference}
            className="flex flex-col justify-between space-y-space-md rounded border border-surface-variant/80 bg-surface-container-lowest p-space-md shadow-sm"
          >
            <div className="space-y-space-sm">
              <div className="flex items-center">
                <span className="rounded bg-surface-container px-space-xs py-1 font-label-meta text-label-meta font-semibold uppercase tracking-[0.16em] text-on-surface">
                  {item.category}
                </span>
              </div>
              {/* Foto do próprio site do cliente ao fundo, bem apagada, com a
                  logo menor por cima. Diminuir a logo é o que devolve nitidez:
                  vários arquivos são pequenos — o do CIMVI tem 138px de largura
                  — e no tamanho anterior o navegador ampliava e borrava. Agora
                  ele reduz, que é a operação que preserva o traço. */}
              <div className="relative aspect-[16/10] overflow-hidden rounded border border-surface-variant bg-surface">
                {item.backgroundUrl && (
                  <>
                    <Image
                      src={item.backgroundUrl}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                    {/* Véu quase opaco: a foto fica como atmosfera, não como
                        assunto, e o contraste da logo não depende dela. */}
                    <div className="absolute inset-0 bg-surface/[0.8]" />
                  </>
                )}
                {item.imageUrl ? (
                  <div className="absolute inset-0 flex items-center justify-center p-space-md">
                    {/* Caixa fixa com `contain`: cada logo entra no próprio
                        formato e é limitada pela largura OU pela altura, o que
                        vier primeiro — assim uma marca vertical ocupa a altura
                        inteira em vez de encolher dentro de um quadro largo.
                        170px é o teto que segura a menor delas (CIMVI, 138px de
                        origem) sem ampliação visível; a altura de 112px existe
                        pro brasão vertical do Vale Europeu, e não afeta as
                        horizontais, que travam na largura antes. */}
                    <div className="relative h-28 w-[170px]">
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
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-outline">
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
              {(item.metricValue || item.description) && (
                <div className="pt-space-xs">
                  {item.metricValue && (
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span
                        className={cn(
                          "font-serif text-display-xl-mobile font-normal tracking-tight md:text-display-xl",
                          item.metricAccent ? "text-secondary" : "text-primary",
                        )}
                      >
                        {item.metricValue}
                      </span>
                      {item.metricLabel && (
                        <span className="font-sans text-headline-sm font-normal text-primary">
                          {item.metricLabel}
                        </span>
                      )}
                    </div>
                  )}
                  {item.description && (
                    <p className="mt-space-xs font-sans text-body-default leading-relaxed text-on-surface-variant">
                      {item.description}
                    </p>
                  )}
                </div>
              )}
            </div>
            {(item.platform || item.badge) && (
            <div className="flex items-center justify-between border-t border-surface-variant pt-space-sm">
              <span className="font-body-sm text-body-sm font-medium text-on-surface-variant">
                {item.platform}
              </span>
              {/* Sempre teal: os dois badges ocupam a mesma posição e fazem o
                  mesmo trabalho — variar a cor entre eles lia como inconsistência,
                  não como sinal. A distinção fica no número, que é teal quando o
                  case é destaque e preto quando não é. */}
              <span className="font-label-meta text-label-meta font-semibold uppercase tracking-wider text-secondary">
                {item.badge}
              </span>
            </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
