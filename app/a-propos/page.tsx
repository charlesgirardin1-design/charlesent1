import type { Metadata } from "next";
import { Presentation } from "@/components/sections/presentation";
import { DevisCTA } from "@/components/sections/devis-cta";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Kodarium, c'est un développeur web freelance indépendant, avec une exigence d'agence.",
  alternates: { canonical: "/a-propos" },
};

export default function AProposPage() {
  return (
    <>
      <Presentation />
      <DevisCTA />
    </>
  );
}
