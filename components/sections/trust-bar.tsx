"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export function TrustBar() {
  return (
    <section className="relative border-y border-surface-border bg-background-alt/50">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="shrink-0 text-xs font-mono uppercase tracking-[0.2em] text-foreground/40"
        >
          Ils me font confiance
        </motion.p>
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-10 gap-y-3">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="text-lg font-semibold text-foreground/35 hover:text-foreground/80 transition-colors"
            >
              {project.title}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
