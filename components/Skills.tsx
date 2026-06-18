"use client";

import { Code2, PenTool, Wrench, Clapperboard } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { SKILLS, type SkillGroup } from "@/lib/data";

const ICONS: Record<SkillGroup["icon"], LucideIcon> = {
  code: Code2,
  design: PenTool,
  tools: Wrench,
  creative: Clapperboard,
};

export default function Skills() {
  return (
    <section id="skills" className="bg-secondary py-24 sm:py-28">
      <div className="container-x">
        <SectionHeader
          number="04"
          label="skills"
          title="Skills & Tools"
          subtitle="Technologies and tools I use to design, build, and ship."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((group, i) => {
            const Icon = ICONS[group.icon];
            return (
              <Reveal key={group.category} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-white/10 bg-card p-6 transition-colors duration-300 hover:border-accent-teal/40">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-accent-teal/30 bg-accent-teal/10 text-accent-teal">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {group.category}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-foreground/90 transition-all hover:-translate-y-0.5 hover:border-accent-teal hover:text-foreground"
                      >
                        {item}
                      </span>
                    ))}
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
