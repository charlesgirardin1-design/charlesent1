"use client";

import { motion } from "framer-motion";

type Project = {
  sector: string;
  title: string;
  description: string;
};

export function ProjectHero({ project }: { project: Project }) {
  return (
    <div>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4"
      >
        <span className="h-px w-5 bg-accent-blue" />
        {project.sector}
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-[clamp(2rem,5vw,3.25rem)] font-semibold tracking-tight"
      >
        {project.title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-5 text-lg text-muted"
      >
        {project.description}
      </motion.p>
    </div>
  );
}
