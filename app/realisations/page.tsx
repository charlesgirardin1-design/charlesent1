import type { Metadata } from "next";
import { Portfolio } from "@/components/sections/portfolio";
import { DevisCTA } from "@/components/sections/devis-cta";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Découvrez les sites vitrines et applications web que j'ai conçus pour mes clients.",
};

export default function RealisationsPage() {
  return (
    <>
      <Portfolio />
      <DevisCTA />
    </>
  );
}
