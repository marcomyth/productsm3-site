import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwind class merger. Safe to import from both client and server components.
 * Do NOT add server-only deps (env, fs, etc.) to this file — Next.js will pull
 * it into the browser bundle through any client component that uses cn().
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Atributos de segurança para um link que sai do site.
 *
 * Derivado do próprio endereço, e não de um campo booleano no conteúdo: os
 * botões de CTA passaram a apontar pro WhatsApp, e um flag separado da URL
 * fatalmente divergiria dela na próxima troca. Âncora interna (`/#auditoria`)
 * continua abrindo na mesma aba.
 */
export function externalLinkProps(url: string) {
  if (!/^https?:\/\//i.test(url)) return {};
  return { target: "_blank", rel: "noopener noreferrer" } as const;
}

/**
 * Botão de ação, no formato da referência: pílula, caixa alta, e deliberadamente
 * grande — lá ele tem 1.8rem, maior que vários dos títulos da própria página.
 *
 * Eu tinha reduzido isso para 20px por conta própria, com o argumento de que
 * o verde da M3 é muito mais claro que o magenta deles e pesaria demais. O
 * pedido era fidelidade, e o tamanho do botão é uma das coisas que mais
 * define a aparência da referência, então voltou ao tamanho dela. Se pesar na
 * tela, o ajuste é este número.
 *
 * Vive aqui como constante, e não como componente, porque os cinco lugares
 * que usam isso precisam de tags diferentes: `Link` do Next na navegação
 * interna e `<a>` cru nos que vão pro WhatsApp.
 */
export const BOTAO_ACAO =
  "inline-flex max-w-full items-center justify-center rounded-full bg-action px-space-md py-space-sm text-center font-sans text-[1.25rem] font-bold uppercase leading-tight tracking-[0.04em] text-on-action shadow-sm transition-all duration-300 hover:brightness-95 md:px-space-lg md:py-space-md md:text-[1.8rem]";

/** Mesma pílula, na medida que caiba na barra de 72px do cabeçalho. */
export const BOTAO_ACAO_COMPACTO =
  "inline-flex items-center justify-center rounded-full bg-action px-5 py-2 font-sans text-body-sm font-semibold uppercase tracking-[0.08em] text-on-action shadow-sm transition-all duration-300 hover:brightness-95";
