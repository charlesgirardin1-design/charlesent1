"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Palette GetLayers (dark theme)
const COLOR_BG = "#050b07";
const COLOR_BORDER = "#1c2a20";
const COLOR_GLYPH_IDLE = "#2d4535";
const COLOR_GLYPH_AMBIENT = "#4a6352";
const COLOR_GLYPH_ACTIVE = "#2ef38e";

const GLYPHS = [
  "0", "1", "+", "–", "×", "÷", "=", "≈", "∞", "§", "¤", "¶", "∆", "Ω", "λ", "π",
  "µ", "φ", "Σ", "∴", "◇", "◆", "○", "●", "□", "■", "△", "▲", "✦", "✧", "∘", "·",
  "⌘", "⌥", "⟡", "⟠", "ᚠ", "ᚢ", "ᚦ", "ᚨ",
];

const CELL_SIZE = 34; // px — densité cible de la grille
const HOVER_RADIUS = 2.6; // en unités de cellule
const AMBIENT_INTERVAL = 650; // ms entre deux scintillements passifs

const BASE_STYLE = {
  color: COLOR_GLYPH_IDLE,
  opacity: "0.35",
  textShadow: "none",
  transform: "scale(1)",
};

function randomGlyph() {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
}

function resetCell(el: HTMLSpanElement) {
  el.style.color = BASE_STYLE.color;
  el.style.opacity = BASE_STYLE.opacity;
  el.style.textShadow = BASE_STYLE.textShadow;
  el.style.transform = BASE_STYLE.transform;
}

export function GlyphGrid({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cellRefs = useRef<Map<string, HTMLSpanElement>>(new Map());
  const activeCells = useRef<Set<string>>(new Set());
  const pointer = useRef<{ x: number; y: number } | null>(null);
  const rafId = useRef<number | null>(null);

  const [dims, setDims] = useState({ cols: 0, rows: 0 });
  const [glyphs, setGlyphs] = useState<string[]>([]);

  // Mesure le conteneur pour générer une grille exacte (responsive), pas de
  // recalcul JS sur chaque frame : uniquement au montage et au resize.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      const cols = Math.max(1, Math.floor(width / CELL_SIZE));
      const rows = Math.max(1, Math.floor(height / CELL_SIZE));
      setDims((prev) => (prev.cols === cols && prev.rows === rows ? prev : { cols, rows }));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setGlyphs(Array.from({ length: dims.cols * dims.rows }, randomGlyph));
  }, [dims]);

  // Effet spotlight : le voisinage borné autour du curseur (pas toute la
  // grille) est mis à jour par mutation directe du style — zéro re-render
  // React au mousemove, donc 60fps même sur une grille dense.
  useEffect(() => {
    const el = containerRef.current;
    if (!el || dims.cols === 0) return;

    function update() {
      const p = pointer.current;
      const nextActive = new Set<string>();

      if (p) {
        const col = p.x / CELL_SIZE;
        const row = p.y / CELL_SIZE;
        const minCol = Math.max(0, Math.floor(col - HOVER_RADIUS));
        const maxCol = Math.min(dims.cols - 1, Math.ceil(col + HOVER_RADIUS));
        const minRow = Math.max(0, Math.floor(row - HOVER_RADIUS));
        const maxRow = Math.min(dims.rows - 1, Math.ceil(row + HOVER_RADIUS));

        for (let r = minRow; r <= maxRow; r++) {
          for (let c = minCol; c <= maxCol; c++) {
            const dx = c + 0.5 - col;
            const dy = r + 0.5 - row;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist > HOVER_RADIUS) continue;

            const key = `${r}-${c}`;
            nextActive.add(key);
            const cellEl = cellRefs.current.get(key);
            if (!cellEl) continue;

            const intensity = 1 - dist / HOVER_RADIUS;
            cellEl.style.color = COLOR_GLYPH_ACTIVE;
            cellEl.style.opacity = "1";
            cellEl.style.textShadow = `0 0 ${6 + intensity * 12}px rgba(46,243,142,${0.35 + intensity * 0.5})`;
            cellEl.style.transform = `scale(${1 + intensity * 0.15})`;
          }
        }
      }

      // Décroissance (fade) des cellules qui sortent du rayon : on repose
      // simplement leur style, la transition CSS fait le fondu.
      activeCells.current.forEach((key) => {
        if (nextActive.has(key)) return;
        const cellEl = cellRefs.current.get(key);
        if (cellEl) resetCell(cellEl);
      });

      activeCells.current = nextActive;
      rafId.current = null;
    }

    function handlePointerMove(e: PointerEvent) {
      const rect = el!.getBoundingClientRect();
      pointer.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      if (rafId.current == null) rafId.current = requestAnimationFrame(update);
    }

    function handlePointerLeave() {
      pointer.current = null;
      if (rafId.current == null) rafId.current = requestAnimationFrame(update);
    }

    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerleave", handlePointerLeave);
    return () => {
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerleave", handlePointerLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [dims]);

  // Animation ambiante : quelques glyphes s'éclaircissent brièvement au
  // hasard pour garder la grille vivante hors interaction.
  useEffect(() => {
    if (glyphs.length === 0 || dims.cols === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      const idx = Math.floor(Math.random() * glyphs.length);
      const row = Math.floor(idx / dims.cols);
      const col = idx % dims.cols;
      const key = `${row}-${col}`;
      if (activeCells.current.has(key)) return;

      const cellEl = cellRefs.current.get(key);
      if (!cellEl) return;

      cellEl.style.color = COLOR_GLYPH_AMBIENT;
      cellEl.style.opacity = "0.8";
      window.setTimeout(() => {
        if (!activeCells.current.has(key)) resetCell(cellEl);
      }, 900);
    }, AMBIENT_INTERVAL);

    return () => window.clearInterval(interval);
  }, [glyphs, dims]);

  return (
    <div
      className={cn("relative overflow-hidden rounded-2xl border", className)}
      style={{ background: COLOR_BG, borderColor: COLOR_BORDER }}
    >
      {/* Grain très subtil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div
        ref={containerRef}
        className="absolute inset-0"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${dims.cols || 1}, 1fr)`,
          gridTemplateRows: `repeat(${dims.rows || 1}, 1fr)`,
        }}
        aria-hidden="true"
      >
        {glyphs.map((g, i) => {
          const row = Math.floor(i / dims.cols);
          const col = i % dims.cols;
          const key = `${row}-${col}`;
          return (
            <span
              key={key}
              ref={(node) => {
                if (node) cellRefs.current.set(key, node);
                else cellRefs.current.delete(key);
              }}
              className="flex items-center justify-center font-mono text-[13px] select-none"
              style={{
                ...BASE_STYLE,
                transition:
                  "color 0.5s ease, text-shadow 0.5s ease, transform 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.5s ease",
              }}
            >
              {g}
            </span>
          );
        })}
      </div>
    </div>
  );
}
