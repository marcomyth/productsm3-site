import type { PortfolioSection } from "@/lib/types";

/**
 * Conteúdo da página de PORTFÓLIO (/portfolio).
 * Renderizado por src/app/portfolio/page.tsx via componente Portfolio.
 */
export const PORTFOLIO_SECTION: PortfolioSection = {
  __component: "sections.portfolio",
  id: 1,
  eyebrow: "Cases recentes",
  title: "Projetos que nos deixam orgulhosos.",
  subtitle: "Uma seleção dos últimos trabalhos entregues pela productsm3.",
  projects: [
    {
      id: 1,
      title: "Plataforma Aurora Finance",
      slug: "aurora-finance",
      client: "Aurora Finance",
      year: 2026,
      category: "saas",
      shortDescription:
        "SaaS de gestão financeira para PMEs, com onboarding em 3 minutos e billing recorrente.",
      liveUrl: "https://exemplo-aurora.com",
      technologies: ["Next.js", "TypeScript", "Postgres", "Prisma", "Stripe", "Vercel"],
    },
    {
      id: 2,
      title: "Site Institucional Vértice Arquitetura",
      slug: "vertice-arquitetura",
      client: "Vértice Arquitetura",
      year: 2025,
      category: "site-institucional",
      shortDescription:
        "Site institucional minimalista que valoriza o portfólio de um escritório de arquitetura premium.",
      liveUrl: "https://exemplo-vertice.com",
      technologies: ["Astro", "TailwindCSS", "Strapi", "Cloudflare"],
    },
    {
      id: 3,
      title: "E-commerce Brutto Coffee",
      slug: "brutto-coffee",
      client: "Brutto Coffee",
      year: 2025,
      category: "ecommerce",
      shortDescription:
        "Loja virtual headless de café especial, com clube de assinatura e checkout otimizado.",
      liveUrl: "https://exemplo-brutto.com",
      technologies: ["Next.js", "Shopify", "Sanity", "Stripe"],
    },
    {
      id: 4,
      title: "Landing Page Lançamento Helix Pro",
      slug: "helix-pro-launch",
      client: "Helix Tecnologia",
      year: 2026,
      category: "landing-page",
      shortDescription:
        "Landing page de lançamento que converteu 18% do tráfego pago na primeira semana.",
      liveUrl: "https://exemplo-helix.com",
      technologies: ["Astro", "TailwindCSS", "GTM", "Meta Ads"],
    },
    {
      id: 5,
      title: "Portal de Conteúdo Norte Médico",
      slug: "norte-medico",
      client: "Norte Médico",
      year: 2025,
      category: "blog",
      shortDescription:
        "Portal de saúde com mais de 400 artigos otimizados para SEO e geração de leads.",
      liveUrl: "https://exemplo-norte.com",
      technologies: ["Next.js", "Strapi", "Postgres", "Algolia"],
    },
    {
      id: 6,
      title: "App Web Coletta Logística",
      slug: "coletta-logistica",
      client: "Coletta",
      year: 2026,
      category: "app-web",
      shortDescription:
        "Aplicação web para gestão de coletas e rotas, usada por 1.200 motoristas diariamente.",
      liveUrl: "https://exemplo-coletta.com",
      technologies: ["React", "PWA", "Node.js", "Postgres", "Mapbox"],
    },
  ],
};
