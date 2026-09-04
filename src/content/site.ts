import type { SiteContent } from "@/lib/types";

/**
 * Conteúdo da landing page — M3 Brasil (Engenharia & Operação de Mídia para
 * E-Commerce). Transcrito do export Stitch em
 * stitch_m3_brasil_editorial_landing_page.zip (code.html), fonte de verdade
 * visual e de copy aprovada para este brief.
 *
 * As imagens de hero/cases ainda são os placeholders do Stitch
 * (lh3.googleusercontent.com/aida-public/...) — trocar por fotografia real
 * antes de qualquer publicação em produção.
 */

const PLACEHOLDER_HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAvYdhIxKSbUKLaiXsAvIqyQdZ3Z4ABvUdhUiKrQUWP_z65OWzrtCIcJBvW7b0l0L7Pf-hndfb9lB4n-IKq0WFeRsidGrBBWmQcntqUtTFbzXsb88eEKg_udCvp_CTqN4yU0hmjCY-U_l_t0OgEJwPCfhRx3bQ4br5f_RHXxmcXjfVYFDeycgNyIW7BU-R8p12tareFL-isRrkEAnxYzPiXc2FZ6lzh4m2g1jcKjXAb33_94_BLORTefQ";

const PLACEHOLDER_CASE_MODA_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC2HWbjmYGDdnwAI2Y78XAXBPZacJqZwvtoglMEER-ZMKyoPkYZeCaSPG_c4L0YceKIYH2E_LsLDqAfpdH7zTwRq-UmafBjqJiR-TiNh9uxNzO_SYdvLRcTEHUkHvuE1s5g3ombw8N0B4Tq-U8zYF0pRC6cExAxwonQWTkgo8E-bRK0TWxHYvzq-EFQmiUSf3A5vjCb4L1wrmnf77p4u7VLI5nlWWQODmeS_eyGByI45_y1FfwyaiMdxg";

const PLACEHOLDER_CASE_CASA_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBgOj1sY_B-XGI-EiGiwPUdB4XivAYVAua-ADLBa0AIdyaC8tCBTwBauJpeK6fmO2H5gzepeCFCSe354pqtxu_GNv9XHsLgP1YMQY7-247Zysi6IVXiXCM4nu8zuEdVnq-YhYZ5HvsZIR4xfw5ko__ffXH0wvCra-37tIOjJwO0Xx6XntA8xiCHw4L1vZn_0T_Ul7QdN-nxeLRuM7zSYu__hF8fUFh4axUKYPqHfRiud14vn9N9IHIuUg";

