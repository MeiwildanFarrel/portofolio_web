"use client";

import { GraduationCap, Trophy, FolderGit2, FileBadge } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { PROFILE } from "@/lib/data";

const STATS = [
  {
    icon: GraduationCap,
    value: "3.95",
    label: "GPA / 4.00",
    accent: "#3b82f6",
  },
  {
    icon: Trophy,
    value: "1",
    label: "Gold Medal",
    accent: "#f59e0b",
  },
  {
    icon: FolderGit2,
    value: "5+",
    label: "Projects Built",
    accent: "#06b6d4",
  },
  {
    icon: FileBadge,
    value: "3",
    label: "Copyrights",
    accent: "#10b981",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-primary py-24 sm:py-28">
      <div className="container-x">
        <SectionHeader
          number="01"
          label="about"
          title="About"
          subtitle="Turning ideas into intelligent products."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted">
              <p>
                I&apos;m an Information Systems undergraduate with hands-on experience building web applications and integrating AI features. 
                I enjoy turning complex ideas into functional digital products through collaboration and structured development.
              </p>
              <p>
                My goal is to lead and drive impactful AI and web projects from concept to delivery, 
                bridging the gap between technical execution and product vision.
              </p>
              <div className="flex flex-col gap-2 pt-2 font-mono text-sm text-muted">
                <span>
                  <span className="text-accent-teal">▹</span>{" "}
                  {PROFILE.university} · {PROFILE.universityPeriod}
                </span>
                <span>
                  <span className="text-accent-amber">★</span> GPA{" "}
                  {PROFILE.gpa} · {PROFILE.scholarship}
                </span>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <Reveal key={stat.label} delay={i * 0.08}>
                  <div
                    className="group h-full rounded-xl border border-white/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1.5"
                    style={
                      {
                        "--accent": stat.accent,
                      } as React.CSSProperties
                    }
                  >
                    <div
                      className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border"
                      style={{
                        backgroundColor: `${stat.accent}1f`,
                        borderColor: `${stat.accent}40`,
                        color: stat.accent,
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="font-display text-3xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-muted">{stat.label}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
