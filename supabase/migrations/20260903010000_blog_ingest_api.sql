-- Suporte à ingestão automática de posts via API (Ascendly) — ver
-- src/app/api/blog-posts/ e src/app/api/upload/. Adiciona a tabela media
-- (imagens enviadas via /api/upload), liga blog_posts.cover_id nela,
-- torna document_id obrigatório (gerado por nós, nunca pelo Ascendly) e
-- external_id único (chave de idempotência). category vira texto livre —
-- uma categoria nova do lado do Ascendly não pode derrubar a publicação
-- com um erro de enum inválido.

create table if not exists public.media (
  id bigint generated always as identity primary key,
  name text not null,
  url text not null,
  hash text,
  ext text,
  mime text,
  width integer,
  height integer,
  size numeric, -- KB, não bytes (convenção Strapi)
  alternative_text text,
  caption text,
  provider text not null default 'supabase',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.media enable row level security;

create policy "media is publicly readable"
  on public.media for select
  to anon, authenticated
  using (true);

alter table public.blog_posts
  alter column document_id set not null,
  add constraint blog_posts_external_id_key unique (external_id),
  add column cover_id bigint references public.media (id),
  drop column if exists cover,
  alter column category type text using category::text;

drop type if exists public.blog_category;
