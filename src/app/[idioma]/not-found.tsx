"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IDIOMAS, IDIOMA_PADRAO, rota, type Idioma } from "@/i18n/config";
import { textos } from "@/i18n/dicionario";

/**
 * Página de erro 404, no idioma de quem errou o endereço.
 *
 * É o único arquivo de rota que descobre o idioma pela URL em vez de receber
 * `params`: o Next não passa parâmetro nenhum para `not-found`, porque ela
 * pode ser acionada antes de a rota casar com qualquer segmento. Daí ser
 * componente de cliente e ler `usePathname` — é a única fonte disponível.
 *
 * Quem cair aqui por uma URL sem prefixo recebe português, que é o padrão. É
 * a resposta certa: sem prefixo e sem rota, não há nada na requisição que
 * diga outra língua.
 */
function idiomaDaUrl(caminho: string): Idioma {
  const primeiro = caminho.split("/")[1];
  return IDIOMAS.find((idioma) => idioma === primeiro) ?? IDIOMA_PADRAO;
}

export default function NotFound() {
  const idioma = idiomaDaUrl(usePathname() || "/");
  const t = textos(idioma).naoEncontrada;

  return (
    <section className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-space-sm px-grid-margin-mobile py-space-3xl text-center md:px-grid-margin-tablet lg:px-grid-margin-desktop">
      <span className="font-label-index text-label-index uppercase tracking-[0.2em] text-secondary">
        {t.codigo}
      </span>
      <h1 className="font-sans text-display-lg-mobile font-bold leading-tight tracking-tight text-primary md:text-display-lg">
        {t.titulo}
      </h1>
      <p className="max-w-md font-sans text-body-lead leading-relaxed text-on-surface-variant">
        {t.texto}
      </p>
      <Link
        href={rota(idioma, "/")}
        className="mt-space-xs inline-flex items-center justify-center rounded bg-secondary px-space-md py-space-sm font-label-meta text-label-meta uppercase tracking-[0.14em] text-on-secondary shadow-sm transition-all duration-150 hover:brightness-105"
      >
        {t.voltar}
      </Link>
    </section>
  );
}
