import type { Metadata } from "next";
import { DevisHero } from "@/components/sections/devis-hero";
import { DevisWizard } from "@/components/devis-wizard";

export const metadata: Metadata = {
  title: "Estimation de devis",
  description:
    "Obtenez une estimation indicative de votre projet de site web en quelques clics, sans engagement.",
  alternates: { canonical: "/devis" },
};

export default function DevisPage() {
  return (
    <div>
      <DevisHero />
      <div className="mx-auto max-w-2xl px-6 pb-32 md:pb-40">
        <DevisWizard />
      </div>
    </div>
  );
}
