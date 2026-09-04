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
    caption: string;
    year: string;
    liveLabel: string;
    syncLabel: string;
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

export type MethodPhase = {
  index: string;
  phaseLabel: string;
  title: string;
  description: string;
  timeframe: string;
};

export type CaseStudy = {
  category: string;
  reference: string;
  imageUrl: string;
  imageAlt: string;
  metricValue: string;
  metricLabel: string;
  metricAccent?: boolean;
  description: string;
  platform: string;
  badge: string;
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
  capacityLabel: string;
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
  techStack: string[];
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
