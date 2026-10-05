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
 * O rótulo é a `category`, não o `title`. Os títulos da M3 são frases
 * ("Consultoria, auditoria e governança de marketing digital") e enchiam a
 * linha inteira com três itens; as categorias são nomes curtos, do mesmo
 * tamanho dos da referência, e é isso que faz a fileira funcionar como índice
 * em vez de parágrafo. O título completo continua sendo o nome acessível do
 * link, para quem navega por leitor de tela ouvir o serviço inteiro.
 *
 * O sublinhado cresce no hover em vez de simplesmente aparecer: texto solto
 * numa faixa não parece clicável, e o movimento é o que informa que ali há um
 * caminho.
 */
export function LinhaServicos({ data }: Props) {
  if (data.length === 0) return null;

  return (
    <nav
      aria-label="Serviços"
      className="tom-claro w-full border-b border-regua bg-surface-container-low"
    >
      <ul className="mx-auto flex w-full max-w-content flex-wrap items-center justify-between gap-x-space-lg gap-y-space-xs px-grid-margin-mobile py-space-md md:px-grid-margin-tablet lg:px-grid-margin-desktop">
        {data.map((service) => (
          <li key={service.index}>
            <Link
              href={`/#servico-${service.index}`}
              aria-label={service.title}
              className="group inline-flex flex-col gap-1 font-label-meta text-label-meta font-semibold uppercase tracking-[0.18em] t-fraco transition-colors hover:t-acento"
            >
              {service.category}
              <span
                aria-hidden="true"
                className="h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
