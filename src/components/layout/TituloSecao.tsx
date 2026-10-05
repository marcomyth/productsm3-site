import { cn } from "@/lib/utils";

/**
 * Título de seção no padrão da referência: duas linhas, duas famílias.
 *
 * A de cima nomeia a seção em serifada, caixa baixa, na cor de acento — lá é
 * "metodologia e entregáveis", "dois formatos,". A de baixo é a afirmação, em
 * sans pesada e caixa alta. O contraste entre as duas é o que dá o ar
 * editorial da página; com uma família só, qualquer uma das duas, o resultado
 * é uma lista de títulos iguais.
 *
 * `destaque` é a linha serifada e `afirmacao` a de caixa alta. Nenhuma das
 * duas é obrigatória: algumas seções da referência têm só a serifada, outras
 * só a caixa alta.
 */
type Props = {
  /** Linha serifada em caixa baixa. Escrita em caixa baixa no conteúdo: não
      é transformada por CSS, porque a caixa aqui é escolha de redação. */
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
      {/* A serifada é MAIOR que a linha de caixa alta, não menor: medido na
          referência, 40px contra 32px. É contraintuitivo — a caixa alta pesada
          parece o título principal — mas é essa inversão que faz a linha
          serifada nomear a seção em vez de legendá-la. */}
      {destaque && (
        <p className="font-serif text-display-xl-mobile font-normal leading-[1.1] t-acento md:text-display-xl">
          {destaque}
        </p>
      )}
      {afirmacao && (
        <h2
          className={cn(
            "font-sans text-display-lg-mobile font-extrabold uppercase leading-tight tracking-[0.01em] t-forte md:text-display-lg",
            destaque && "mt-space-3xs",
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
