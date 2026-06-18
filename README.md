# Meiwildan Muhammad Farrel — Portfolio

A personal portfolio site with a terminal-style hero, scrolling marquee
banners, and animated project cards. Built with **Next.js 14 (App Router)**,
**Tailwind CSS v3**, **Framer Motion**, and **Lenis** smooth scrolling.

## Tech stack

- [Next.js 14](https://nextjs.org/) — App Router, TypeScript
- [Tailwind CSS v3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — section reveals, terminal typing, hover effects
- [Lenis](https://github.com/darkroomengineering/lenis) — smooth scrolling
- [lucide-react](https://lucide.dev/) — icons
- Google Fonts via `next/font`: Space Grotesk (display), Inter (body), JetBrains Mono (terminal)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx      fonts, metadata, Lenis wrapper
  page.tsx        all sections assembled
  globals.css     CSS variables, marquee keyframes, base styles
components/
  Navbar.tsx          scroll-aware nav + mobile menu
  Hero.tsx            terminal typewriter + photo placeholder + HUD corners
  Marquee.tsx         reusable CSS scrolling banner
  About.tsx           bio + stat cards
  Projects.tsx        mockup cards with hover tilt
  Achievements.tsx
  Skills.tsx
  Experience.tsx      timeline layout
  Contact.tsx         links + contact form UI
  Footer.tsx
  Reveal.tsx          shared whileInView reveal wrapper
  SectionHeading.tsx  editorial section divider
  SmoothScroll.tsx    Lenis provider
  icons.tsx           GitHub / LinkedIn brand SVGs
lib/
  data.ts         all content (profile, projects, achievements, skills, experience)
```

## Customizing content

All copy lives in [`lib/data.ts`](lib/data.ts) — edit it there and every
section updates automatically.

### To-do before launch

- Replace the `MF` photo placeholder in `components/Hero.tsx` with a real
  `<Image>` (e.g. `./farrel.jpg` in `/public`, ideally with a grayscale filter).
- Drop your CV PDF into `/public` and point `CV_URL` in `lib/data.ts` at it.

## Deploy

Deploy on [Vercel](https://vercel.com/new): import the repo and accept the
defaults — Vercel detects Next.js automatically.

```bash
npm run build   # production build
```
