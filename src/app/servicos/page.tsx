import type { Metadata } from "next";
import { ServicesList } from "@/components/sections/ServicesList";
import { SERVICES_SECTION } from "@/content/services";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Do site institucional ao SaaS completo — sites, landing pages, e-commerces, aplicações SaaS, blog e manutenção. Conheça os serviços da productsm3.",
  alternates: { canonical: "/servicos" },
};

export default function ServicosPage() {
  return (
    <>
      <ServicesList data={SERVICES_SECTION} />
    </>
  );
}
