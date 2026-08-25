import type { Metadata } from "next";
import { Portfolio } from "@/components/sections/portfolio";
import { DevisCTA } from "@/components/sections/devis-cta";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Découvrez les sites vitrines et applications web que nous avons conçus pour nos clients.",
};

export default function RealisationsPage() {
  return (
    <>
      <Portfolio />
      <DevisCTA />
    </>
  );
}
