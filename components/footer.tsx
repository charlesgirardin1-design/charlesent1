"use client";

import { motion } from "framer-motion";
import { LinkedinIcon, GithubIcon, InstagramIcon } from "@/components/social-icons";
import { siteConfig, navLinks } from "@/lib/data";

const socials = [
  { icon: LinkedinIcon, href: "https://linkedin.com/in/ton-profil", label: "LinkedIn" },
  { icon: GithubIcon, href: "https://github.com/ton-profil", label: "GitHub" },
  { icon: InstagramIcon, href: "https://instagram.com/ton-profil", label: "Instagram" },
];

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
          <a href="#top" className="text-2xl font-semibold tracking-tight">
            {siteConfig.name}
            <span className="text-accent-blue">.</span>dev
          </a>
          <nav className="flex flex-wrap gap-6">
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
          <div className="flex gap-3">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full border border-surface-border flex items-center justify-center hover:border-accent-blue/50 hover:text-accent-blue transition-colors"
              >
                <s.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
        <div className="pt-8 border-t border-surface-border flex flex-col sm:flex-row justify-between gap-3 text-sm text-white/40">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés. — Micro-entreprise.
          </p>
          <a href="#mentions-legales" className="hover:text-white transition-colors">
            Mentions légales
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
