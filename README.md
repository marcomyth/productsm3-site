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
- Um projeto Supabase com o schema de `supabase/migrations/` aplicado e um bucket público `media` no Storage (ver [Supabase](#supabase))

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

Ver `.env.local.example`. Todas obrigatórias em qualquer ambiente que sirva tráfego real (os clients em `src/lib/supabase.ts` / `src/lib/supabase-admin.ts` lançam erro se faltarem):

| Variável | Onde é usada |
|---|---|
| `SUPABASE_URL` / `SUPABASE_ANON_KEY` | Leitura pública (`src/lib/supabase.ts`) — site content, blog |
| `SUPABASE_SERVICE_ROLE_KEY` | Escrita server-side (`src/lib/supabase-admin.ts`) — rotas de ingest em `src/app/api/` e `scripts/seed-supabase.ts`. Ignora RLS, nunca expor pro client. |
| `BLOG_INGEST_TOKEN` | Bearer token que autentica o Ascendly em `/api/blog-posts` e `/api/upload` (ver [Ingestão automática](#ingestão-automática-ascendly)) |

## Supabase

Três tabelas (schema em `supabase/migrations/`, aplicado em ordem):

- **`site_content`** — linha única (`id=1`) com o payload `SiteContent` inteiro em `data jsonb`.
- **`blog_posts`** — uma linha por post, espelha o tipo `BlogPost` de `src/lib/types.ts`. `document_id` é gerado por este projeto (nunca pelo Ascendly) e nunca muda; `external_id` é único (chave de idempotência do Ascendly); `category` é texto livre, não enum — uma categoria nova do lado do Ascendly não pode derrubar a publicação. RLS só expõe posts com `published_at` no passado pra chave anon.
- **`media`** — uma linha por arquivo recebido em `/api/upload`, guardado no Storage. `blog_posts.cover_id` referencia essa tabela.

`src/lib/content.ts` lê essas tabelas via `src/lib/supabase.ts` (client server-only, **anon key**, respeita RLS). As rotas de ingest em `src/app/api/` escrevem via `src/lib/supabase-admin.ts` (**service role**, ignora RLS) — é assim que a spec exige que só o servidor escreva.

### Setup (uma vez)

1. **Conectar o repo ao projeto Supabase**: dashboard do projeto → Settings → Integrations → GitHub → *Connect GitHub* → selecionar `marcomyth/productsm3-site`.
2. **Aplicar o schema**: no SQL Editor, rode **nessa ordem** o conteúdo de `supabase/migrations/20260903000000_content_backend.sql` e depois `supabase/migrations/20260903010000_blog_ingest_api.sql`.
3. **Criar o bucket de Storage**: Storage → New bucket → nome `media`, marcado como **Public**.
4. **Pegar as chaves**: Settings → API Keys → copiar a Project URL, a `anon`/publishable key e a `service_role` key pro `.env.local`.
5. **Gerar o `BLOG_INGEST_TOKEN`**: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` — esse valor vai no `.env.local`/Vercel **e** na config do destino do lado do Ascendly.
6. **Popular com o conteúdo atual**: `npm run seed:supabase` — importa `src/content/site.ts` e `src/content/blog-posts.ts` (que continuam no repo só como fonte do seed) e faz upsert em `site_content`. `blog_posts` fica vazio (posts entram só via ingest, ver abaixo).

Pra editar `site_content` depois, é direto no Table Editor do Supabase (ou via SQL) — não precisa mais editar `src/content/site.ts` nem redeployar. `blog_posts` **não é editado manualmente** — é só o Ascendly que escreve nele (ver próxima seção).

## Ingestão automática (Ascendly)

O blog não tem CMS nem tela de edição — todo post é criado/atualizado por um sistema externo (Ascendly) via REST, autenticado com um Bearer token (`BLOG_INGEST_TOKEN`) comparado em tempo constante (`crypto.timingSafeEqual`, ver `src/lib/ingest/auth.ts`). Rotas:

| Rota | O que faz |
|---|---|
| `GET /api/blog-posts?pagination[limit]=1` | Teste de conexão — sempre 200, mesmo sem posts. |
| `GET /api/blog-posts?filters[externalId][$eq]=<id>&pagination[pageSize]=1` | Busca de idempotência, **sem filtro de status** (rascunho + publicado juntos — filtrar só publicados faz o Ascendly duplicar o post). |
| `POST /api/blog-posts` | Cria (`{ data: {...} }`, aceita `?status=draft`). Gera `document_id` e `slug` (a partir do título, se não vier); em colisão de slug, acrescenta um sufixo. |
| `PUT /api/blog-posts/<documentId>` | Atualiza — mesmo body/resposta do POST. `document_id` e `external_id` nunca são reescritos. |
| `POST /api/upload` | Multipart, campo `files`. Sobe pro bucket `media` do Storage, grava uma linha em `media`, devolve array de 1 item no formato que o Ascendly espera. Rejeita (413) acima de ~4.4 MB — a Vercel corta perto de 4.5 MB de corpo de request. |

`publishedAt` no payload é o interruptor de visibilidade: presente = publicado, ausente (ou `?status=draft`) = rascunho, e RLS garante que rascunho não aparece pro client público.

Depois de todo create/update bem-sucedido, `src/lib/ingest/revalidate.ts` invalida as tags `blog-posts` + `blog-post-<slug>` (que `src/lib/content.ts` usa via `unstable_cache`) e, por cima, revalida a layout raiz inteira como rede de segurança.

**Não existe rota de DELETE** — o Ascendly nunca apaga nem despublica nada aqui; quem manda no ciclo de vida do post é este projeto.

**Cuidados de infra pra produção:**
- Zero redirecionamentos nas rotas de API — confira que o domínio final (com/sem `www`) bate exatamente com a URL base cadastrada no Ascendly.
- Desative Deployment Protection da Vercel nas rotas de API (senão toda chamada volta 401, parecendo token inválido).
- `SUPABASE_SERVICE_ROLE_KEY` e `BLOG_INGEST_TOKEN` precisam estar configuradas nas env vars da Vercel, não só no `.env.local`.
- O host cadastrado no Ascendly precisa ser público — nunca `localhost` (ele bloqueia endereços privados).

## Estrutura

```
src/
  app/
    layout.tsx              # Header/Footer, fontes (Inter/Instrument Serif/Newsreader), metadata via getSiteContent().seo
    page.tsx                # home: Hero, ProofBar, Services, Method, Cases, TechStackTicker, FinalCta
    not-found.tsx
    sitemap.ts               # gerado do banco, só posts publicados
    robots.ts
    globals.css              # Tailwind v4 (@theme) — paleta "Editorial Tech", tema único (sem dark mode)
    blog/
      page.tsx                # listagem paginada + filtro por categoria (?cat=)
      [slug]/page.tsx          # post individual, generateStaticParams no build, JSON-LD Article
    api/                      # ver "Ingestão automática" — auth via Bearer token, escreve com service role
      blog-posts/route.ts      # GET (busca/teste de conexão) + POST (criar)
      blog-posts/[documentId]/route.ts  # PUT (atualizar)
      upload/route.ts          # POST multipart → Supabase Storage + tabela media
  components/
    layout/Header.tsx         # client — menu mobile
    layout/Footer.tsx
    sections/                  # Hero, ProofBar, Services, Method, Cases, TechStackTicker, FinalCta
    blog/
      BlogCard.tsx
      BlocksRenderer.tsx        # renderiza o content (jsonb) de cada post
  lib/
    content.ts                  # getSiteContent/getBlogPosts* — lê do Supabase (unstable_cache + tags)
    supabase.ts                 # client de leitura (anon key, respeita RLS)
    supabase-admin.ts            # client de escrita (service role, só as rotas de ingest usam)
    ingest/                       # helpers das rotas de ingest: auth, errors, short-id, slugify, image-size, revalidate, types
    types.ts                       # SiteContent, BlogPost, etc.
    media.ts                        # mediaUrl() — passthrough (URLs do Storage já são absolutas)
    env.ts                            # readEnv()
    utils.ts                           # cn()
  content/
    site.ts                        # fonte do seed de site_content (npm run seed:supabase)
    blog-posts.ts                   # fonte do seed de blog_posts (hoje vazio — posts entram via ingest)
  config/site.ts                    # siteConfig.url
```

## Blog

- `/blog` (`src/app/blog/page.tsx`): listagem paginada (12/página) com filtro opcional por categoria via `?cat=`.
- `/blog/[slug]`: `generateStaticParams` prerenderiza todos os slugs existentes no build; um slug novo é resolvido sob demanda (`dynamicParams` default) e cai em `notFound()` se não existir.
- `BlocksRenderer` ([src/components/blog/BlocksRenderer.tsx](src/components/blog/BlocksRenderer.tsx)) renderiza o campo `content` (jsonb) de cada post — formato de "blocks" herdado do Strapi v5 (parágrafo, heading, lista, quote, code, imagem), guardado como está na coluna `blog_posts.content`.
- A capa (`post.cover`) vem de um `left join` com `media` via `blog_posts.cover_id` (ver `BLOG_SELECT` em `src/lib/content.ts`) — não é mais um blob jsonb solto na tabela.

## SEO

- `app/layout.tsx#generateMetadata` → `getSiteContent().seo` (title/description/OG default).
- `app/blog/[slug]/page.tsx#generateMetadata` → `post.seo`, com fallback pro título/excerpt do próprio post; `alternates.canonical` sempre presente (usa `post.seo.canonicalURL` se vier, senão a URL do próprio post).
- JSON-LD `Article` (headline, datePublished, author, image) inline em cada página de post.
- `app/sitemap.ts` — gerado do banco (`getBlogPosts`), só posts publicados (RLS já filtra). `app/robots.ts` aponta pra ele.

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
