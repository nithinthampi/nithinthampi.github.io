import Link from "next/link";
import { resume } from "@/lib/resume";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/60 py-10">
      <Container className="flex flex-col gap-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-foreground">{resume.name}</p>
          <p className="text-muted">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {resume.social?.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href={`mailto:${resume.basic.email}`}
            className="transition-colors hover:text-foreground"
          >
            {resume.basic.email}
          </Link>
        </div>
      </Container>
    </footer>
  );
}
