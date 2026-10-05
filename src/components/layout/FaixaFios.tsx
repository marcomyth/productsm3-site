import { FundoFios } from "@/components/layout/FundoFios";
import { cn } from "@/lib/utils";

type Props = {
  /** Altura da faixa. O padrão é a medida da referência, por volta de 280px. */
  className?: string;
};

/**
 * Faixa decorativa de fios, entre seções.
 *
 * Na referência ela aparece depois do bloco de execução e antes dos artigos:
 * uma tira de largura cheia só com a animação, sem texto nenhum. Serve de
 * respiro entre dois blocos densos e devolve a assinatura visual do hero no
 * meio da página, o que amarra as duas pontas.
 *
 * Reaproveita o mesmo canvas do hero. Como ele pausa quando sai da tela, as
 * duas faixas nunca desenham ao mesmo tempo: a de cima para quando a de baixo
 * entra, então o custo continua sendo o de uma animação só.
 *
 * Decorativa de verdade: não há texto, não há link, e a faixa inteira fica
 * fora da árvore de acessibilidade. Quem usa leitor de tela não ganha nada
 * aqui e não deve ser interrompido por isso.
 */
export function FaixaFios({ className }: Props) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative w-full overflow-hidden bg-dark-surface",
        "h-[180px] md:h-[280px]",
        className,
      )}
    >
      <FundoFios className="pointer-events-none absolute inset-0 h-full w-full" />

      {/* Esmaece nas duas bordas horizontais para a faixa não terminar num
          corte seco contra as seções claras de cima e de baixo. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-dark-surface to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-dark-surface to-transparent" />
    </div>
  );
}
