"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";

export function Presentation() {
  return (
    <section id="apropos" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-[280px_1fr] gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="aspect-square rounded-[2rem] bg-gradient-to-br from-accent-blue/30 via-accent-violet/20 to-accent-cyan/20 p-[2px]">
            <div className="w-full h-full rounded-[calc(2rem-2px)] bg-surface flex items-center justify-center">
              <span className="font-mono text-6xl font-bold text-white/20">TN</span>
            </div>
          </div>
        </motion.div>

        <div>
          <SectionHeading
            eyebrow="À propos"
            title="Un pied dans le terrain, un pied dans la veille techno"
          />
          <div className="space-y-5 text-white/70 text-lg leading-relaxed -mt-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              Développeur web, actuellement en alternance et freelance en parallèle sous
              le statut de micro-entreprise. Cette double casquette me permet de rester
              au contact des dernières pratiques du secteur tout en gardant un vrai
              ancrage terrain avec mes clients indépendants.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Résultat : des sites à jour techniquement, mais toujours pensés d&apos;abord
              pour répondre à un besoin concret et générer des résultats mesurables.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Je travaille en direct avec vous, sans intermédiaire qui dilue les
              échanges : vous savez toujours qui fait quoi et où en est votre projet.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, staggerChildren: 0.05 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {["HTML/CSS/JS", "React", "Node.js", "Next.js", "SEO technique", "UI Design", "Photographie"].map(
              (skill) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-full border border-surface-border bg-white/[0.02] px-4 py-1.5 text-sm text-white/70 hover:border-accent-blue/50 hover:text-white transition-colors"
                >
                  {skill}
                </motion.span>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
