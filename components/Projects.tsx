"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Lock, ExternalLink, Trophy } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import SectionHeader from "@/components/SectionHeader";

interface Project {
  id: number;
  name: string;
  fullName: string;
  year: string;
  role: string;
  stack: string[];
  achievement: string | null;
  privateRepo: boolean;
  image: string | null;
  description: string;
  accentColor: string;
  github: string | null;
  liveUrl: string | null;
}

const projects: Project[] = [
  {
    id: 0,
    name: "Aksara",
    fullName: "Aksara – AI-Powered Adaptive Learning Platform",
    year: "2026",
    role: "Backend Developer / AI Engineer",
    stack: [
      "Python",
      "Node.js",
      "RAG",
      "Bayesian Knowledge Tracing",
      "Vector Database",
      "LLM API",
    ],
    achievement: null,
    privateRepo: false,
    image: "/project/Aksara.png",
    description:
      "Conceived and developed a platform that turns uploaded course materials into gamified skill trees, AI-generated quizzes, and adaptive explanations powered by RAG and Bayesian Knowledge Tracing to match each learner's mastery level.",
    accentColor: "#3b82f6",
    github: "https://github.com/MeiwildanFarrel/aksara",
    liveUrl: "https://aksara-orpin.vercel.app/login",
  },
  {
    id: 1,
    name: "Campus PMB",
    fullName: "Campus PMB – New Student Admissions System (UP45)",
    year: "2025",
    role: "Full-Stack Web Developer (User-Facing System)",
    stack: ["Laravel", "MySQL", "Tailwind CSS", "Bootstrap"],
    achievement: "Live Production System for Higher Education",
    privateRepo: true,
    image: "/project/PMB.png",
    description:
      "Implemented it in Laravel. Responsible for the full frontend and backend logic for the applicant side: public landing page, personal data forms, payment gateway, selection status tracking, and re-registration workflows.",
    accentColor: "#06b6d4",
    github: null,
    liveUrl: "https://pmb.up45.ac.id/",
  },
  {
    id: 2,
    name: "SIVIO",
    fullName: "SIVIO – AI-Powered Assistive Mobile App for Inclusivity",
    year: "2024",
    role: "UI/UX Designer",
    stack: ["Figma", "User Research", "Prototyping"],
    achievement:
      "National Top 165, InnoVillage by Telkom Indonesia 2024 · Secured Project Funding",
    privateRepo: false,
    image: "/project/Sivio.png",
    description:
      "Designed the end-to-end UI/UX for a social innovation app improving communication for deaf and mute students at SLB ABCD Kuncup Banyumas. Framed user flows for real-time Computer Vision sign-language-to-text translation and speech-to-text features, alongside an integrated dictionary and AI chatbot to build an inclusive learning environment.",
    accentColor: "#ec4899",
    github: null,
    liveUrl: null,
  },
  {
    id: 3,
    name: "LogiCheck",
    fullName: "LogiCheck – Innovative Web Platform",
    year: "2025",
    role: "Project Researcher & Co-Ideator",
    stack: ["Academic Research", "Figma"],
    achievement:
      "Gold Medal · International Science and Invention Fair (ISIF) 2025",
    privateRepo: false,
    image: "/project/Logicheck.png",
    description:
      "Developed the core innovation concept, conducted UX research, and authored the scientific paper. Web development was executed by team developers based on this foundational research.",
    accentColor: "#f59e0b",
    github: null,
    liveUrl: "https://logi-check.vercel.app/",
  },
  {
    id: 4,
    name: "SportQuest",
    fullName: "SportQuest – Sport Gamification Platform",
    year: "2025",
    role: "Initial UI/UX Designer (Version 1)",
    stack: ["Figma"],
    achievement: "Credited in HKI · Funded by 2025 National Prototype Grant",
    privateRepo: true,
    image: "/project/Sportquest.png",
    description:
      "Structured UX framework, information architecture, and V1 design system for a gamified sport-tech platform managing match-making bookings and community engagement. Production app at sportquest.id has since evolved through iterations.",
    accentColor: "#8b5cf6",
    github: null,
    liveUrl: null,
  },
  {
    id: 5,
    name: "BUMDes Arta Jaya",
    fullName: "Web Financial System – BUMDes Arta Jaya",
    year: "2024",
    role: "Full-Stack Web Developer",
    stack: ["Laravel", "MySQL", "Excel Integration", "SDLC Waterfall"],
    achievement: "Officially credited in Intellectual Property Rights (HKI)",
    privateRepo: true,
    image: "/project/Bumdes.png",
    description:
      "Refactored and enhanced a web-based financial system to automate village internet billing, migrating from manual Excel. Implemented RBAC, automated billing, installment tracking, and financial report export.",
    accentColor: "#10b981",
    github: null,
    liveUrl: null,
  },
];

