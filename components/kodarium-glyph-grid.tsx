"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// Palette Kodarium — les couleurs des glyphes restent identiques dans les deux
// thèmes (accents violet/cyan visibles sur fond clair comme sur fond sombre) ;
// seul le fond du conteneur suit le thème actif via --background-alt.
const IDLE_RGB = { r: 0x2a, g: 0x24, b: 0x38 }; // anthracite violet
const VIOLET_RGB = { r: 0x8b, g: 0x5c, b: 0xf6 }; // violet néon
const CYAN_RGB = { r: 0x06, g: 0xb6, b: 0xd4 }; // cyan électrique

const GLYPHS = [
  "0", "1", "+", "–", "×", "÷", "=", "≈", "∞", "§", "¤", "¶", "∆", "Ω", "λ", "π",
  "µ", "φ", "Σ", "∴", "◇", "◆", "○", "●", "□", "■", "△", "▲", "✦", "✧", "∘", "·",
  "⌘", "⌥", "⟡", "⟠", "ᚠ", "ᚢ", "ᚦ", "ᚨ",
];

const CELL_SIZE = 34; // px — densité cible de la grille
const MAX_COLS = 70;
const MAX_ROWS = 50;
const SWEEP_SPEED = 5.5; // unités diagonales / seconde
const BAND_WIDTH = 5.5; // largeur du balayage, en unités diagonales
const FLICKER_SPEED = 0.9; // rad / seconde
const FLICKER_THRESHOLD = 0.72; // ne garder que les pics de l'oscillation -> allumages épars
const GLOW_THRESHOLD = 0.4;
const CHAR_SWAP_CHANCE = 0.02; // probabilité de changer de glyphe, par frame, pour une cellule allumée

interface Cell {
  col: number;
  row: number;
  seed: number;
  hueSeed: number;
  char: string;
}

function randomGlyph() {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

// Grille de glyphes animée en continu (balayage diagonal + scintillement
// aléatoire), sans interaction souris. Rendue en Canvas 2D plutôt qu'en
// DOM/Framer Motion : un seul appel de dessin par frame pour rester fluide
// à 60fps et léger en CPU, même sur une grille dense.
export function KodariumGlyphGrid({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cellsRef = useRef<Cell[]>([]);
  const dimsRef = useRef({ cols: 0, rows: 0, cssWidth: 0, cssHeight: 0 });
  const rafId = useRef<number | null>(null);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function buildGrid(cssWidth: number, cssHeight: number) {
      const cols = Math.min(MAX_COLS, Math.max(1, Math.floor(cssWidth / CELL_SIZE)));
      const rows = Math.min(MAX_ROWS, Math.max(1, Math.floor(cssHeight / CELL_SIZE)));
      dimsRef.current = { cols, rows, cssWidth, cssHeight };

      const cells: Cell[] = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          cells.push({
            col,
            row,
            seed: Math.random() * Math.PI * 2,
            hueSeed: Math.random() * Math.PI * 2,
            char: randomGlyph(),
          });
        }
      }
      cellsRef.current = cells;

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas!.width = Math.round(cssWidth * dpr);
      canvas!.height = Math.round(cssHeight * dpr);
      canvas!.style.width = `${cssWidth}px`;
      canvas!.style.height = `${cssHeight}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.font = "13px ui-monospace, SFMono-Regular, Menlo, monospace";
      ctx!.textAlign = "center";
      ctx!.textBaseline = "middle";
    }

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      if (width < 1 || height < 1) return;
      buildGrid(width, height);
      if (reduceMotion) drawStaticFrame();
    });
    resizeObserver.observe(container);

    function drawStaticFrame() {
      const { cols, rows, cssWidth, cssHeight } = dimsRef.current;
      if (!cols || !rows) return;
      ctx!.clearRect(0, 0, cssWidth, cssHeight);
      for (const cell of cellsRef.current) {
        drawCell(cell, 0.35, IDLE_RGB);
      }
    }

    function drawCell(cell: Cell, alpha: number, rgb: { r: number; g: number; b: number }) {
      const x = cell.col * CELL_SIZE + CELL_SIZE / 2;
      const y = cell.row * CELL_SIZE + CELL_SIZE / 2;
      ctx!.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
      ctx!.fillText(cell.char, x, y);
    }

    function frame(now: number) {
      if (startTime.current == null) startTime.current = now;
      const t = (now - startTime.current) / 1000;
      const { cols, rows, cssWidth, cssHeight } = dimsRef.current;

      if (cols && rows) {
        ctx!.clearRect(0, 0, cssWidth, cssHeight);

        const diagMax = cols + rows;
        const cycleLength = diagMax + BAND_WIDTH * 2;
        const wavePos = (t * SWEEP_SPEED) % cycleLength;

        for (const cell of cellsRef.current) {
          const diag = cell.col + cell.row;
          const distFromBand = Math.abs(diag - (wavePos - BAND_WIDTH));
          const sweepGlow = Math.max(0, 1 - distFromBand / BAND_WIDTH);

          const flickerRaw = Math.sin(cell.seed + t * FLICKER_SPEED) * 0.5 + 0.5;
          const flicker =
            flickerRaw > FLICKER_THRESHOLD
              ? (flickerRaw - FLICKER_THRESHOLD) / (1 - FLICKER_THRESHOLD)
              : 0;

          const brightness = Math.min(1, Math.max(sweepGlow, flicker));

          if (brightness > 0.6 && Math.random() < CHAR_SWAP_CHANCE) {
            cell.char = randomGlyph();
          }

          const hueMix = Math.sin(cell.hueSeed + t * 0.15) * 0.5 + 0.5;
          const accent = {
            r: lerp(VIOLET_RGB.r, CYAN_RGB.r, hueMix),
            g: lerp(VIOLET_RGB.g, CYAN_RGB.g, hueMix),
            b: lerp(VIOLET_RGB.b, CYAN_RGB.b, hueMix),
          };
          const rgb = {
            r: lerp(IDLE_RGB.r, accent.r, brightness),
            g: lerp(IDLE_RGB.g, accent.g, brightness),
            b: lerp(IDLE_RGB.b, accent.b, brightness),
          };
          const alpha = 0.32 + brightness * 0.68;

          if (brightness > GLOW_THRESHOLD) {
            ctx!.shadowColor = `rgba(${accent.r},${accent.g},${accent.b},${brightness})`;
            ctx!.shadowBlur = 5 + brightness * 11;
          } else {
            ctx!.shadowBlur = 0;
          }

          drawCell(cell, alpha, rgb);
        }
        ctx!.shadowBlur = 0;
      }

      rafId.current = requestAnimationFrame(frame);
    }

    if (reduceMotion) {
      // Un seul rendu statique : pas de boucle continue pour un visiteur
      // qui demande de réduire les animations.
      const rect = container.getBoundingClientRect();
      buildGrid(rect.width, rect.height);
      drawStaticFrame();
    } else {
      rafId.current = requestAnimationFrame(frame);
    }

    return () => {
      resizeObserver.disconnect();
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden rounded-2xl border bg-background-alt border-surface-border",
        className
      )}
      aria-hidden="true"
    >
      {/* Grain très subtil, statique (pas redessiné par le canvas, donc gratuit en perf) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
