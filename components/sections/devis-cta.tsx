"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";

export function DevisCTA() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-accent-blue/30 bg-gradient-to-br from-accent-blue/10 via-surface to-accent-violet/10 p-10 md:p-14 flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left"
        >
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Estimation instantanée
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
              Estimez votre projet en 2 minutes
            </h2>
            <p className="text-white/60 max-w-lg mx-auto md:mx-0">
              Type de projet, besoins, délai : quatre questions rapides pour une première
              fourchette de prix, sans engagement de votre part.
            </p>
          </div>
          <Magnetic>
            <Link href="/devis">
              <Button size="lg" className="flex-shrink-0">
                Estimer mon projet
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
