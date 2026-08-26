"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Clock, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";
import { KodariumGlyphGrid } from "@/components/kodarium-glyph-grid";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

const infoItems = [
  { icon: Mail, label: "Email", value: siteConfig.email },
  { icon: MapPin, label: "Zone d'intervention", value: "France entière — full remote" },
  { icon: Clock, label: "Délai de réponse", value: "Sous 48h ouvrées" },
];

type SendState = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [state, setState] = useState<SendState>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const body = String(data.get("message") || "");

    if (!name || !email || !body) {
      setState("error");
      setMessage("Merci de remplir tous les champs avant d'envoyer.");
      return;
    }

    setState("sending");
    setMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: body }),
      });
      const json = await res.json();

      if (!res.ok) {
        setState("error");
        setMessage(json.error || "L'envoi a échoué, réessayez plus tard.");
        return;
      }

      setState("success");
      setMessage("Message envoyé ! Je reviens vers vous sous 48h.");
      form.reset();
    } catch {
      setState("error");
      setMessage("L'envoi a échoué, vérifiez votre connexion et réessayez.");
    }
  }

  return (
    <section id="contact" className="relative py-32 md:py-40 overflow-hidden bg-background">
      <KodariumGlyphGrid className="absolute inset-0 z-0 rounded-none border-0 opacity-80" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
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
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/70">
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
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/70">
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
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/70">
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
            <AnimatePresence mode="wait">
              {message && (
                <motion.p
                  key={message}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "flex items-center gap-2 rounded-xl border px-4 py-3 text-sm",
                    state === "success" && "bg-emerald-500/10 border-emerald-500/20 text-emerald-200",
                    state === "error" && "bg-red-500/10 border-red-500/20 text-red-200"
                  )}
                >
                  {state === "success" && <CheckCircle2 className="w-4 h-4 flex-shrink-0" />}
                  {state === "error" && <AlertCircle className="w-4 h-4 flex-shrink-0" />}
                  {message}
                </motion.p>
              )}
            </AnimatePresence>
            <Magnetic strength={0.15}>
              <Button
                type="submit"
                size="lg"
                disabled={state === "sending"}
                className="w-full sm:w-auto"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {state === "sending" ? (
                    <motion.span
                      key="sending"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Envoi en cours...
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Envoyer le message
                    </motion.span>
                  )}
                </AnimatePresence>
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
                  className="w-11 h-11 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center flex-shrink-0"
                >
                  <item.icon className="w-4 h-4 text-accent-blue" />
                </motion.div>
                <div>
                  <p className="text-sm text-foreground/50">{item.label}</p>
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
