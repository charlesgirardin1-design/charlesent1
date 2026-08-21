"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

export function AnimatedCounter({
  value,
  suffix = "",
  duration = 1.4,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  // Always render the real value by default (SSR, no-JS, crawlers). The
  // count-up is a progressive-enhancement animation only — it must never be
  // the only place the true number appears.
  const [display, setDisplay] = useState(value);
  const skipAnimation = useRef(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    // If it's already on screen at mount, don't animate from 0 — that would
    // flash the correct number down to 0 before counting back up.
    skipAnimation.current = alreadyVisible;
  }, []);

  useEffect(() => {
    if (!inView || skipAnimation.current) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  return (
    <motion.span ref={ref} className="font-mono tabular-nums">
      {display}
      {suffix}
    </motion.span>
  );
}
