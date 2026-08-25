import type { Metadata } from "next";
import { Process } from "@/components/sections/process";
import { DevisCTA } from "@/components/sections/devis-cta";

export const metadata: Metadata = {
  title: "Processus",
  description:
    "Notre méthode en 4 étapes : échange, devis, réalisation, livraison et suivi.",
};

export default function ProcessusPage() {
  return (
    <>
      <Process />
      <DevisCTA />
    </>
  );
}
