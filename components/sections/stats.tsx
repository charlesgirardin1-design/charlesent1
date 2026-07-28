"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/animated-counter";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section className="relative py-24 border-y border-surface-border">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 sm:grid-cols-3 gap-10">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center sm:text-left"
          >
            <div className="text-5xl font-semibold text-gradient">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-white/50">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
