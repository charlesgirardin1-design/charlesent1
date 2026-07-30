"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";
import { stats } from "@/lib/data";

const icons = [Clock, ShieldCheck];

export function Stats() {
  return (
    <section className="relative py-24 border-y border-surface-border">
      <div className="mx-auto max-w-3xl px-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {stats.map((stat, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl border border-surface-border bg-surface p-8 text-center"
            >
              <div className="w-11 h-11 mx-auto rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-accent-blue" />
              </div>
              <div className="text-4xl font-semibold text-gradient">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-white/50">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
