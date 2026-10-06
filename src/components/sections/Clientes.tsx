import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import type { CaseStudy } from "@/lib/types";

type Props = {
  /** Vem da mesma lista dos cases: a logo e o nome já estão lá, e duplicar
      isso num campo novo garantiria que um dia os dois divergissem. */
  data: CaseStudy[];
  /** Link para a página de cases. Na home ele é a ponte para o detalhe, que
      saiu dali; na própria página de cases não faz sentido e é omitido. */
  comLink?: boolean;
  /** Âncora da seção. Na home ela recebe "cases": com a galeria fora dali, a
      grade de logos passou a ser o destino de quem clica em Cases no menu, e
      o mesmo link continua valendo nas duas versões do site. */
  id?: string;
};

/**
 * Uma das duas cópias da trilha.
 *
 * A segunda leva `aria-hidden`: para quem lê a tela as marcas existem uma vez
 * só, e ouvir a lista inteira duplicada seria ruído sem informação. A duplicata
 * existe por razão visual — é ela que faz o laço fechar sem emenda.
 */
function fileira(itens: CaseStudy[], duplicada: boolean) {
  return (
    <ul
      aria-hidden={duplicada || undefined}
      className="flex shrink-0 items-center gap-space-lg px-space-lg md:gap-space-xl"
    >
      {itens.map((item) => (
        <li key={item.reference} className="flex w-[150px] shrink-0 justify-center md:w-[210px]">
          <div className="relative h-20 w-full md:h-28">
            <Image
              src={item.imageUrl as string}
              alt={item.imageAlt ?? item.category}
              fill
              loading="eager"
              sizes="(max-width: 768px) 150px, 210px"
              className="object-contain object-center"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

/**
 * Fileira corrida de logos de cliente.
 *
 * É o bloco de maior retorno da home da referência e o que a M3 tinha pronto
 * sem saber: as sete logos já existiam, mas apareciam uma por vez, enterradas
 * dentro do card de cada case, lá embaixo na página. Juntas e no começo, elas
 * fazem num relance o trabalho que os cases fazem em dois minutos de leitura.
 *
 * Altura fixa com `object-contain`: os arquivos têm proporções muito
 * diferentes (um brasão vertical ao lado de marcas horizontais), e travar a
 * altura é o que faz a fileira parecer alinhada em vez de sete imagens soltas.
 *
 * Uma fileira só, correndo. É a técnica da faixa do rodapé do Dribbble, que o
 * cliente mandou como referência: trilha escrita duas vezes e deslocada
 * exatamente 50%, de modo que o laço não tem emenda. A regra de ritmo e o
 * comportamento parado vivem em `.trilha-marcas`, no globals.
 *
 * Resolve de passagem o problema que o arranjo em grade tinha: sete não é
 * divisível por nada entre 2 e 6, então sobrava sempre uma fileira incompleta.
 * Correndo, não existe última fileira.
 *
 * Atravessa a tela inteira, saindo da medida da seção. Uma tarja que corre
 * precisa chegar às bordas: contida na coluna de texto, as logos seriam
 * cortadas no meio do nada a 1140px enquanto a seção segue até a borda, e o
 * corte leria como defeito. Nas pontas, dois véus na cor da seção dissolvem a
 * entrada e a saída em vez de guilhotiná-las.
 *
 * As imagens carregam com `eager`. O padrão é adiar o que está fora da tela, e
 * aqui metade da trilha nasce fora: com o padrão, a logo só começaria a baixar
 * no instante em que entrasse em quadro, e a primeira volta teria buracos.
 * São sete arquivos, repetidos — o navegador baixa cada um uma vez.
 */
export function Clientes({ data, comLink = false, id = "clientes" }: Props) {
  const comLogo = data.filter((item) => item.imageUrl);
  if (comLogo.length === 0) return null;

  return (
    <Section id={id} tom="claro">
      <h2 className="font-sans text-display-lg-mobile font-extrabold leading-tight tracking-[0.01em] t-forte md:text-display-lg">
        Marcas que já fazem parte da nossa operação
      </h2>

      <div className="relative left-1/2 mt-space-xl w-screen -translate-x-1/2 overflow-hidden">
        <div className="trilha-marcas flex w-max">
          {fileira(comLogo, false)}
          {fileira(comLogo, true)}
        </div>

        {/* `from-surface` porque esta seção é sempre `tom="claro"`. Se um dia
            ela mudar de tom, estes dois véus mudam junto. */}
        <div
          aria-hidden="true"
          className="mascara-trilha pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface to-transparent md:w-32"
        />
        <div
          aria-hidden="true"
          className="mascara-trilha pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface to-transparent md:w-32"
        />
      </div>

      {comLink && (
        <div className="mt-space-xl">
          <Link
            href="/cases"
            className="group inline-flex items-center gap-2 font-label-meta text-label-meta font-semibold uppercase tracking-widest t-acento transition-colors hover:t-forte"
          >
            Ver os resultados de cada uma
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </Section>
  );
}
