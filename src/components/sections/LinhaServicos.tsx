import Link from "next/link";
import type { ServiceItem } from "@/lib/types";
import { rota, type Idioma } from "@/i18n/config";
import { textos } from "@/i18n/dicionario";

type Props = {
  data: ServiceItem[];
  idioma: Idioma;
};

/**
 * Linha com os nomes dos serviços, logo abaixo da faixa de números.
 *
 * É o bloco com que a home da referência abre o conteúdo, e cumpre uma função
 * que nenhuma outra seção faz: dizer, em uma linha, tudo o que a empresa
 * oferece, antes de qualquer argumento. Quem chega sabendo o que procura
 * encontra ali e pula o resto. Aqui ela cedeu o primeiro lugar para a faixa
 * de números, que responde às perguntas com que o hero termina.
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
export function LinhaServicos({ data, idioma }: Props) {
  if (data.length === 0) return null;

  const t = textos(idioma);

  // `bg-surface-container` é o mesmo cinza do tom `claro-alt`: esta faixa e as
  // seções alternadas são a mesma superfície secundária, e com dois cinzas
  // quase iguais na mesma página só se ganha a dúvida de se um deles está
  // errado.
  return (
    <nav
      aria-label={t.linhaServicos.navegacao}
      className="tom-claro w-full border-b border-regua bg-surface-container"
    >
      <ul className="mx-auto flex w-full max-w-content flex-wrap items-center justify-start gap-x-space-lg md:justify-between gap-y-space-xs px-grid-margin-mobile py-space-md md:px-grid-margin-tablet lg:px-grid-margin-desktop">
        {data.map((service) => (
          <li key={service.index}>
            <Link
              href={rota(idioma, `/#servico-${service.index}`)}
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
