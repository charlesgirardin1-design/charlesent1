"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { blogPosts } from "@/lib/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function Blog() {
  const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <section className="relative py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Blog"
          title="Conseils et repères pour votre projet web"
          description="Tarifs, référencement, choix stratégiques : des articles pensés pour les indépendants et les TPE."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full rounded-2xl border border-surface-border bg-surface p-6 transition-colors hover:border-accent-blue/40"
              >
                <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-accent-blue mb-4">
                  <span>{post.category}</span>
                  <span className="text-foreground/30">·</span>
                  <span className="text-foreground/40">{post.readingTime}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 leading-snug">{post.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-sm">
                  <span className="text-foreground/40">{formatDate(post.date)}</span>
                  <span className="flex items-center gap-1 text-foreground/60 group-hover:text-foreground transition-colors">
                    Lire
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
