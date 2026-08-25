import type { Metadata } from "next";
import { Presentation } from "@/components/sections/presentation";
import { DevisCTA } from "@/components/sections/devis-cta";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Kodarium est un studio de développement web indépendant, à la structure resserrée et à l'exigence d'agence.",
};

export default function AProposPage() {
  return (
    <>
      <Presentation />
      <DevisCTA />
    </>
  );
}
