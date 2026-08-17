import type { Metadata } from "next";
import { Portfolio } from "@/components/sections/Portfolio";
import { PORTFOLIO_SECTION } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Projetos que nos deixam orgulhosos — uma seleção dos últimos trabalhos entregues pela productsm3: sites, landing pages, e-commerces, SaaS e mais.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return <Portfolio data={PORTFOLIO_SECTION} />;
}
