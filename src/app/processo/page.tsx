import type { Metadata } from "next";
import { Process } from "@/components/sections/Process";
import { PROCESS_SECTION } from "@/content/process";

export const metadata: Metadata = {
  title: "Processo",
  description:
    "Um processo claro, do briefing ao deploy. Veja como a productsm3 conduz seu projeto — sem caixas-pretas, com entregas visíveis a cada etapa.",
  alternates: { canonical: "/processo" },
};

export default function ProcessoPage() {
  return <Process data={PROCESS_SECTION} />;
}
