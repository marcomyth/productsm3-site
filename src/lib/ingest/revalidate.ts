import { revalidatePath, revalidateTag } from "next/cache";

/**
 * Roda depois de todo create/update bem-sucedido: tag do post + tag da
 * listagem, e por cima uma limpeza geral (revalidatePath da layout raiz)
 * como rede de segurança — invalidação específica às vezes não pega em
 * todas as camadas de cache.
 */
export function revalidateBlogPost(slug: string): void {
  revalidateTag("blog-posts");
  revalidateTag(`blog-post-${slug}`);
  revalidatePath("/", "layout");
}
