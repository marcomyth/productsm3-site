export type Media = {
  id: number;
  url: string;
  alternativeText?: string | null;
  width?: number;
  height?: number;
  mime?: string;
  formats?: Record<string, { url: string; width: number; height: number }>;
} | null;

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

export type StrapiButton = {
  id?: number;
  label: string;
  url: string;
  variant: ButtonVariant;
  external?: boolean;
};

export type Seo = {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  shareImage?: Media;
  canonicalURL?: string;
};

export type NavLink = {
  id?: number;
  label: string;
  url: string;
  external?: boolean;
};

export type Header = {
  logo?: Media;
  logoText?: string;
  links?: NavLink[];
  cta?: StrapiButton | null;
};

export type Footer = {
  logo?: Media;
  logoText?: string;
  tagline?: string;
  columns?: Array<{
    id?: number;
    title: string;
    links: NavLink[];
  }>;
  socialLinks?: NavLink[];
  copyright?: string;
};

export type Contact = {
  email?: string;
  phone?: string;
  address?: string;
};

export type Global = {
  siteName?: string;
  defaultSeo?: Seo;
  header?: Header;
  footer?: Footer;
  contact?: Contact;
};

// ---- Section types ----

export type HeroSection = {
  __component: "sections.hero";
  id: number;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: Media;
  primaryCta?: StrapiButton | null;
  secondaryCta?: StrapiButton | null;
};

export type StatsSection = {
  __component: "sections.stats";
  id: number;
  title?: string;
  subtitle?: string;
  items: Array<{
    id?: number;
    value: string;
    label: string;
    suffix?: string;
  }>;
};

export type FeatureGridSection = {
  __component: "sections.feature-grid";
  id: number;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  features: Array<{
    id?: number;
    icon: string;
    title: string;
    description: string;
  }>;
};

export type ServiceFeature =
  | string
  | {
      id?: number;
      label?: string;
      title?: string;
      text?: string;
      name?: string;
      description?: string;
      icon?: string;
    };

export type ServiceItem = {
  id: number;
  title: string;
  slug: string;
  icon: string;
  shortDescription: string;
  features?: ServiceFeature[];
};

export type ServicesListSection = {
  __component: "sections.services-list";
  id: number;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  services: ServiceItem[];
};

export type ProcessSection = {
  __component: "sections.process";
  id: number;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  steps: Array<{
    id?: number;
    stepNumber: number;
    title: string;
    description: string;
    icon: string;
  }>;
};

export type ProjectItem = {
  id: number;
  title: string;
  slug: string;
  client?: string;
  year?: number | string;
  category?: string;
  shortDescription?: string;
  cover?: Media;
  liveUrl?: string;
  technologies?: Array<string | { id?: number; name: string }>;
};

export type PortfolioSection = {
  __component: "sections.portfolio";
  id: number;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  projects: ProjectItem[];
};

export type TestimonialItem = {
  id: number;
  name: string;
  role?: string;
  company?: string;
  quote: string;
  rating?: number;
  photo?: Media;
};

export type TestimonialsSection = {
  __component: "sections.testimonials";
  id: number;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  testimonials: TestimonialItem[];
};

export type FaqSection = {
  __component: "sections.faq";
  id: number;
  title: string;
  subtitle?: string;
  items: Array<{
    id?: number;
    question: string;
    answer: string;
  }>;
};

export type CtaSection = {
  __component: "sections.cta";
  id: number;
  title: string;
  description?: string;
  primaryCta?: StrapiButton | null;
  secondaryCta?: StrapiButton | null;
};

export type ContactFormSection = {
  __component: "sections.contact-form";
  id: number;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  submitLabel?: string;
  successMessage?: string;
};

export type Section =
  | HeroSection
  | StatsSection
  | FeatureGridSection
  | ServicesListSection
  | ProcessSection
  | PortfolioSection
  | TestimonialsSection
  | FaqSection
  | CtaSection
  | ContactFormSection;

export type LandingPage = {
  id: number;
  title?: string;
  seo?: Seo;
  sections: Section[];
};

export type StrapiResponse<T> = {
  data: T;
  meta?: unknown;
};

export type LeadPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  budget?: string;
  source?: string;
};
