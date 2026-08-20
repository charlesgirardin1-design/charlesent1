"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function AnimatedFeatureList({ items }: { items: string[] }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-4">
      {items.map((item, i) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          className="flex items-start gap-3 text-white/70"
        >
          <motion.span
            whileHover={{ scale: 1.15, rotate: -6 }}
            transition={{ duration: 0.25 }}
            className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center"
          >
            <Check className="w-3 h-3 text-accent-blue" />
          </motion.span>
          {item}
        </motion.li>
      ))}
    </ul>
  );
}
