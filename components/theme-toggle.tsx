"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isLight = mounted && resolvedTheme === "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      aria-label={isLight ? "Passer en thème sombre" : "Passer en thème clair"}
      className={
        className ??
        "flex items-center justify-center w-9 h-9 rounded-full border border-surface-border text-[var(--foreground)]/70 hover:text-[var(--foreground)] hover:border-[var(--foreground)]/30 transition-colors"
      }
    >
      {mounted ? (
        isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />
      ) : (
        <span className="w-4 h-4" />
      )}
    </button>
  );
}
