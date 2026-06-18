"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Direction the element travels in from. Defaults to upward (y: 30 → 0). */
  x?: number;
  y?: number;
  as?: "div" | "li" | "article" | "section";
}

export default function Reveal({
  children,
  className,
  delay = 0,
  x = 0,
  y = 30,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
