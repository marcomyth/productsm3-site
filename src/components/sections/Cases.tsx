import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { TituloSecao } from "@/components/layout/TituloSecao";
import type { CaseStudy } from "@/lib/types";

type Props = {
  data: CaseStudy[];
};

/**
 * Uma faixa de placar: um caso ocupando a largura inteira da tela.
 *
 * O número é o assunto. Ele sai de 2.5rem para 9rem — não é ajuste de escala,
 * é inversão de hierarquia: antes o maior elemento da página era uma caixa
 * cinza com a logo dentro, que ocupava 250px de altura por cartão e não dizia
 * nada; o `+120%` da Musa, que é o melhor resultado da casa, vinha no mesmo
 * corpo de um título de seção qualquer.
 *
 * A logo entra numa placa branca. As sete são artes escuras sobre fundo
 * transparente — nas faixas escuras elas sumiriam, e inverter a cor por filtro
 * destruiria o vermelho da Fogatti e o brasão colorido do Vale Europeu. A placa
 * resolve sem tocar no arquivo, e de quebra dá a mesma moldura para todas, o
 * que faz sete marcas de proporções diferentes lerem como um conjunto.
 */
function FaixaCase({ item, escura }: { item: CaseStudy; escura: boolean }) {
  return (
    <Section tom={escura ? "escuro" : "claro"} respiro="grande">
      <div className="grid grid-cols-1 gap-x-gutter-desktop gap-y-space-lg lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          {item.metricValue && (
            <p className="font-sans text-[4rem] font-extrabold leading-[0.82] tracking-[-0.04em] t-acento sm:text-[5.5rem] lg:text-[9rem]">
              {item.metricValue}
            </p>
          )}
          {item.metricLabel && (
            <p className="mt-space-sm max-w-md font-sans text-headline-sm-mobile font-normal leading-snug t-forte md:text-headline-sm">
              {item.metricLabel}
            </p>
          )}
          {/* Resultado de apoio: mesma estrutura, um degrau abaixo. Dois números
              no mesmo corpo brigariam, e a faixa perderia o ponto de entrada. */}
          {item.extraMetrics && item.extraMetrics.length > 0 && (
            <ul className="mt-space-md space-y-space-2xs border-t border-regua pt-space-sm">
              {item.extraMetrics.map((metric) => (
                <li key={metric.label} className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-sans text-headline-md-mobile font-bold tracking-[-0.02em] t-acento md:text-headline-md">
                    {metric.value}
                  </span>
                  <span className="font-sans text-body-default t-fraco">{metric.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="flex items-center gap-space-sm">
            {/* A área interna ocupa a placa inteira menos o respiro, em vez de
                uma altura fixa menor. Com altura travada, as marcas horizontais
                paravam na largura e sobrava folga, mas o brasão vertical do
                Vale Europeu — que é limitado pela altura — ficava com metade do
                tamanho das outras. */}
            {item.imageUrl && (
              <div className="flex h-24 w-[190px] shrink-0 items-center justify-center rounded-lg bg-surface-container-lowest p-space-sm shadow-sm">
                <div className="relative h-full w-full">
                  <Image
                    src={item.imageUrl}
                    alt={item.imageAlt ?? item.category}
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                </div>
              </div>
            )}
            <p className="font-sans text-headline-md-mobile font-extrabold leading-tight t-forte md:text-headline-md">
              {item.category}
            </p>
          </div>

          {item.description && (
            <p className="mt-space-md font-sans text-body-default leading-relaxed t-fraco">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </Section>
  );
}

/**
 * Página de cases no formato de placar.
 *
 * Era uma grade de dois cartões por linha, com moldura, sombra e uma caixa de
 * logo em cima. Lia como catálogo: `+120%` e `+20%` tinham o mesmo tamanho, a
 * mesma moldura e o mesmo peso, então a página tratava o melhor resultado da
 * casa como item de lista.
 *
 * Agora cada caso é uma faixa de ponta a ponta, e as faixas alternam fundo
 * escuro e claro. A alternância é o que cria o ritmo: sem ela, sete blocos
 * iguais empilhados viram de novo uma lista, só que mais alta. Com ela, o olho
 * desce batendo de número em número.
 *
 * O destaque não é mais escolhido por `metricAccent`. Quando só um número era
 * de acento, o campo separava o caso em evidência dos demais; aqui todo número
 * é o assunto da própria faixa, e variar a cor entre eles leria como
 * inconsistência em vez de sinal. O campo continua no conteúdo, sem uso visual.
 */
export function Cases({ data }: Props) {
  return (
    <>
      <Section id="cases" tom="claro">
        <TituloSecao
          destaque="evidências práticas"
          afirmacao="Cases de Sucesso"
          descricao="Período de análise: 2022 a 2026."
        />
      </Section>

      {data.map((item, indice) => (
        <FaixaCase key={item.reference} item={item} escura={indice % 2 === 0} />
      ))}
    </>
  );
}
