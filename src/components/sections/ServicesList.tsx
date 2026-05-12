import { Check } from "lucide-react";
import { Icon } from "@/components/Icon";
import type { ServicesListSection } from "@/lib/types";

function featureLabel(f: unknown): string {
  if (typeof f === "string") return f;
  if (f && typeof f === "object") {
    const obj = f as Record<string, unknown>;
    for (const key of ["label", "text", "name", "title", "value", "feature"]) {
      const v = obj[key];
      if (typeof v === "string" && v.trim()) return v;
    }
  }
  return "";
}

export function ServicesList({ data }: { data: ServicesListSection }) {
  return (
    <section id="servicos" className="scroll-mt-20 py-20 md:py-28 px-4 md:px-8 border-y border-border/30">
      <div className="mx-auto max-w-6xl space-y-14">
        <div className="mx-auto max-w-2xl text-center space-y-4">
          {data.eyebrow && (
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {data.eyebrow}
            </p>
          )}
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            <span className="text-brand-gradient">{data.title}</span>
          </h2>
          {data.subtitle && (
            <p className="text-sm md:text-lg text-muted-foreground max-w-lg mx-auto">
              {data.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {data.services?.map((service) => {
            const features = (service.features ?? [])
              .map((f) => featureLabel(f))
              .filter((label) => label.length > 0)
              .slice(0, 3);
            return (
              <div
                key={service.id}
                className="group glass rounded-2xl border border-border/50 p-7 md:p-8 card-lift hover:border-border"
              >
                <div className="flex h-full flex-col gap-5">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-brand-glow">
                    <Icon name={service.icon} className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.shortDescription}
                    </p>
                  </div>
                  {features.length > 0 && (
                    <ul className="mt-auto space-y-2 border-t border-border/50 pt-4">
                      {features.map((label, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0"
                            style={{ color: "var(--color-brand-green)" }}
                            aria-hidden="true"
                          />
                          <span>{label}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
