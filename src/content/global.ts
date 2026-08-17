import type { Global } from "@/lib/types";

/**
 * Conteúdo GLOBAL — fonte da verdade do front (header, footer, SEO).
 *
 * O front lê daqui primeiro; o Strapi é apenas reserva (ver src/lib/strapi.ts).
 * Para editar header/footer/SEO do site, edite este arquivo, commite e faça push.
 *
 * Obs: email, copyright e o bloco "Conecte-se" do rodapé são fixados em
 * src/config/site.ts / Footer.tsx (overrides) e têm prioridade sobre o que
 * estiver aqui.
 */
export const LOCAL_GLOBAL: Global = {
  siteName: "productsm3",
  defaultSeo: {
    metaTitle: "productsm3 — Sites, landing pages e SaaS de alta performance",
    metaDescription:
      "Estúdio de produtos digitais. Criamos sites institucionais, landing pages, e-commerces e SaaS sob medida para empresas que querem crescer.",
    keywords: "criação de sites, landing page, e-commerce, saas, desenvolvimento web",
  },
  header: {
    links: [
      // Cada item é uma página própria do site (migração LP → multipágina).
      { label: "Serviços", url: "/servicos", external: false },
      { label: "Portfólio", url: "/portfolio", external: false },
      { label: "Processo", url: "/processo", external: false },
      { label: "Depoimentos", url: "/depoimentos", external: false },
      { label: "FAQ", url: "/faq", external: false },
    ],
    cta: {
      // Formulário de contato permanece na home (âncora #contato).
      label: "Fale com a gente",
      url: "/#contato",
      variant: "primary",
      external: false,
    },
  },
  footer: {
    tagline: "Criamos sites e produtos digitais que geram resultado.",
    // Colunas de links vazias — rodapé enxuto (igual ao que está no ar).
    columns: [],
    copyright: "© 2026 productsm3. Todos os direitos reservados.",
  },
  contact: {
    email: "contato@productsm3.com",
    phone: "+55 (11) 99999-0000",
    address: "São Paulo, SP — atendimento 100% remoto",
  },
};
