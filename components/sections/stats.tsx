"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, Sparkles } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";
import { SectionHeading } from "@/components/section-heading";
import { stats } from "@/lib/data";

const icons = [Clock, ShieldCheck];
const glows = ["bg-accent-blue/30", "bg-accent-violet/30", "bg-accent-cyan/30"];

export function Stats() {
  return (
    <section className="relative py-24 border-y border-surface-border overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 90%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="En chiffres"
          title="Quelques repères"
          description="Des engagements clairs, tenus dans chaque projet."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-surface-border bg-surface p-8 text-center"
              >
                <div
                  className={`pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-[60px] ${glows[i]}`}
                />
                <div className="relative w-11 h-11 mx-auto rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-accent-blue" />
                </div>
                <div className="relative text-4xl font-semibold text-gradient">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="relative mt-2 text-white/50">{stat.label}</p>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl border border-surface-border bg-surface p-8 text-center"
          >
            <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-[60px] bg-accent-cyan/30" />
            <div className="relative w-11 h-11 mx-auto rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5 text-accent-blue" />
            </div>
            <div className="relative text-4xl font-semibold text-gradient">Sur mesure</div>
            <p className="relative mt-2 text-white/50">Aucun template, code fait main</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
