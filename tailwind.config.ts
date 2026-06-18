import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#080c14", // deep navy base background
        secondary: "#0d1117",
        card: "#111827",
        muted: "#64748b",
        foreground: "#f1f5f9",
        accent: {
          blue: "#3b82f6",
          teal: "#06b6d4",
          amber: "#f59e0b",
          purple: "#8b5cf6",
          emerald: "#10b981",
        },
        terminal: {
          bg: "#0d1117",
          green: "#22c55e",
          prompt: "#06b6d4",
          text: "#cbd5e1",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-space-grotesk)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-jetbrains-mono)", ...defaultTheme.fontFamily.mono],
      },
      boxShadow: {
        "glow-blue": "0 0 24px rgba(59,130,246,0.28)",
        "glow-teal": "0 0 24px rgba(6,182,212,0.28)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
