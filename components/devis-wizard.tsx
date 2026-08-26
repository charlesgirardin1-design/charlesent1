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
  Sparkles,
  ShoppingCart,
  LayoutGrid,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Bases tarifaires : un montant pivot par formule (pas une fourchette en soi).
// La fourchette affichée à l'utilisateur est dérivée de ce pivot via RANGE_SPREAD
// ci-dessous, pour rester une estimation honnête sans jamais être une "boîte noire".
const projectTypes = [
  {
    id: "vitrine-essentiel",
    label: "Vitrine Essentiel",
    hint: "1 à 3 pages",
    icon: Globe,
    base: 1100,
  },
  {
    id: "vitrine-sur-mesure",
    label: "Vitrine Sur-mesure",
    hint: "4 à 8 pages",
    icon: Sparkles,
    base: 2000,
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    hint: "Boutique en ligne, catalogue, fonctionnalités avancées",
    icon: ShoppingCart,
    base: 3500,
    startingAt: true,
  },
  {
    id: "app",
    label: "Application web",
    hint: "Sur devis, selon le périmètre",
    icon: LayoutGrid,
    custom: true,
  },
  {
    id: "autre",
    label: "Autre / je ne sais pas",
    hint: "On en discute ensemble",
    icon: HelpCircle,
    custom: true,
  },
] as const;

const addonOptions = [
  {
    id: "branding",
    label: "Identité visuelle / Logo",
    hint: "Pas encore de logo, de charte graphique ou de couleurs définies",
    add: 500,
  },
  {
    id: "copywriting",
    label: "Rédaction des contenus",
    hint: "Textes à rédiger ou réécrire pour maximiser la conversion",
    add: 400,
  },
  {
    id: "integration",
    label: "Fonctionnalité spécifique",
    hint: "Réservation en ligne, espace membre, multilingue...",
    add: 500,
  },
  {
    id: "photo",
    label: "Shooting photo professionnel",
    hint: "Visuels produit, portrait ou événementiel",
    add: 150,
  },
] as const;

const timelines = [
  {
    id: "urgent",
    label: "Le plus vite possible",
    hint: "moins de 2 semaines · +25% sur le total",
    mult: 1.25,
  },
  { id: "normal", label: "Délai normal", hint: "2 à 6 semaines", mult: 1 },
  { id: "flexible", label: "Flexible", hint: "pas pressé", mult: 1 },
] as const;

// Marge appliquée autour du montant pivot pour obtenir une fourchette honnête
// (le montant réel dépend toujours du contenu précis vu en échange).
const RANGE_SPREAD_LOW = 0.9;
const RANGE_SPREAD_HIGH = 1.15;
const ROUND_STEP = 50;

function roundTo(value: number, step: number) {
  // Epsilon pour éviter qu'une imprécision flottante (ex: 1500 * 1.15 =
  // 1724.9999999999998) ne fasse basculer un arrondi tout juste sous le seuil.
  return Math.round(value / step + 1e-9) * step;
}

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
  const isCustomQuote = !selectedType || "custom" in selectedType;

  const addonsTotal = addons.reduce((sum, id) => {
    const opt = addonOptions.find((o) => o.id === id);
    return sum + (opt?.add ?? 0);
  }, 0);

  const base = selectedType && "base" in selectedType ? selectedType.base : 0;
  const mult = selectedTimeline?.mult ?? 1;
  const pivot = (base + addonsTotal) * mult;
  const isStartingAt = !!(selectedType && "startingAt" in selectedType && selectedType.startingAt);

  // La fourchette basse ne descend jamais sous le pivot pour une formule
  // "à partir de" (l'e-commerce) : c'est un plancher affiché tel quel, pas un
  // point médian.
  const estimateLow = isStartingAt ? roundTo(pivot, ROUND_STEP) : roundTo(pivot * RANGE_SPREAD_LOW, ROUND_STEP);
  const estimateHigh = roundTo(pivot * RANGE_SPREAD_HIGH, ROUND_STEP);

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
          estimate: isCustomQuote
            ? "Sur devis"
            : `${estimateLow}€ - ${estimateHigh}€${isStartingAt ? "+" : ""}`,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setState("error");
        setStatusMessage(json.error || "L'envoi a échoué, réessayez plus tard.");
        return;
      }
      setState("success");
      setStatusMessage(
        "Votre demande a bien été envoyée ! Vous recevrez le devis détaillé par email sous 48h."
      );
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
                      "flex items-start gap-3 rounded-2xl border p-5 text-left transition-colors",
                      projectType === t.id
                        ? "border-accent-blue bg-accent-blue/10"
                        : "border-surface-border bg-surface hover:border-foreground/20"
                    )}
                  >
                    <t.icon className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                    <span>
                      <span className="font-medium block">{t.label}</span>
                      <span className="text-sm text-foreground/50 block mt-0.5">{t.hint}</span>
                      {"base" in t && (
                        <span className="text-sm font-mono text-accent-blue block mt-1">
                          {"startingAt" in t && t.startingAt ? `À partir de ${t.base}€` : `~ ${t.base}€`}
                        </span>
                      )}
                    </span>
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
                      "w-full flex items-start justify-between gap-3 rounded-xl border p-4 text-left transition-colors",
                      addons.includes(o.id)
                        ? "border-accent-blue bg-accent-blue/10"
                        : "border-surface-border bg-surface hover:border-foreground/20"
                    )}
                  >
                    <span>
                      <span className="font-medium block">{o.label}</span>
                      <span className="text-sm text-foreground/50 block mt-0.5">{o.hint}</span>
                      <span className="text-sm font-mono text-accent-blue block mt-1">
                        +{o.add}€
                      </span>
                    </span>
                    <span
                      className={cn(
                        "w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5",
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

              {!isCustomQuote ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 rounded-2xl border border-accent-blue/30 bg-accent-blue/10 p-6"
                >
                  <p className="text-sm text-foreground/60 mb-1">Estimation indicative</p>
                  <p className="text-3xl font-semibold text-gradient">
                    {estimateLow}€ – {estimateHigh}€{isStartingAt ? "+" : ""}
                  </p>
                  <p className="text-sm text-foreground/40 mt-2">
                    Le tarif exact sera précisé dans le devis, selon le contenu réel du projet —
                    laissez vos coordonnées à l&apos;étape suivante pour le recevoir par email
                    sous 48h, sans engagement.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 rounded-2xl border border-accent-blue/30 bg-accent-blue/10 p-6"
                >
                  <p className="text-sm text-foreground/60 mb-1">Votre projet mérite un vrai chiffrage</p>
                  <p className="text-lg font-medium text-foreground">
                    Décrivez-le-moi à l&apos;étape suivante, je reviens vers vous avec un devis
                    détaillé sous 48h.
                  </p>
                </motion.div>
              )}
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-semibold mb-2">Dernière étape</h2>
              <p className="text-foreground/50 mb-6">
                Vos coordonnées pour recevoir le devis détaillé — ou préférez-vous{" "}
                <a href="/contact" className="text-accent-blue hover:underline">
                  en discuter directement
                </a>{" "}
                ?
              </p>
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
