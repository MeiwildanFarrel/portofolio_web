"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { GITHUB_URL, LINKEDIN_URL, CV_URL } from "@/lib/data";

// The AI response, streamed word by word. Each block becomes one line/paragraph.
const RESPONSE: { el: "h1" | "p"; text: string; className: string }[] = [
  {
    el: "h1",
    text: "Hi. I'm Meiwildan Muhammad Farrel.",
    className: "font-display text-xl font-semibold text-foreground sm:text-2xl",
  },
  {
    el: "p",
    text: "Full-stack Developer · AI Integrator",
    className: "mt-1 text-sm font-medium text-accent-teal",
  },
  {
    el: "p",
    text: "I build robust full-stack web applications and integrate intelligent AI features from smart automated systems to adaptive RAG pipelines. Currently based in Central Java, Indonesia.",
    className: "mt-4 text-sm leading-relaxed text-muted",
  },
  {
    el: "p",
    text: "▸ Open to opportunities",
    className: "mt-4 text-sm text-foreground/80",
  },
  {
    el: "p",
    text: "▸ github.com/MeiwildanFarrel",
    className: "mt-1 text-sm text-foreground/80",
  },
];

const PER_WORD = 0.06; // seconds between words

type Phase = "streaming" | "progress" | "complete";

export default function Hero() {
  const reduce = useReducedMotion();

  // Pre-compute word arrays and a global running index for the stagger.
  const blocks = useMemo(() => {
    let offset = 0;
    return RESPONSE.map((b) => {
      const words = b.text.split(" ");
      const start = offset;
      offset += words.length;
      return { ...b, words, start };
    });
  }, []);
  const totalWords = useMemo(
    () => blocks.reduce((n, b) => n + b.words.length, 0),
    [blocks],
  );

  const per = reduce ? 0 : PER_WORD;
  const [phase, setPhase] = useState<Phase>(reduce ? "complete" : "streaming");

  // After streaming finishes, run the progress bar.
  useEffect(() => {
    if (reduce) return;
    const streamMs = (totalWords * per + 0.5) * 1000;
    const t = setTimeout(() => setPhase("progress"), streamMs);
    return () => clearTimeout(t);
  }, [reduce, totalWords, per]);

  // Mark complete once the progress bar has filled (~3s).
  useEffect(() => {
    if (phase !== "progress") return;
    const t = setTimeout(() => setPhase("complete"), 3000);
    return () => clearTimeout(t);
  }, [phase]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24 pb-24"
    >
      {/* Animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="hero-blob absolute -left-24 top-10 h-[28rem] w-[28rem] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)",
            filter: "blur(80px)",
            animation: "drift 8s ease-in-out infinite alternate",
          }}
        />
        <div
          className="hero-blob absolute right-[-4rem] top-1/3 h-[26rem] w-[26rem] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.15), transparent 70%)",
            filter: "blur(80px)",
            animation: "drift 10s ease-in-out infinite alternate",
            animationDelay: "-3s",
          }}
        />
        <div
          className="hero-blob absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.12), transparent 70%)",
            filter: "blur(80px)",
            animation: "drift 12s ease-in-out infinite alternate",
            animationDelay: "-6s",
          }}
        />
      </div>

      {/* Tiny corner stat (outside the panel) */}
      <div className="pointer-events-none absolute left-6 top-20 z-10 font-mono text-[11px] tracking-wide text-white/25 sm:left-8">
        GPA: 3.95 · SCHOLARSHIP ACTIVE
      </div>
<br />
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] mt-8">
        {/* ---------- AI inference panel (left, ~55%) ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-1"
        >
          <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02] shadow-2xl shadow-black/30 backdrop-blur-[10px]">
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3 font-mono text-xs text-muted">
              <span>farrel-ai · v1.0</span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-terminal-green" />
                online
              </span>
            </div>

            {/* Body */}
            <div className="p-5 sm:p-6 flex flex-col gap-5">
              {/* User Prompt */}
              <div className="flex w-full flex-col items-end">
                <span className="mb-1 px-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                  User
                </span>
                <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-accent-blue/15 border border-accent-blue/20 px-4 py-3 text-sm text-foreground/90">
                  Introduce me to this developer.
                </div>
              </div>

              {/* AI Response */}
              <div className="flex w-full flex-col items-start mt-2">
                <span className="mb-1 px-1 font-mono text-[10px] uppercase tracking-wider text-accent-teal">
                  farrel-ai
                </span>
                <div className="max-w-[100%] rounded-2xl rounded-tl-sm bg-white/[0.03] border border-white/[0.08] px-4 py-4 sm:px-5 sm:py-5">
                  <div className="flex flex-col">
                    {blocks.map((b, bi) => {
                      const Tag = b.el === "h1" ? "h1" : "p";
                      return (
                        <Tag key={bi} className={b.className}>
                          {b.words.map((word, wi) => {
                            const gi = b.start + wi;
                            return (
                              <motion.span
                                key={wi}
                                initial={reduce ? false : { opacity: 0, y: 3 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: gi * per, duration: 0.25 }}
                              >
                                {word}{" "}
                              </motion.span>
                            );
                          })}
                        </Tag>
                      );
                    })}
                  </div>

                  {/* Progress bar */}
                  {phase !== "streaming" && (
                    <div className="mt-6 flex items-center gap-3">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-teal"
                          initial={{ width: reduce ? "100%" : 0 }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: reduce ? 0 : 3,
                            ease: "easeInOut",
                          }}
                        />
                      </div>
                      <span className="shrink-0 font-mono text-xs text-accent-teal">
                        {phase === "complete" ? "complete ✓" : "generating…"}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* CTAs below the panel, left-aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              onClick={(e) => {
                const t = document.querySelector("#projects");
                if (t && window.lenis) {
                  e.preventDefault();
                  window.lenis.scrollTo(t as HTMLElement, { offset: -72 });
                }
              }}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent-blue to-accent-teal px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:shadow-glow-blue"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            {/* TODO: replace CV_URL in lib/data.ts with the real PDF path */}

            <div className="flex items-center gap-1">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-lg p-2.5 text-muted transition-colors hover:text-foreground"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg p-2.5 text-muted transition-colors hover:text-foreground"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* ---------- Photo placeholder (right, ~45%) — unchanged ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          {/* Real photo, melting into the page (no border / no crop) */}
          <div className="relative h-[480px] w-[380px] max-w-full">
            <Image
              src="/Foto/Foto-Farrel.png"
              alt="Meiwildan Muhammad Farrel"
              fill
              priority
              sizes="380px"
              className="object-cover"
              style={{ objectPosition: "top center" }}
            />

            {/* Layer 1 — bottom fade into page background */}
            <div
              className="pointer-events-none absolute bottom-0 left-0 right-0 h-[55%]"
              style={{
                background:
                  "linear-gradient(to top, var(--bg-primary) 0%, var(--bg-primary) 20%, rgba(8,12,20,0.85) 45%, transparent 100%)",
              }}
            />

            {/* Layer 2 — left edge fade into left column */}
            <div
              className="pointer-events-none absolute bottom-0 left-0 top-0 w-[40%]"
              style={{
                background:
                  "linear-gradient(to right, var(--bg-primary) 0%, transparent 100%)",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
