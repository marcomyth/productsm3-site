import Image from "next/image";
import { CtaButton } from "@/components/CtaButton";
import { Icon } from "@/components/Icon";
import type { HeroSection } from "@/lib/types";
import { mediaUrl } from "@/lib/media";

function splitHeadline(title: string): { plain: string; gradient: string } {
  // If the title contains " | " split there. Otherwise gradient the last 3 words.
  if (title.includes(" | ")) {
    const [a, b] = title.split(" | ");
    return { plain: a, gradient: b };
  }
  const words = title.trim().split(/\s+/);
  if (words.length <= 3) return { plain: "", gradient: title };
  const cut = Math.max(words.length - 3, Math.ceil(words.length / 2));
  return {
    plain: words.slice(0, cut).join(" "),
    gradient: words.slice(cut).join(" "),
  };
}

export function Hero({ data }: { data: HeroSection }) {
  const { plain, gradient } = splitHeadline(data.title);

  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28 px-4 md:px-8">
      {/* Background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-30 blur-3xl animate-blob-1"
          style={{ background: "var(--color-brand-green)" }}
        />
        <div
          className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full opacity-25 blur-3xl animate-blob-2"
          style={{ background: "var(--color-brand-blue)" }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col gap-7 text-center lg:text-left">
          {data.eyebrow && (
            <div className="flex justify-center lg:justify-start">
              <div
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[10px] md:text-xs font-black uppercase tracking-widest text-white bg-brand-gradient shadow-brand-glow-intense"
              >
                <Icon name="sparkles" className="h-3.5 w-3.5" />
                <span>{data.eyebrow}</span>
              </div>
            </div>
          )}

          <h1 className="font-black tracking-tight leading-[1.05] text-4xl md:text-6xl lg:text-7xl">
            {plain && <span className="text-foreground">{plain}</span>}
            {plain && <br />}
            <span className="text-brand-gradient">{gradient}</span>
          </h1>

          {data.subtitle && (
            <p className="max-w-2xl text-pretty text-base md:text-xl text-muted-foreground leading-relaxed lg:mx-0 mx-auto">
              {data.subtitle}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 lg:justify-start">
            <CtaButton cta={data.primaryCta} size="lg" showArrow />
            <CtaButton
              cta={data.secondaryCta ? { ...data.secondaryCta, variant: "outline" } : null}
              size="lg"
            />
          </div>
        </div>

        {data.image?.url && (
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-3xl blur-2xl opacity-40"
              style={{ background: "var(--brand-gradient)" }}
            />
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-border/50 bg-muted shadow-premium lg:aspect-[4/5]">
              <Image
                src={mediaUrl(data.image.url)}
                alt={data.image.alternativeText || data.title}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
