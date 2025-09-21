"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { resume } from "@/lib/resume";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

export function ProjectsSection() {
  const projects = resume.projects ?? [];

  return (
    <section id="projects" className="py-8">
      <Container>
        <SectionHeader
          eyebrow="Projects"
          title="High-impact initiatives"
          description="Select initiatives that highlight my approach to problem solving, system thinking, and collaborative execution."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="flex h-full flex-col gap-5 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                  </div>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${project.name}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/50 text-accent transition-colors hover:border-accent/60 hover:bg-accent/10"
                  >
                    <ArrowUpRight className="h-5 w-5" aria-hidden />
                  </Link>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted/80">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-foreground/5 px-3 py-1 text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
