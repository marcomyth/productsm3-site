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

/* A mesma foto de estação de trabalho, com os dois monitores fundidos num
   ultrawide só e o painel real do cliente projetado na perspectiva da tela.
   O notebook ao lado recebeu uma programação de mídia por canal, sem data
   nenhuma. A foto original segue em hero.jpg, intacta, e é a base de onde
   esta é gerada. */
const HERO_IMAGE = "/images/hero-estacao.jpg";

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
    locations: "São Paulo — Santa Catarina — Valência, Espanha",
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
    contactEmail: "contato@agenciam3.com.br",
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
      imageAlt: "Estação de trabalho com um monitor ultrawide exibindo o painel de performance de mídia, com R$ 126.832 investidos e ROAS de 10x, um notebook ao lado com a programação de mídia por canal e uma caixa de som sobre a mesa",
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
   * Os sete números são resultado entregue pela M3. Nenhum é mais dado de
   * mercado: a seção nasceu assim, com percentuais de setor no lugar dos
   * números reais, e foi trocada card a card conforme o cliente mandou os
   * resultados.
   *
   * O `metricLabel` nomeia a métrica, e o período quando ele é conhecido:
   * "de crescimento de marca em 12 meses". A janela de análise da seção
   * está no cabeçalho, em Cases.tsx.
   *
   * Se algum dia voltar um dado de mercado para cá, o `metricLabel` tem de
   * nomear o setor ("mercado de", "varejo de"), porque o card não tem mais
   * selo que o distinga: o rodapé saiu inteiro a pedido do cliente,
   * primeiro a fonte (`platform`) e depois o selo (`badge`). /compliance
   * descreve os dois casos.
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
      description: "Catorze prefeituras do Médio Vale do Itajaí operam resíduos como uma coisa só. O público vai do gabinete de cada cidade ao morador da rua, e falar com os dois ao mesmo tempo é um problema de estrutura, não de anúncio. O trabalho contínuo deu ao consórcio visibilidade na região e autoridade reconhecida na pauta do saneamento.",
    },
    {
      category: "Fogatti",
      reference: "fogatti",
      imageUrl: `${CASES_DIR}/fogatti.png`,
      imageAlt: "Logo da Fogatti",
      backgroundUrl: `${CASES_DIR}/fundo-fogatti.jpg`,
      metricValue: "+30%",
      metricLabel: "de venda na loja online",
      metricAccent: true,
      extraMetrics: [{ value: "+27%", label: "na autoridade de domínio" }],
      description: "A Fogatti fabrica cooktops, fogões de mesa, fornos de embutir, coifas e depuradores. É linha branca, uma categoria em que o consumidor compara preço lado a lado antes de decidir, e em que a marca precisa aparecer antes da comparação. O trabalho construiu autoridade de domínio e reconhecimento de marca, e levou a venda para além da loja própria, com presença firmada nos marketplaces.",
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
      description: "A concessionária Lexus do Distrito Federal atua num segmento em que a decisão passa por reputação antes de passar por preço. A disputa também é local: quem compra premium em Brasília escolhe entre poucas casas. O trabalho ficou concentrado nessa praça, construindo reconhecimento de marca e autoridade de domínio.",
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
      metricAccent: true,
      description: "Há mais de setenta anos a Mueller fabrica para cozinha e lavanderia: fogões, cooktops, fornos, tanquinhos, lavadoras e secadoras. É uma marca que as pessoas reconhecem dentro de casa e que precisava ter o mesmo peso na prateleira digital. O trabalho traduziu esse reconhecimento para o ambiente online, firmando autoridade de domínio e abrindo presença nos marketplaces.",
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
      description: "A Musa vende moda praia em loja própria: biquínis e saídas de praia. Num varejo em que a coleção tem estação e a venda tem janela curta, é a marca que sustenta a procura fora do pico. O trabalho construiu reconhecimento de marca, autoridade de domínio e engajamento, e levou a operação a vender tanto na loja online quanto nos marketplaces.",
    },
    {
      category: "Somos Cria",
      reference: "somos-cria",
      imageUrl: `${CASES_DIR}/somos-cria.png`,
      imageAlt: "Logo da Somos Cria",
      backgroundUrl: `${CASES_DIR}/fundo-somos-cria.jpg`,
      metricValue: "+30%",
      metricLabel: "de crescimento de marca em 24 meses",
      metricAccent: true,
      description: "A Somos Cria vende móveis de design autoral direto pelo site: poltronas, bancos e peças exclusivas. Quem compra decide por uma peça de ticket alto sem tocar nela, e é a marca que sustenta essa decisão. O trabalho foi construir exatamente isso: marca, autoridade de domínio e engajamento.",
    },
    {
      category: "Vale Europeu Turismo",
      reference: "vale-europeu",
      imageUrl: `${CASES_DIR}/vale-europeu.png`,
      imageAlt: "Logo do Vale Europeu Turismo",
      backgroundUrl: `${CASES_DIR}/fundo-vale-europeu.jpg`,
      metricValue: "+150%",
      metricLabel: "de crescimento de marca em 12 meses",
      metricAccent: true,
      description: "O Vale Europeu Catarinense reúne sete roteiros qualificados, do cicloturismo à rota cervejeira. Um destino não se vende como produto: ele precisa ser lembrado no momento em que alguém decide onde passar as férias, disputando esse lugar com nomes muito mais conhecidos. O trabalho construiu marca, autoridade de domínio e posicionamento para essa disputa.",
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
