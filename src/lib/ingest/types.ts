/** Shape do `data` que o Ascendly manda em POST/PUT — ver SDD Parte 2. */
export type IngestPostInput = {
  title: string;
  slug?: string;
  excerpt?: string;
  content?: unknown;
  cover?: number;
  author?: string;
  category?: string;
  tags?: string[];
  readingTime?: number;
  source?: string;
  externalId?: string;
  seo?: unknown;
  publishedAt?: string;
};
