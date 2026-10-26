"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
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
};

/**
 * Seletor de idioma fixo no canto inferior esquerdo.
 *
 * Saiu da barra do topo e veio para cá a pedido do cliente, e o motivo é o
 * celular: lá a barra só mostra a logo e o botão de menu, então o seletor
 * ficava dentro do menu fechado. Quem não abre o menu — que é a maioria de
 * quem chega por anúncio — nunca descobria que o site existe em três idiomas.
 * Um canto fixo é visto sem interação nenhuma, em qualquer largura e em
 * qualquer ponto da rolagem.
 *
 * Canto esquerdo, não direito: o direito é onde moram os botões de conversa,
 * e este site vende por WhatsApp. Ocupar aquele canto agora seria brigar com
 * o botão que vier depois.
 *
 * Fechado, mostra só a sigla do idioma atual. Aberto, os três nomes escritos
 * em cada língua — quem procura outro idioma procura a palavra que conhece, e
 * "English" encontra quem não lê português enquanto "Inglês" não encontra.
 *
 * São links de verdade e levam para a mesma página no outro idioma, não para
 * a home: mandar quem está lendo os cases em português para a home em inglês
 * é perder a leitura no meio.
 *
 * Ele não decide nada sozinho. Não há memória de escolha nem troca automática
 * na volta: quem compartilha o link de /en espera que o outro lado abra /en,
 * e uma preferência guardada do visitante anterior quebraria isso em
 * computador compartilhado.
 */
export function SeletorIdiomaCanto({ idioma }: Props) {
  const [aberto, setAberto] = React.useState(false);
  const caixa = React.useRef<HTMLDivElement>(null);
  const caminho = semIdioma(usePathname() || "/");
  const t = textos(idioma);

  // Fecha ao clicar fora e ao apertar Esc. As duas saídas existem porque o
  // painel cobre conteúdo: sem elas, quem abre por engano no celular fica com
  // uma caixa em cima do texto e sem nada óbvio para fechá-la.
  React.useEffect(() => {
    if (!aberto) return;

    function noDocumento(evento: MouseEvent) {
      if (caixa.current && !caixa.current.contains(evento.target as Node)) setAberto(false);
    }
    function naTecla(evento: KeyboardEvent) {
      if (evento.key === "Escape") setAberto(false);
    }

    document.addEventListener("mousedown", noDocumento);
    document.addEventListener("keydown", naTecla);
    return () => {
      document.removeEventListener("mousedown", noDocumento);
      document.removeEventListener("keydown", naTecla);
    };
  }, [aberto]);

  return (
    <div
      ref={caixa}
      className="tom-escuro fixed bottom-4 left-4 z-40 flex flex-col items-start gap-2 print:hidden"
    >
      {/* Renderização condicional, e não classe que esconde: com o painel
          apenas invisível, quem navega por teclado atravessaria três links que
          não estão na tela. */}
      {aberto && (
        <nav
          id="idiomas-canto"
          aria-label={t.barra.idioma}
          className="flex w-44 flex-col overflow-hidden rounded-xl border border-dark-divider bg-dark-border shadow-lg"
        >
          {IDIOMAS.map((outro) => {
            const atual = outro === idioma;
            return (
              <Link
                key={outro}
                href={rota(outro, caminho)}
                hrefLang={IDIOMA_HTML[outro]}
                aria-current={atual ? "true" : undefined}
                onClick={() => setAberto(false)}
                className={cn(
                  "flex items-center justify-between gap-3 px-space-sm py-space-xs font-sans text-body-sm transition-colors",
                  atual
                    ? "bg-dark-divider font-semibold text-on-dark"
                    : "text-on-dark-variant hover:bg-dark-divider hover:text-on-dark",
                )}
              >
                {IDIOMA_NOME[outro]}
                <span aria-hidden="true" className="font-label-meta text-label-meta t-acento">
                  {IDIOMA_SIGLA[outro]}
                </span>
              </Link>
            );
          })}
        </nav>
      )}

      {/* `bg-dark-border` e não `dark-surface`: o hero é `dark-surface`, e um
          botão da mesma cor do fundo em que ele estreia some justamente na
          primeira tela, que é onde ele mais precisa ser notado. Um degrau
          acima continua escuro o bastante sobre as seções claras. */}
      <button
        type="button"
        onClick={() => setAberto((v) => !v)}
        aria-expanded={aberto}
        aria-controls="idiomas-canto"
        aria-label={t.barra.idioma}
        className="inline-flex items-center gap-2 rounded-full border border-dark-divider bg-dark-border px-space-sm py-2 font-label-meta text-label-meta font-semibold uppercase tracking-[0.12em] text-on-dark shadow-lg transition-colors hover:bg-dark-divider"
      >
        <Globe aria-hidden="true" className="h-4 w-4 t-acento" />
        {IDIOMA_SIGLA[idioma]}
      </button>
    </div>
  );
}
