import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CtaSection } from "@/lib/types";

export function Cta({ data }: { data: CtaSection }) {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8">
      <div
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl p-10 md:p-16 text-center bg-brand-gradient"
        style={{
          boxShadow:
            "0 0 60px 0px oklch(0.65 0.18 175 / 30%), 0 8px 40px -8px oklch(0 0 0 / 25%)",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] rounded-full"
          style={{
            background: "radial-gradient(circle, oklch(1 0 0 / 12%), transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-black leading-tight text-white">
            {data.title}
          </h2>
          {data.description && (
            <p className="text-sm md:text-lg text-white/80 max-w-lg mx-auto">
              {data.description}
            </p>
          )}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {data.primaryCta && (
              <Link
                href={data.primaryCta.url || "#"}
                target={data.primaryCta.external ? "_blank" : undefined}
                rel={data.primaryCta.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-base font-black transition-all hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  color: "var(--color-brand-blue)",
                  boxShadow: "0 4px 24px -4px oklch(0 0 0 / 25%)",
                }}
              >
                {data.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
            {data.secondaryCta && (
              <Link
                href={data.secondaryCta.url || "#"}
                target={data.secondaryCta.external ? "_blank" : undefined}
                rel={data.secondaryCta.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/30 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
                {data.secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
