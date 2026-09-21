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
