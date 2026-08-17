import type { ServicesListSection } from "@/lib/types";

/**
 * Conteúdo da página de SERVIÇOS (/servicos).
 *
 * Fonte da verdade dos serviços do site. Renderizado por
 * src/app/servicos/page.tsx através do componente ServicesList.
 * Para editar os serviços, edite aqui, commite e faça push.
 */
export const SERVICES_SECTION: ServicesListSection = {
  __component: "sections.services-list",
  id: 1,
  eyebrow: "O que fazemos",
  title: "Serviços",
  subtitle:
    "Do site institucional ao SaaS completo — entregamos a solução web que sua empresa precisa.",
  services: [
    {
      id: 1,
      title: "Sites Institucionais",
      slug: "sites-institucionais",
      icon: "lucide:building-2",
      shortDescription:
        "Sites profissionais que transmitem credibilidade e geram autoridade para sua marca.",
      features: [
        {
          icon: "lucide:palette",
          title: "Design exclusivo",
          description: "Identidade visual única, alinhada à marca e ao público.",
        },
        {
          icon: "lucide:gauge",
          title: "Performance máxima",
          description: "Score 90+ no PageSpeed e Core Web Vitals no verde.",
        },
        {
          icon: "lucide:search",
          title: "SEO técnico",
          description: "Estrutura, schema.org e meta tags prontos para o Google.",
        },
      ],
    },
    {
      id: 2,
      title: "Landing Pages",
      slug: "landing-pages",
      icon: "lucide:target",
      shortDescription:
        "Páginas focadas em conversão para campanhas, lançamentos e captação de leads.",
      features: [
        {
          icon: "lucide:zap",
          title: "Conversão otimizada",
          description: "A/B testing, heatmaps e otimização contínua.",
        },
        {
          icon: "lucide:plug",
          title: "Integrações",
          description: "Conecta com RD Station, HubSpot, Pipedrive, WhatsApp e mais.",
        },
        {
          icon: "lucide:bar-chart",
          title: "Mensuração",
          description: "GTM, GA4 e pixels configurados desde o dia 1.",
        },
      ],
    },
    {
      id: 3,
      title: "E-commerce",
      slug: "ecommerce",
      icon: "lucide:shopping-cart",
      shortDescription:
        "Lojas virtuais escaláveis, com checkout otimizado e integração com meios de pagamento.",
      features: [
        {
          icon: "lucide:credit-card",
          title: "Checkout otimizado",
          description: "PIX, cartão, boleto e parcelamento sem dor de cabeça.",
        },
        {
          icon: "lucide:truck",
          title: "Logística integrada",
          description: "Correios, Melhor Envio, Frenet e transportadoras próprias.",
        },
        {
          icon: "lucide:trending-up",
          title: "Pronto para escalar",
          description: "Infraestrutura preparada para Black Friday e picos de tráfego.",
        },
      ],
    },
    {
      id: 4,
      title: "Aplicações SaaS",
      slug: "aplicacoes-saas",
      icon: "lucide:layers",
      shortDescription:
        "Plataformas web sob medida para automatizar operações e gerar receita recorrente.",
      features: [
        {
          icon: "lucide:lock",
          title: "Autenticação robusta",
          description: "Login social, MFA, RBAC e SSO quando necessário.",
        },
        {
          icon: "lucide:repeat",
          title: "Billing recorrente",
          description: "Stripe, Pagar.me ou Iugu integrados desde o início.",
        },
        {
          icon: "lucide:cloud",
          title: "Cloud escalável",
          description: "Deploy em Vercel, AWS ou GCP com CI/CD.",
        },
      ],
    },
    {
      id: 5,
      title: "Blog e Conteúdo",
      slug: "blog-e-conteudo",
      icon: "lucide:book-open",
      shortDescription:
        "Plataformas de conteúdo otimizadas para SEO e estratégia de inbound marketing.",
      features: [
        {
          icon: "lucide:edit-3",
          title: "CMS amigável",
          description: "Sua equipe publica sem precisar de desenvolvedor.",
        },
        {
          icon: "lucide:rss",
          title: "SEO + AEO",
          description: "Conteúdo pronto para Google, ChatGPT e Perplexity.",
        },
        {
          icon: "lucide:share-2",
          title: "Distribuição",
          description: "RSS, newsletter, redes sociais integradas.",
        },
      ],
    },
    {
      id: 6,
      title: "Manutenção e Performance",
      slug: "manutencao-e-performance",
      icon: "lucide:wrench",
      shortDescription:
        "Cuidamos do seu site para que ele permaneça rápido, seguro e sempre no ar.",
      features: [
        {
          icon: "lucide:shield",
          title: "Segurança",
          description: "WAF, backups diários e monitoramento de vulnerabilidades.",
        },
        {
          icon: "lucide:activity",
          title: "Uptime 99.9%",
          description: "Monitoramento 24/7 com alertas e SLA garantido.",
        },
        {
          icon: "lucide:rocket",
          title: "Otimização contínua",
          description: "Melhorias mensais de performance e UX.",
        },
      ],
    },
  ],
};
