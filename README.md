# productsm3 — site

Frontend Next.js 15 (App Router, Server Components). Site content e blog vêm do Supabase (`src/lib/content.ts`) — ver seção [Supabase](#supabase).

## Stack

- Next.js 15 + React 19 (App Router)
- TypeScript strict
- TailwindCSS v4 (via `@tailwindcss/postcss`)
- shadcn/ui (componentes locais em `src/components/ui`)
- lucide-react
- react-hook-form + zod
- sonner (toasts)
- next-themes (dark/light/system)

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
    layout.tsx              # carrega Global + Header/Footer + Theme + Toaster
    page.tsx                # consome /api/landing-page e renderiza dynamic zone
    globals.css             # Tailwind v4 + tokens (OKLCH) + dark mode
    api/lead/route.ts       # POST proxy → Strapi /api/leads
  components/
    layout/Header.tsx       # client (menu mobile + theme toggle)
    layout/Footer.tsx
    sections/
      Hero.tsx Stats.tsx FeatureGrid.tsx ServicesList.tsx
      Process.tsx Portfolio.tsx Testimonials.tsx Faq.tsx
      Cta.tsx ContactForm.tsx (client)
      SectionRenderer.tsx   # switch exaustivo por __component
    ui/                     # shadcn primitives (button, card, input, ...)
    Icon.tsx                # wrapper dinâmico p/ lucide-react ("lucide:rocket" → <Rocket/>)
    CtaButton.tsx           # mapeia StrapiButton → <Button asChild><Link/></Button>
    ThemeProvider.tsx / ThemeToggle.tsx
  lib/
    content.ts              # getSiteContent/getBlogPosts* — lê do Supabase
    supabase.ts             # client server-only (anon key)
    types.ts                # SiteContent, BlogPost, etc.
    media.ts                # mediaUrl() — hoje passthrough, migra p/ Supabase Storage
    utils.ts                # cn()
  content/
    site.ts                 # fonte do seed de site_content (npm run seed:supabase)
    blog-posts.ts            # fonte do seed de blog_posts
  config/site.ts            # nome/descrição/og default
```

## Renderização da dynamic zone

`app/page.tsx` chama `getLandingPage()` e itera `sections[]`, despachando para o componente certo via `SectionRenderer` (switch em `__component`).

Componentes suportados:

| `__component` | Componente |
|---|---|
| `sections.hero` | `Hero` |
| `sections.stats` | `Stats` |
| `sections.feature-grid` | `FeatureGrid` |
| `sections.services-list` | `ServicesList` |
| `sections.process` | `Process` |
| `sections.portfolio` | `Portfolio` |
| `sections.testimonials` | `Testimonials` |
| `sections.faq` | `Faq` |
| `sections.cta` | `Cta` |
| `sections.contact-form` | `ContactForm` |

## Cache & revalidação

Estratégia: **ISR com TTL longo (24h) como safety net + webhook do Strapi para invalidação instantânea**.

- `lib/strapi.ts` usa `fetch(..., { next: { tags: ["landing-page" | "global"], revalidate: 86400 } })`.
- A página `/` é prerenderizada estaticamente (`○ Static` no build) e servida do CDN.
- Quando alguém publica/atualiza algo no Strapi, um webhook bate em `/api/revalidate` e chama `revalidateTag()` — o próximo visitante recebe a versão fresca em segundos.
- O TTL de 24h só age como rede de segurança caso o webhook falhe ou esteja desconfigurado.

### Configurar o webhook (uma vez)

1. **Gerar o secret** (já está em `.env.local` como `REVALIDATE_SECRET`):
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```
2. **Vercel**: adicionar `REVALIDATE_SECRET` em Project Settings → Environment Variables (mesmo valor).
3. **Strapi admin** → Settings → Webhooks → Create new webhook:
   - **Name**: `Next.js revalidate`
   - **URL**: `https://SEU_DOMINIO/api/revalidate?secret=O_SEU_SECRET`
   - **Headers**: pode deixar vazio (o secret já vai na URL) ou usar `Authorization: Bearer SEU_SECRET`
   - **Events**: marcar todos sob `Entry` (`entry.create`, `entry.update`, `entry.publish`, `entry.unpublish`, `entry.delete`) e `Media` se desejar.
4. **Testar**: no Strapi, publique qualquer alteração. O webhook envia POST para o Next que chama `revalidateTag("landing-page")` e `revalidateTag("global")`. Recarregue a página — deve refletir a mudança.

### Trigger manual (debug)

```bash
curl "https://SEU_DOMINIO/api/revalidate?secret=O_SEU_SECRET"
# → { "revalidated": true, "tags": ["landing-page","global"], ... }
```

## SEO

- `app/layout.tsx#generateMetadata` puxa `global.defaultSeo` (title, description, OG).
- `app/page.tsx#generateMetadata` puxa `landing-page.seo` (componente `shared.seo`) e sobrescreve.

## Form de contato

`ContactForm` é um Client Component com `react-hook-form` + `zod`. No submit, faz `POST /api/lead`, que repassa para `POST /api/leads` do Strapi (com `data: { ... }`). Toast de sucesso/erro via `sonner`.

## Onde ajustar o tema

- **Tokens de cor (OKLCH)** e radius: `src/app/globals.css` (blocos `:root` e `.dark`).
- **Tipografia**: fonte Inter via `next/font` em `src/app/layout.tsx` (com fallback de sistema).
- **Variantes de Button**: `src/components/ui/button.tsx` (`buttonVariants`). Os botões vindos do Strapi (`variant: primary|secondary|outline|ghost`) caem direto nessas variantes.
- **Ícones**: o wrapper `<Icon name="lucide:rocket" />` em `src/components/Icon.tsx` aceita tanto `"lucide:rocket"` quanto `"rocket"`. Fallback é `Sparkles`.

## Acessibilidade

- Focus ring visível via `:focus-visible` global.
- `aria-label` nos botões de ícone (theme toggle, menu mobile, social).
- Form com `aria-invalid` + `aria-describedby` para mensagens de erro.
- Cores em OKLCH validadas para contraste AA em ambos os temas.

## Notas

- Imagens externas autorizadas em `next.config.ts` (apenas `localhost:1337`). Adicione domínios de produção quando o Strapi for movido.
- Strapi 5 retorna campos no nível raiz (sem `attributes`). Os tipos em `src/lib/types.ts` refletem esse formato.
- Se o Strapi estiver fora do ar, `getLandingPage()` retorna `null` e a página exibe um fallback amigável apontando como configurar.
