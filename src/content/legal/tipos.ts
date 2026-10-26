/**
 * Forma das duas páginas jurídicas.
 *
 * Elas eram JSX com o texto escrito dentro. Em um idioma só isso funcionava;
 * em três, seriam seis arquivos de marcação com a mesma estrutura e textos
 * diferentes, e qualquer ajuste de layout teria de ser repetido seis vezes.
 * Aqui o texto virou dado e a marcação ficou num renderizador só.
 *
 * A data da última revisão NÃO entra nestes arquivos: ela é uma constante
 * única, formatada no idioma de quem lê. Se cada tradução trouxesse a sua, um
 * dia a versão em espanhol anunciaria uma revisão que a portuguesa não teve —
 * e numa página jurídica a data é parte do conteúdo.
 */

/**
 * Marcadores aceitos dentro dos parágrafos, resolvidos por
 * src/components/legal/PaginaLegalView.tsx:
 *
 * - `{email}` vira o link de contato, com o endereço vindo do conteúdo
 * - `{controlador}` vira a razão social com o CNPJ
 * - `{privacidade}` vira o link para a outra página jurídica
 * - `**assim**` vira negrito
 *
 * São marcadores e não HTML porque o texto precisa continuar legível por quem
 * for revisar isto como texto jurídico, que não é a mesma pessoa que lê JSX.
 */
export type SecaoLegal = {
  titulo: string;
  paragrafos: readonly string[];
  /** Os dispositivos que sustentam a seção. Nem toda seção tem. */
  base?: string;
};

export type PaginaLegal = {
  metaTitulo: string;
  metaDescricao: string;
  /** Linha pequena acima do título. */
  rotulo: string;
  titulo: string;
  /** Só o rótulo: "Última atualização". A data vem formatada do código. */
  atualizadoRotulo: string;
  intro: string;
  secoes: readonly SecaoLegal[];
};

export type ConteudoLegal = {
  privacidade: PaginaLegal;
  compliance: PaginaLegal;
};

/**
 * Data da última revisão dos dois textos, em ISO para poder ser formatada em
 * cada idioma. Mudou o texto, muda esta linha.
 */
export const REVISADO_EM = "2026-09-23";
