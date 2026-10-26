import type { SiteContent } from "@/lib/types";
import { CASES_DIR, HERO_IMAGE, WHATSAPP_EN } from "./midia";

/**
 * Site content in English — a translation of src/content/site.ts.
 *
 * Written as marketing copy, not as a word-for-word rendering: the Portuguese
 * original sells, and a literal translation of a sales page stops selling.
 * Where the two diverge, it is on purpose.
 *
 * Three things deliberately do NOT change across languages:
 *
 * - Figures. "R$ 40 million+" keeps the real, because the money was spent in
 *   reais and converting it would state an amount nobody measured. Only the
 *   decimal mark follows the language: 4,2x in Portuguese, 4.2x here.
 * - Brand and company names, the CNPJ and the contact details.
 * - Anchor targets (#servicos, #metodo). They are DOM ids shared by all three
 *   languages, not words anyone reads.
 */

export const siteContentEn: SiteContent = {
  seo: {
    title: "M3 Brasil — Media Engineering & Operations for E-Commerce",
    description:
      "We take over paid acquisition and proprietary engineering for e-commerce operations that already sell and need to scale without destroying margin. Google, Meta and web infrastructure under a single P&L.",
    keywords: [
      "paid media for e-commerce",
      "paid traffic management",
      "e-commerce engineering",
      "media audit",
      "performance media",
      "headless commerce",
    ],
  },

  header: {
    logoLabel: "M3",
    logoSuffix: "BRASIL",
    tagline: "Consulting",
    navLinks: [
      { label: "Services", url: "/en#servicos" },
      { label: "Case Studies", url: "/en/cases" },
      { label: "Method", url: "/en#metodo" },
      { label: "Audit", url: "/en#auditoria" },
      { label: "Blog", url: "/en/blog" },
    ],
    ctaLabel: "Request a Diagnosis",
    ctaUrl: WHATSAPP_EN,
  },

  footer: {
    tagline: [
      "Eliminating the waste caused by generic traffic management",
      "Above-market profitability, sustainably",
      "Full transparency over how traffic sources are managed",
      "Continuous gains in marketing quality with lower operating cost",
      "Continuous innovation",
      "Becoming incomparable",
    ],
    locations: "São Paulo — Santa Catarina — Valencia, Spain",
    columns: [
      {
        title: "Publications & Indexes",
        links: [
          { label: "Conversion Audits", url: "/en#auditoria" },
          { label: "Consulting & Governance", url: "/en#servico-01" },
          { label: "System Redesign", url: "/en#servico-02" },
          { label: "Media Governance", url: "/en#servico-03" },
        ],
      },
      {
        title: "Structure",
        links: [
          { label: "Case Index", url: "/en/cases" },
          { label: "The M3 Method", url: "/en#metodo" },
          { label: "Technical Leadership", url: "/en#auditoria" },
          { label: "Request an Assessment", url: "/en#auditoria" },
        ],
      },
    ],
    contactEmail: "contato@agenciam3.com.br",
    contactPhone: "+55 71 9921-6851",
    copyrightHolder: "Meta 3 Digital Serviços de Marketing LTDA — CNPJ 45.964.223/0001-07",
    legalLinks: [
      { label: "Privacy & Governance", url: "/en/privacidade" },
      { label: "Legal Compliance", url: "/en/compliance" },
    ],
  },

  hero: {
    eyebrow: "Quality With Lower Cost",
    title: "You do not need a bigger traffic budget",
    subtitle:
      "We redesign your competitive system for operational excellence. Book a diagnosis and find out where your synergistic sales funnel actually stands",
    primaryCta: { label: "Talk to our specialists", url: "/en#auditoria" },
    secondaryCta: { label: "Success stories", url: "/en/cases" },
    meta: [
      "Do you buy marketing on faith and pray for more sales?",
      "Are you on your third marketing agency with nothing to show for it?",
      "Are you drowning in unqualified leads?",
    ],
    figure: {
      imageUrl: HERO_IMAGE,
      imageAlt: "Workstation with an ultrawide monitor showing the media performance dashboard, with R$ 126,832 invested and a 10x ROAS, and a laptop beside it holding the media plan by channel",
    },
  },

  proofBar: [
    {
      value: "R$ 40 million+",
      label: "Managed in Google and Meta Ads",
      description:
        "Consulting, auditing and governance of paid traffic for the synergistic sales funnel",
      destaque: true,
    },
    {
      value: "R$ 120 million+",
      label: "Billed in the Industrial Market",
      description: "Revenue the operations run by M3 have already generated in industry",
      destaque: true,
    },
    {
      value: "4.2x",
      label: "Average ROAS Over 12 Months",
      description: "Higher traffic performance without raising operating cost",
    },
    {
      value: "10+ years",
      label: "In the Market",
      description: "Redesigning competitive systems for manufacturers moving into B2C",
    },
    {
      value: "30+",
      label: "Active E-Commerce Operations",
      description: "Traffic management on a proprietary platform for our clients",
    },
  ],

  services: [
    {
      index: "01",
      category: "Paid Acquisition",
      title: "Digital marketing consulting, auditing and governance",
      description:
        "Growth and performance for e-commerce. Traffic management run against operating profit, not against the dashboard",
      ctaLabel: "See operational detail",
      bullets: [
        "Higher margin",
        "Tighter control of campaign budget",
        "Google Ads & Performance Max",
        "Meta Ads focused on incrementality",
        "Marketplaces & Retail Media",
        "Merchant catalogue management",
        "Server-side measurement (GTM + Meta CAPI)",
        "Margin report by channel",
      ],
    },
    {
      index: "02",
      category: "Web Engineering",
      title: "Competitive system redesign",
      description:
        "Custom e-commerce engineering and web applications. Proprietary architecture and development built around each business model. Headless systems, a modern stack, APIs on demand, Core Web Vitals under 1.0s and a native analytics layer from the first commit.",
      ctaLabel: "See technical specifications",
      bullets: [
        "Better qualified leads",
        "Lower operating cost",
        "Headless & custom architecture",
        "Proprietary checkout systems",
        "Bespoke APIs and microservices",
        "Low-latency infrastructure",
        "Data layer & CAPI tracking",
        "Continuous conversion optimisation (CRO)",
      ],
    },
    {
      index: "03",
      category: "Diagnosis",
      title: "Paid media governance",
      description:
        "Operational excellence, alongside your team or in place of it. An independent read of the operation you run today. Where the budget leaks, what the measurement hides, and how much of the attributed revenue is actually incremental.",
      ctaLabel: "Request assessment scope",
      bullets: [
        "A more productive media team",
        "More predictable cost and revenue",
        "Higher traffic performance",
        "Account structure audit",
        "Analytical review of GA4 and events",
        "Empirical incrementality analysis",
        "Creative fatigue and relevance",
        "Prioritised remediation plan",
        "Executive dashboards in Looker Studio",
        "Executive presentation to the board",
      ],
    },
  ],

  method: [
    {
      index: "01",
      phaseLabel: "Opening Phase",
      title: "Diagnosis",
      description:
        "A deep read of the account, the margins and the real attribution history, to separate assisted revenue from pure cannibalisation.",
      timeframe: "Eliminating the waste caused by generic traffic management",
    },
    {
      index: "02",
      phaseLabel: "Structuring",
      title: "Restructuring",
      description:
        "Feed clean-up, campaign re-engineering and CAPI/GA4 implementation. Tag optimisation and sanitation of the signals sent to the algorithm.",
      timeframe: "Above-market profitability, sustainably",
    },
    {
      index: "03",
      phaseLabel: "Acceleration",
      title: "Scale",
      description:
        "Budget raised step by step, indexed to net contribution margin. Systematic testing of new formats and proprietary audiences.",
      timeframe: "Continuous innovation",
    },
    {
      index: "04",
      phaseLabel: "Governance",
      title: "Governance",
      description:
        "Weekly P&L meetings, continuous creative testing and inventory forecasting, in close cooperation with the CFO and the engineering team.",
      timeframe: "Higher quality at lower cost — becoming incomparable",
    },
  ],

  cases: [
    {
      category: "Mueller",
      reference: "mueller",
      imageUrl: `${CASES_DIR}/mueller.png`,
      imageAlt: "Mueller logo",
      backgroundUrl: `${CASES_DIR}/fundo-mueller.jpg`,
      backgroundAlt: "Laundry room with a Mueller washing machine",
      sector: "White goods · over 70 years of manufacturing",
      metricValue: "+34%",
      metricLabel: "in online store sales",
      metricAccent: true,
      placarLabel: "online store sales",
      extraMetrics: [{ value: "+30%", label: "in domain authority" }],
      headline:
        "Seventy years inside the Brazilian kitchen. Now with the same weight on the digital shelf.",
      description:
        "Ranges, cooktops, ovens, washers and dryers: the brand was already a household name. We translated that weight into the online channel, established domain authority and opened up a presence across marketplaces.",
    },
    {
      category: "Lexus Brasília",
      reference: "lexus-brasilia",
      imageUrl: `${CASES_DIR}/lexus-brasilia.png`,
      imageAlt: "Lexus Brasília logo",
      backgroundUrl: `${CASES_DIR}/fundo-lexus-brasilia.jpg`,
      backgroundAlt: "A Lexus under a starry sky",
      sector: "Premium automotive · Federal District",
      metricValue: "+20%",
      metricLabel: "in brand recognition across Brasília",
      metricAccent: true,
      placarLabel: "brand recognition · Brasília",
      headline:
        "Premium buyers in Brasília choose between a handful of dealerships. Lexus began to weigh more in that choice.",
      description:
        "In a segment where the decision runs through reputation before it runs through price, the fight is local. We concentrated the work on that market, building brand recognition and domain authority.",
    },
    {
      category: "Musa",
      reference: "musa",
      imageUrl: `${CASES_DIR}/musa.png`,
      imageAlt: "Musa logo",
      backgroundUrl: `${CASES_DIR}/fundo-musa.jpg`,
      backgroundAlt: "Musa swimwear campaign",
      sector: "Swimwear · own online store",
      metricValue: "+120%",
      metricLabel: "in brand recognition",
      metricAccent: true,
      placarLabel: "brand recognition",
      headline:
        "More than double the recognition, in a retail category where demand disappears the moment the season ends.",
      description:
        "A seasonal collection sells in a narrow window, and it is the brand that holds demand up outside the peak. We built recognition, domain authority and engagement, and Musa began selling both in its own store and across marketplaces.",
    },
    {
      category: "Vale Europeu Turismo",
      reference: "vale-europeu",
      imageUrl: `${CASES_DIR}/vale-europeu.png`,
      imageAlt: "Vale Europeu Turismo logo",
      backgroundUrl: `${CASES_DIR}/fundo-vale-europeu.jpg`,
      backgroundAlt: "Cycle tourists on a road in the Vale Europeu region",
      sector: "Tourism · Santa Catarina",
      metricValue: "+150%",
      metricLabel: "in brand growth over 12 months",
      metricAccent: true,
      placarLabel: "brand growth · 12 months",
      headline:
        "Two and a half times the brand in a single year, competing for holidays against far more famous destinations.",
      description:
        "Seven curated routes, from cycle tourism to the brewery trail. A destination has to be remembered at the exact moment someone decides where to spend their holidays. We built the brand, the domain authority and the positioning for that fight.",
    },
    {
      category: "Fogatti",
      reference: "fogatti",
      imageUrl: `${CASES_DIR}/fogatti.png`,
      imageAlt: "Fogatti logo",
      backgroundUrl: `${CASES_DIR}/fundo-fogatti.jpg`,
      backgroundAlt: "Kitchen with a Fogatti cooker hood",
      sector: "White goods · manufacturer",
      metricValue: "+30%",
      metricLabel: "in online store sales",
      metricAccent: true,
      placarLabel: "online store sales",
      extraMetrics: [{ value: "+27%", label: "in domain authority" }],
      headline:
        "In a category where everyone compares prices, Fogatti shows up before the comparison starts.",
      description:
        "Cooktops, built-in ovens, hoods and extractors, in a category shoppers line up side by side. We built domain authority and brand recognition, and took sales beyond the brand's own store, with a firm presence across marketplaces.",
    },
    {
      category: "Somos Cria",
      reference: "somos-cria",
      imageUrl: `${CASES_DIR}/somos-cria.png`,
      imageAlt: "Somos Cria logo",
      backgroundUrl: `${CASES_DIR}/fundo-somos-cria.jpg`,
      backgroundAlt: "Interior with a Somos Cria bench and coat rack",
      sector: "Signature furniture design · direct sales",
      metricValue: "+30%",
      metricLabel: "in brand growth over 24 months",
      metricAccent: true,
      placarLabel: "brand growth · 24 months",
      headline: "Selling a high-ticket armchair to someone who has never sat in it.",
      description:
        "Armchairs, benches and one-off pieces, sold straight from the site. The buyer decides without touching the product, and it is the brand that carries that decision. That is exactly what we built: brand, domain authority and engagement.",
    },
    {
      category: "CIMVI",
      reference: "cimvi",
      imageUrl: `${CASES_DIR}/cimvi.png`,
      imageAlt: "CIMVI logo",
      backgroundUrl: `${CASES_DIR}/fundo-cimvi.jpg`,
      backgroundAlt: "CIMVI headquarters",
      sector: "Public sector · a consortium of 14 municipalities",
      metricValue: "+50%",
      metricLabel: "in engagement and visibility over 24 months",
      metricAccent: true,
      placarLabel: "engagement and visibility · 24 months",
      headline:
        "Fourteen town halls, one voice. From the mayor's office to the resident on the street.",
      description:
        "The municipalities of the Médio Vale do Itajaí run waste management as a single operation. Speaking to the administrator and to the resident at the same time is a structural problem, not an advertising one. Sustained work gave the consortium visibility across the region and recognised authority on the sanitation agenda.",
    },
  ],

  casesPage: {
    eyebrow: "Cases 2022 to 2026 · seven brands in the operation",
    titleLead: "They did not ask for more traffic.",
    titleAccent: "They asked to become incomparable.",
    description:
      "Mueller, Lexus Brasília, Fogatti, Musa, Somos Cria, Vale Europeu and CIMVI already operate with M3. The figures on the scoreboard are what happened next. The eighth name on this page is still blank.",
    ctaLabel: "I want the free diagnosis",
    meta: ["Diagnosis in two weeks", "Free of charge", "No ongoing contract required"],
    placarTitle: "Operation scoreboard",
    placarPeriod: "2022 to 2026",
    intro: {
      eyebrow: "practical evidence",
      title: "Seven brands are already part of our operation. The eighth place is open.",
      description:
        "Analysis window: 2022 to 2026. From a manufacturer with more than seventy years of history to a destination competing for holidays: each one arrived with a different problem, and all of them left harder to copy.",
    },
    vaga: {
      sector: "Open slot",
      value: "+?%",
      label: "the number that does not exist yet",
      placarLabel: "the next line on the scoreboard",
      marca: "[your brand]",
      logoLabel: "your logo here",
      headline: "The next case study on this page starts with a two-week diagnosis.",
      description:
        "Media operation, the technical architecture of the e-commerce platform and margin leakage, all in the same assessment. No ongoing contract required.",
      ctaLabel: "Take the eighth slot",
    },
  },

  finalCta: {
    eyebrow: "Next Step",
    title: "Start by reclassifying the problem",
    description:
      "You do not need more traffic. We help you redesign your competitive system. Two weeks. A full diagnosis of your media operation, the technical architecture of your e-commerce platform and where margin is leaking. No ongoing contract required.",
    ctaLabel: "Request the free diagnosis",
    ctaUrl: WHATSAPP_EN,
    meta: [
      { label: "Budget Requirement", value: "Investment > R$ 30k/month" },
      {
        label: "Main Deliverable",
        value: "Higher quality marketing services at a lower operating cost",
      },
      { label: "Implementation Time", value: "10 calendar days" },
    ],
    painPoints: {
      intro: "Perhaps your company or your product is simply too easy to copy. Which is why you:",
      items: [
        "Have no margin",
        "Do not build loyalty",
        "Have no equity value",
        "Cannot charge a premium",
        "Depend on advertising agencies",
        "Are at the mercy of seasonality",
        "Have no recognisable brand identity",
        "Accumulate no marketing knowledge",
      ],
    },
  },
};
