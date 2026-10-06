import { Section } from "@/components/layout/Section";
import { BOTAO_ACAO, externalLinkProps } from "@/lib/utils";
import type { CaseStudy, CasesPageContent } from "@/lib/types";

type Props = {
  data: CasesPageContent;
  cases: CaseStudy[];
  ctaUrl: string;
};

/**
 * Converte "+150%" em 150, para ordenar o placar.
 *
 * Ordenar por string poria "+34%" acima de "+150%", porque "3" vem depois de
 * "1". E guardar um campo numérico só para isso daria dois lugares para o
 * mesmo número divergirem na próxima edição do conteúdo.
 */
function valorNumerico(valor?: string): number {
  if (!valor) return Number.NEGATIVE_INFINITY;
  const n = Number.parseFloat(valor.replace(/[^\d,.-]/g, "").replace(",", "."));
  return Number.isFinite(n) ? n : Number.NEGATIVE_INFINITY;
}

/**
 * Abertura da página de cases, com o placar da operação ao lado.
 *
 * O placar ordena por resultado; as faixas abaixo não. Os dois existem por
 * razões diferentes: o placar entrega o ranking inteiro numa olhada, e as
 * faixas alternam setores para que duas vizinhas nunca contem a mesma
 * história. Ordenar as duas coisas do mesmo jeito perderia uma das duas.
 *
 * A última linha é a vaga em aberto, com "+?%" no lugar do número. Ela é o
 * argumento da página: as sete marcas acima já têm número, e a oitava linha
 * está lá esperando. Vem do conteúdo porque a mesma vaga reaparece como última
 * faixa da página, e as duas precisam dizer a mesma coisa.
 */
export function CasesHero({ data, cases, ctaUrl }: Props) {
  const placar = [...cases]
    .filter((item) => item.metricValue)
    .sort((a, b) => valorNumerico(b.metricValue) - valorNumerico(a.metricValue));

  return (
    <Section tom="escuro" respiro="grande">
      <div className="flex flex-wrap items-center gap-x-space-xl gap-y-space-lg">
        <div className="flex min-w-0 max-w-3xl flex-1 basis-[32rem] flex-col gap-space-md">
          <span className="font-label-meta text-label-meta font-semibold uppercase tracking-[0.22em] t-acento">
            {data.eyebrow}
          </span>

          <h1 className="font-sans text-[2.5rem] font-bold leading-[1.05] tracking-[-0.01em] t-forte md:text-[4rem]">
            {data.titleLead} <span className="t-acento">{data.titleAccent}</span>
          </h1>

          <p className="max-w-2xl font-sans text-body-lead leading-relaxed t-fraco">
            {data.description}
          </p>

          <div>
            <a href={ctaUrl} {...externalLinkProps(ctaUrl)} className={BOTAO_ACAO}>
              {data.ctaLabel}
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-space-lg gap-y-space-2xs font-sans text-body-sm font-medium t-fraco">
            {data.meta.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* `cartao-relevo` é o mesmo relevo dos cartões do Método: aresta de
            cima pegando luz e sombra embaixo. Painel escuro sobre fundo escuro
            tem o mesmo problema lá e aqui. */}
        {/* O respiro interno é mais apertado que o das outras caixas de
            propósito: cada 8px de folga aqui sai da largura do rótulo, e é ele
            que decide se "crescimento de marca · 12 meses" cabe numa linha. Com
            metade das linhas quebrando em duas, o placar perde a altura
            constante que faz uma lista de resultados parecer um placar. */}
        <div className="cartao-relevo min-w-0 max-w-[32.5rem] flex-1 basis-[25rem] rounded-lg bg-painel p-space-md md:p-8">
          <div className="flex flex-wrap justify-between gap-x-space-sm gap-y-space-2xs pb-space-sm font-label-meta text-label-meta font-semibold uppercase tracking-[0.12em] t-fraco">
            <span>{data.placarTitle}</span>
            <span>{data.placarPeriod}</span>
          </div>

          <ul>
            {placar.map((item) => (
              <li
                key={item.reference}
                className="flex items-center justify-between gap-space-sm border-t border-regua py-space-xs"
              >
                <div className="min-w-0">
                  <p className="font-sans text-body-default font-semibold leading-snug t-forte">
                    {item.category}
                  </p>
                  {item.placarLabel && (
                    <p className="font-sans text-body-sm leading-snug t-fraco">
                      {item.placarLabel}
                    </p>
                  )}
                </div>
                <p className="font-sans text-[2rem] font-extrabold leading-none tracking-[-0.03em] tabular-nums t-acento">
                  {item.metricValue}
                </p>
              </li>
            ))}

            <li className="flex items-center justify-between gap-space-sm border-t border-dashed border-regua py-space-xs">
              <div className="min-w-0">
                {/* Serifada e em caixa baixa: a linha vazia não finge ser um
                    cliente. Ela é o convite, e a troca de família é o que
                    separa as duas coisas sem precisar de rótulo. */}
                <p className="font-serif text-headline-sm font-normal leading-snug t-acento">
                  {data.vaga.marca}
                </p>
                <p className="font-sans text-body-sm leading-snug t-fraco">
                  {data.vaga.placarLabel}
                </p>
              </div>
              <p className="font-sans text-[2rem] font-extrabold leading-none tracking-[-0.03em] t-acento">
                {data.vaga.value}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
