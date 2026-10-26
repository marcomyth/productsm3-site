import type { Metadata } from "next";
import { IDIOMAS, IDIOMA_HTML, IDIOMA_PADRAO, rota, type Idioma } from "@/i18n/config";

/**
 * Canônica e hreflang de uma página, nos três idiomas.
 *
 * As duas coisas andam juntas e por isso saem da mesma função. A canônica diz
 * "esta é a versão oficial desta página"; o hreflang diz "e estas são as
 * mesmas páginas nos outros idiomas". Declarar uma sem a outra é pior do que
 * não declarar nenhuma: o Google passa a tratar as três traduções como
 * páginas concorrentes com o mesmo assunto.
 *
 * `x-default` aponta para o português porque é o idioma do negócio: é o que o
 * buscador serve a quem não casa com nenhum dos três.
 *
 * As URLs saem relativas de propósito. O `metadataBase` do layout as torna
 * absolutas na hora de renderizar, e assim o endereço do site continua
 * existindo num lugar só (src/config/site.ts).
 */
export function alternativas(idioma: Idioma, caminho: string = "/"): Metadata["alternates"] {
  const languages: Record<string, string> = { "x-default": rota(IDIOMA_PADRAO, caminho) };
  for (const outro of IDIOMAS) {
    languages[IDIOMA_HTML[outro]] = rota(outro, caminho);
  }

  return {
    canonical: rota(idioma, caminho),
    languages,
  };
}
