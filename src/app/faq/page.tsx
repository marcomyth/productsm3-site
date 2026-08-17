import type { Metadata } from "next";
import { Faq } from "@/components/sections/Faq";
import { FAQ_SECTION } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Perguntas frequentes sobre preços, prazos, hospedagem e manutenção. Tire suas dúvidas antes de contratar a productsm3.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return <Faq data={FAQ_SECTION} />;
}
