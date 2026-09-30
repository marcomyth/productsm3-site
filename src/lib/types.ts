export type Media = {
  id: number;
  url: string;
  alternativeText?: string | null;
  width?: number;
  height?: number;
  mime?: string;
  formats?: Record<string, { url: string; width: number; height: number }>;
} | null;

export type Seo = {
  id?: number;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  shareImage?: Media;
  canonicalURL?: string | null;
  preventIndexing?: boolean;
};

export type NavLink = {
  label: string;
  url: string;
  external?: boolean;
};

// ---- Chrome do site (header/footer) ----

export type SiteHeader = {
  logoLabel: string;
  logoSuffix: string;
  tagline: string;
  navLinks: NavLink[];
  ctaLabel: string;
  ctaUrl: string;
};

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export type SiteFooter = {
  tagline: string[];
  locations: string;
  columns: FooterColumn[];
  contactEmail: string;
  contactPhone: string;
  copyrightHolder: string;
  legalLinks: NavLink[];
};

// ---- Landing page ----

export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; url: string };
  secondaryCta: { label: string; url: string };
  /** Faixa sob o hero: uma pergunta de qualificação por coluna. */
  meta: string[];
  figure: {
    imageUrl: string;
    imageAlt: string;
  };
};

export type ProofStat = {
  value: string;
  label: string;
  description: string;
};

export type ServiceItem = {
  index: string;
  category: string;
  title: string;
  description: string;
  ctaLabel: string;
  bullets: string[];
};

/** Um entregável concreto de uma fase do método: o que o cliente recebe. */
export type MethodDeliverable = {
  title: string;
  description: string;
};

export type MethodPhase = {
  index: string;
  phaseLabel: string;
  title: string;
  description: string;
  timeframe: string;
  /** Entregáveis da fase. Opcional: a fase existe sem eles, e ganha a lista
      quando a empresa definir o que entra em cada uma. */
  deliverables?: MethodDeliverable[];
};

/**
 * Cabeçalho comum das seções novas. O número não vem daqui: ele é calculado
 * na ordem de renderização em page.tsx, porque estas seções são opcionais e
 * uma sequência fixa abriria buraco na contagem enquanto elas não existirem.
 */
export type SectionIntro = {
  eyebrow: string;
  title: string;
  description?: string;
};

export type DifferentiatorItem = {
  title: string;
  description: string;
};

export type DifferentiatorsContent = SectionIntro & {
  items: DifferentiatorItem[];
};

export type EngagementFormat = {
  label: string;
  title: string;
  description: string;
};

export type FormatsContent = SectionIntro & {
  items: EngagementFormat[];
  /** Fecho abaixo dos cards, quando existir. */
  closing?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqContent = SectionIntro & {
  items: FaqItem[];
};

export type CaseExtraMetric = {
  value: string;
  label: string;
};

export type CaseStudy = {
  category: string;
  /** Identificador da auditoria. Não aparece mais no card — segue como chave
      estável da lista, que não pode depender de texto que muda na copy. */
  reference: string;
  imageUrl?: string;
  imageAlt?: string;
  /** Foto do próprio site do cliente, exibida bem apagada atrás da
      logo. Decorativa: entra com alt vazio. */
  backgroundUrl?: string;
  /** Campos de resultado. Opcionais: um cliente entra na seção assim que a
      logo existe, e ganha os números quando o case for fechado. */
  metricValue?: string;
  metricLabel?: string;
  metricAccent?: boolean;
  /** Resultados além do principal, quando o case entregou mais de um.
      Entram como linha compacta abaixo do número grande: dois números
      do mesmo tamanho brigariam entre si, e a seção perde o ritmo se
      cada card tiver uma âncora visual diferente. */
  extraMetrics?: CaseExtraMetric[];
  description?: string;
  platform?: string;
  badge?: string;
};

export type FinalCtaMetaItem = {
  label: string;
  value: string;
};

export type FinalCtaPainPoints = {
  intro: string;
  items: string[];
};

export type FinalCtaContent = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaUrl: string;
  meta: FinalCtaMetaItem[];
  painPoints: FinalCtaPainPoints;
};

export type SeoContent = {
  title: string;
  description: string;
  keywords: string[];
};

export type SiteContent = {
  seo: SeoContent;
  header: SiteHeader;
  footer: SiteFooter;
  hero: HeroContent;
  proofBar: ProofStat[];
  services: ServiceItem[];
  method: MethodPhase[];
  cases: CaseStudy[];
  /**
   * As três seções abaixo são opcionais de propósito. A estrutura da página
   * já as prevê, mas cada uma só é renderizada quando tiver conteúdo: seção
   * vazia no ar é pior do que seção ausente.
   */
  differentiators?: DifferentiatorsContent;
  formats?: FormatsContent;
  faq?: FaqContent;
  finalCta: FinalCtaContent;
};

// ---- Blog ----

export type BlogInlineChild =
  | {
      type: "text";
      text: string;
      bold?: boolean;
      italic?: boolean;
      underline?: boolean;
      strikethrough?: boolean;
      code?: boolean;
    }
  | {
      type: "link";
      url: string;
      children: BlogInlineChild[];
    };

export type BlogBlock =
  | { type: "paragraph"; children: BlogInlineChild[] }
  | { type: "heading"; level: 1 | 2 | 3 | 4 | 5 | 6; children: BlogInlineChild[] }
  | {
      type: "list";
      format: "ordered" | "unordered";
      children: Array<{ type: "list-item"; children: BlogInlineChild[] }>;
    }
  | { type: "quote"; children: BlogInlineChild[] }
  | { type: "code"; children: Array<{ type: "text"; text: string }> }
  | {
      type: "image";
      image: NonNullable<Media>;
      children?: Array<{ type: "text"; text: string }>;
    };

export type BlogCategory =
  | "noticia"
  | "tutorial"
  | "case"
  | "novidade"
  | "tendencia"
  | "geral";

export type BlogPost = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: BlogBlock[];
  cover?: Media;
  author?: string;
  category?: BlogCategory;
  tags?: string[];
  readingTime?: number;
  source?: "ascendly" | "manual";
  externalId?: string;
  seo?: Seo | null;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
};