export const siteContent: SiteContent = {
  seo: {
    title: "M3 Brasil — Engenharia & Operação de Mídia para E-Commerce",
    description:
      "Assumimos a operação de aquisição e a engenharia proprietária de e-commerces que já vendem e precisam escalar sem destruir a margem. Google, Meta e infraestrutura web sob um único P&L.",
    keywords: [
      "mídia paga para e-commerce",
      "gestão de tráfego pago",
      "engenharia de e-commerce",
      "auditoria de mídia",
      "performance media",
      "headless commerce",
    ],
  },

  header: {
    logoLabel: "M3",
    logoSuffix: "BRASIL",
    tagline: "Consultoria",
    navLinks: [
      { label: "Serviços", url: "#servicos" },
      { label: "Cases", url: "#cases" },
      { label: "Método", url: "#metodo" },
      { label: "Auditoria", url: "#auditoria" },
    ],
    uptimeLabel: "99.98% Uptime",
    ctaLabel: "Pedir Diagnóstico",
    ctaUrl: "#auditoria",
  },

  footer: {
    tagline: [
      "Eliminar o desperdício causado por uma gestão de tráfego genérica",
      "Lucratividade superior a média do mercado de forma sustentável",
      "Transparência total da gestão de fontes de tráfego",
      "Melhoria contínua da qualidade dos serviços de marketing com redução de custo operacional",
      "Inovação contínua",
      "Tornar-se incomparável",
    ],
    locations: "São Paulo — Zurique — Lisboa",
    columns: [
      {
        title: "Publicações & Índices",
        links: [
          { label: "Auditorias de Conversão", url: "#auditoria" },
          { label: "Consultoria & Governança", url: "#servicos" },
          { label: "Redesenho de Sistema", url: "#servicos" },
          { label: "Governança de Mídia", url: "#servicos" },
        ],
      },
      {
        title: "Estrutura",
        links: [
          { label: "Índice de Cases", url: "#cases" },
          { label: "O Método M3", url: "#metodo" },
          { label: "Liderança Técnica", url: "#auditoria" },
          { label: "Requisitar Parecer", url: "#auditoria" },
        ],
      },
    ],
    contactEmail: "growth@m3brasil.com",
    contactPhone: "+55 11 3090-4200",
    statusLabel: "Rede Ativa (99.98%)",
    copyright: "© 2024 M3 Brasil Engenharia e Consultoria em Comércio Digital S.A.",
    legalLinks: [
      { label: "Privacidade & Governança", url: "#" },
      { label: "Compliance Jurídico", url: "#" },
    ],
  },

  hero: {
    eyebrow: "Qualidade com Redução de Custo",
    title: "Você não precisa de mais orçamento de tráfego",
    subtitle:
      "Redesenhamos o seu sistema competitivo para a excelência operacional. Agende um diagnóstico para descobrirmos o seu nível de funil sinérgico de vendas",
    primaryCta: { label: "Agendar Diagnóstico", url: "#auditoria" },
    secondaryCta: { label: "Cases de sucessos", url: "#cases" },
    meta: [
      "Você contrata marketing na fé e reza para vender mais?",
      "Já está na terceira empresa de marketing e nenhuma dá resultado?",
      "Está sobrecarregado de leads desqualificados?",
    ],
    figure: {
      imageUrl: PLACEHOLDER_HERO_IMAGE,
      imageAlt: "Estação de trabalho com dashboard de performance de mídia",
      caption: "Fig. 01 / Operação & Monitoramento Ativo",
      year: "EST. 2013",
      liveLabel: "LIVE AUDIT FEED",
      syncLabel: "99.94% SYNC",
    },
  },

  proofBar: [
    {
      value: "R$ 40 mi+",
      label: "Funil sinérgico de vendas",
      description: "Consultoria, Auditoria e governança de tráfego pago",
    },
    {
      value: "4,2x",
      label: "ROAS Médio em 12 Meses",
      description: "Maior performance de tráfego sem aumentar o custo operacional",
    },
    {
      value: "+10 anos",
      label: "De Mercado",
      description: "Redesenhando sistemas competitivos para indústrias em transição para o B2C",
    },
    {
      value: "+30",
      label: "E-Commerces Ativos",
      description: "Gestão de tráfego com plataforma proprietária para clientes...",
    },
  ],

  services: [
    {
      index: "01",
      category: "Aquisição Paga",
      title: "Consultoria, auditoria e governança de marketing digital",
      description:
        "Growth e performance para e-commerce. Gestão de tráfego com foco no lucro operacional",
      ctaLabel: "Ver detalhes operacionais",
      bullets: [
        "Maior margem",
        "Maior controle do orçamento de campanha",
        "Google Ads & Performance Max",
        "Meta Ads com foco em incremento",
        "Marketplaces & Retail Media",
        "Gestão de catálogo Merchant",
        "Mensuração Server-Side CAPI",
        "Relatório de margem por canal",
      ],
    },
    {
      index: "02",
      category: "Engenharia Web",
      title: "Redesenho de sistema competitivo",
      description:
        "Engenharia de E-commerce Customizado e Aplicações Web. Arquitetura e desenvolvimento proprietário sob medida para cada modelo de negócio. Sistemas headless, stack moderna, APIs sob demanda, Core Web Vitals < 1.0s e camada analítica nativa desde o primeiro commit.",
      ctaLabel: "Ver especificações técnicas",
      bullets: [
        "Leads mais qualificados",
        "Redução no custo operacional",
        "Arquitetura Headless & Customizada",
        "Sistemas de Checkout Proprietários",
        "APIs e Microsserviços sob Medida",
        "Infraestrutura de Baixa Latência",
        "Camada de Dados & Rastreamento CAPI",
        "Otimização Contínua de Conversão (CRO)",
      ],
    },
    {
      index: "03",
      category: "Diagnóstico",
      title: "Governança de mídia paga",
      description:
        "Excelência operacional complementar ou suplementar. Diagnóstico independente da sua operação atual. Onde a verba vaza, o que a mensuração esconde e quanto da receita atribuída é incremental.",
      ctaLabel: "Solicitar escopo pericial",
      bullets: [
        "Maior produtividade do setor de mídia",
        "Maior previsibilidade de custos e receitas",
        "Maior performance de tráfego",
        "Auditoria de estrutura de contas",
        "Revisão analítica de GA4 e eventos",
        "Análise empírica de incrementalidade",
        "Fadiga criativa e relevância",
        "Plano de correção priorizado",
        "Apresentação executiva à diretoria",
      ],
    },
  ],

  method: [
    {
      index: "01",
      phaseLabel: "Fase Inicial",
      title: "Diagnóstico",
      description:
        "Mapeamento profundo da conta, margens e histórico de atribuição real para isolar o que é receita assistida e o que é pura canibalização.",
      timeframe: "Eliminar o desperdício causado por uma gestão de tráfego genérica",
    },
    {
      index: "02",
      phaseLabel: "Estruturação",
      title: "Reestruturação",
      description:
        "Limpeza de feeds, reengenharia de campanhas e implementação CAPI/GA4. Otimização de tags e saneamento dos sinais enviados ao algoritmo.",
      timeframe: "Lucratividade superior a média do mercado de forma sustentável",
    },
    {
      index: "03",
      phaseLabel: "Aceleração",
      title: "Escala",
      description:
        "Aumento progressivo de orçamento indexado à margem de contribuição líquida. Testes sistemáticos de novos formatos e audiências proprietárias.",
      timeframe: "Inovação contínua",
    },
    {
      index: "04",
      phaseLabel: "Governança",
      title: "Governança",
      description:
        "Reuniões semanais de P&L, testes contínuos de criativos e previsão de estoque em estreita cooperação com o CFO e o time de engenharia.",
      timeframe: "Qualidade superior com redução de custo - tornar-se incomparável",
    },
  ],

  cases: [
    {
      category: "Moda & Lifestyle",
      reference: "Auditoria #084",
      imageUrl: PLACEHOLDER_CASE_MODA_IMAGE,
      imageAlt: "Produtos de moda embalados para envio",
      metricValue: "+212%",
      metricLabel: "receita paga em 8 meses",
      metricAccent: true,
      description:
        "Reestruturação completa de catálogo e estratégia de criativos em vídeo gerando escala de margem no Meta e Google Shopping com arquitetura moderna e checkout proprietário ultra-rápido.",
      platform: "Plataforma: Arquitetura Proprietária Headless",
      badge: "Margem Bruta Mantida",
    },
    {
      category: "Casa & Design",
      reference: "Auditoria #071",
      imageUrl: PLACEHOLDER_CASE_CASA_IMAGE,
      imageAlt: "Ambiente residencial com decoração",
      metricValue: "-34%",
      metricLabel: "CAC com mesma verba",
      metricAccent: false,
      description:
        "Filtragem de termos de busca e ativação de audiências de alta intenção com mensuração server-side de primeira parte e infraestrutura dedicada.",
      platform: "Plataforma: E-commerce Customizado Sob Medida",
      badge: "ROAS Líquido: 5.8x",
    },
  ],

  techStack: [
    "TypeScript",
    "Next.js",
    "Node.js",
    "Headless Commerce",
    "Google Cloud / AWS",
    "GA4 & GTM Server-Side",
    "Meta Conversions API",
    "Looker Studio",
  ],

  finalCta: {
    eyebrow: "05 / Próximo Passo",
    title: "Comece reclassificando o problema",
    description:
      "Você não precisa de mais tráfego. Te ajudamos a redesenhar o seu sistema competitivo. Duas semanas. Diagnóstico completo da sua operação de mídia, arquitetura técnica do e-commerce e vazamento de margem. Sem compromisso de contrato continuado.",
    ctaLabel: "Solicitar diagnóstico gratuito",
    ctaUrl: "mailto:contato@m3brasil.com.br?subject=Solicitacao%20de%20Auditoria%20M3",
    capacityLabel: "Capacidade mensal: 4 pareceres periciais",
    meta: [
      { label: "Requisito de Verba", value: "Investimento > R$ 30k/mês" },
      {
        label: "Entregável Principal",
        value: "Aumento na qualidade dos serviços de marketing e redução de custos operacional",
      },
      { label: "Tempo de Implementação", value: "10 dias corridos" },
    ],
    painPoints: {
      intro: "Talvez a sua empresa ou o seu produto seja muito fácil de copiar. Por isso você:",
      items: [
        "Não tem margem",
        "Não fideliza",
        "Não tem valor de equity",
        "Não consegue cobrar sobrepreço",
        "É refém de agências de publicidade",
        "É refém da sazonalidade",
        "Não tem identidade de marca reconhecível",
        "Não acumula conhecimento de marketing",
      ],
    },
  },
};
