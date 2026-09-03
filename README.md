# productsm3 — site

Frontend Next.js 15 (App Router, Server Components). Site content e blog vêm do Supabase (`src/lib/content.ts`) — ver seção [Supabase](#supabase).

## Stack

- Next.js 15 + React 19 (App Router, Server Components)
- TypeScript strict
- Tailwind CSS v4 (`@theme` em `globals.css`)
- lucide-react (ícones)
- Supabase (`@supabase/supabase-js`) — site content + blog

## Requisitos

- Node.js 20+ (recomendado 22+)
- Um projeto Supabase com o schema de `supabase/migrations/` aplicado (ver [Supabase](#supabase))

## Como rodar

```bash
# 1. Instalar deps
npm install

# 2. Copiar .env.local.example → .env.local e preencher SUPABASE_URL / SUPABASE_ANON_KEY
cp .env.local.example .env.local

# 3. Subir o servidor de desenvolvimento
npm run dev
# http://localhost:3000

# 4. Build de produção
npm run build
npm start
```

## Variáveis de ambiente

Ver `.env.local.example`. `SUPABASE_URL` / `SUPABASE_ANON_KEY` são obrigatórias em qualquer ambiente (`src/lib/supabase.ts` lança erro se faltarem). `SUPABASE_SERVICE_ROLE_KEY` só é usada por `scripts/seed-supabase.ts`, nunca pelo app.

## Supabase

Site content e blog vivem em duas tabelas (schema em `supabase/migrations/20260903000000_content_backend.sql`):

- **`site_content`** — linha única (`id=1`) com o payload `SiteContent` inteiro em `data jsonb`.
- **`blog_posts`** — uma linha por post, espelha o tipo `BlogPost` de `src/lib/types.ts`. RLS só expõe posts com `published_at` no passado pra chave anon.

`src/lib/content.ts` (`getSiteContent`, `getBlogPosts`, `getBlogPostBySlug`, `getBlogPostSlugs`) lê dessas tabelas via `src/lib/supabase.ts` (client server-only, anon key).

### Setup (uma vez)

1. **Conectar o repo ao projeto Supabase**: dashboard do projeto → Settings → Integrations → GitHub → *Connect GitHub* → selecionar `marcomyth/productsm3-site`.
2. **Aplicar o schema**: cole o conteúdo de `supabase/migrations/20260903000000_content_backend.sql` no SQL Editor do dashboard e rode.
3. **Pegar as chaves**: Settings → API Keys → copiar a Project URL, a `anon`/publishable key e a `service_role` key pro `.env.local`.
4. **Popular com o conteúdo atual**: `npm run seed:supabase` — importa `src/content/site.ts` e `src/content/blog-posts.ts` (que continuam no repo só como fonte do seed) e faz upsert no Supabase.

Pra editar conteúdo depois, é direto no Table Editor do Supabase (ou via SQL) — não precisa mais editar `src/content/*.ts` nem redeployar.

## Estrutura

```
src/
  app/
    layout.tsx              # Header/Footer, fontes (Inter/Instrument Serif/Newsreader), metadata via getSiteContent().seo
    page.tsx                # home: Hero, ProofBar, Services, Method, Cases, TechStackTicker, FinalCta
    not-found.tsx
    globals.css              # Tailwind v4 (@theme) — paleta "Editorial Tech", tema único (sem dark mode)
    blog/
      page.tsx                # listagem paginada + filtro por categoria (?cat=)
      [slug]/page.tsx          # post individual, generateStaticParams no build
  components/
    layout/Header.tsx         # client — menu mobile
    layout/Footer.tsx
    sections/                  # Hero, ProofBar, Services, Method, Cases, TechStackTicker, FinalCta
    blog/
      BlogCard.tsx
      BlocksRenderer.tsx        # renderiza o content (jsonb) de cada post
  lib/
    content.ts                  # getSiteContent/getBlogPosts* — lê do Supabase
    supabase.ts                 # client server-only (anon key)
    types.ts                     # SiteContent, BlogPost, etc.
    media.ts                      # mediaUrl() — hoje passthrough, migra p/ Supabase Storage
    env.ts                         # readEnv()
    utils.ts                        # cn()
  content/
    site.ts                        # fonte do seed de site_content (npm run seed:supabase)
    blog-posts.ts                   # fonte do seed de blog_posts (hoje vazio)
  config/site.ts                    # siteConfig.url
```

## Blog

- `/blog` (`src/app/blog/page.tsx`): listagem paginada (12/página) com filtro opcional por categoria via `?cat=`.
- `/blog/[slug]`: `generateStaticParams` prerenderiza todos os slugs existentes no build; um slug novo é resolvido sob demanda (`dynamicParams` default) e cai em `notFound()` se não existir.
- `BlocksRenderer` ([src/components/blog/BlocksRenderer.tsx](src/components/blog/BlocksRenderer.tsx)) renderiza o campo `content` (jsonb) de cada post — formato de "blocks" herdado do Strapi v5 (parágrafo, heading, lista, quote, code, imagem), guardado como está na coluna `blog_posts.content`.

## SEO

- `app/layout.tsx#generateMetadata` → `getSiteContent().seo` (title/description/OG default).
- `app/blog/[slug]/page.tsx#generateMetadata` → `post.seo`, com fallback pro título/excerpt do próprio post.

## Tema

- Paleta e tokens em `src/app/globals.css` (bloco `@theme`, cores em hex) — design "Editorial Tech" importado do Stitch. **Tema único, sem dark mode** (o próprio arquivo documenta isso).
- Tipografia: Inter (sans), Instrument Serif e Newsreader (serif), via `next/font/google` em `app/layout.tsx`, com fallback de sistema.
- Os nomes de classe seguem a convenção shadcn (`bg-card`, `text-muted-foreground`, `border-border`...) só como aliases de cor no `@theme` — não há componentes shadcn instalados em `src/components/ui` (a pasta não existe hoje).

## Acessibilidade

- `:focus-visible` global em `globals.css`.
- Menu mobile do `Header` tem `aria-label`/`aria-expanded`.
- Wordmark decorativo do `Footer` marcado `aria-hidden`.

## Notas

- `next.config.ts` usa `images.unoptimized` (comentário no arquivo indica alvo Cloudflare Pages/Workers — não há `wrangler.toml` no repo ainda) e só libera `lh3.googleusercontent.com` como domínio remoto de imagem (fotografia placeholder do export do Stitch — trocar antes de ir pra produção).
- `package.json` ainda lista algumas deps sem uso no código hoje (`next-themes`, `react-hook-form`, `@hookform/resolvers`, `zod`, `sonner`, `@radix-ui/react-*`, `class-variance-authority`) — sobras de uma versão anterior do projeto (form de contato + shadcn/ui + dark mode). Não foram removidas; vale uma limpeza separada.
