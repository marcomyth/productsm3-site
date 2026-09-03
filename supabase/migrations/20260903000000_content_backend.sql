-- Backend de conteúdo do site (productsm3-site): site_content + blog_posts.
-- Substitui src/content/site.ts e src/content/blog-posts.ts como fonte de
-- verdade — ver src/lib/content.ts. Migração inicial, roda uma vez.

-- ---- site_content: linha única com o payload SiteContent completo ----

create table if not exists public.site_content (
  id smallint primary key default 1,
  data jsonb not null,
  updated_at timestamptz not null default now(),
  constraint site_content_singleton check (id = 1)
);

alter table public.site_content enable row level security;

create policy "site_content is publicly readable"
  on public.site_content for select
  to anon, authenticated
  using (true);

-- ---- blog_posts: uma linha por post, espelha BlogPost em src/lib/types.ts ----

create type public.blog_category as enum (
  'noticia', 'tutorial', 'case', 'novidade', 'tendencia', 'geral'
);

create table if not exists public.blog_posts (
  id bigint generated always as identity primary key,
  document_id text unique,
  slug text not null unique,
  title text not null,
  excerpt text,
  content jsonb,
  cover jsonb,
  author text,
  category public.blog_category,
  tags text[] not null default '{}',
  reading_time integer,
  source text,
  external_id text,
  seo jsonb,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists blog_posts_published_at_idx
  on public.blog_posts (published_at desc);

create index if not exists blog_posts_category_idx
  on public.blog_posts (category);

alter table public.blog_posts enable row level security;

-- Só posts publicados (published_at no passado) ficam visíveis pela anon key.
-- Rascunhos exigem a service role key (usada só em scripts/seed-supabase.ts).
create policy "published blog posts are publicly readable"
  on public.blog_posts for select
  to anon, authenticated
  using (published_at is not null and published_at <= now());
