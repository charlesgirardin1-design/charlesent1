"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.018 } },
};

const char: Variants = {
  hidden: { y: "110%" },
  visible: { y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// Révèle un texte lettre par lettre quand il entre dans le viewport,
// en conservant les coupures de ligne au niveau des mots.
export function AnimatedChars({
  text,
  className,
  once = true,
}: {
  text: string;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-100px" }}
      variants={container}
      className={className}
    >
      {text.split(" ").map((word, wi) => (
        <span key={wi} className="inline-block mr-[0.22em] align-top last:mr-0">
          {word.split("").map((c, ci) => (
            <span key={ci} className="inline-block overflow-hidden align-top">
              <motion.span variants={char} className="inline-block">
                {c}
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}
