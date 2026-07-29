"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/data";

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
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="aspect-square rounded-[2rem] bg-gradient-to-br from-accent-blue/30 via-accent-violet/20 to-accent-cyan/20 p-[2px]"
          >
            <div className="w-full h-full rounded-[calc(2rem-2px)] bg-surface flex items-center justify-center">
              <span className="font-mono text-6xl font-bold text-white/20">{siteConfig.initials}</span>
            </div>
          </motion.div>
        </motion.div>

        <div>
          <SectionHeading
            eyebrow="À propos"
            title="La technique au service du concret"
          />
          <div className="space-y-5 text-white/70 text-lg leading-relaxed -mt-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              En alternance et freelance en parallèle sous le statut de
              micro-entreprise, je navigue entre deux mondes : les pratiques les plus
              récentes du développement web, et les besoins bien réels d&apos;indépendants
              et de TPE sur le terrain. Cette double casquette m&apos;oblige à rester
              exigeant des deux côtés.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Le résultat : des sites techniquement solides, mais construits d&apos;abord
              pour répondre à un objectif business précis — pas pour cocher des cases
              sur une liste de technologies à la mode.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Vous échangez directement avec la personne qui code votre projet, du
              premier appel jusqu&apos;à la mise en ligne. Pas de chef de projet
              intermédiaire, pas de brief qui se perd en route.
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
