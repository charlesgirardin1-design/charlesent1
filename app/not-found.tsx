"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";

export default function NotFound() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    if (!next) video.play().catch(() => {});
    setMuted(next);
  }

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
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-xl rounded-3xl border border-foreground/15 bg-foreground/[0.04] backdrop-blur-xl shadow-2xl shadow-accent-blue/10 p-3"
      >
        <video
          ref={videoRef}
          src="/404-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-h-[70vh] rounded-2xl object-contain"
        />
        <button
          type="button"
          onClick={toggleSound}
          aria-label={muted ? "Activer le son" : "Couper le son"}
          className="absolute bottom-6 right-6 flex items-center justify-center w-10 h-10 rounded-full border border-foreground/15 bg-black/50 backdrop-blur-md text-foreground/80 hover:text-foreground hover:border-foreground/30 transition-colors"
        >
          {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-8 flex text-[clamp(3rem,10vw,7rem)] font-semibold tracking-tight leading-none"
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
        className="mt-6 text-lg text-foreground/60 max-w-md"
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
