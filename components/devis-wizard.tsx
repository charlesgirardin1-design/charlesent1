"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Globe,
  ShoppingCart,
  LayoutGrid,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projectTypes = [
  { id: "vitrine", label: "Site vitrine", icon: Globe, base: 800 },
  { id: "ecommerce", label: "E-commerce", icon: ShoppingCart, base: 1800 },
  { id: "app", label: "Application web", icon: LayoutGrid, base: 2500 },
  { id: "autre", label: "Autre / je ne sais pas", icon: HelpCircle, base: 0 },
] as const;

const addonOptions = [
  { id: "pages-plus", label: "Plus de 6 pages", add: 300 },
  { id: "multilingue", label: "Site multilingue", add: 400 },
  { id: "blog", label: "Blog intégré", add: 250 },
  { id: "rdv", label: "Prise de rendez-vous en ligne", add: 300 },
  { id: "photo", label: "Shooting photo professionnel", add: 150 },
] as const;

const timelines = [
  { id: "urgent", label: "Le plus vite possible", hint: "moins de 2 semaines", multiplier: 1.15 },
  { id: "normal", label: "Délai normal", hint: "2 à 6 semaines", multiplier: 1 },
  { id: "flexible", label: "Flexible", hint: "pas pressé", multiplier: 0.95 },
] as const;

const stepLabels = ["Projet", "Besoins", "Délai", "Coordonnées"];

type SendState = "idle" | "sending" | "success" | "error";

