import { getSiteContent } from "@/lib/content";
import { Hero } from "@/components/sections/Hero";
import { ProofBar } from "@/components/sections/ProofBar";
import { Services } from "@/components/sections/Services";
import { Method } from "@/components/sections/Method";
import { Cases } from "@/components/sections/Cases";
import { TechStackTicker } from "@/components/sections/TechStackTicker";
import { FinalCta } from "@/components/sections/FinalCta";

export default async function HomePage() {
  const { hero, proofBar, services, method, cases, techStack, finalCta } = await getSiteContent();

  return (
    <>
      <Hero data={hero} />
      <ProofBar data={proofBar} />
      <Services data={services} />
      <Method data={method} />
      <Cases data={cases} />
      <TechStackTicker data={techStack} />
      <FinalCta data={finalCta} />
    </>
  );
}
