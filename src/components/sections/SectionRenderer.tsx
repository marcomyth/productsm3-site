import type { Section } from "@/lib/types";
import { Hero } from "./Hero";
import { Stats } from "./Stats";
import { FeatureGrid } from "./FeatureGrid";
import { ServicesList } from "./ServicesList";
import { Process } from "./Process";
import { Portfolio } from "./Portfolio";
import { Testimonials } from "./Testimonials";
import { Faq } from "./Faq";
import { Cta } from "./Cta";
import { ContactForm } from "./ContactForm";

export function SectionRenderer({ section }: { section: Section }) {
  switch (section.__component) {
    case "sections.hero":
      return <Hero data={section} />;
    case "sections.stats":
      return <Stats data={section} />;
    case "sections.feature-grid":
      return <FeatureGrid data={section} />;
    case "sections.services-list":
      return <ServicesList data={section} />;
    case "sections.process":
      return <Process data={section} />;
    case "sections.portfolio":
      return <Portfolio data={section} />;
    case "sections.testimonials":
      return <Testimonials data={section} />;
    case "sections.faq":
      return <Faq data={section} />;
    case "sections.cta":
      return <Cta data={section} />;
    case "sections.contact-form":
      return <ContactForm data={section} />;
    default: {
      const _exhaustive: never = section;
      void _exhaustive;
      return null;
    }
  }
}
