import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqSection } from "@/lib/types";

export function Faq({ data }: { data: FaqSection }) {
  return (
    <section id="faq" className="scroll-mt-20 py-20 md:py-28 px-4 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            <span className="text-brand-gradient">{data.title}</span>
          </h2>
          {data.subtitle && (
            <p className="mt-4 text-base md:text-lg text-muted-foreground">{data.subtitle}</p>
          )}
        </div>
        <div className="lg:col-span-2">
          <Accordion type="single" collapsible className="w-full">
            {data.items?.map((item, i) => (
              <AccordionItem key={item.id ?? i} value={`item-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-base leading-relaxed text-muted-foreground">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
