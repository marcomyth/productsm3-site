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
