import type { StatsSection } from "@/lib/types";

export function Stats({ data }: { data: StatsSection }) {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        {(data.title || data.subtitle) && (
          <div className="mx-auto mb-12 max-w-2xl text-center space-y-4">
            {data.title && (
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                <span className="text-brand-gradient">{data.title}</span>
              </h2>
            )}
            {data.subtitle && (
              <p className="text-sm md:text-lg text-muted-foreground">{data.subtitle}</p>
            )}
          </div>
        )}
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {data.items?.map((item, i) => (
            <div key={item.id ?? i} className="text-center space-y-3">
              <p className="text-3xl md:text-5xl font-black text-brand-gradient">
                {item.value}
                {item.suffix && <span>{item.suffix}</span>}
              </p>
              <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
