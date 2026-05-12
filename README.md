# productsm3 — site

Frontend Next.js 15 (App Router, Server Components) que consome um Strapi 5 com landing page dinâmica.

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
- Strapi 5 rodando em `http://localhost:1337` com os single types `landing-page` e `global` publicados

## Como rodar

```bash
# 1. Instalar deps (use pnpm se disponível, senão npm)
npm install

# 2. Copiar / ajustar .env.local
# NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
# STRAPI_URL=http://localhost:1337

# 3. Subir o servidor de desenvolvimento
npm run dev
# http://localhost:3000

# 4. Build de produção
npm run build
npm start
```

## Variáveis de ambiente

| Variável | Onde é usada | Default |
|---|---|---|
| `STRAPI_URL` | Server (`lib/strapi.ts`, `mediaUrl`) | `http://localhost:1337` |
| `NEXT_PUBLIC_STRAPI_URL` | Client (fallback de `mediaUrl`) | `http://localhost:1337` |

> Não precisamos de token enquanto os endpoints estiverem públicos no Strapi. Caso passe a exigir auth, basta adicionar um `STRAPI_TOKEN` e injetar o header `Authorization` em `lib/strapi.ts`.

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
    strapi.ts               # fetch helper com cache tag-based + revalidate 60s
    types.ts                # tipos derivados dos schemas Strapi 5
    utils.ts                # cn() + mediaUrl()
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

`lib/strapi.ts` usa `fetch(..., { next: { tags, revalidate: 60 } })`. Para invalidar manualmente, basta chamar `revalidateTag("landing-page")` ou `revalidateTag("global")` em uma route handler (ex.: webhook do Strapi).

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
