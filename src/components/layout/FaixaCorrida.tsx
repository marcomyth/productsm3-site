type Props = {
  /** Frases que correm na faixa. Vêm da diretriz operacional no rodapé: são
      as palavras que a empresa já usa para se descrever. */
  frases: string[];
};

/**
 * Tarja que atravessa a página repetindo o posicionamento, como a da
 * referência, que fica entre o hero e o primeiro bloco de conteúdo.
 *
 * A trilha é escrita duas vezes e a animação desloca exatamente 50% da largura
 * total: ao chegar lá, o conteúdo está de volta à posição inicial e o laço não
 * tem emenda. Nenhuma medida precisa ser calculada em JavaScript, e por isso
 * isto continua sendo Server Component.
 *
 * A segunda cópia leva `aria-hidden`: para quem lê a tela, a frase existe uma
 * vez só — ouvir tudo duplicado seria ruído sem informação.
 */
export function FaixaCorrida({ frases }: Props) {
  if (frases.length === 0) return null;

  const trilha = (duplicada: boolean) => (
    <ul
      aria-hidden={duplicada || undefined}
      className="flex shrink-0 items-center gap-space-lg px-space-md"
    >
      {frases.map((frase) => (
        <li
          key={frase}
          className="flex shrink-0 items-center gap-space-lg whitespace-nowrap font-label-meta text-label-meta font-semibold uppercase tracking-[0.18em] text-on-secondary"
        >
          {frase}
          <span aria-hidden="true" className="opacity-50">
            /
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="w-full overflow-hidden bg-secondary py-space-xs">
      <div className="faixa-trilha flex w-max">
        {trilha(false)}
        {trilha(true)}
      </div>
    </div>
  );
}
