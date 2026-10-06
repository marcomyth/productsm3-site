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
 * Grade de logos de cliente.
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
 * Quatro por fileira, não sete. Com sete em linha cada logo ficava com 142px
 * de largura, e as marcas horizontais — Lexus, Mueller — são limitadas pela
 * largura, não pela altura: aumentar só a altura da caixa não as faria crescer
 * um pixel. Em quatro, a caixa passa de 142px para cerca de 240px.
 *
 * E fileira que quebra, não grade. Sete não é divisível por nada entre 2 e 6,
 * então qualquer número de colunas deixa a última fileira incompleta; em grade
 * ela encosta à esquerda e abre um buraco à direita, que lê como imagem que
 * faltou carregar. Quebrando centralizada, as três últimas ficam no meio e o
 * arranjo parece escolhido.
 */
export function Clientes({ data, comLink = false, id = "clientes" }: Props) {
  const comLogo = data.filter((item) => item.imageUrl);
  if (comLogo.length === 0) return null;

  return (
    <Section id={id} tom="claro">
      <h2 className="font-sans text-display-lg-mobile font-extrabold leading-tight tracking-[0.01em] t-forte md:text-display-lg">
        Marcas que já fazem parte da nossa operação
      </h2>

      {/* As larguras ficam um pouco abaixo da fração exata (45% em vez de 50%,
          22% em vez de 25%) para o `gap` caber sem empurrar a última da fileira
          para a linha de baixo. */}
      <ul className="mt-space-xl flex flex-wrap items-center justify-center gap-x-space-md gap-y-space-lg">
        {comLogo.map((item) => (
          <li key={item.reference} className="flex w-[45%] justify-center sm:w-[29%] lg:w-[22%]">
            <div className="relative h-20 w-full md:h-28">
              <Image
                src={item.imageUrl as string}
                alt={item.imageAlt ?? item.category}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 29vw, 240px"
                className="object-contain object-center"
              />
            </div>
          </li>
        ))}
      </ul>

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
