import type { Metadata } from "next";
import { Process } from "@/components/sections/process";
import { DevisCTA } from "@/components/sections/devis-cta";

export const metadata: Metadata = {
  title: "Processus",
  description:
    "Ma méthode en 4 étapes : échange, devis, réalisation, livraison et suivi.",
  alternates: { canonical: "/processus" },
};

export default function ProcessusPage() {
  return (
    <>
      <Process />
      <DevisCTA />
    </>
  );
}
