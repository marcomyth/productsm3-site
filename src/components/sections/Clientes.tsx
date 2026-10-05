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
 */
export function Clientes({ data, comLink = false }: Props) {
  const comLogo = data.filter((item) => item.imageUrl);
  if (comLogo.length === 0) return null;

  return (
    <Section id="clientes" tom="claro">
      <h2 className="font-sans text-headline-md-mobile font-bold leading-tight t-forte md:text-headline-md">
        Marcas que já fazem parte da nossa operação
      </h2>

      <ul className="mt-space-xl grid grid-cols-2 items-center gap-x-gutter-desktop gap-y-space-lg sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        {comLogo.map((item) => (
          <li key={item.reference} className="flex items-center justify-center">
            <div className="relative h-16 w-full">
              <Image
                src={item.imageUrl as string}
                alt={item.imageAlt ?? item.category}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1280px) 22vw, 14vw"
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
