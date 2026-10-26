import type { Idioma } from "@/i18n/config";
import type { ConteudoLegal } from "./tipos";
import { legalPt } from "./pt";
import { legalEn } from "./en";
import { legalEs } from "./es";

const LEGAL: Record<Idioma, ConteudoLegal> = {
  pt: legalPt,
  en: legalEn,
  es: legalEs,
};

export function legal(idioma: Idioma): ConteudoLegal {
  return LEGAL[idioma];
}

export { REVISADO_EM } from "./tipos";
export type { ConteudoLegal, PaginaLegal, SecaoLegal } from "./tipos";
