import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { Section } from "@/components/layout/Section";
import type { ServiceItem } from "@/lib/types";

type Props = {
  data: ServiceItem[];
};

/**
 * Áreas de domínio, em acordeão.
 *
 * Era uma lista aberta: quatro blocos com título, parágrafo e oito marcadores
 * cada, todos visíveis ao mesmo tempo. Ocupava mais de uma tela e obrigava a
 * rolar muito texto corrido para chegar nos cases.
 *
 * A referência resolve o mesmo problema no bloco "nossa execução": uma coluna
 * de texto curto à esquerda e, à direita, os serviços empilhados em linhas
 * finas com um "+", que abrem sob demanda. Quem já sabe o que quer passa
 * reto; quem quer o detalhe abre. Nenhuma palavra foi removida do site, só
 * deixou de estar toda aberta de uma vez.
 *
 * `<details>` nativo pelo mesmo motivo do FAQ: sem JavaScript, acessível por
 * teclado, e a seção continua Server Component.
 */
export function Services({ data }: Props) {
  return (
    <Section id="servicos" tom="escuro">
      <div className="grid grid-cols-1 gap-x-gutter-desktop gap-y-space-lg lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-serif text-display-xl-mobile font-normal leading-[1.1] t-acento md:text-display-xl">
            áreas de domínio
          </p>
          <p className="mt-space-sm font-sans text-body-default leading-relaxed t-fraco">
            Elevamos a qualidade dos seus processos de marketing sem elevar o custo operacional.
            Implementamos e gerenciamos o funil sinérgico de vendas com transparência total, para
            que cada atividade da sua operação de tráfego trabalhe pelos objetivos do seu negócio.
          </p>
        </div>

        <div className="lg:col-span-8">
          {data.map((service) => (
            <details
              key={service.index}
              id={`servico-${service.index}`}
              className="acordeao group scroll-mt-24 border-b border-regua first:border-t"
            >
              <summary className="flex items-start gap-space-sm py-space-sm">
                <Plus
                  aria-hidden="true"
                  className="mt-1 h-4 w-4 shrink-0 t-acento transition-transform duration-300 group-open:rotate-45"
                />
                <span className="flex-1">
                  <span className="block font-sans text-headline-sm font-semibold t-forte transition-colors group-hover:t-acento">
                    {service.title}
                  </span>
                  <span className="mt-1 block font-label-meta text-label-meta uppercase tracking-widest t-fraco">
                    {service.index} · {service.category}
                  </span>
                </span>
              </summary>

              <div className="pb-space-md pl-[1.75rem] pr-space-sm">
                <p className="font-sans text-body-default leading-relaxed t-fraco">
                  {service.description}
                </p>

                <ul className="mt-space-sm grid grid-cols-1 gap-x-space-md gap-y-space-2xs sm:grid-cols-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-0.5 font-mono t-acento">
                        —
                      </span>
                      <span className="font-body-sm text-body-sm t-texto">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#auditoria"
                  className="mt-space-md inline-flex items-center gap-2 font-label-meta text-label-meta font-semibold uppercase tracking-widest t-acento transition-colors hover:t-forte"
                >
                  {service.ctaLabel}
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
