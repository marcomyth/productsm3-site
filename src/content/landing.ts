import type { LandingPage } from "@/lib/types";

/**
 * Conteúdo da LANDING PAGE — fonte da verdade do front.
 *
 * O front renderiza estas seções diretamente (ver src/lib/strapi.ts →
 * getLandingPage). O Strapi é apenas reserva/preview. Para editar qualquer
 * texto do site (hero, serviços, FAQ, depoimentos, etc.), edite aqui,
 * rode `npx tsc --noEmit`, commite e faça push.
 *
 * A ordem do array `sections` é a ordem de renderização na página.
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
        url: "#portfolio",
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

    // 4 — SERVICES LIST
    {
      __component: "sections.services-list",
      id: 4,
      eyebrow: "O que fazemos",
      title: "Serviços",
      subtitle:
        "Do site institucional ao SaaS completo — entregamos a solução web que sua empresa precisa.",
      services: [
        {
          id: 1,
          title: "Sites Institucionais",
          slug: "sites-institucionais",
          icon: "lucide:building-2",
          shortDescription:
            "Sites profissionais que transmitem credibilidade e geram autoridade para sua marca.",
          features: [
            {
              icon: "lucide:palette",
              title: "Design exclusivo",
              description: "Identidade visual única, alinhada à marca e ao público.",
            },
            {
              icon: "lucide:gauge",
              title: "Performance máxima",
              description: "Score 90+ no PageSpeed e Core Web Vitals no verde.",
            },
            {
              icon: "lucide:search",
              title: "SEO técnico",
              description: "Estrutura, schema.org e meta tags prontos para o Google.",
            },
          ],
        },
        {
          id: 2,
          title: "Landing Pages",
          slug: "landing-pages",
          icon: "lucide:target",
          shortDescription:
            "Páginas focadas em conversão para campanhas, lançamentos e captação de leads.",
          features: [
            {
              icon: "lucide:zap",
              title: "Conversão otimizada",
              description: "A/B testing, heatmaps e otimização contínua.",
            },
            {
              icon: "lucide:plug",
              title: "Integrações",
              description: "Conecta com RD Station, HubSpot, Pipedrive, WhatsApp e mais.",
            },
            {
              icon: "lucide:bar-chart",
              title: "Mensuração",
              description: "GTM, GA4 e pixels configurados desde o dia 1.",
            },
          ],
        },
        {
          id: 3,
          title: "E-commerce",
          slug: "ecommerce",
          icon: "lucide:shopping-cart",
          shortDescription:
            "Lojas virtuais escaláveis, com checkout otimizado e integração com meios de pagamento.",
          features: [
            {
              icon: "lucide:credit-card",
              title: "Checkout otimizado",
              description: "PIX, cartão, boleto e parcelamento sem dor de cabeça.",
            },
            {
              icon: "lucide:truck",
              title: "Logística integrada",
              description: "Correios, Melhor Envio, Frenet e transportadoras próprias.",
            },
            {
              icon: "lucide:trending-up",
              title: "Pronto para escalar",
              description: "Infraestrutura preparada para Black Friday e picos de tráfego.",
            },
          ],
        },
        {
          id: 4,
          title: "Aplicações SaaS",
          slug: "aplicacoes-saas",
          icon: "lucide:layers",
          shortDescription:
            "Plataformas web sob medida para automatizar operações e gerar receita recorrente.",
          features: [
            {
              icon: "lucide:lock",
              title: "Autenticação robusta",
              description: "Login social, MFA, RBAC e SSO quando necessário.",
            },
            {
              icon: "lucide:repeat",
              title: "Billing recorrente",
              description: "Stripe, Pagar.me ou Iugu integrados desde o início.",
            },
            {
              icon: "lucide:cloud",
              title: "Cloud escalável",
              description: "Deploy em Vercel, AWS ou GCP com CI/CD.",
            },
          ],
        },
        {
          id: 5,
          title: "Blog e Conteúdo",
          slug: "blog-e-conteudo",
          icon: "lucide:book-open",
          shortDescription:
            "Plataformas de conteúdo otimizadas para SEO e estratégia de inbound marketing.",
          features: [
            {
              icon: "lucide:edit-3",
              title: "CMS amigável",
              description: "Sua equipe publica sem precisar de desenvolvedor.",
            },
            {
              icon: "lucide:rss",
              title: "SEO + AEO",
              description: "Conteúdo pronto para Google, ChatGPT e Perplexity.",
            },
            {
              icon: "lucide:share-2",
              title: "Distribuição",
              description: "RSS, newsletter, redes sociais integradas.",
            },
          ],
        },
        {
          id: 6,
          title: "Manutenção e Performance",
          slug: "manutencao-e-performance",
          icon: "lucide:wrench",
          shortDescription:
            "Cuidamos do seu site para que ele permaneça rápido, seguro e sempre no ar.",
          features: [
            {
              icon: "lucide:shield",
              title: "Segurança",
              description: "WAF, backups diários e monitoramento de vulnerabilidades.",
            },
            {
              icon: "lucide:activity",
              title: "Uptime 99.9%",
              description: "Monitoramento 24/7 com alertas e SLA garantido.",
            },
            {
              icon: "lucide:rocket",
              title: "Otimização contínua",
              description: "Melhorias mensais de performance e UX.",
            },
          ],
        },
      ],
    },

    // 5 — PROCESS
    {
      __component: "sections.process",
      id: 5,
      eyebrow: "Como trabalhamos",
      title: "Um processo claro, do briefing ao deploy.",
      subtitle:
        "Você sempre sabe em que etapa está o seu projeto — sem caixas-pretas.",
      steps: [
        {
          id: 1,
          stepNumber: 1,
          title: "Briefing e estratégia",
          description:
            "Entendemos seu negócio, público e objetivos. Definimos escopo, prazo e métricas de sucesso.",
          icon: "lucide:compass",
        },
        {
          id: 2,
          stepNumber: 2,
          title: "Design e protótipo",
          description:
            "Wireframes e protótipos em Figma com aprovação iterativa antes de uma única linha de código.",
          icon: "lucide:figma",
        },
        {
          id: 3,
          stepNumber: 3,
          title: "Desenvolvimento",
          description:
            "Sprints semanais com entregas visíveis em ambiente de homologação. Você acompanha tudo.",
          icon: "lucide:code-2",
        },
        {
          id: 4,
          stepNumber: 4,
          title: "Lançamento e otimização",
          description:
            "Deploy, testes finais, analytics e SEO. Depois, otimizamos com base em dados reais.",
          icon: "lucide:rocket",
        },
      ],
    },

    // 6 — PORTFOLIO
    {
      __component: "sections.portfolio",
      id: 6,
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
    },

    // 7 — TESTIMONIALS
    {
      __component: "sections.testimonials",
      id: 7,
      eyebrow: "Depoimentos",
      title: "O que nossos clientes dizem.",
      subtitle: "Confiança construída projeto por projeto.",
      testimonials: [
        {
          id: 1,
          name: "Mariana Costa",
          role: "CEO",
          company: "Aurora Finance",
          quote:
            "A productsm3 entendeu nosso produto desde o primeiro briefing. Entregaram um SaaS robusto, escalável e bonito — fechamos a Série A 3 meses depois do lançamento.",
          rating: 5,
        },
        {
          id: 2,
          name: "Rafael Linhares",
          role: "Sócio-fundador",
          company: "Vértice Arquitetura",
          quote:
            "Pela primeira vez nosso site representa de verdade o nível dos nossos projetos. Recebemos mais briefings qualificados em 2 meses do que em todo o ano anterior.",
          rating: 5,
        },
        {
          id: 3,
          name: "Camila Tavares",
          role: "Head de Marketing",
          company: "Helix Tecnologia",
          quote:
            "A landing converteu 18% no lançamento. A equipe da productsm3 é técnica de verdade e entende de marketing — uma combinação rara.",
          rating: 5,
        },
        {
          id: 4,
          name: "Diego Almeida",
          role: "Fundador",
          company: "Brutto Coffee",
          quote:
            "Migramos para o headless e o resultado foi imediato: site 4x mais rápido, conversão +35% e SEO crescendo todo mês.",
          rating: 5,
        },
        {
          id: 5,
          name: "Patricia Nunes",
          role: "Diretora de Conteúdo",
          company: "Norte Médico",
          quote:
            "Saímos de um WordPress travado para uma plataforma de verdade. Hoje publicamos sem depender de ninguém e o tráfego orgânico não para de crescer.",
          rating: 5,
        },
      ],
    },

    // 8 — FAQ
    {
      __component: "sections.faq",
      id: 8,
      title: "Perguntas frequentes",
      subtitle: "Dúvidas comuns de quem está pensando em contratar a gente.",
      items: [
        {
          id: 1,
          question: "Quanto custa um site com a productsm3?",
          answer:
            "O investimento varia conforme o escopo. Sites institucionais começam em R$ 9.000. Landing pages a partir de R$ 4.500. SaaS são orçados por sprint. Após o briefing inicial, enviamos uma proposta detalhada.",
        },
        {
          id: 2,
          question: "Quanto tempo leva para entregar um projeto?",
          answer:
            "Landing pages ficam prontas em 2 a 3 semanas. Sites institucionais entre 4 e 8 semanas. Projetos de SaaS variam — em média começam a rodar em produção em 8 a 12 semanas.",
        },
        {
          id: 3,
          question: "Vocês oferecem hospedagem?",
          answer:
            "Sim. Usamos Vercel, Cloudflare e AWS como padrão. Cuidamos do deploy, do domínio e do SSL. Você pode optar por usar a nossa infra ou hospedar com seu provedor.",
        },
        {
          id: 4,
          question: "E depois que o site entra no ar?",
          answer:
            "Oferecemos um plano mensal de manutenção opcional: atualizações, monitoramento, backups, ajustes e melhorias contínuas de performance e SEO.",
        },
        {
          id: 5,
          question: "Posso editar os textos e imagens sozinho?",
          answer:
            "Sim. Entregamos com um CMS amigável (Strapi, Sanity ou WordPress headless, conforme o caso). Sua equipe edita sem precisar de desenvolvedor.",
        },
      ],
    },

    // 9 — CTA
    {
      __component: "sections.cta",
      id: 9,
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

    // 10 — CONTACT FORM
    {
      __component: "sections.contact-form",
      id: 10,
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
