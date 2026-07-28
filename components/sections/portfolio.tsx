"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Camera, Salad } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { projects, type ProjectCategory } from "@/lib/data";
import { cn } from "@/lib/utils";

const filters: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "Tous", value: "all" },
  { label: "Sites vitrines", value: "vitrine" },
  { label: "Applications web", value: "app" },
];

export function Portfolio() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");
  const visible = projects.filter((p) => active === "all" || p.category === active);

  return (
    <section id="portfolio" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Réalisations"
          title="Quelques projets récents"
          description="Une sélection de sites réalisés, filtrables par type de projet."
        />

        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={cn(
                "relative rounded-full px-5 py-2 text-sm font-semibold transition-colors",
                active === f.value ? "text-black" : "text-white/60 hover:text-white border border-surface-border"
              )}
            >
              {active === f.value && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{f.label}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-surface-border bg-surface aspect-[4/3]"
              >
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-25 group-hover:opacity-40 transition-opacity duration-700",
                    project.gradient
                  )}
                />
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                    backgroundSize: "18px 18px",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 scale-105 group-hover:scale-100">
                  {project.title === "Frigomind" ? (
                    <div className="flex items-center gap-4 text-white/20">
                      <Camera className="w-9 h-9" strokeWidth={1.5} />
                      <span className="text-2xl font-light">→</span>
                      <Salad className="w-9 h-9" strokeWidth={1.5} />
                    </div>
                  ) : (
                    <span className="text-7xl font-bold tracking-tighter text-white/10 select-none">
                      {project.monogram}
                    </span>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                    {project.categoryLabel}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
