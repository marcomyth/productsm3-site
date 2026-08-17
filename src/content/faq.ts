import type { FaqSection } from "@/lib/types";

/**
 * Conteúdo da página de FAQ (/faq).
 * Renderizado por src/app/faq/page.tsx via componente Faq.
 */
export const FAQ_SECTION: FaqSection = {
  __component: "sections.faq",
  id: 1,
  title: "Perguntas frequentes",
  subtitle: "Dúvidas comuns de quem está pensando em contratar a gente.",
  items: [
    {
      id: 1,
      question: "Quanto custa um site com a productsm3?",
      answer:
        "O investimento varia conforme o escopo. Sites institucionais começam em R$ 9.000. Landing pages a partir de R$ 4.500. SaaS são orçados por sprint. Após o briefing inicial, enviamos uma proposta detalhada.",
    },
    {
      id: 2,
      question: "Quanto tempo leva para entregar um projeto?",
      answer:
        "Landing pages ficam prontas em 2 a 3 semanas. Sites institucionais entre 4 e 8 semanas. Projetos de SaaS variam — em média começam a rodar em produção em 8 a 12 semanas.",
    },
    {
      id: 3,
      question: "Vocês oferecem hospedagem?",
      answer:
        "Sim. Usamos Vercel, Cloudflare e AWS como padrão. Cuidamos do deploy, do domínio e do SSL. Você pode optar por usar a nossa infra ou hospedar com seu provedor.",
    },
    {
      id: 4,
      question: "E depois que o site entra no ar?",
      answer:
        "Oferecemos um plano mensal de manutenção opcional: atualizações, monitoramento, backups, ajustes e melhorias contínuas de performance e SEO.",
    },
    {
      id: 5,
      question: "Posso editar os textos e imagens sozinho?",
      answer:
        "Sim. Entregamos com um CMS amigável (Strapi, Sanity ou WordPress headless, conforme o caso). Sua equipe edita sem precisar de desenvolvedor.",
    },
  ],
};
