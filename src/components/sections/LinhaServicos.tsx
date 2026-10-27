import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
 * Duas coisas mudaram quando a faixa de números subiu para o topo, e as duas
 * eram o mesmo defeito visto de ângulos diferentes.
 *
 * O fundo era `surface-container`, o mesmo cinza da faixa de números. Enquanto
 * havia uma seção clara entre as duas, isso era coerência de paleta; com elas
 * encostadas, virou uma superfície só, e esta linha passou a ler como rodapé
 * do bloco de cima em vez de navegação própria. Agora é branco: separa do
 * cinza acima e do cinza claro abaixo, sem inventar cor nova — é o mesmo
 * `surface-container-lowest` dos painéis claros do site.
 *
 * E os itens eram texto solto, com o sublinhado aparecendo só no hover. Texto
 * solto não parece clicável antes de o ponteiro chegar nele, e no celular o
 * ponteiro nunca chega. Agora cada um é uma pílula com borda, número e seta:
 * a forma já diz que ali há um caminho, sem depender de interação.
 *
 * O número é o `index` do próprio serviço, o mesmo "01 / 02 / 03" que a seção
 * de serviços exibe mais abaixo. Não é enfeite: é o que liga o atalho ao
 * destino, para quem clica reconhecer onde chegou.
 */
export function LinhaServicos({ data, idioma }: Props) {
  if (data.length === 0) return null;

  const t = textos(idioma);

  return (
    <nav
      aria-label={t.linhaServicos.navegacao}
      className="tom-claro w-full border-b border-regua bg-surface-container-lowest"
    >
      <ul className="mx-auto flex w-full max-w-content flex-wrap items-center gap-space-sm px-grid-margin-mobile py-space-md md:px-grid-margin-tablet lg:px-grid-margin-desktop">
        {data.map((service) => (
          <li key={service.index}>
            <Link
              href={rota(idioma, `/#servico-${service.index}`)}
              aria-label={service.title}
              className="group inline-flex items-center gap-space-xs rounded-full border border-regua bg-surface px-space-sm py-space-xs t-forte transition-colors duration-300 hover:border-secondary hover:bg-secondary hover:text-on-secondary"
            >
              <span
                aria-hidden="true"
                className="font-label-index text-label-index font-semibold tabular-nums t-acento transition-colors duration-300 group-hover:text-on-secondary"
              >
                {service.index}
              </span>
              <span className="font-sans text-body-sm font-semibold uppercase tracking-[0.1em]">
                {service.category}
              </span>
              <ArrowRight
                aria-hidden="true"
                className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
