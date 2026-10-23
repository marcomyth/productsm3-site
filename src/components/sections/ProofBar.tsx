import { Section } from "@/components/layout/Section";
import type { ProofStat } from "@/lib/types";

type Props = {
  data: ProofStat[];
};

/**
 * Faixa de números, logo abaixo do hero.
 *
 * Ela estava em quarto lugar na página, depois da linha de serviços e da
 * declaração. Subiu porque é a resposta direta às três perguntas com que o
 * hero termina: quem acabou de ler "você contrata marketing na fé?" devia
 * encontrar o volume que já passou pela casa antes de qualquer argumento.
 *
 * Os cinco dados não têm o mesmo papel, e por isso não têm o mesmo corpo.
 * Os dois primeiros são dinheiro — o que entra em mídia e o que sai em
 * faturamento — e abrem a seção em corpo quase de hero. Os três seguintes
 * descrevem como a operação roda, e ficam numa fileira menor embaixo. Com os
 * cinco no mesmo tamanho não haveria primeiro: o olho escolheria sozinho, e
 * escolheria errado, porque "+30" é mais curto e mais fácil de ler do que
 * "R$ 120 milhões+".
 *
 * Quem é destaque vem do conteúdo, não da posição no vetor. Decidir pelo
 * índice ("os dois primeiros") amarra a aparência à ordem, e trocar a ordem
 * dos dados passaria a mudar o desenho sem que ninguém pedisse.
 *
 * O número fica em cima do rótulo nos destaques porque não cabe ao lado:
 * "R$ 120 milhões+" em corpo grande ocupa quase a largura toda da coluna, e
 * empurrar o rótulo para o lado dele o espremeria em quatro linhas.
 *
 * Nos três de apoio o arranjo muda com a largura, e é de propósito. Até `lg`
 * o número fica ao lado do rótulo, numa coluna de medida fixa: em flex,
 * "+10 anos" é o dobro de "+30" e cada rótulo nasceria num ponto diferente,
 * que é o tipo de desencontro que se nota sem saber nomear. A partir de `lg`
 * eles viram três colunas e o número sobe para cima do rótulo, porque um
 * terço da largura não comporta a coluna fixa mais uma legenda que corra.
 *
 * Saiu o recorte em ziguezague do topo. Ele serve para marcar a emenda entre
 * duas superfícies claras parecidas, e o que está aqui em cima agora é a
 * tarja verde: o recorte viraria um dente claro sobre o verde, que lê como
 * defeito e não como divisa.
 *
 * As duas cifras não levam régua em cima, a pedido do cliente. A régua existe
 * para dizer onde um item começa quando ele corre o risco de se misturar com
 * o vizinho, e nenhuma das duas corre: elas são o primeiro conteúdo da seção
 * e estão no maior corpo da página. Os três dados de apoio mantêm a régua
 * fina, que ali ainda separa as colunas.
 */
export function ProofBar({ data }: Props) {
  const destaques = data.filter((stat) => stat.destaque);
  const apoio = data.filter((stat) => !stat.destaque);

  return (
    <Section tom="claro-alt">
      <div className="space-y-space-xl">
        {destaques.length > 0 && (
          <div className="grid grid-cols-1 gap-x-gutter-desktop gap-y-space-lg lg:grid-cols-2">
            {destaques.map((stat) => (
              <div key={stat.label}>
                {/* `whitespace-nowrap`: os dois valores têm quase o mesmo
                    comprimento, mas não o mesmo. Se um quebrasse em duas
                    linhas e o outro não, os rótulos ao lado deixariam de
                    começar na mesma altura — e foi justamente esse desencontro
                    que motivou a coluna fixa dos dados de apoio. O corpo é
                    medido para o maior valor caber inteiro em cada largura. */}
                <span className="block whitespace-nowrap font-sans text-[2.25rem] font-extrabold leading-[0.95] tracking-[-0.03em] tabular-nums t-acento sm:text-[2.75rem] lg:text-[3.5rem]">
                  {stat.value}
                </span>
                <span className="mt-space-xs block font-label-index text-label-index uppercase tracking-wider t-forte">
                  {stat.label}
                </span>
                <p className="mt-space-2xs max-w-prose font-body-sm text-body-sm leading-relaxed t-fraco">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {apoio.length > 0 && (
          <div className="grid grid-cols-1 gap-x-gutter-desktop gap-y-space-lg lg:grid-cols-3">
            {apoio.map((stat) => (
              <div
                key={stat.label}
                className="grid grid-cols-[9rem_1fr] items-start gap-space-sm border-t border-regua pt-space-sm md:grid-cols-[11rem_1fr] lg:block"
              >
                <span className="font-sans text-display-lg-mobile font-extrabold leading-none tracking-[-0.01em] tabular-nums t-acento md:text-display-lg lg:block">
                  {stat.value}
                </span>
                <div className="pt-1 lg:pt-space-xs">
                  <span className="block font-label-index text-label-index uppercase tracking-wider t-forte">
                    {stat.label}
                  </span>
                  <p className="mt-space-2xs font-body-sm text-body-sm leading-relaxed t-fraco">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
