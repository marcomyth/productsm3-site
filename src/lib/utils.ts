import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { readEnv } from "./env";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function mediaUrl(url: string | null | undefined): string {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  const base = readEnv("STRAPI_URL") || readEnv("NEXT_PUBLIC_STRAPI_URL") || "http://localhost:1337";
  return `${base}${url}`;
}
