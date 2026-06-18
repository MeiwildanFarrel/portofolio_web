"use client";

import { Medal, Presentation, TrendingUp, FileText, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { ACHIEVEMENTS, type Achievement } from "@/lib/data";

const ICONS: Record<Achievement["icon"], LucideIcon> = {
  gold: Medal,
  presentation: Presentation,
  rank: TrendingUp,
  paper: FileText,
};

export default function Achievements() {
  return (
    <section id="achievements" className="bg-primary py-24 sm:py-28">
      <div className="container-x">
        <SectionHeader
          number="03"
          label="achievements"
          title="Achievements"
          subtitle="Awards and recognition from national and international competitions and conferences."
        />

        <div className="mt-12 grid items-start gap-6 sm:grid-cols-2">
          {ACHIEVEMENTS.map((item, i) => {
            const Icon = ICONS[item.icon];
            const isGold = item.icon === "gold";
            return (
              <Reveal key={item.title} delay={(i % 2) * 0.08} x={-30} y={0}>
                <div
                  className={`group flex h-full gap-4 rounded-xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 ${
                    isGold
                      ? "border-amber-400/40 shadow-[0_0_25px_rgba(245,158,11,0.2)]"
                      : "border-white/10 hover:border-accent-blue/50 hover:shadow-glow-blue"
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border ${
                      isGold
                        ? "border-amber-400/40 bg-amber-400/15 text-amber-500"
                        : "border-accent-blue/30 bg-accent-blue/15 text-accent-blue"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <span
                        className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                          item.scope === "International"
                            ? "border-accent-teal/40 bg-accent-teal/15 text-cyan-300"
                            : "border-accent-blue/40 bg-accent-blue/15 text-blue-300"
                        }`}
                      >
                        {item.scope}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.detail}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-accent-teal">
                      <MapPin className="h-3.5 w-3.5" />
                      {item.location} · {item.date}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
