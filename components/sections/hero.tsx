"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

const titleLines = ["Des sites web", "qui vous", "ressemblent."];

const bubbles = [
  { left: "6%", top: "15%", size: 10, duration: 15, delay: 0, color: "bg-accent-blue/50" },
  { left: "14%", top: "70%", size: 6, duration: 12, delay: 3, color: "bg-accent-cyan/50" },
  { left: "23%", top: "35%", size: 14, duration: 18, delay: 1.2, color: "bg-accent-violet/40" },
  { left: "35%", top: "80%", size: 7, duration: 13.5, delay: 5, color: "bg-accent-blue/40" },
  { left: "47%", top: "10%", size: 5, duration: 11, delay: 2.4, color: "bg-accent-cyan/45" },
  { left: "58%", top: "55%", size: 12, duration: 16.5, delay: 0.6, color: "bg-accent-violet/45" },
  { left: "68%", top: "25%", size: 7, duration: 13, delay: 4.2, color: "bg-accent-blue/50" },
  { left: "78%", top: "68%", size: 16, duration: 19, delay: 2, color: "bg-accent-cyan/35" },
  { left: "88%", top: "40%", size: 8, duration: 14.5, delay: 1.6, color: "bg-accent-violet/40" },
  { left: "93%", top: "78%", size: 6, duration: 11.5, delay: 3.8, color: "bg-accent-blue/45" },
  { left: "3%", top: "50%", size: 9, duration: 15.5, delay: 4.6, color: "bg-accent-cyan/40" },
  { left: "52%", top: "88%", size: 13, duration: 17.5, delay: 0.9, color: "bg-accent-violet/35" },
];

function AnimatedWords({ text, delayStart = 0 }: { text: string; delayStart?: number }) {
  const words = text.split(" ");
  return (
    <span className="inline-block overflow-hidden">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.28em] align-top">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.9,
              delay: delayStart + i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  // Dérive ambiante lente, indépendante de la souris, pour garder le hero vivant
  // même sans interaction (tactile, ou visiteur immobile).
  const t = useMotionValue(0);
  useEffect(() => {
    const controls = animate(t, Math.PI * 2, {
      duration: 26,
      repeat: Infinity,
      ease: "linear",
    });
    return () => controls.stop();
  }, [t]);

  const ambientX = useTransform(t, (v) => Math.sin(v) * 26);
  const ambientY = useTransform(t, (v) => Math.cos(v * 0.8) * 22);

  const blobX = useTransform([sx, ambientX], ([m, a]: number[]) => m * 40 + a);
  const blobY = useTransform([sy, ambientY], ([m, a]: number[]) => m * 40 + a);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Grille discrète */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 90%)",
        }}
      />

      {/* Formes abstraites floues, parallax souris */}
      <motion.div
        style={{ x: blobX, y: blobY }}
        className="pointer-events-none absolute -top-32 left-[8%] w-[36rem] h-[36rem] rounded-full bg-accent-blue/25 blur-[120px]"
      />
      <motion.div
        style={{ x: useTransform(blobX, (v) => v * -0.7), y: useTransform(blobY, (v) => v * -0.7) }}
        className="pointer-events-none absolute top-[20%] right-[6%] w-[30rem] h-[30rem] rounded-full bg-accent-violet/20 blur-[120px]"
      />
      <motion.div
        style={{ x: useTransform(blobX, (v) => v * 0.5), y: useTransform(blobY, (v) => v * -0.5) }}
        className="pointer-events-none absolute bottom-[-10%] left-[35%] w-[26rem] h-[26rem] rounded-full bg-accent-cyan/15 blur-[120px]"
      />

      {/* Bulles flottantes, dérive libre + pulsation de taille */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {bubbles.map((b, i) => (
          <motion.span
            key={i}
            className={cn("absolute rounded-full", b.color)}
            style={{ left: b.left, top: b.top, width: b.size, height: b.size }}
            animate={{
              x: [0, i % 2 === 0 ? 50 : -50, i % 3 === 0 ? -35 : 35, i % 2 === 0 ? 20 : -20, 0],
              y: [0, i % 3 === 0 ? -60 : 60, i % 2 === 0 ? 40 : -40, i % 3 === 0 ? -25 : 25, 0],
              scale: [0.6, 1.4, 0.8, 1.2, 0.6],
              opacity: [0.25, 0.75, 0.4, 0.7, 0.25],
            }}
            transition={{
              duration: b.duration,
              delay: b.delay,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.3, 0.6, 0.8, 1],
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-white/70 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-blue opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-blue" />
          </span>
          Disponible pour de nouveaux projets
        </motion.div>

        <h1 className="font-semibold leading-[0.98] tracking-tight text-[clamp(2.8rem,8vw,6.5rem)]">
          <div className="block"><AnimatedWords text={titleLines[0]} delayStart={0.15} /></div>
          <div className="block"><AnimatedWords text={titleLines[1]} delayStart={0.3} /></div>
          <div className="block text-gradient animated-gradient">
            <AnimatedWords text={titleLines[2]} delayStart={0.45} />
          </div>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-8 max-w-xl text-lg text-muted"
        >
          {siteConfig.role}, j&apos;accompagne indépendants et TPE dans la création de
          sites qui inspirent confiance et transforment vos visiteurs en clients.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <Button size="lg" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
              Discutons de votre projet
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Magnetic>
          <Magnetic strength={0.2}>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              Voir mes projets
            </Button>
          </Magnetic>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
