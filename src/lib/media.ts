import "server-only";

/**
 * Resolve a URL pública de uma mídia.
 *
 * Com o conteúdo no repo, uma mídia é ou uma URL absoluta ou um caminho
 * relativo servido de `public/`. A função continua existindo — em vez de os
 * componentes montarem URL na mão — porque é aqui que entra o bucket do
 * Supabase Storage quando as imagens migrarem.
 */
export function mediaUrl(url: string | null | undefined): string {
  return url ?? "";
}
