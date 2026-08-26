"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";
import { siteConfig } from "@/lib/data";

// Rendu WebGL, client uniquement : évite tout mismatch d'hydratation SSR
// (le Canvas three.js n'existe pas côté serveur).
const ScrollTerrain = dynamic(
  () => import("@/components/scroll-terrain").then((m) => m.ScrollTerrain),
  { ssr: false }
);

const titleLines = ["Je conçois", "des sites web", "qui convertissent."];

const trustPoints = [
  "Un seul interlocuteur, pas de chef de projet",
  "Devis clair, sans surprise",
  "Ajustements inclus après la mise en ligne",
];

function AnimatedWords({ text, delayStart = 0 }: { text: string; delayStart?: number }) {
  const words = text.split(" ");
  let charIndex = 0;
  return (
    <span className="inline-block overflow-hidden">
      {words.map((word, wi) => (
        <span key={wi} className="inline-block mr-[0.28em] align-top">
          {word.split("").map((ch, ci) => {
            const idx = charIndex++;
            return (
              <span key={ci} className="inline-block overflow-hidden align-top">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: delayStart + idx * 0.025,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {ch}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}

const blobMorph = {
  borderRadius: [
    "60% 40% 30% 70% / 60% 30% 70% 40%",
    "30% 60% 70% 40% / 50% 60% 30% 60%",
    "50% 50% 40% 60% / 40% 50% 60% 50%",
    "60% 40% 30% 70% / 60% 30% 70% 40%",
  ],
};

// Vitrine glassmorphism du hero : blobs fluides qui se déforment en continu
// (bordures organiques animées), visibles au travers de panneaux en verre
// dépoli (backdrop-blur) qui flottent doucement au premier plan.
function GlassShowcase() {
  return (
    <div className="relative hidden lg:block h-[440px]" aria-hidden="true">
      <motion.div
        className="absolute -top-8 -left-6 w-72 h-72 bg-accent-blue/45 blur-3xl"
        animate={{ ...blobMorph, scale: [1, 1.12, 0.96, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-4 right-2 w-64 h-64 bg-accent-violet/40 blur-3xl"
        animate={{ ...blobMorph, scale: [1, 0.94, 1.1, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-40 h-40 bg-accent-cyan/35 blur-3xl"
        animate={{ ...blobMorph, scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: [0, -12, 0], scale: 1 }}
        transition={{
          opacity: { duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] },
          scale: { duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
        }}
        className="absolute inset-x-6 top-4 rounded-3xl border border-foreground/15 bg-foreground/[0.06] backdrop-blur-2xl shadow-2xl shadow-accent-blue/10 p-6"
      >
        <div className="flex items-center gap-1.5 mb-5">
          <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
        </div>
        <div className="space-y-3">
          <div className="h-3 w-3/4 rounded-full bg-foreground/15" />
          <div className="h-3 w-1/2 rounded-full bg-foreground/10" />
          <div className="h-24 rounded-xl bg-gradient-to-br from-accent-blue/30 via-accent-violet/20 to-accent-cyan/20 border border-foreground/10" />
          <div className="h-3 w-2/3 rounded-full bg-foreground/10" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: [0, -16, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 1.1 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.9 },
        }}
        className="absolute -bottom-4 -left-10 w-48 rounded-2xl border border-foreground/15 bg-foreground/[0.08] backdrop-blur-xl shadow-xl shadow-black/20 p-4"
      >
        <p className="text-xs text-foreground/50 mb-1">Taux de conversion</p>
        <p className="text-2xl font-semibold text-gradient">+38%</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, 14, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 1.3 },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2.2 },
        }}
        className="absolute -top-2 -right-6 flex items-center gap-2 rounded-2xl border border-foreground/15 bg-foreground/[0.08] backdrop-blur-xl shadow-xl shadow-black/20 px-4 py-3"
      >
        <span className="relative flex h-2 w-2 flex-shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
        </span>
        <span className="text-xs text-foreground/70">Site en ligne</span>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background pt-28 md:pt-0"
    >
      {/* Terrain 3D fil de fer, défilement infini réactif au scroll et à la souris */}
      <ScrollTerrain className="absolute inset-0 z-0 bg-background" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/[0.06] backdrop-blur-md px-4 py-1.5 text-sm text-foreground/70 mb-8 shadow-lg shadow-black/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-blue opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-blue" />
            </span>
            Disponible pour de nouveaux projets
          </motion.div>

          <h1 className="font-semibold leading-[0.98] tracking-tight text-[clamp(1.7rem,7.5vw,6.5rem)] lg:text-[clamp(2rem,3.4vw,3.75rem)]">
            <div className="block whitespace-nowrap"><AnimatedWords text={titleLines[0]} delayStart={0.15} /></div>
            <div className="block whitespace-nowrap"><AnimatedWords text={titleLines[1]} delayStart={0.3} /></div>
            <div className="block whitespace-nowrap text-gradient animated-gradient">
              <AnimatedWords text={titleLines[2]} delayStart={0.45} />
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-8 max-w-xl text-lg text-muted"
          >
            {siteConfig.role}, j&apos;accompagne indépendants et TPE dans la création de
            sites qui inspirent confiance et transforment vos visiteurs en clients.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-6 flex flex-col gap-y-2 w-fit rounded-2xl border border-foreground/10 bg-foreground/[0.04] backdrop-blur-md px-5 py-4 shadow-lg shadow-black/10"
          >
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-foreground/60">
                <Check className="w-4 h-4 text-accent-blue flex-shrink-0" />
                {point}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Link href="/contact">
                <Button size="lg">
                  Discutons de votre projet
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Link href="/realisations">
                <Button variant="outline" size="lg">
                  Voir mes projets
                </Button>
              </Link>
            </Magnetic>
          </motion.div>
        </div>

        <GlassShowcase />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/40"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
