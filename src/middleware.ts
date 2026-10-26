import { NextResponse, type NextRequest } from "next/server";
import { IDIOMAS, IDIOMA_PADRAO } from "@/i18n/config";

/**
 * Faz a ponte entre a URL que o visitante vê e a pasta onde a rota mora.
 *
 * Toda página vive em `app/[idioma]/`, inclusive a portuguesa. Mas o
 * português não aparece na URL (ver src/i18n/config.ts), então `/cases`
 * precisa chegar em `/pt/cases` sem que a barra de endereço mude — daí
 * `rewrite` e não `redirect`.
 *
 * `/pt/...` digitado à mão é o caso inverso, e esse sim redireciona, de vez:
 * duas URLs servindo a mesma página é o que o buscador penaliza, e aqui a
 * canônica é a sem prefixo.
 *
 * Não há detecção automática por `Accept-Language`. Mandar um brasileiro para
 * `/en` porque o navegador dele está em inglês é adivinhar, e adivinhar errado
 * custa a visita; além disso, redirecionar por cabeçalho confunde o rastreador
 * do Google, que varre o site sempre com o mesmo idioma. Quem quiser trocar
 * tem o seletor na barra.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Arquivo servido como está: imagem, fonte, robots.txt, sitemap.xml.
  //
  // Esta verificação já esteve dentro do `matcher`, como `.*\..*`, e foi um
  // erro: o padrão depende de uma contrabarra escapada duas vezes, uma para a
  // string e outra para a expressão regular. Perder uma delas não quebra nada
  // visivelmente — o padrão continua válido, só passa a casar com outra coisa.
  // Foi o que aconteceu, e o sintoma foi `/cases` dando 404 enquanto `/`
  // funcionava, porque o padrão quebrado exigia pelo menos um caractere. Aqui
  // em JavaScript comum não há como errar em silêncio.
  if (pathname.includes(".")) return NextResponse.next();

  // `/pt` e `/pt/qualquer-coisa` → a mesma página sem o prefixo.
  if (pathname === `/${IDIOMA_PADRAO}` || pathname.startsWith(`/${IDIOMA_PADRAO}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(IDIOMA_PADRAO.length + 1) || "/";
    return NextResponse.redirect(url);
  }

  const jaTemIdioma = IDIOMAS.some(
    (idioma) =>
      idioma !== IDIOMA_PADRAO && (pathname === `/${idioma}` || pathname.startsWith(`/${idioma}/`)),
  );
  if (jaTemIdioma) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${IDIOMA_PADRAO}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

/**
 * O que o middleware NÃO deve tocar.
 *
 * `api` é superfície de ingestão, `_next` é o build, e `opengraph-image` e
 * `icon` são rotas de arquivo geradas pelo próprio Next — nenhuma delas existe
 * dentro de `[idioma]`, então reescrever qualquer uma daria 404.
 */
export const config = {
  matcher: ["/((?!api|_next|opengraph-image|icon).*)"],
};
