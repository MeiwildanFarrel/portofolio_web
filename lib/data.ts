// ─────────────────────────────────────────────────────────────
// Central content source for the portfolio.
// Edit values here — every section reads from this file.
// ─────────────────────────────────────────────────────────────

export const GITHUB_URL = "https://github.com/MeiwildanFarrel";
export const LINKEDIN_URL =
  "https://linkedin.com/in/meiwildan-muhammad-farrel";
export const EMAIL = "farrelwldan@gmail.com";
export const PHONE = "+62 812-1566-2436";
// TODO: replace with the real CV path once the PDF is added to /public
export const CV_URL = "#";

export const PROFILE = {
  name: "Meiwildan Muhammad Farrel",
  shortName: "farrel",
  initials: "MF",
  roles: ["AI Developer", "Web Builder", "Future Project Manager"],
  bio: "Building AI-driven systems that learn, adapt, and create real impact.",
  university: "Telkom University Purwokerto",
  universityPeriod: "2023 – Present",
  gpa: "3.95 / 4.00",
  scholarship: "One Pipe Fully-Funded Scholarship Awardee",
};

export type TagKind =
  | "featured"
  | "ai"
  | "award"
  | "gold"
  | "research"
  | "published"
  | "copyright";

export interface Project {
  name: string;
  tagline: string;
  year: string;
  description: string;
  tech: string[];
  tags: { label: string; kind: TagKind }[];
  accent: string;
  initials: string;
  github: string;
}

export const PROJECTS: Project[] = [
  {
    name: "Aksara",
    tagline: "AI-Assisted Learning Platform",
    year: "2026",
    description:
      "Conceived and developed a platform that turns uploaded course materials into skill trees, AI-generated quizzes, and adaptive explanations powered by Retrieval-Augmented Generation (RAG) and Bayesian Knowledge Tracing to match each learner's mastery level.",
    tech: ["Next.js", "TypeScript", "Supabase", "Gemini Embeddings"],
    tags: [
      { label: "Featured", kind: "featured" },
      { label: "AI", kind: "ai" },
    ],
    accent: "#3b82f6",
    initials: "AK",
    github: GITHUB_URL,
  },
  {
    name: "SIVIO",
    tagline: "AI Sign Language Video Call",
    year: "2025",
    description:
      "Real-time BISINDO (Indonesian Sign Language) detection via computer vision inside a video-call app. Ranked Top 165 nationally at Innovillage 2024. Registered copyright: EC002025047305.",
    tech: ["Computer Vision", "AI/ML", "Real-time Processing"],
    tags: [
      { label: "Featured", kind: "featured" },
      { label: "Award-Winning", kind: "award" },
      { label: "AI", kind: "ai" },
    ],
    accent: "#06b6d4",
    initials: "SV",
    github: GITHUB_URL,
  },
  {
    name: "LogiCheck",
    tagline: "Conversational AI Coach",
    year: "2025",
    description:
      "An AI tool that helps users strengthen logical reasoning and resist misinformation through guided conversation. Awarded a Gold Medal at ISIF 2025, Bali.",
    tech: ["Conversational AI", "NLP"],
    tags: [
      { label: "Featured", kind: "featured" },
      { label: "Gold Medal", kind: "gold" },
    ],
    accent: "#f59e0b",
    initials: "LC",
    github: GITHUB_URL,
  },
  {
    name: "MOORA DSS",
    tagline: "Decision Support System",
    year: "2024",
    description:
      "A multi-criteria decision model that ranks international schools using the MOORA method. Presented at the CENTIVE 2024 national conference.",
    tech: ["Python", "Data Analysis", "MOORA Algorithm"],
    tags: [
      { label: "Research", kind: "research" },
      { label: "Published", kind: "published" },
    ],
    accent: "#8b5cf6",
    initials: "MO",
    github: GITHUB_URL,
  },
  {
    name: "Registered Software",
    tagline: "Copyrighted Contributions",
    year: "2025 – 2026",
    description:
      "Two copyright-registered applications: a sports gamification app (EC002025171877) and a BUMDes village finance web app (EC002026003799).",
    tech: ["Web Development", "Full Stack"],
    tags: [{ label: "Copyrighted", kind: "copyright" }],
    accent: "#10b981",
    initials: "RS",
    github: GITHUB_URL,
  },
];

export type Scope = "International" | "National";

export interface Achievement {
  title: string;
  scope: Scope;
  detail: string;
  location: string;
  date: string;
  icon: "gold" | "presentation" | "rank" | "paper";
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Gold Medal — ISIF 2025",
    scope: "International",
    detail:
      "Education Category, awarded for the LogiCheck project at the International Science and Invention Fair.",
    location: "Bali, Indonesia (online)",
    date: "Nov 2025",
    icon: "gold",
  },
  {
    title: "2nd Best Presentation — SUT GPBL",
    scope: "International",
    detail:
      "Sustainable City programme, Suranaree University of Technology, Thailand.",
    location: "Thailand (Online)",
    date: "Jun 2025",
    icon: "presentation",
  },
  {
    title: "Top 165 — Innovillage",
    scope: "National",
    detail:
      "By Telkom Group, for the SIVIO AI sign-language video-call platform.",
    location: "Indonesia",
    date: "2024",
    icon: "rank",
  },
  {
    title: "Co-Author & Presenter — CENTIVE 2024",
    scope: "National",
    detail:
      "MOORA method paper, 4th National Conference on Informatics & Engineering.",
    location: "National Conference",
    date: "2024",
    icon: "paper",
  },
];

export interface SkillGroup {
  category: string;
  icon: "code" | "design" | "tools" | "creative";
  items: string[];
}

export const SKILLS: SkillGroup[] = [
  {
    category: "Development",
    icon: "code",
    items: ["Python", "PHP", "JavaScript", "TypeScript", "Laravel", "Next.js", "Node.js"],
  },
  {
    category: "AI & Databases",
    icon: "tools", // Gunakan ikon database/tools yang sesuai di komponen Anda
    items: ["RAG (Retrieval-Augmented Generation)", "Vector Databases", "MySQL", "LLM APIs Integration"],
  },
  {
    category: "Design & Research",
    icon: "design",
    items: ["Figma", "UI/UX Design", "Academic Research"],
  },
  {
    category: "Workflow & Cloud",
    icon: "creative", // Menggunakan slot kartu ke-4 yang kosong agar layout grid tetap simetris
    items: ["Git", "GitHub", "Vercel", "Supabase"],
  },
];


export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  detail: string;
}

export const WORK_EXPERIENCE: ExperienceItem[] = [
 
  {
    role: "Lab Assistant — Algorithm & Programming",
    org: "Telkom University",
    period: "Sep 2024 – Jan 2025",
    detail:
      "Guided students through programming logic and problem-solving in Python during practical lab sessions.",
  },
];

export const ORG_EXPERIENCE: ExperienceItem[] = [

  {
    role: "Head of Information & Communication",
    org: "International Volunteer",
    period: "Jun 2024 – Present",
    detail:
      "Led communication materials, public outreach, and content production.",
  },
  {
    role: "Committee Member — The Index",
    org: "Telkom University",
    period: "Sep 2024 – Nov 2025",
    detail:
      "Organized The Index 2024 & 2025, international cultural-exchange events.",
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
