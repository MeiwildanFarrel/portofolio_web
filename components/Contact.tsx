"use client";

import { useState } from "react";
import { Mail, Phone, Send, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { EMAIL, PHONE, GITHUB_URL, LINKEDIN_URL } from "@/lib/data";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // UI-only demo. TODO: wire to an email service / API route.
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  }

  return (
    <section id="contact" className="bg-secondary py-24 sm:py-28">
      <div className="container-x">
        <SectionHeader
          number="06"
          label="contact"
          title="Let's build something together"
          subtitle="Open to collaborations, opportunities, and conversations about AI and web development."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Left: direct links */}
          <Reveal>
            <div className="space-y-4">
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-card p-5 transition-all hover:-translate-y-1 hover:border-accent-blue/50 hover:shadow-glow-blue"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-accent-blue/30 bg-accent-blue/15 text-accent-blue">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-muted">Email</span>
                  <span className="font-medium text-foreground">{EMAIL}</span>
                </span>
              </a>

              <a
                href={`tel:${PHONE.replace(/[\s-]/g, "")}`}
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-card p-5 transition-all hover:-translate-y-1 hover:border-accent-teal/50 hover:shadow-glow-teal"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-accent-teal/30 bg-accent-teal/15 text-accent-teal">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-muted">Phone</span>
                  <span className="font-medium text-foreground">{PHONE}</span>
                </span>
              </a>

              <div className="flex gap-3 pt-1">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-card px-4 py-3.5 text-sm font-medium text-foreground transition-all hover:-translate-y-1 hover:border-white/30"
                >
                  <GithubIcon className="h-5 w-5" />
                  GitHub
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-card px-4 py-3.5 text-sm font-medium text-foreground transition-all hover:-translate-y-1 hover:border-white/30"
                >
                  <LinkedinIcon className="h-5 w-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right: contact form (UI) */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-white/10 bg-card p-6 sm:p-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm text-muted"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-lg border border-white/10 bg-primary/60 px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent-blue"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm text-muted"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-white/10 bg-primary/60 px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent-blue"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm text-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell me about your project or opportunity…"
                  className="w-full resize-none rounded-lg border border-white/10 bg-primary/60 px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent-blue"
                />
              </div>
              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent-blue to-accent-teal px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:shadow-glow-blue"
              >
                {sent ? (
                  <>
                    <Check className="h-4 w-4" />
                    Message ready — opens your mail app
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
              <p className="mt-3 text-center text-xs text-muted">
                Prefer email?{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-accent-teal hover:underline"
                >
                  {EMAIL}
                </a>
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
