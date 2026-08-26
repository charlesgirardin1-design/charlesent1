"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  OPEN_SETTINGS_EVENT,
  getStoredConsent,
  setStoredConsent,
} from "@/lib/consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getStoredConsent() === null) setVisible(true);

    function handleOpenSettings() {
      setVisible(true);
    }
    window.addEventListener(OPEN_SETTINGS_EVENT, handleOpenSettings);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, handleOpenSettings);
  }, []);

  function choose(choice: "accepted" | "rejected") {
    setStoredConsent(choice);
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Gestion des cookies"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6 sm:pb-6"
        >
          <div className="mx-auto max-w-3xl rounded-2xl border border-surface-border bg-[#0a0a0a]/95 backdrop-blur-xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col sm:flex-row sm:items-center gap-5">
            <p className="text-sm text-white/70 leading-relaxed flex-1">
              J&apos;utilise Google Analytics pour mesurer la fréquentation du site. Ces
              cookies ne sont déposés qu&apos;avec votre accord. Vous pouvez accepter,
              refuser, ou en savoir plus dans ma{" "}
              <a href="/politique-de-cookies" className="text-accent-blue hover:underline">
                politique de cookies
              </a>
              .
            </p>
            <div className="flex gap-3 shrink-0">
              <Button size="sm" variant="outline" onClick={() => choose("rejected")}>
                Refuser
              </Button>
              <Button size="sm" onClick={() => choose("accepted")}>
                Accepter
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
