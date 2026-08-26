"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const { resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  const logoSrc = mounted && resolvedTheme === "light" ? "/logo-full.png" : "/logo-full-dark.png";

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-[80] flex justify-center px-4 pt-4"
      >
        <div
          className={cn(
            "flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500",
            scrolled
              ? "bg-background/60 backdrop-blur-xl border border-foreground/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
              : "bg-transparent border border-transparent"
          )}
        >
          <Link href="/" className="flex items-center">
            <Image
              src={logoSrc}
              alt={siteConfig.name}
              width={395}
              height={281}
              className="h-9 w-auto"
              priority
              unoptimized
            />
          </Link>

          <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-5 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium py-1 transition-colors",
                    isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-0.5 h-px w-full bg-gradient-to-r from-accent-blue to-accent-cyan"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Magnetic strength={0.25}>
              <Link href="/devis">
                <Button size="sm">Estimer mon projet</Button>
              </Link>
            </Magnetic>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Link href="/devis">
              <Button size="sm" className="px-4">
                Devis
              </Button>
            </Link>
            <button
              aria-label="Ouvrir le menu"
              className="p-2 -mr-2"
              onClick={() => setOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[95] bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex justify-between items-center p-6">
              <ThemeToggle />
              <button aria-label="Fermer le menu" onClick={() => setOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <motion.nav
              aria-label="Navigation mobile"
              className="flex flex-col items-center gap-8 mt-12"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06 } } }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <Link href={link.href} onClick={() => setOpen(false)} className="text-3xl font-semibold">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
