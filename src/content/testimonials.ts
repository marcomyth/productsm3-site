import type { TestimonialsSection } from "@/lib/types";

/**
 * Conteúdo da página de DEPOIMENTOS (/depoimentos).
 * Renderizado por src/app/depoimentos/page.tsx via componente Testimonials.
 */
export const TESTIMONIALS_SECTION: TestimonialsSection = {
  __component: "sections.testimonials",
  id: 1,
  eyebrow: "Depoimentos",
  title: "O que nossos clientes dizem.",
  subtitle: "Confiança construída projeto por projeto.",
  testimonials: [
    {
      id: 1,
      name: "Mariana Costa",
      role: "CEO",
      company: "Aurora Finance",
      quote:
        "A productsm3 entendeu nosso produto desde o primeiro briefing. Entregaram um SaaS robusto, escalável e bonito — fechamos a Série A 3 meses depois do lançamento.",
      rating: 5,
    },
    {
      id: 2,
      name: "Rafael Linhares",
      role: "Sócio-fundador",
      company: "Vértice Arquitetura",
      quote:
        "Pela primeira vez nosso site representa de verdade o nível dos nossos projetos. Recebemos mais briefings qualificados em 2 meses do que em todo o ano anterior.",
      rating: 5,
    },
    {
      id: 3,
      name: "Camila Tavares",
      role: "Head de Marketing",
      company: "Helix Tecnologia",
      quote:
        "A landing converteu 18% no lançamento. A equipe da productsm3 é técnica de verdade e entende de marketing — uma combinação rara.",
      rating: 5,
    },
    {
      id: 4,
      name: "Diego Almeida",
      role: "Fundador",
      company: "Brutto Coffee",
      quote:
        "Migramos para o headless e o resultado foi imediato: site 4x mais rápido, conversão +35% e SEO crescendo todo mês.",
      rating: 5,
    },
    {
      id: 5,
      name: "Patricia Nunes",
      role: "Diretora de Conteúdo",
      company: "Norte Médico",
      quote:
        "Saímos de um WordPress travado para uma plataforma de verdade. Hoje publicamos sem depender de ninguém e o tráfego orgânico não para de crescer.",
      rating: 5,
    },
  ],
};
