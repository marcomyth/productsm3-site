import { Icon } from "@/components/Icon";
import type { FeatureGridSection } from "@/lib/types";

const ICON_COLORS = [
  "oklch(0.723 0.219 149.51)", // brand-green
  "oklch(0.541 0.225 252.81)", // brand-blue
  "oklch(0.725 0.165 174.5)",  // brand-teal
  "oklch(0.72 0.18 65)",        // warm
  "oklch(0.65 0.18 300)",       // purple
  "oklch(0.60 0.20 30)",        // coral
];

export function FeatureGrid({ data }: { data: FeatureGridSection }) {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8">
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
          {data.features?.map((f, i) => {
            const color = ICON_COLORS[i % ICON_COLORS.length];
            return (
              <div
                key={f.id ?? i}
                className="group glass rounded-2xl border border-border/50 p-7 md:p-8 space-y-4 card-lift hover:border-border"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ background: `color-mix(in oklch, ${color} 15%, transparent)` }}
                >
                  <Icon name={f.icon} className="h-5 w-5" style={{ color }} />
                </div>
                <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
