import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { DevisCTA } from "@/components/sections/devis-cta";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <DevisCTA />
      <Stats />
      <Testimonials />
      <FAQ />
    </>
  );
}
