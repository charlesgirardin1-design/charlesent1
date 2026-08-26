"use client";

import { useLayoutEffect, useState } from "react";
import { AnimatePresence, animate, motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

const STORAGE_KEY = "kodarium-preloader-seen";

type Phase = "unknown" | "skipped" | "showing" | "hidden";

export function Preloader() {
  const [phase, setPhase] = useState<Phase>("unknown");
  const [percent, setPercent] = useState(0);

  // useLayoutEffect pour trancher avant la première peinture : évite un
  // flash du préloader chez un visiteur qui l'a déjà vu dans la session,
  // ou qui a demandé de réduire les animations.
  useLayoutEffect(() => {
    const alreadySeen = sessionStorage.getItem(STORAGE_KEY);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (alreadySeen || reduceMotion) {
      setPhase("skipped");
      return;
    }

    setPhase("showing");
    document.documentElement.style.overflow = "hidden";

    const controls = animate(0, 100, {
      duration: 1.1,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setPercent(Math.round(v)),
      onComplete: () => {
        sessionStorage.setItem(STORAGE_KEY, "1");
        window.setTimeout(() => setPhase("hidden"), 300);
      },
    });

    return () => controls.stop();
  }, []);

  if (phase === "unknown" || phase === "skipped") return null;

  return (
    <AnimatePresence onExitComplete={() => (document.documentElement.style.overflow = "")}>
      {phase === "showing" && (
        <motion.div
          key="preloader"
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-8 bg-background"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="font-mono text-xs tracking-[0.35em] text-foreground/40 uppercase">
              {siteConfig.name}
            </span>
            <span className="font-mono text-6xl font-semibold tabular-nums text-gradient">
              {percent}%
            </span>
          </div>
          <div className="w-52 h-px bg-foreground/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan"
              style={{ width: `${percent}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
