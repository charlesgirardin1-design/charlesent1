"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { processSteps } from "@/lib/data";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.6"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="processus" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Processus"
          title="Comment on travaille ensemble"
          description="Un processus simple en 4 étapes, pensé pour avancer vite sans perdre en qualité."
        />

        <p className="max-w-2xl -mt-10 mb-14 text-foreground/60 leading-relaxed">
          Cette méthode s&apos;applique à tous les projets, du site vitrine le plus
          simple à l&apos;application la plus complexe. Elle vise avant tout la
          transparence : vous savez toujours où en est votre projet, ce qu&apos;il
          reste à faire, et pourquoi.
        </p>

        <div ref={ref} className="relative">
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-foreground/10" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-blue via-accent-violet to-accent-cyan origin-top"
          />

          <div className="space-y-14">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative flex gap-6"
              >
                <div className="relative z-10 flex-shrink-0 w-[54px] h-[54px] rounded-full bg-background-alt border-2 border-accent-blue flex items-center justify-center font-mono font-bold text-accent-blue">
                  {step.number}
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-foreground/60 leading-relaxed max-w-md">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
