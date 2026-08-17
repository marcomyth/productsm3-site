import type { Metadata } from "next";
import { Testimonials } from "@/components/sections/Testimonials";
import { TESTIMONIALS_SECTION } from "@/content/testimonials";

export const metadata: Metadata = {
  title: "Depoimentos",
  description:
    "O que nossos clientes dizem sobre a productsm3. Confiança construída projeto por projeto — depoimentos de quem já trabalhou com a gente.",
  alternates: { canonical: "/depoimentos" },
};

export default function DepoimentosPage() {
  return <Testimonials data={TESTIMONIALS_SECTION} />;
}
