import { Icon } from "@/components/Icon";
import type { ProcessSection } from "@/lib/types";

export function Process({ data }: { data: ProcessSection }) {
  const steps = [...(data.steps ?? [])].sort((a, b) => (a.stepNumber ?? 0) - (b.stepNumber ?? 0));

  return (
    <section id="processo" className="scroll-mt-20 py-20 md:py-28 px-4 md:px-8">
      <div className="mx-auto max-w-5xl space-y-14">
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

        <ol className="relative space-y-6">
          <div
            aria-hidden="true"
            className="absolute left-6 top-6 bottom-6 w-px bg-brand-gradient opacity-40"
          />
          {steps.map((step) => (
            <li key={step.id ?? step.stepNumber} className="relative grid grid-cols-[3rem_1fr] gap-5 items-start">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-brand-glow">
                <Icon name={step.icon} className="h-5 w-5" />
              </div>
              <div className="glass rounded-2xl border border-border/50 p-6 card-lift">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Etapa {String(step.stepNumber).padStart(2, "0")}
                </p>
                <h3 className="mt-1 text-lg font-bold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
