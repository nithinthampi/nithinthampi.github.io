"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { resume } from "@/lib/resume";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-background/70 backdrop-blur-lg">
      <Container className="flex items-center justify-between gap-4 py-4">
        <Link
          href="#hero"
          className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-accent to-sky-500 text-base text-background shadow-md shadow-accent/30">
            {resume.name[0]}
          </span>
          <span className="hidden sm:inline">{resume.name}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative transition-colors duration-200 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button asChild variant="primary" className="hidden md:inline-flex">
            <Link
              href={resume.about.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Résumé
            </Link>
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/40 text-foreground md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </Container>
      {open ? (
        <div className="border-t border-border/50 bg-background/95 md:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-muted transition-colors hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="outline">
              <Link
                href={resume.about.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                View Résumé
              </Link>
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
