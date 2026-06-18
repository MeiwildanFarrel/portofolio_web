"use client";

import { Briefcase, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import {
  WORK_EXPERIENCE,
  ORG_EXPERIENCE,
  type ExperienceItem,
} from "@/lib/data";

function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="relative pl-8">
      {/* vertical line */}
      <span className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-blue via-accent-blue/40 to-transparent" />
      <div className="space-y-8">
        {items.map((item, i) => (
          <Reveal key={item.role + item.org} delay={i * 0.06}>
            <div className="relative">
              <span className="absolute -left-8 top-1.5 h-4 w-4 rounded-full border-[3px] border-accent-blue bg-primary shadow-glow-blue" />
              <h4 className="font-semibold text-foreground">{item.role}</h4>
              <div className="mt-0.5 font-mono text-sm text-accent-teal">
                {item.org} · {item.period}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="bg-primary py-24 sm:py-28">
      <div className="container-x">
        <SectionHeader
          number="05"
          label="experience"
          title="Experience"
          subtitle="Professional and organizational roles that shaped how I build and collaborate."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent-blue/30 bg-accent-blue/10 text-accent-blue">
                <Briefcase className="h-4 w-4" />
              </span>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Work Experience
              </h3>
            </div>
            <Timeline items={WORK_EXPERIENCE} />
          </div>

          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent-teal/30 bg-accent-teal/10 text-accent-teal">
                <Users className="h-4 w-4" />
              </span>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Organizational
              </h3>
            </div>
            <Timeline items={ORG_EXPERIENCE} />
          </div>
        </div>
      </div>
    </section>
  );
}
