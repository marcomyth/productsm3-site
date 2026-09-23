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

/**
 * Destino dos dois botões de diagnóstico — o do topo e o da seção final.
 *
 * É o mesmo número do rodapé, só que sem formatação: o wa.me aceita
 * dígitos e nada mais. A mensagem já vem escrita pra quem chega do outro
 * lado saber o que está sendo pedido, que era o papel do `?subject=`
 * quando o botão abria e-mail.
 */
const WHATSAPP_URL =
  "https://wa.me/557199216851?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Ag%C3%AAncia%20M3%20e%20gostaria%20de%20solicitar%20o%20diagn%C3%B3stico%20gratuito.";

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
    // Na mesma ordem em que as seções aparecem na página — que é a
    // numeração que elas mesmas exibem: 02 Serviços, 03 Método, 04 Cases,
    // 05 Auditoria. Cases e Método estavam trocados, então o menu descia e
    // subia a página em vez de acompanhá-la.
    navLinks: [
      { label: "Serviços", url: "/#servicos" },
      { label: "Método", url: "/#metodo" },
      { label: "Cases", url: "/#cases" },
      { label: "Auditoria", url: "/#auditoria" },
      { label: "Blog", url: "/blog" },
    ],
    ctaLabel: "Pedir Diagnóstico",
    ctaUrl: WHATSAPP_URL,
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
    contactEmail: "joaomirandacomercial@gmail.com",
    contactPhone: "+55 71 9921-6851",
    copyrightHolder: "Meta 3 Digital Serviços de Marketing LTDA — CNPJ 45.964.223/0001-07",
    legalLinks: [
      { label: "Privacidade & Governança", url: "/privacidade" },
      { label: "Compliance Jurídico", url: "/compliance" },
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
   * Convivem aqui dois tipos de número, e a diferença importa.
   *
   * Resultado entregue pela M3: o `metricLabel` nomeia a métrica e o
   * período — "de engajamento e visibilidade em 24 meses". Hoje só o CIMVI.
   *
   * Dado de mercado do setor do cliente: o `metricLabel` diz "mercado",
   * "varejo", "bens duráveis". NÃO é resultado nosso.
   *
   * O rodapé do card saiu inteiro a pedido do cliente — primeiro a fonte
   * (`platform`), depois o selo "Dado de mercado" (`badge`) —, então não
   * há mais um rótulo separando os dois tipos: quem separa é o próprio
   * `metricLabel`, e é por isso que ele não pode ser genérico. Ao trocar
   * um dado de mercado por um resultado real, escreva métrica e período,
   * e confira /compliance, que descreve os dois casos.
   *
   * `platform` segue no tipo, vazio, esperando uma frase da própria
   * empresa sobre o trabalho realizado.
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
      metricValue: "+50%",
      metricLabel: "de engajamento e visibilidade em 24 meses",
      metricAccent: true,
      description: "Catorze prefeituras do Médio Vale do Itajaí operando resíduos como uma coisa só, com um público que vai do gabinete ao morador de cada cidade. Em 24 meses de trabalho contínuo, o consórcio somou 50% mais engajamento, ampliou a visibilidade na região e firmou autoridade e domínio na pauta do saneamento.",
    },
    {
      category: "Fogatti",
      reference: "fogatti",
      imageUrl: `${CASES_DIR}/fogatti.png`,
      imageAlt: "Logo da Fogatti",
      backgroundUrl: `${CASES_DIR}/fundo-fogatti.jpg`,
      metricValue: "+30%",
      metricLabel: "de venda na loja online",
      metricAccent: false,
      extraMetrics: [{ value: "+27%", label: "na autoridade de domínio" }],
      description: "Fabricante de cooktops, fogões de mesa, fornos de embutir, coifas e depuradores — linha branca, categoria em que o consumidor compara preço lado a lado antes de decidir. O trabalho elevou a autoridade de domínio em 27% e construiu reconhecimento de marca, enquanto a loja online cresceu 30% e a operação ganhou presença nos marketplaces.",
    },
    {
      category: "Lexus Brasília",
      reference: "lexus-brasilia",
      imageUrl: `${CASES_DIR}/lexus-brasilia.png`,
      imageAlt: "Logo da Lexus Brasília",
      backgroundUrl: `${CASES_DIR}/fundo-lexus-brasilia.jpg`,
      metricValue: "+20%",
      metricLabel: "de reconhecimento de marca em Brasília",
      metricAccent: true,
      description: "Concessionária Lexus no Distrito Federal — segmento em que a decisão passa por reputação antes de passar por preço, e em que a disputa é local: quem compra premium em Brasília escolhe entre poucas casas. O trabalho ficou concentrado nessa praça e subiu o reconhecimento de marca em 20%, com a autoridade de domínio acompanhando.",
    },
    {
      category: "Mueller",
      reference: "mueller",
      imageUrl: `${CASES_DIR}/mueller.png`,
      imageAlt: "Logo da Mueller",
      backgroundUrl: `${CASES_DIR}/fundo-mueller.jpg`,
      metricValue: "+34%",
      metricLabel: "de venda na loja online",
      extraMetrics: [{ value: "+30%", label: "na autoridade de domínio" }],
      metricAccent: false,
      description: "Mais de setenta anos fabricando para cozinha e lavanderia: fogões, cooktops, fornos, tanquinhos, lavadoras e secadoras. Uma marca que as pessoas conhecem de ver em casa, e que precisava existir também na prateleira digital, onde quem decide nunca entrou numa loja. A autoridade de domínio subiu 30%, o reconhecimento acompanhou, e a loja online cresceu 34%, com presença firmada nos marketplaces.",
    },
    {
      category: "Musa",
      reference: "musa",
      imageUrl: `${CASES_DIR}/musa.png`,
      imageAlt: "Logo da Musa",
      backgroundUrl: `${CASES_DIR}/fundo-musa.jpg`,
      metricValue: "+120%",
      metricLabel: "de reconhecimento de marca",
      metricAccent: true,
      description: "Moda praia com loja própria: biquínis e saídas de praia, num varejo em que a coleção tem estação e a venda tem janela curta — marca é o que sustenta a procura fora do pico. O reconhecimento mais que dobrou, a autoridade de domínio e o engajamento subiram junto, e a operação passou a vender tanto na loja online quanto nos marketplaces.",
    },
    {
      category: "Somos Cria",
      reference: "somos-cria",
      imageUrl: `${CASES_DIR}/somos-cria.png`,
      imageAlt: "Logo da Somos Cria",
      backgroundUrl: `${CASES_DIR}/fundo-somos-cria.jpg`,
      metricValue: "+30%",
      metricLabel: "de crescimento de marca em 24 meses",
      metricAccent: false,
      description: "Móveis de design autoral — poltronas, bancos e peças exclusivas — vendidos direto pelo site. Quem compra decide por uma peça de ticket alto sem tocar nela, e é a marca que sustenta esse salto de confiança. Em 24 meses ela cresceu 30%, com a autoridade de domínio e o engajamento subindo junto.",
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
    },
  ],

  finalCta: {
    eyebrow: "05 / Próximo Passo",
    title: "Comece reclassificando o problema",
    description:
      "Você não precisa de mais tráfego. Te ajudamos a redesenhar o seu sistema competitivo. Duas semanas. Diagnóstico completo da sua operação de mídia, arquitetura técnica do e-commerce e vazamento de margem. Sem compromisso de contrato continuado.",
    ctaLabel: "Solicitar diagnóstico gratuito",
    ctaUrl: WHATSAPP_URL,
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
