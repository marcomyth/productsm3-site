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
 * Botão de ação: pílula verde, serifada em itálico e caixa baixa.
 *
 * Ele era caixa alta, negrito e 1.8rem — a medida da referência, que eu tinha
 * copiado por fidelidade. Na nossa página não funcionou: lá o botão é magenta
 * sobre branco, aqui é verde claro sobre azul escuro, e o mesmo tamanho que lá
 * é um acento aqui vira o objeto mais pesado da primeira tela, maior que o
 * próprio subtítulo que deveria levar até ele.
 *
 * O que sustenta o destaque agora não é o tamanho, é a voz. O botão é a única
 * coisa do site em itálico, e a serifada já era a segunda família da página —
 * então ele continua se destacando de tudo em volta sem precisar competir em
 * área com o título. 1.5rem em caixa baixa contra 1.8rem em caixa alta é,
 * medido pela altura das maiúsculas, menos da metade da mancha anterior.
 *
 * Vive aqui como constante, e não como componente, porque os lugares que usam
 * isso precisam de tags diferentes: `Link` do Next na navegação interna e `<a>`
 * cru nos que vão pro WhatsApp.
 */
export const BOTAO_ACAO =
  "inline-flex max-w-full items-center justify-center rounded-full bg-action px-space-md py-space-sm text-center font-serif text-[1.25rem] font-normal italic leading-tight text-on-action shadow-sm transition-all duration-300 hover:brightness-95 md:px-space-lg md:text-[1.5rem]";
