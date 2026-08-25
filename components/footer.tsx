"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig, navLinks } from "@/lib/data";
import { OPEN_SETTINGS_EVENT } from "@/lib/consent";

export function Footer() {
  return (
    <footer className="relative border-t border-surface-border py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-6xl px-6"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          <a href="/" className="flex items-center">
            <Image
              src="/logo-full-dark.png"
              alt={siteConfig.name}
              width={395}
              height={281}
              className="h-12 w-auto"
              unoptimized
            />
          </a>
          <nav aria-label="Navigation du pied de page" className="flex flex-wrap gap-6">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="text-sm text-white/50 hover:text-white transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        </div>
        <div className="pt-8 border-t border-surface-border flex flex-col sm:flex-row justify-between gap-3 text-sm text-white/40">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés. — Développeur web freelance, micro-entreprise.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="/cgv" className="hover:text-white transition-colors">
              CGV
            </a>
            <a href="/politique-de-confidentialite" className="hover:text-white transition-colors">
              Confidentialité
            </a>
            <a href="/politique-de-cookies" className="hover:text-white transition-colors">
              Cookies
            </a>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent(OPEN_SETTINGS_EVENT))}
              className="hover:text-white transition-colors"
            >
              Gérer les cookies
            </button>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
