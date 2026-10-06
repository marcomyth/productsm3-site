import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { TituloSecao } from "@/components/layout/TituloSecao";
import { BOTAO_ACAO, cn, externalLinkProps } from "@/lib/utils";
import type { CaseStudy, CasesPageContent } from "@/lib/types";

type Props = {
  data: CaseStudy[];
  pagina: CasesPageContent;
  ctaUrl: string;
};

/** Numeração humana da faixa: "01 / 08" para o primeiro de oito. */
function indiceDe(posicao: number, total: number): string {
  const dois = (n: number) => String(n).padStart(2, "0");
  return `${dois(posicao)} / ${dois(total)}`;
}

/**
 * A coluna de mídia: a foto do cliente com a placa da logo sobreposta.
 *
 * A placa fica fora da foto na vertical — ela encosta na borda de baixo e
 * desce um pouco além, e é por isso que a coluna reserva um respiro embaixo.
 * Sobrepor é o que amarra as duas: logo ao lado da foto seriam duas imagens
 * vizinhas, logo sobre a foto é uma legenda.
 */
function Midia({ item }: { item: CaseStudy }) {
  if (!item.backgroundUrl) return null;

  return (
    <div className="relative min-w-0 flex-1 basis-[22.5rem] pb-10">
      <Image
        src={item.backgroundUrl}
        alt={item.backgroundAlt ?? ""}
        width={960}
        height={600}
        className="block aspect-[8/5] w-full rounded-lg object-cover"
      />
      {item.imageUrl && (
        <div className="absolute bottom-0 left-space-md flex h-24 w-[190px] items-center justify-center rounded-lg bg-surface-container-lowest p-space-sm shadow-sm">
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
    </div>
  );
}

/**
 * Uma faixa de case.
 *
 * A ordem das colunas alterna, e isso anda junto com o tom: faixa escura tem o
 * texto à esquerda, faixa clara tem a foto. Alternar só a cor daria sete
 * blocos de mesma planta pintados de duas cores; alternar o lado é o que faz a
 * página ter andamento em vez de repetição.
 *
 * `order` em vez de reordenar os elementos: a leitura por teclado e por leitor
 * de tela segue sempre texto e depois imagem, que é a ordem que faz sentido
 * ouvir, independente de que lado a foto caiu.
 */
function FaixaCase({
  item,
  posicao,
  total,
  escura,
}: {
  item: CaseStudy;
  posicao: number;
  total: number;
  escura: boolean;
}) {
  return (
    <Section tom={escura ? "escuro" : "claro"} respiro="grande">
      <div className="flex flex-wrap items-center gap-x-space-xl gap-y-space-lg">
        <div
          className={cn(
            "flex min-w-0 flex-1 basis-[30rem] flex-col gap-space-md",
            escura ? "lg:order-1" : "lg:order-2",
          )}
        >
          <p className="font-label-meta text-label-meta font-semibold uppercase tracking-[0.12em] t-fraco">
            {indiceDe(posicao, total)}
            {item.sector ? ` · ${item.sector}` : ""}
          </p>

          {/* Principal e apoio lado a lado, alinhados pela base. Empilhados, o
              apoio ficava longe demais do número que ele acompanha e lia como
              um terceiro assunto. */}
          <div className="flex flex-wrap items-end gap-x-space-xl gap-y-space-md">
            {item.metricValue && (
              <div>
                <p className="font-sans text-[4rem] font-extrabold leading-[0.82] tracking-[-0.04em] t-acento sm:text-[5.5rem] lg:text-[9rem]">
                  {item.metricValue}
                </p>
                {item.metricLabel && (
                  <p className="mt-space-sm max-w-md font-sans text-headline-md-mobile leading-snug t-forte md:text-headline-md">
                    {item.metricLabel}
                  </p>
                )}
              </div>
            )}

            {item.extraMetrics?.map((metric) => (
              <div key={metric.label} className="min-w-[8rem]">
                <p className="font-sans text-[2rem] font-extrabold leading-none tracking-[-0.03em] t-acento md:text-[3rem]">
                  {metric.value}
                </p>
                <p className="mt-space-2xs font-sans text-body-default leading-snug t-forte">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          {item.headline && (
            <h3 className="max-w-xl font-sans text-headline-md-mobile font-extrabold leading-snug tracking-[-0.01em] t-forte md:text-headline-md">
              {item.headline}
            </h3>
          )}

          {item.description && (
            <p className="max-w-xl font-sans text-body-default leading-relaxed t-fraco">
              {item.description}
            </p>
          )}
        </div>

        <div className={cn("min-w-0 flex-1 basis-[22.5rem]", escura ? "lg:order-2" : "lg:order-1")}>
          <Midia item={item} />
        </div>
      </div>
    </Section>
  );
}

/**
 * A oitava faixa: a vaga em aberto.
 *
 * Mesma planta das sete acima, com o número trocado por "+?%" e a placa da
 * logo vazia. É o fecho do argumento da página — as sete marcas já têm número,
 * e esta linha está esperando. A moldura tracejada e a serifada em caixa baixa
 * são o que impede que ela seja lida como um cliente de verdade.
 */
function FaixaVaga({
  pagina,
  posicao,
  total,
  escura,
  ctaUrl,
}: {
  pagina: CasesPageContent;
  posicao: number;
  total: number;
  escura: boolean;
  ctaUrl: string;
}) {
  const { vaga } = pagina;

  return (
    <Section tom={escura ? "escuro" : "claro"} respiro="grande">
      <div className="flex flex-wrap items-center gap-x-space-xl gap-y-space-lg">
        <div
          className={cn(
            "flex min-w-0 flex-1 basis-[30rem] flex-col gap-space-md",
            escura ? "lg:order-1" : "lg:order-2",
          )}
        >
          <p className="font-label-meta text-label-meta font-semibold uppercase tracking-[0.12em] t-fraco">
            {indiceDe(posicao, total)} · {vaga.sector}
          </p>

          <div>
            <p className="font-sans text-[4rem] font-extrabold leading-[0.82] tracking-[-0.04em] t-acento sm:text-[5.5rem] lg:text-[9rem]">
              {vaga.value}
            </p>
            <p className="mt-space-sm max-w-md font-sans text-headline-md-mobile leading-snug t-forte md:text-headline-md">
              {vaga.label}
            </p>
          </div>

          <h3 className="max-w-xl font-sans text-headline-md-mobile font-extrabold leading-snug tracking-[-0.01em] t-forte md:text-headline-md">
            {vaga.headline}
          </h3>

          <p className="max-w-xl font-sans text-body-default leading-relaxed t-fraco">
            {vaga.description}
          </p>

          <div>
            <a href={ctaUrl} {...externalLinkProps(ctaUrl)} className={BOTAO_ACAO}>
              {vaga.ctaLabel}
            </a>
          </div>
        </div>

        <div
          className={cn(
            "flex min-w-0 flex-1 basis-[22.5rem] justify-center",
            escura ? "lg:order-2" : "lg:order-1",
          )}
        >
          <div className="flex aspect-[8/5] w-full flex-col items-center justify-center gap-space-xs rounded-lg border-2 border-dashed border-regua">
            <p className="font-serif text-display-lg-mobile font-normal leading-none t-acento md:text-display-lg">
              {vaga.marca}
            </p>
            <p className="font-label-meta text-label-meta font-semibold uppercase tracking-[0.14em] t-fraco">
              {vaga.logoLabel}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

/**
 * Introdução da lista, separada das faixas porque a fileira de marcas entra
 * entre as duas: o texto anuncia as sete, a fileira mostra as sete, e só então
 * a página abre uma por uma.
 */
export function CasesIntro({ pagina }: { pagina: CasesPageContent }) {
  return (
    <Section id="cases" tom="claro">
      <TituloSecao
        destaque={pagina.intro.eyebrow}
        afirmacao={pagina.intro.title}
        descricao={pagina.intro.description}
      />
    </Section>
  );
}

/**
 * Página de cases no formato de placar.
 *
 * Cada caso é uma faixa de ponta a ponta com o número em 9rem. Antes era uma
 * grade de dois cartões por linha, em que `+120%` e `+20%` tinham o mesmo
 * tamanho e o maior elemento da página era uma caixa cinza com a logo dentro —
 * a página tratava o melhor resultado da casa como item de lista.
 *
 * `metricAccent` não escolhe mais a cor. Ele existia para separar o caso em
 * evidência dos demais; aqui todo número é o assunto da própria faixa, e
 * variar a cor entre eles leria como inconsistência. O campo continua no
 * conteúdo, sem uso visual.
 */
export function Cases({ data, pagina, ctaUrl }: Props) {
  const total = data.length + 1;

  return (
    <>
      {data.map((item, indice) => (
        <FaixaCase
          key={item.reference}
          item={item}
          posicao={indice + 1}
          total={total}
          escura={indice % 2 === 0}
        />
      ))}

      <FaixaVaga
        pagina={pagina}
        posicao={total}
        total={total}
        escura={data.length % 2 === 0}
        ctaUrl={ctaUrl}
      />
    </>
  );
}
