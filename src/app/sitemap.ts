import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getBlogPosts } from "@/lib/content";
import { IDIOMAS, IDIOMA_HTML, IDIOMA_PADRAO, rota } from "@/i18n/config";

/**
 * Endereço absoluto de uma página num idioma.
 *
 * A raiz em português é `rota()` devolvendo "/", e concatenar isso ao domínio
 * daria "https://agenciam3.com.br/" com barra no fim — que é outra URL para o
 * buscador, diferente da canônica que o layout declara. Uma divergência dessa
 * entre sitemap e canônica é exatamente o tipo de sinal contraditório que faz
 * o Google escolher sozinho qual indexar.
 */
function endereco(idioma: (typeof IDIOMAS)[number], caminho: string): string {
  const r = rota(idioma, caminho);
  return `${siteConfig.url}${r === "/" ? "" : r}`;
}

/**
 * Cada página aparece uma vez por idioma, e cada entrada carrega os links
 * para as outras duas em `alternates.languages`. É o par do hreflang que o
 * layout emite no HTML: o sitemap é por onde o buscador descobre as
 * traduções de páginas que ele ainda não rastreou.
 */
function comAlternativas(caminho: string, resto: Omit<MetadataRoute.Sitemap[number], "url">) {
  const languages = Object.fromEntries(
    IDIOMAS.map((idioma) => [IDIOMA_HTML[idioma], endereco(idioma, caminho)]),
  );

  return IDIOMAS.map((idioma) => ({
    ...resto,
    url: endereco(idioma, caminho),
    alternates: { languages },
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { posts } = await getBlogPosts({ pageSize: 1000 });

  return [
    ...comAlternativas("/", { changeFrequency: "weekly", priority: 1 }),
    // Os cases saíram da home e ganharam página própria. Sem esta linha, a
    // página existiria sem nunca ser anunciada para busca.
    ...comAlternativas("/cases", { changeFrequency: "monthly", priority: 0.9 }),
    ...comAlternativas("/blog", { changeFrequency: "daily", priority: 0.8 }),
    ...comAlternativas("/privacidade", { changeFrequency: "yearly", priority: 0.3 }),
    ...comAlternativas("/compliance", { changeFrequency: "yearly", priority: 0.3 }),
    // Os posts não entram nos três idiomas: eles são escritos num idioma só e
    // não têm tradução. Anunciá-los sob /en e /es prometeria ao buscador uma
    // versão em inglês que não existe.
    ...posts.map((post) => ({
      url: endereco(IDIOMA_PADRAO, `/blog/${post.slug}`),
      lastModified: post.updatedAt ?? post.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
