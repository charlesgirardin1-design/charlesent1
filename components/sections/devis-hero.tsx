"use client";

import { GlyphGrid } from "@/components/glyph-grid";

export function DevisHero() {
  return (
    <div className="relative overflow-hidden bg-background">
      <GlyphGrid className="absolute inset-0 z-0 rounded-none border-0" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 pt-32 pb-16 md:pt-40 md:pb-20">
        <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-accent-violet mb-4">
          Estimation de devis
        </p>
        <h1 className="text-[clamp(1.8rem,4vw,2.75rem)] font-semibold tracking-tight mb-4">
          Estimez votre projet
        </h1>
        <p className="text-white/60 text-lg">
          Quatre étapes rapides pour une première estimation. Le tarif définitif sera confirmé
          dans un devis détaillé, sans engagement de votre part.
        </p>
      </div>
    </div>
  );
}
