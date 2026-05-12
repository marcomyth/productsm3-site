import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { TestimonialsSection } from "@/lib/types";
import { mediaUrl } from "@/lib/utils";

export function Testimonials({ data }: { data: TestimonialsSection }) {
  return (
    <section id="depoimentos" className="scroll-mt-20 py-20 md:py-28 px-4 md:px-8 border-y border-border/30">
      <div className="mx-auto max-w-7xl space-y-14">
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

        <div
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible"
          style={{ scrollPaddingInline: "1rem" }}
        >
          {data.testimonials?.map((t) => {
            const rating = Math.max(0, Math.min(5, t.rating ?? 5));
            const photo = t.photo?.url ? mediaUrl(t.photo.url) : null;
            return (
              <Card
                key={t.id}
                className="glass card-lift border-border/50 min-w-[85%] snap-start sm:min-w-[60%] md:min-w-[45%] lg:min-w-0"
              >
                <CardContent className="flex h-full flex-col gap-5 p-6">
                  <div className="flex gap-0.5" aria-label={`Avaliação ${rating} de 5`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < rating ? "fill-foreground text-foreground" : "text-muted-foreground/40"
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <blockquote className="flex-1 text-base leading-relaxed text-foreground">
                    “{t.quote}”
                  </blockquote>
                  <div className="flex items-center gap-3 border-t border-border pt-4">
                    {photo ? (
                      <Image
                        src={photo}
                        alt={t.name}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                        {t.name.charAt(0)}
                      </div>
                    )}
                    <div className="text-sm">
                      <p className="font-medium">{t.name}</p>
                      <p className="text-muted-foreground">
                        {[t.role, t.company].filter(Boolean).join(" · ")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
