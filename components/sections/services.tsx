"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, ShoppingCart, Camera, RefreshCw, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/data";

const icons = [Globe, ShoppingCart, Camera, RefreshCw];

export function Services() {
  return (
    <section id="services" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Services"
          title="Ce que nous pouvons faire pour vous"
          description="Quatre prestations, un seul objectif : un résultat propre, livré dans les temps."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, rotate: i % 2 === 0 ? -0.6 : 0.6 }}
                className="group relative rounded-2xl border border-surface-border bg-surface p-8 overflow-hidden"
              >
                <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(400px_circle_at_var(--mx,50%)_var(--my,50%),rgba(59,130,246,0.12),transparent_70%)]" />
                <div
                  className="absolute inset-0 rounded-2xl"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
                  }}
                />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-accent-blue/50 transition-colors">
                    <Icon className="w-5 h-5 text-accent-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed mb-6">{service.description}</p>
                  <span className="inline-block font-mono text-sm text-white/50 bg-white/5 rounded-full px-3 py-1">
                    {service.price}
                  </span>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-blue hover:gap-2.5 transition-all"
                  >
                    En savoir plus
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
