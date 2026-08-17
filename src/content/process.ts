import type { ProcessSection } from "@/lib/types";

/**
 * Conteúdo da página de PROCESSO (/processo).
 * Renderizado por src/app/processo/page.tsx via componente Process.
 */
export const PROCESS_SECTION: ProcessSection = {
  __component: "sections.process",
  id: 1,
  eyebrow: "Como trabalhamos",
  title: "Um processo claro, do briefing ao deploy.",
  subtitle: "Você sempre sabe em que etapa está o seu projeto — sem caixas-pretas.",
  steps: [
    {
      id: 1,
      stepNumber: 1,
      title: "Briefing e estratégia",
      description:
        "Entendemos seu negócio, público e objetivos. Definimos escopo, prazo e métricas de sucesso.",
      icon: "lucide:compass",
    },
    {
      id: 2,
      stepNumber: 2,
      title: "Design e protótipo",
      description:
        "Wireframes e protótipos em Figma com aprovação iterativa antes de uma única linha de código.",
      icon: "lucide:figma",
    },
    {
      id: 3,
      stepNumber: 3,
      title: "Desenvolvimento",
      description:
        "Sprints semanais com entregas visíveis em ambiente de homologação. Você acompanha tudo.",
      icon: "lucide:code-2",
    },
    {
      id: 4,
      stepNumber: 4,
      title: "Lançamento e otimização",
      description:
        "Deploy, testes finais, analytics e SEO. Depois, otimizamos com base em dados reais.",
      icon: "lucide:rocket",
    },
  ],
};
