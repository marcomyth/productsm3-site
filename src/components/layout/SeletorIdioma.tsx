"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IDIOMAS,
  IDIOMA_HTML,
  IDIOMA_NOME,
  IDIOMA_SIGLA,
  rota,
  semIdioma,
  type Idioma,
} from "@/i18n/config";
import { textos } from "@/i18n/dicionario";
import { cn } from "@/lib/utils";

type Props = {
  idioma: Idioma;
  className?: string;
};

/**
 * Troca de idioma: três links, nenhum estado.
 *
 * Com três opções, uma lista suspensa custa mais do que entrega — um clique
 * para abrir, outro para escolher, e nada visível enquanto está fechada. Lado
 * a lado, as três cabem no espaço de uma palavra e quem procura a sua língua
 * a vê sem interagir.
 *
 * São links de verdade, e não botões que empurram a rota: o buscador segue
 * cada um até a tradução correspondente, e quem abre em outra aba recebe a
 * página no idioma que escolheu.
 *
 * O destino é a mesma página, não a home. Mandar quem está lendo os cases em
 * português para a home em inglês é perder a leitura no meio, e é o erro mais
 * comum de seletor de idioma.
 */
export function SeletorIdioma({ idioma, className }: Props) {
  const caminho = semIdioma(usePathname() || "/");
  const t = textos(idioma);

  return (
    <nav aria-label={t.barra.idioma} className={cn("flex items-center", className)}>
      {IDIOMAS.map((outro, i) => {
        const atual = outro === idioma;
        return (
          <span key={outro} className="flex items-center">
            {i > 0 && (
              <span aria-hidden="true" className="px-1 t-apagado opacity-40">
                /
              </span>
            )}
            <Link
              href={rota(outro, caminho)}
              hrefLang={IDIOMA_HTML[outro]}
              aria-current={atual ? "true" : undefined}
              className={cn(
                "rounded px-1 font-label-meta text-label-meta font-semibold uppercase tracking-[0.12em] transition-colors",
                atual ? "t-forte" : "t-fraco hover:t-forte",
              )}
            >
              {/* A sigla é o que cabe na barra; o nome inteiro é o que um
                  leitor de tela anuncia. "PT" soletrado não diz nada, e
                  "Português" não caberia entre o menu e o botão. */}
              <span aria-hidden="true">{IDIOMA_SIGLA[outro]}</span>
              <span className="sr-only">{IDIOMA_NOME[outro]}</span>
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
