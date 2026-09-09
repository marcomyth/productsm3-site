/**
 * Configuração técnica do site — não editorial. Copy/conteúdo vive em
 * `src/content/site.ts`.
 */
export const siteConfig = {
  /**
   * Onde o site realmente responde. Alimenta canonical, sitemap, robots,
   * og:url/og:image e o schema Organization — tudo isso apontava pra
   * m3brasil.com.br, que hoje entrega 404 de um servidor Tomcat antigo com
   * certificado vencido. O Google lia o sitemap e encontrava página
   * inexistente; link compartilhado vinha sem imagem de preview.
   *
   * Se o site mudar de endereço, é esta linha — e só ela.
   */
  url: "https://agenciam3.com.br",
};
