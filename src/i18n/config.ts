/**
 * Os três idiomas do site e as regras de URL que vêm com eles.
 *
 * O português não tem prefixo. Ele é o idioma do negócio e o site já está no
 * ar há tempo suficiente para ter links e ranking apontando para
 * `agenciam3.com.br/cases`: prefixar tudo com `/pt` trocaria todas as URLs
 * existentes por redirecionamentos de uma vez só. Inglês e espanhol nascem
 * agora, então nascem prefixados.
 *
 * Internamente, porém, toda rota vive sob `app/[idioma]/`, inclusive a
 * portuguesa. Quem concilia as duas coisas é o middleware, que reescreve
 * `/cases` para `/pt/cases` sem mudar a barra de endereço. É por isso que
 * nenhum componente monta URL na mão: `rota()` é o único lugar que sabe que o
 * padrão não aparece.
 */
export const IDIOMAS = ["pt", "en", "es"] as const;

export type Idioma = (typeof IDIOMAS)[number];

/**
 * `satisfies` e não `: Idioma`. A anotação alargaria o tipo para a união dos
 * três, e aí `if (idioma === IDIOMA_PADRAO)` deixaria de estreitar o tipo de
 * `idioma` dentro do bloco — que é exatamente o que a camada de conteúdo usa
 * para separar o português das traduções.
 */
export const IDIOMA_PADRAO = "pt" satisfies Idioma;

/** Valor do atributo `lang` do <html>. */
export const IDIOMA_HTML: Record<Idioma, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
};

/** Valor de `og:locale`, que usa sublinhado e região, não hífen. */
export const IDIOMA_OG: Record<Idioma, string> = {
  pt: "pt_BR",
  en: "en_US",
  es: "es_ES",
};

/**
 * Nome do idioma escrito nele mesmo. Quem procura outra língua procura a
 * palavra que conhece: "English" encontra quem não lê português, "Inglês"
 * não.
 */
export const IDIOMA_NOME: Record<Idioma, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
};

/** Sigla de duas letras, para o seletor compacto da barra. */
export const IDIOMA_SIGLA: Record<Idioma, string> = {
  pt: "PT",
  en: "EN",
  es: "ES",
};

export function ehIdioma(valor: string): valor is Idioma {
  return (IDIOMAS as readonly string[]).includes(valor);
}

/**
 * Monta a URL pública de um caminho num idioma.
 *
 * `rota("pt", "/cases")` devolve "/cases"; `rota("en", "/cases")` devolve
 * "/en/cases". A raiz é o caso que mais erra na mão: em inglês ela é "/en", e
 * não "/en/", porque a barra sobrando vira uma segunda URL para a mesma
 * página aos olhos do Google.
 */
export function rota(idioma: Idioma, caminho: string = "/"): string {
  const base = idioma === IDIOMA_PADRAO ? "" : `/${idioma}`;

  // Caminho que é só âncora da raiz ("/#metodo"): o prefixo entra no lugar da
  // barra, não antes dela. "/en/#metodo" é outra URL, o Next a redireciona
  // para "/en#metodo", e a âncora se perde no caminho.
  if (caminho.startsWith("/#")) return base ? `${base}${caminho.slice(1)}` : caminho;

  if (caminho === "/" || caminho === "") return base || "/";
  const limpo = caminho.startsWith("/") ? caminho : `/${caminho}`;
  return `${base}${limpo}`;
}

/**
 * Tira o prefixo de idioma de um caminho, devolvendo o caminho "nu".
 *
 * Serve ao seletor: para oferecer a página atual nos outros dois idiomas é
 * preciso primeiro saber qual é a página, sem a língua grudada nela.
 *
 * Tira também o `/pt`, que em tese nunca aparece numa URL pública. Aparece na
 * interna: o middleware reescreve `/cases` para `/pt/cases`, e `usePathname`
 * pode devolver um dos dois lados dessa reescrita conforme o componente esteja
 * renderizando no servidor ou no navegador. Ignorar o padrão aqui faria o
 * seletor montar `/en/pt/cases` em metade das renderizações — e o sintoma
 * seria um link quebrado que só aparece antes da hidratação.
 */
export function semIdioma(caminho: string): string {
  for (const idioma of IDIOMAS) {
    if (caminho === `/${idioma}`) return "/";
    if (caminho.startsWith(`/${idioma}/`)) return caminho.slice(idioma.length + 1);
  }
  return caminho;
}