function iconBtn(extra = "") {
  return `inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/15 text-muted transition-colors hover:text-foreground ${extra}`;
}

function ProjectDetail({ project }: { project: Project }) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, x: -12 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      exit={{ opacity: 0, x: 8, transition: { duration: 0.15 } }}
    >
      {/* 1 — Mockup */}
      {project.image ? (
        <div className="group relative aspect-video w-full overflow-hidden rounded-xl shadow-sm">
          <Image
            src={project.image}
            alt={project.fullName}
            fill
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 65%, rgba(8,12,20,0.4) 85%, rgba(8,12,20,1) 100%)",
            }}
          />
        </div>
      ) : (
        <div
          className="flex aspect-video w-full items-center justify-center rounded-xl"
          style={{
            background: `linear-gradient(135deg, ${project.accentColor}22, ${project.accentColor}08)`,
            border: `1px solid ${project.accentColor}22`,
          }}
        >
          <span
            className="font-display text-6xl font-bold"
            style={{ color: project.accentColor, opacity: 0.4 }}
          >
            {project.name}
          </span>
        </div>
      )}

      {/* 2 — Header */}
      <h3 className="mt-5 font-display text-xl font-bold text-foreground">
        {project.fullName}
        <span className="ml-2 font-mono text-xs font-normal text-muted">
          {project.year}
        </span>
      </h3>

      {/* 3 — Meta row */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span
          className="rounded-full border px-3 py-1 text-xs"
          style={{
            borderColor: project.accentColor,
            color: project.accentColor,
          }}
        >
          {project.role}
        </span>

        {project.privateRepo && (
          <span
            title="Source code private — institutional/client policy"
            className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1 text-xs text-muted"
          >
            <Lock className="h-3 w-3" />
            Private repo
          </span>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open live site"
            title="Live site"
            className={iconBtn("hover:border-accent-teal")}
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}

        {project.github && !project.privateRepo && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source on GitHub"
            title="GitHub"
            className={iconBtn()}
          >
            <GithubIcon className="h-4 w-4" />
          </a>
        )}
      </div>

      {/* 4 — Stack */}
      <div className="mt-6">
        <p className="mb-2 font-mono text-xs text-accent-teal">{"// stack"}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border px-2 py-1 text-xs text-foreground/80"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 5 — Achievement (only if present) */}
      {project.achievement && (
        <div className="mt-6">
          <p className="mb-2 font-mono text-xs text-accent-teal">
            {"// achievement"}
          </p>
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 shrink-0" style={{ color: "#f59e0b" }} />
            <span className="text-sm font-medium" style={{ color: "#f59e0b" }}>
              {project.achievement}
            </span>
          </div>
        </div>
      )}

      {/* 6 — Description */}
      <div className="mt-6">
        <p className="mb-2 font-mono text-xs text-accent-teal">{"// about"}</p>
        <p className="text-sm leading-relaxed text-foreground/70">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(0);
  const activeProject = projects.find((p) => p.id === active) ?? projects[0];

  return (
    <section id="projects" className="bg-secondary py-24 sm:py-28">
      <div className="container-x">
        <SectionHeader
          number="02"
          label="projects"
          title="Projects"
          subtitle="Featured work spanning full-stack web platforms, intelligent AI features, and impactful product designs."
        />

        <div className="relative mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-[3fr_1fr] lg:gap-12">
          {/* LEFT — detail panel (75%) */}
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <ProjectDetail key={activeProject.id} project={activeProject} />
            </AnimatePresence>
          </div>

          {/* RIGHT — sticky nav (25%) */}
          <nav
            aria-label="Project navigation"
            className="order-1 lg:order-2 lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)] lg:self-start lg:overflow-y-auto"
          >
            <ul className="flex flex-row gap-1 overflow-x-auto whitespace-nowrap pb-2 lg:flex-col lg:overflow-visible lg:whitespace-normal lg:pb-0">
              {projects.map((p) => {
                const isActive = p.id === active;
                return (
                  <li key={p.id} className="shrink-0">
                    <motion.button
                      type="button"
                      onClick={() => setActive(p.id)}
                      aria-current={isActive ? "true" : undefined}
                      animate={{ x: isActive ? 4 : 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      className={`flex w-full items-center gap-3 border-l-2 px-4 py-3 text-left font-display text-sm font-medium transition-colors ${
                        isActive
                          ? "border-accent-teal text-accent-teal"
                          : "border-transparent text-muted hover:text-foreground/80"
                      }`}
                    >
                      <span className="font-mono text-[10px] text-muted">
                        {String(p.id + 1).padStart(2, "0")}
                      </span>
                      {p.name}
                    </motion.button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
