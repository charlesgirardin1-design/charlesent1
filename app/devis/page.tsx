import type { Metadata } from "next";
import { DevisWizard } from "@/components/devis-wizard";

export const metadata: Metadata = {
  title: "Devis en ligne",
  description:
    "Obtenez une estimation indicative de votre projet de site web en quelques clics, sans engagement.",
};

export default function DevisPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-32 md:py-40">
      <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4">
        Devis en ligne
      </p>
      <h1 className="text-[clamp(1.8rem,4vw,2.75rem)] font-semibold tracking-tight mb-4">
        Estimez votre projet
      </h1>
      <p className="text-white/60 text-lg mb-12">
        Quatre étapes rapides pour une première estimation. Le tarif définitif sera confirmé
        dans un devis détaillé, sans engagement de votre part.
      </p>
      <DevisWizard />
    </div>
  );
}
