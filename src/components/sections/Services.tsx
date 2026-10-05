import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { TituloSecao } from "@/components/layout/TituloSecao";
import type { ServiceItem } from "@/lib/types";

type Props = {
  data: ServiceItem[];
};

/**
 * Áreas de domínio, em lista dividida por régua e não em cards: são itens de
 * um mesmo escopo, lidos em sequência, e borda em cada um fragmentaria o que
 * é uma coisa só.
 *
 * Escura, seguindo a alternância da referência, onde o bloco que explica o
 * serviço vem em fundo escuro entre dois claros.
 */
export function Services({ data }: Props) {
  return (
    <Section id="servicos" tom="escuro">
      <TituloSecao
        destaque="áreas de domínio"
        afirmacao="Funil sinérgico de venda"
        descricao="Elevamos a qualidade dos seus processos de marketing sem elevar o custo operacional. Implementamos e gerenciamos o funil sinérgico de vendas com transparência total, para que cada atividade da sua operação de tráfego trabalhe pelos objetivos do seu negócio."
        className="mb-space-xl"
      />

      <div className="flex flex-col divide-y divide-regua">
        {data.map((service) => (
          <div
            key={service.index}
            id={`servico-${service.index}`}
            className="group scroll-mt-24 rounded px-2 py-space-xl transition-colors duration-300 hover:bg-painel/50 sm:px-4"
          >
            <div className="grid grid-cols-1 gap-gutter-desktop lg:grid-cols-12">
              <div className="lg:col-span-2">
                <span className="font-sans text-display-lg font-extrabold t-apagado transition-colors group-hover:t-acento">
                  {service.index}
                </span>
                <span className="mt-1 block font-label-meta text-label-meta uppercase tracking-widest t-fraco">
                  {service.category}
                </span>
              </div>
              <div className="space-y-space-xs lg:col-span-5">
                <h3 className="font-sans text-headline-md font-extrabold uppercase leading-tight t-forte">
                  {service.title}
                </h3>
                <p className="font-sans text-body-default leading-relaxed t-fraco">
                  {service.description}
                </p>
                <div className="pt-space-xs">
                  <Link
                    href="/#auditoria"
                    className="inline-flex items-center gap-2 font-label-meta text-label-meta font-semibold uppercase tracking-widest t-acento transition-colors hover:t-forte"
                  >
                    {service.ctaLabel}
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-space-md gap-y-space-xs pt-space-xs text-body-sm sm:grid-cols-2 lg:col-span-5 lg:pt-0">
                {service.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-2">
                    <span className="mt-0.5 font-mono t-acento">—</span>
                    <span className="t-texto">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
