"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";
import { siteConfig } from "@/lib/data";

const infoItems = [
  { icon: Mail, label: "Email", value: siteConfig.email },
  { icon: MapPin, label: "Zone d'intervention", value: "France entière — full remote" },
  { icon: Clock, label: "Délai de réponse", value: "Sous 48h ouvrées" },
];

export function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    if (!name || !email || !message) {
      setStatus("Merci de remplir tous les champs avant d'envoyer.");
      return;
    }

    const subject = encodeURIComponent(`Nouveau projet — ${name}`);
    const body = encodeURIComponent(`Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("Votre client mail va s'ouvrir pour finaliser l'envoi. À très vite !");
  }

  return (
    <section id="contact" className="relative py-32 md:py-40 bg-background-alt overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(600px circle at 20% 20%, rgba(59,130,246,0.15), transparent 60%), radial-gradient(600px circle at 80% 80%, rgba(139,92,246,0.12), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Discutons de votre projet"
          description="Décrivez-moi votre besoin, je reviens vers vous sous 48h avec un premier retour."
        />

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/70">
                  Nom complet
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl border border-surface-border bg-surface px-4 py-3 outline-none focus:border-accent-blue transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/70">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-surface-border bg-surface px-4 py-3 outline-none focus:border-accent-blue transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/70">
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Parlez-moi de votre projet, vos délais, votre budget..."
                className="w-full rounded-xl border border-surface-border bg-surface px-4 py-3 outline-none focus:border-accent-blue transition-colors resize-y"
              />
            </div>
            {status && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl bg-accent-blue/10 border border-accent-blue/20 px-4 py-3 text-sm text-white/80"
              >
                {status}
              </motion.p>
            )}
            <Magnetic strength={0.15}>
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Envoyer le message
              </Button>
            </Magnetic>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-surface-border bg-surface p-8 space-y-6 h-fit"
          >
            {infoItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="flex gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -4 }}
                  transition={{ duration: 0.25 }}
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0"
                >
                  <item.icon className="w-4 h-4 text-accent-blue" />
                </motion.div>
                <div>
                  <p className="text-sm text-white/50">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
