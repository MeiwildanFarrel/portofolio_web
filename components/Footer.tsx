import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Mail } from "lucide-react";
import { GITHUB_URL, LINKEDIN_URL, EMAIL, PROFILE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <div className="flex items-center gap-2">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-lg p-2 text-muted transition-colors hover:text-foreground"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg p-2 text-muted transition-colors hover:text-foreground"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email"
            className="rounded-lg p-2 text-muted transition-colors hover:text-foreground"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
