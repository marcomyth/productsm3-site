import type { LandingPage } from "@/lib/types";
import { TESTIMONIALS_SECTION } from "@/content/testimonials";
import { FAQ_SECTION } from "@/content/faq";

/**
 * Conteúdo da PÁGINA INICIAL (home) — fonte da verdade do front.
 *
 * O front renderiza estas seções diretamente (ver src/lib/strapi.ts →
 * getLandingPage). O Strapi é apenas reserva/preview. Para editar qualquer
 * texto da home, edite aqui, rode `npx tsc --noEmit`, commite e faça push.
 *
 * Depoimentos e FAQ são seções DA HOME — o conteúdo mora em
 * src/content/testimonials.ts e src/content/faq.ts e é importado abaixo.
 *
 * Na migração LP → site multipágina, estas seções saíram da home e viraram
 * páginas próprias (conteúdo em src/content/, rota em src/app/):
 *   - Serviços   → /servicos   (src/content/services.ts)
 *   - Portfólio  → /portfolio  (src/content/portfolio.ts)
 *   - Processo   → /processo   (src/content/process.ts)
 *
 * A ordem do array `sections` é a ordem de renderização na home.
 */
export const LOCAL_LANDING_PAGE: LandingPage = {
  id: 1,
  title: "Landing Page",
  seo: {
    metaTitle: "productsm3 — Sites, landing pages e SaaS sob medida",
    metaDescription:
      "Estúdio de produtos digitais especializado em sites institucionais, landing pages, e-commerces e SaaS. Design, performance e SEO de ponta.",
    keywords:
      "criação de sites, landing page, e-commerce, saas, desenvolvimento web, agência digital",
  },
  sections: [
    // 1 — HERO
    {
      __component: "sections.hero",
      id: 1,
      eyebrow: "Estúdio de produtos digitais",
      title: "Sites e produtos digitais que geram resultado.",
      subtitle:
        "A productsm3 cria sites institucionais, landing pages, e-commerces e SaaS sob medida — com design, performance e SEO de ponta.",
      primaryCta: {
        label: "Quero um orçamento",
        url: "#contato",
        variant: "primary",
        external: false,
      },
      secondaryCta: {
        label: "Ver portfólio",
        url: "/portfolio",
        variant: "outline",
        external: false,
      },
    },

    // 2 — STATS
    {
      __component: "sections.stats",
      id: 2,
      title: "Resultados que falam por si",
      subtitle:
        "Mais de 7 anos transformando ideias em produtos digitais de alto impacto.",
      items: [
        { id: 1, value: "120", label: "Projetos entregues", suffix: "+" },
        { id: 2, value: "95", label: "Score médio no PageSpeed", suffix: "" },
        { id: 3, value: "18", label: "Conversão média em LPs", suffix: "%" },
        { id: 4, value: "99.9", label: "Uptime garantido", suffix: "%" },
      ],
    },

    // 3 — FEATURE GRID
    {
      __component: "sections.feature-grid",
      id: 3,
      eyebrow: "Por que productsm3",
      title: "Mais que um site bonito — um produto que vende.",
      subtitle:
        "Cada projeto combina design, performance, SEO e estratégia de conversão. Resultado: sites que carregam rápido, posicionam no Google e convertem visitantes em clientes.",
      features: [
        {
          id: 1,
          icon: "lucide:palette",
          title: "Design sob medida",
          description:
            "Nada de templates engessados. Cada projeto nasce de um briefing profundo e tem identidade única.",
        },
        {
          id: 2,
          icon: "lucide:gauge",
          title: "Performance de ponta",
          description:
            "Score 90+ no PageSpeed, Core Web Vitals no verde e tempo de carregamento abaixo de 1s.",
        },
        {
          id: 3,
          icon: "lucide:search",
          title: "SEO técnico desde o dia 1",
          description:
            "Estrutura semântica, schema.org, sitemap, robots e Open Graph configurados corretamente.",
        },
        {
          id: 4,
          icon: "lucide:shield-check",
          title: "Acessibilidade real",
          description:
            "Conformidade com WCAG 2.2 AA — seu site funciona para todo mundo, em todos os dispositivos.",
        },
        {
          id: 5,
          icon: "lucide:rocket",
          title: "Stack moderna",
          description:
            "Next.js, Astro, Strapi, Vercel. Tecnologia atual, deploy contínuo e código bem documentado.",
        },
        {
          id: 6,
          icon: "lucide:headphones",
          title: "Suporte de verdade",
          description:
            "Atendimento direto com quem desenvolveu o seu projeto. Sem terceirizar, sem call center.",
        },
      ],
    },

    // 4 — DEPOIMENTOS (seção da home; conteúdo em src/content/testimonials.ts)
    TESTIMONIALS_SECTION,

    // 5 — FAQ (seção da home; conteúdo em src/content/faq.ts)
    FAQ_SECTION,

    // 6 — CTA
    {
      __component: "sections.cta",
      id: 6,
      title: "Pronto para colocar seu projeto no ar?",
      description:
        "Conte para a gente o que você precisa. Em até 24h respondemos com próximos passos e estimativa inicial.",
      primaryCta: {
        label: "Solicitar orçamento",
        url: "#contato",
        variant: "primary",
        external: false,
      },
      secondaryCta: {
        label: "Falar no WhatsApp",
        url: "https://wa.me/5511999990000",
        variant: "outline",
        external: true,
      },
    },

    // 7 — CONTACT FORM
    {
      __component: "sections.contact-form",
      id: 7,
      eyebrow: "Contato",
      title: "Vamos conversar sobre o seu projeto.",
      subtitle:
        "Preencha o formulário e nossa equipe entra em contato em até 24 horas úteis.",
      submitLabel: "Enviar mensagem",
      successMessage:
        "Recebemos sua mensagem. Em breve nossa equipe entra em contato!",
    },
  ],
};
