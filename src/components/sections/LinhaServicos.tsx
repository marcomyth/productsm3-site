import Link from "next/link";
import type { ServiceItem } from "@/lib/types";

type Props = {
  data: ServiceItem[];
};

/**
 * Linha com os nomes dos serviços, logo abaixo da faixa corrida.
 *
 * É o primeiro bloco de conteúdo da home da referência, e cumpre uma função
 * que nenhuma outra seção faz: dizer, em uma linha, tudo o que a empresa
 * oferece, antes de qualquer argumento. Quem chega sabendo o que procura
 * encontra ali e pula o resto.
 *
 * Os nomes vêm da mesma lista da seção de serviços e apontam para o item
 * correspondente no acordeão, que abre na âncora. Nada é digitado duas vezes.
 */
export function LinhaServicos({ data }: Props) {
  if (data.length === 0) return null;

  return (
    <nav
      aria-label="Serviços"
      className="tom-claro w-full border-b border-regua bg-surface-container-low"
    >
      <ul className="mx-auto flex w-full max-w-content flex-wrap items-center justify-between gap-x-space-lg gap-y-space-xs px-grid-margin-mobile py-space-sm md:px-grid-margin-tablet lg:px-grid-margin-desktop">
        {data.map((service) => (
          <li key={service.index}>
            <Link
              href={`/#servico-${service.index}`}
              className="font-label-meta text-label-meta font-semibold uppercase tracking-[0.16em] t-fraco transition-colors hover:t-acento"
            >
              {service.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
