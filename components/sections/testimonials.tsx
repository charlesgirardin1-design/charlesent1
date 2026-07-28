"use client";

import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="relative py-32 md:py-40 bg-background-alt overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Philosophie" title="Ce qui guide chaque projet" align="center" />
      </div>

      <div className="relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max gap-6 animate-[marquee_36s_linear_infinite] hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <div
              key={i}
              className="w-[380px] flex-shrink-0 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8"
            >
              <Quote className="w-6 h-6 text-accent-blue mb-4" />
              <p className="text-lg leading-relaxed text-white/85">{t.quote}</p>
              <p className="mt-6 text-sm font-mono uppercase tracking-wider text-white/40">
                {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
