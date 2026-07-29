"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-32">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4"
      >
        Erreur 404
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex text-[clamp(3rem,10vw,7rem)] font-semibold tracking-tight leading-none"
      >
        {["4", "0", "4"].map((digit, i) => (
          <motion.span
            key={i}
            className="inline-block text-gradient animated-gradient"
            animate={{ y: [0, -18, 0], rotate: [0, i % 2 === 0 ? -6 : 6, 0] }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15,
            }}
          >
            {digit}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 text-lg text-white/60 max-w-md"
      >
        Cette page n&apos;existe pas, ou a été déplacée. Comme un lien mort, ça arrive même sur
        les meilleurs sites.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10"
      >
        <Magnetic>
          <Link href="/">
            <Button size="lg">
              <ArrowLeft className="w-4 h-4" />
              Retour à l&apos;accueil
            </Button>
          </Link>
        </Magnetic>
      </motion.div>
    </div>
  );
}