export function DevisWizard() {
  const [step, setStep] = useState(0);
  const [projectType, setProjectType] = useState<string | null>(null);
  const [addons, setAddons] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<SendState>("idle");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const selectedType = projectTypes.find((t) => t.id === projectType);
  const selectedTimeline = timelines.find((t) => t.id === timeline);

  const addonsTotal = addons.reduce((sum, id) => {
    const opt = addonOptions.find((o) => o.id === id);
    return sum + (opt?.add ?? 0);
  }, 0);

  const baseEstimate = selectedType ? selectedType.base + addonsTotal : 0;
  const multiplier = selectedTimeline?.multiplier ?? 1;
  const estimateLow = Math.round((baseEstimate * multiplier * 0.9) / 10) * 10;
  const estimateHigh = Math.round((baseEstimate * multiplier * 1.15) / 10) * 10;
  const isCustomQuote = projectType === "autre" || baseEstimate === 0;

  function toggleAddon(id: string) {
    setAddons((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]));
  }

  function canGoNext() {
    if (step === 0) return !!projectType;
    if (step === 2) return !!timeline;
    return true;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name || !email) {
      setState("error");
      setStatusMessage("Merci de renseigner votre nom et votre email.");
      return;
    }
    setState("sending");
    setStatusMessage(null);
    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          projectType: selectedType?.label,
          addons: addons.map((id) => addonOptions.find((o) => o.id === id)?.label),
          timeline: selectedTimeline?.label,
          estimate: isCustomQuote ? "Sur devis" : `${estimateLow} € – ${estimateHigh} €`,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setState("error");
        setStatusMessage(json.error || "L'envoi a échoué, réessayez plus tard.");
        return;
      }
      setState("success");
      setStatusMessage("Votre demande a bien été envoyée ! Je reviens vers vous sous 48h.");
    } catch {
      setState("error");
      setStatusMessage("L'envoi a échoué, vérifiez votre connexion.");
    }
  }

  if (state === "success") {
    return (
      <div className="text-center py-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle2 className="w-8 h-8 text-emerald-400" />
        </motion.div>
        <h2 className="text-2xl font-semibold mb-3">Demande envoyée !</h2>
        <p className="text-foreground/60 max-w-md mx-auto">{statusMessage}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-12">
        {stepLabels.map((label, i) => (
          <div key={label} className="flex-1">
            <div
              className={cn(
                "h-1 rounded-full transition-colors duration-300",
                i <= step ? "bg-accent-blue" : "bg-foreground/10"
              )}
            />
            <p
              className={cn(
                "mt-2 text-xs font-mono uppercase tracking-wider hidden sm:block",
                i === step ? "text-foreground" : "text-foreground/30"
              )}
            >
              {label}
            </p>
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {step === 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Quel type de projet ?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {projectTypes.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setProjectType(t.id)}
                    className={cn(
                      "flex items-center gap-3 rounded-2xl border p-5 text-left transition-colors",
                      projectType === t.id
                        ? "border-accent-blue bg-accent-blue/10"
                        : "border-surface-border bg-surface hover:border-foreground/20"
                    )}
                  >
                    <t.icon className="w-5 h-5 text-accent-blue flex-shrink-0" />
                    <span className="font-medium">{t.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">Des besoins spécifiques ?</h2>
              <p className="text-foreground/50 mb-6">Optionnel — cochez ce qui s&apos;applique.</p>
              <div className="space-y-3">
                {addonOptions.map((o) => (
                  <button
                    key={o.id}
                    type="button"
                    onClick={() => toggleAddon(o.id)}
                    className={cn(
                      "w-full flex items-center justify-between gap-3 rounded-xl border p-4 text-left transition-colors",
                      addons.includes(o.id)
                        ? "border-accent-blue bg-accent-blue/10"
                        : "border-surface-border bg-surface hover:border-foreground/20"
                    )}
                  >
                    <span>{o.label}</span>
                    <span
                      className={cn(
                        "w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0",
                        addons.includes(o.id) ? "border-accent-blue bg-accent-blue" : "border-foreground/20"
                      )}
                    >
                      {addons.includes(o.id) && <Check className="w-3 h-3 text-black" />}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Quel délai ?</h2>
              <div className="space-y-3">
                {timelines.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTimeline(t.id)}
                    className={cn(
                      "w-full flex items-center justify-between gap-3 rounded-xl border p-4 text-left transition-colors",
                      timeline === t.id
                        ? "border-accent-blue bg-accent-blue/10"
                        : "border-surface-border bg-surface hover:border-foreground/20"
                    )}
                  >
                    <div>
                      <p className="font-medium">{t.label}</p>
                      <p className="text-sm text-foreground/50">{t.hint}</p>
                    </div>
                  </button>
                ))}
              </div>

              {!isCustomQuote && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 rounded-2xl border border-accent-blue/30 bg-accent-blue/10 p-6"
                >
                  <p className="text-sm text-foreground/60 mb-1">Estimation indicative</p>
                  <p className="text-3xl font-semibold text-gradient">
                    {estimateLow} € – {estimateHigh} €
                  </p>
                  <p className="text-sm text-foreground/40 mt-2">
                    Le tarif exact sera précisé dans le devis, selon le contenu réel du projet.
                  </p>
                </motion.div>
              )}
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-semibold mb-6">Vos coordonnées</h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/70">
                    Nom complet
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full rounded-xl border border-surface-border bg-surface px-4 py-3 outline-none focus:border-accent-blue transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/70">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-xl border border-surface-border bg-surface px-4 py-3 outline-none focus:border-accent-blue transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/70">
                    Précisions (optionnel)
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full rounded-xl border border-surface-border bg-surface px-4 py-3 outline-none focus:border-accent-blue transition-colors resize-y"
                  />
                </div>
              </div>

              <AnimatePresence>
                {statusMessage && state === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="mt-4 flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {statusMessage}
                  </motion.div>
                )}
              </AnimatePresence>

              <Button
                type="submit"
                size="lg"
                disabled={state === "sending"}
                className="mt-6 w-full sm:w-auto"
              >
                {state === "sending" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  "Envoyer ma demande"
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </AnimatePresence>

      {step < 3 && (
        <div className="mt-10 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground disabled:opacity-0 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Précédent
          </button>
          <Button onClick={() => canGoNext() && setStep((s) => s + 1)} disabled={!canGoNext()}>
            Continuer
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
