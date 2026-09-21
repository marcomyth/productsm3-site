import type { SiteContent } from "@/lib/types";

/**
 * Conteúdo da landing page — M3 Brasil (Engenharia & Operação de Mídia para
 * E-Commerce). Transcrito do export Stitch em
 * stitch_m3_brasil_editorial_landing_page.zip (code.html), fonte de verdade
 * visual e de copy aprovada para este brief.
 *
 * Fotografia real já em public/images/: hero.jpg, case-eletronicos.jpg,
 * case-moda-feminina.jpg e case-beleza.jpg. As imagens dos 2 cases reais
 * (Moda & Lifestyle, Casa & Design) ainda são os placeholders do Stitch
 * (lh3.googleusercontent.com/aida-public/...) — trocar antes de qualquer
 * publicação em produção.
 */

const HERO_IMAGE = "/images/hero.jpg";

const CASE_ELETRONICOS_IMAGE = "/images/case-eletronicos.jpg";
const CASE_MODA_FEMININA_IMAGE = "/images/case-moda-feminina.jpg";
const CASE_BELEZA_IMAGE = "/images/case-beleza.jpg";

const CASES_DIR = "/images/cases";

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
      { label: "Serviços", url: "/#servicos" },
      { label: "Cases", url: "/#cases" },
      { label: "Método", url: "/#metodo" },
      { label: "Auditoria", url: "/#auditoria" },
      { label: "Blog", url: "/blog" },
    ],
    ctaLabel: "Pedir Diagnóstico",
    ctaUrl: "/#auditoria",
  },

  footer: {
    tagline: [
      "Eliminar o desperdício causado por uma gestão de tráfego genérica",
      "Lucratividade superior à média do mercado de forma sustentável",
      "Transparência total da gestão de fontes de tráfego",
      "Melhoria contínua da qualidade dos serviços de marketing com redução de custo operacional",
      "Inovação contínua",
      "Tornar-se incomparável",
    ],
    locations: "São Paulo — Santa Catarina — Valência",
    columns: [
      {
        title: "Publicações & Índices",
        links: [
          { label: "Auditorias de Conversão", url: "/#auditoria" },
          { label: "Consultoria & Governança", url: "/#servico-01" },
          { label: "Redesenho de Sistema", url: "/#servico-02" },
          { label: "Governança de Mídia", url: "/#servico-03" },
        ],
      },
      {
        title: "Estrutura",
        links: [
          { label: "Índice de Cases", url: "/#cases" },
          { label: "O Método M3", url: "/#metodo" },
          { label: "Liderança Técnica", url: "/#auditoria" },
          { label: "Requisitar Parecer", url: "/#auditoria" },
        ],
      },
    ],
    contactEmail: "contato@m3brasil.com.br",
    contactPhone: "+55 11 3090-4200",
    copyrightHolder: "Meta 3 Digital Serviços de Marketing LTDA — CNPJ 45.964.223/0001-07",
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
    primaryCta: { label: "Agendar Diagnóstico", url: "/#auditoria" },
    secondaryCta: { label: "Cases de sucesso", url: "/#cases" },
    meta: [
      "Você contrata marketing na fé e reza para vender mais?",
      "Já está na terceira empresa de marketing e nenhuma dá resultado?",
      "Está sobrecarregado de leads desqualificados?",
    ],
    figure: {
      imageUrl: HERO_IMAGE,
      imageAlt: "Estação de trabalho com dashboard de performance de mídia",
    },
  },

  proofBar: [
    {
      value: "R$ 40 mi+",
      label: "Funil sinérgico de vendas",
      description: "Consultoria, auditoria e governança de tráfego pago",
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
        "Mensuração Server-Side (GTM + Meta CAPI)",
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
        "Dashboards executivos em Looker Studio",
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
      timeframe: "Lucratividade superior à média do mercado de forma sustentável",
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
      timeframe: "Qualidade superior com redução de custo — tornar-se incomparável",
    },
  ],

  /**
   * Um card por cliente, com a logo no lugar da foto.
   *
   * Os números NÃO são resultado entregue pela M3 — são dados de mercado
   * do setor de cada cliente, com fonte citada em `platform` e o selo
   * "Dado de mercado" em `badge` pra não haver leitura ambígua. Quando
   * o case real fechar, é só substituir os seis campos do card.
   *
   * Dois números reais vieram do brief original mas ainda não têm empresa
   * atribuída, então ficam guardados aqui em vez de entrarem num card com
   * nome: "+212% receita paga em 8 meses" (selo "Margem Bruta Mantida",
   * plataforma "Arquitetura Proprietária Headless") e "-34% CAC com mesma
   * verba" (selo "ROAS Líquido: 5,8x", plataforma "E-commerce Customizado
   * Sob Medida"). Número de performance só entra num card depois que
   * soubermos de qual cliente ele é.
   */
  cases: [
    {
      category: "CIMVI",
      reference: "cimvi",
      imageUrl: `${CASES_DIR}/cimvi.png`,
      imageAlt: "Logo da CIMVI",
      backgroundUrl: `${CASES_DIR}/fundo-cimvi.jpg`,
      metricValue: "90%",
      metricLabel: "meta de esgotamento sanitário até 2033",
      metricAccent: true,
      description: "Consórcio público de municípios do Médio Vale do Itajaí — Indaial, Timbó e Pomerode entre eles — que opera resíduos em escala. É o modelo que o marco legal de 2020 elegeu para as cidades que não teriam porte para fazer sozinhas.",
      platform: "Fonte: Lei 14.026/2020 e Novo PAC",
      badge: "Dado de mercado",
    },
    {
      category: "Fogatti",
      reference: "fogatti",
      imageUrl: `${CASES_DIR}/fogatti.png`,
      imageAlt: "Logo da Fogatti",
      backgroundUrl: `${CASES_DIR}/fundo-fogatti.jpg`,
      metricValue: "+16%",
      metricLabel: "linha branca, de janeiro a maio de 2026",
      metricAccent: false,
      description: "Fabricante de cooktops, fogões de mesa, fornos de embutir, coifas e depuradores. A cocção está dentro do bloco de linha branca que puxou os duráveis no período.",
      platform: "Fonte: Eletros, 2026",
      badge: "Dado de mercado",
    },
    {
      category: "Lexus Brasília",
      reference: "lexus-brasilia",
      imageUrl: `${CASES_DIR}/lexus-brasilia.png`,
      imageAlt: "Logo da Lexus Brasília",
      backgroundUrl: `${CASES_DIR}/fundo-lexus-brasilia.jpg`,
      metricValue: "+6,6%",
      metricLabel: "mercado de automóveis de luxo em 2025",
      metricAccent: true,
      description: "Concessionária Lexus no Distrito Federal. O segmento premium foi de 51,2 mil para 54,6 mil unidades em 2025 — quase o triplo do avanço do mercado automotivo como um todo.",
      platform: "Fonte: Fenabrave, 2026",
      badge: "Dado de mercado",
    },
    {
      category: "Mueller",
      reference: "mueller",
      imageUrl: `${CASES_DIR}/mueller.png`,
      imageAlt: "Logo da Mueller",
      backgroundUrl: `${CASES_DIR}/fundo-mueller.jpg`,
      metricValue: "+11%",
      metricLabel: "bens duráveis, de janeiro a maio de 2026",
      metricAccent: false,
      description: "Há mais de setenta anos fabricando para cozinha e lavanderia: fogões, cooktops, fornos, tanquinhos, lavadoras e secadoras. Vende em quase todas as categorias que somam os 53,6 milhões de unidades do período.",
      platform: "Fonte: Eletros, 2026",
      badge: "Dado de mercado",
    },
    {
      category: "Musa",
      reference: "musa",
      imageUrl: `${CASES_DIR}/musa.png`,
      imageAlt: "Logo da Musa",
      backgroundUrl: `${CASES_DIR}/fundo-musa.jpg`,
      metricValue: "+6%",
      metricLabel: "mercado de moda praia projetado até 2026",
      metricAccent: true,
      description: "Moda praia com loja própria: biquínis e saídas de praia. O setor movimenta mais de R$ 7 bilhões ao ano, e nichos específicos correm acima da média — a linha plus size avançou mais de 20% em dois anos.",
      platform: "Fonte: IEMI e Sebrae, 2026",
      badge: "Dado de mercado",
    },
    {
      category: "Somos Cria",
      reference: "somos-cria",
      imageUrl: `${CASES_DIR}/somos-cria.png`,
      imageAlt: "Logo da Somos Cria",
      backgroundUrl: `${CASES_DIR}/fundo-somos-cria.jpg`,
      metricValue: "+10,6%",
      metricLabel: "varejo de móveis e colchões em 2024",
      metricAccent: false,
      description: "Móveis de design autoral — poltronas, bancos e peças exclusivas — vendidos direto pelo site. Disputa um varejo que movimentou R$ 127,7 bilhões no ano.",
      platform: "Fonte: ABIMÓVEL e IEMI, 2025",
      badge: "Dado de mercado",
    },
    {
      category: "Vale Europeu Turismo",
      reference: "vale-europeu",
      imageUrl: `${CASES_DIR}/vale-europeu.png`,
      imageAlt: "Logo do Vale Europeu Turismo",
      backgroundUrl: `${CASES_DIR}/fundo-vale-europeu.jpg`,
      metricValue: "+4,6%",
      metricLabel: "atividades turísticas no Brasil em 2025",
      metricAccent: true,
      description: "Circuito regional com sete roteiros qualificados, do cicloturismo à rota cervejeira. Opera na atividade que bateu o recorde da série do IBGE em 2025.",
      platform: "Fonte: IBGE, 2026",
      badge: "Dado de mercado",
    },
  ],

  finalCta: {
    eyebrow: "05 / Próximo Passo",
    title: "Comece reclassificando o problema",
    description:
      "Você não precisa de mais tráfego. Te ajudamos a redesenhar o seu sistema competitivo. Duas semanas. Diagnóstico completo da sua operação de mídia, arquitetura técnica do e-commerce e vazamento de margem. Sem compromisso de contrato continuado.",
    ctaLabel: "Solicitar diagnóstico gratuito",
    ctaUrl:
      "mailto:contato@m3brasil.com.br?subject=Solicita%C3%A7%C3%A3o%20de%20Auditoria%20M3",
    meta: [
      { label: "Requisito de Verba", value: "Investimento > R$ 30k/mês" },
      {
        label: "Entregável Principal",
        value: "Aumento na qualidade dos serviços de marketing e redução de custos operacionais",
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
