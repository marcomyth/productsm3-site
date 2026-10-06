import { cn } from "@/lib/utils";

/**
 * Título de seção no padrão da referência: duas linhas, duas famílias.
 *
 * A de cima nomeia a seção em serifada, na cor de acento — "método e
 * entregáveis", "evidências práticas". A de baixo é a afirmação, em sans
 * pesada. O contraste entre as duas é o que dá o ar editorial da página; com
 * uma família só, qualquer uma das duas, o resultado é uma lista de títulos
 * iguais.
 *
 * Nenhuma das duas é obrigatória: algumas seções têm só a serifada, outras só
 * a afirmação.
 */
type Props = {
  /** Linha serifada que nomeia a seção. A caixa alta é aplicada por CSS, em
      `rotulo-serifado`, então o texto aqui pode vir escrito normalmente. */
  destaque?: string;
  afirmacao?: string;
  descricao?: string;
  /** Alinhamento. A referência centraliza só o fecho da página. */
  centro?: boolean;
  className?: string;
};

export function TituloSecao({ destaque, afirmacao, descricao, centro, className }: Props) {
  return (
    <div className={cn("max-w-3xl", centro && "mx-auto text-center", className)}>
      {destaque && <p className="rotulo-serifado">{destaque}</p>}
      {afirmacao && (
        <h2
          className={cn(
            "font-sans text-display-lg-mobile font-extrabold leading-tight tracking-[0.01em] t-forte md:text-display-lg",
            // 2px bastavam quando o rótulo era caixa baixa: os descendentes de
            // "método e entregáveis" já ocupavam o vão. Em caixa alta não há
            // descendente nenhum e as duas linhas encostam.
            destaque && "mt-space-xs",
          )}
        >
          {afirmacao}
        </h2>
      )}
      {descricao && (
        <p className="mt-space-sm font-sans text-body-default leading-relaxed t-fraco">
          {descricao}
        </p>
      )}
    </div>
  );
}
