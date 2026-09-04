import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceItem } from "@/lib/types";

type Props = {
  data: ServiceItem[];
};

export function Services({ data }: Props) {
  return (
    <section
      id="servicos"
      className="w-full bg-surface px-grid-margin-mobile py-space-2xl md:px-grid-margin-tablet lg:px-grid-margin-desktop"
    >
      <div className="mb-space-xl flex flex-col justify-between border-b border-surface-variant pb-space-sm md:flex-row md:items-end">
        <div>
          <span className="font-label-index text-label-index uppercase tracking-[0.2em] text-secondary">
            02 / Áreas de Domínio
          </span>
          <h2 className="mt-space-2xs font-serif text-display-lg-mobile font-normal tracking-tight text-primary md:text-display-lg">
            Funil sinérgico de venda
          </h2>
        </div>
        <p className="mt-space-xs max-w-md font-body-sm text-body-sm text-on-surface-variant md:mt-0">
          Elevamos a qualidade dos seus processos de marketing sem elevar o custo operacional.
          Implementamos e gerenciamos o funil sinérgico de vendas com transparência total, para que
          cada atividade da sua operação de tráfego trabalhe pelos objetivos do seu negócio.
        </p>
      </div>

      <div className="flex flex-col divide-y divide-surface-variant">
        {data.map((service) => (
          <div
            key={service.index}
            id={`servico-${service.index}`}
            className="group scroll-mt-20 rounded px-2 py-space-xl transition-colors duration-200 hover:bg-surface-container-low/60 sm:px-4"
          >
            <div className="grid grid-cols-1 gap-gutter-desktop lg:grid-cols-12">
              <div className="lg:col-span-2">
                <span className="font-serif text-display-lg font-normal text-outline transition-colors group-hover:text-secondary">
                  {service.index}
                </span>
                <span className="mt-1 block font-label-meta text-label-meta uppercase tracking-widest text-on-surface-variant">
                  {service.category}
                </span>
              </div>
              <div className="space-y-space-xs lg:col-span-5">
                <h3 className="font-serif text-headline-md font-normal leading-tight text-primary">
                  {service.title}
                </h3>
                <p className="font-sans text-body-default leading-relaxed text-on-surface-variant">
                  {service.description}
                </p>
                <div className="pt-space-xs">
                  <Link
                    href="/#auditoria"
                    className="inline-flex items-center gap-2 font-label-meta text-label-meta font-semibold uppercase tracking-widest text-secondary transition-colors hover:text-primary"
                  >
                    {service.ctaLabel}
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-space-md gap-y-space-xs pt-space-xs text-body-sm sm:grid-cols-2 lg:col-span-5 lg:pt-0">
                {service.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-2">
                    <span className="mt-0.5 font-mono text-secondary">—</span>
                    <span className="text-on-surface">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
