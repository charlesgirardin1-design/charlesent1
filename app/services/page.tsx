import type { Metadata } from "next";
import { Services } from "@/components/sections/services";
import { DevisCTA } from "@/components/sections/devis-cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Sites vitrines, e-commerce, identité & photographie, suivi et maintenance : découvrez nos prestations de développement web.",
};

export default function ServicesPage() {
  return (
    <>
      <Services />
      <DevisCTA />
    </>
  );
}
