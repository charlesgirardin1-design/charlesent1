import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { DevisCTA } from "@/components/sections/devis-cta";
import { Portfolio } from "@/components/sections/portfolio";
import { Process } from "@/components/sections/process";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { Presentation } from "@/components/sections/presentation";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <DevisCTA />
      <Portfolio />
      <Process />
      <Stats />
      <Testimonials />
      <Presentation />
      <FAQ />
      <Contact />
    </>
  );
}
