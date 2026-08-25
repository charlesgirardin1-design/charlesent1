import { useId } from "react";

// Monogramme Kodarium : un "C" en dégradé bleu qui enlace un "K" plein,
// recréé en SVG (recréation fidèle du logo fourni — pas le fichier
// source d'origine, dont Claude n'a pas accès sur le disque).
export function LogoMark({ className }: { className?: string }) {
  const id = useId();
  const cGrad = `kodarium-c-${id}`;
  const kGrad = `kodarium-k-${id}`;

  return (
    <svg viewBox="0 0 130 130" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={cGrad} x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#1e3a5f" />
        </linearGradient>
        <linearGradient id={kGrad} x1="0.05" y1="0.05" x2="1" y2="1">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="55%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#7dd3fc" />
        </linearGradient>
      </defs>
      <path
        d="M 100,88 A 40,40 0 1 1 100,32"
        fill="none"
        stroke={`url(#${cGrad})`}
        strokeWidth="12"
        strokeLinecap="round"
      />
      <g fill={`url(#${kGrad})`}>
        <rect x="34" y="26" width="13" height="60" rx="3" />
        <polygon points="39.8,60.1 82.8,20.1 73.2,9.9 30.2,49.9" />
        <polygon points="30.8,60.6 80.8,97.6 89.2,86.4 39.2,49.4" />
      </g>
    </svg>
  );
}
