"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  number: string;
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  number,
  label,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Ghost number behind the title */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-2 -top-4 select-none font-display font-black leading-none"
        style={{
          fontSize: "clamp(6rem, 12vw, 10rem)",
          color: "rgba(255,255,255,0.025)",
        }}
      >
        {number}
      </span>

      <div className="relative z-10">
        <span className="font-mono text-sm tracking-[0.2em] text-accent-teal">
          {`// ${label}`}
        </span>
        <h2 className="mt-2 font-display text-4xl font-bold text-foreground sm:text-5xl">
          {title}
        </h2>
        <div
          className="mt-4 h-px w-3/5"
          style={{
            background: "linear-gradient(90deg, var(--accent-teal), transparent)",
          }}
        />
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
}
