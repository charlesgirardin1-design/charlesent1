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
              <span className="font-mono text-6xl font-bold text-white/20">K</span>
            </div>
          </div>
        </motion.div>

        <div>
          <SectionHeading
            eyebrow="À propos"
            title="Une structure resserrée, une exigence d'agence"
          />
          <div className="space-y-5 text-white/70 text-lg leading-relaxed -mt-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              Kodarium est un studio de développement web indépendant. Notre conviction :
              un site doit d&apos;abord servir un objectif business précis — être rapide,
              clair, et pensé pour convertir — avant d&apos;être une vitrine technique.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Nous travaillons en direct avec vous, sans compte client ni intermédiaire
              qui dilue les échanges : vous savez toujours qui conçoit votre projet et où
              il en est.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Cette structure resserrée nous permet de rester exigeants sur chaque
              livraison, à jour sur les pratiques du secteur, et disponibles quand vous en
              avez besoin.
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
