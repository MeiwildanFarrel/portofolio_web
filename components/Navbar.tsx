"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  function handleNav(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    setOpen(false);
    if (typeof window !== "undefined" && window.lenis) {
      window.lenis.scrollTo(target as HTMLElement, { offset: -72 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(8,12,20,0.72)" : "rgba(8,12,20,0)",
        borderColor: scrolled
          ? "rgba(255,255,255,0.08)"
          : "rgba(255,255,255,0)",
      }}
      transition={{ duration: 0.3 }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleNav(e, "#hero")}
          className="font-display text-xl font-bold tracking-tight text-accent-blue"
        >
          Meiwildan
          <span className="text-accent-teal">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="text-foreground md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden border-t border-white/10 bg-primary/95 backdrop-blur-xl md:hidden"
      >
        <div className="container-x flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="rounded-md px-2 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
