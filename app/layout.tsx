import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meiwildan-farrel.vercel.app"),
  title: "Meiwildan Muhammad Farrel — AI Developer & Web Builder",
  description:
    "Portfolio of Meiwildan Muhammad Farrel — AI Developer and Web Builder. Gold medalist, award-winning projects, and registered software contributions.",
  keywords: [
    "Meiwildan Muhammad Farrel",
    "AI Developer",
    "Web Developer",
    "Telkom University",
    "Portfolio",
  ],
  authors: [{ name: "Meiwildan Muhammad Farrel" }],
  openGraph: {
    title: "Meiwildan Muhammad Farrel — AI Developer & Web Builder",
    description:
      "Building AI-driven systems that learn, adapt, and create real impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-primary text-foreground antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
