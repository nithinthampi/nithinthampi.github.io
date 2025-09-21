"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { resume } from "@/lib/resume";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

const highlights = [
  {
    label: "Leadership",
    value: "Led teams of 25+ engineers across 3 continents",
  },
  {
    label: "Impact",
    value: "Shipped 120+ customer-facing releases in the last 3 years",
  },
  { label: "Community", value: "Conference speaker & OSS contributor" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-8">
      <Container>
        <SectionHeader
          eyebrow="About"
          title="From concept to delightful experiences"
          description="I blend strategic vision with hands-on engineering to craft resilient, accessible, and high-performing web platforms."
        />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-lg leading-relaxed text-muted"
          >
            <p>{resume.about.description}</p>
            <p>
              I enjoy taking complex problems and distilling them into elegant
              solutions. My passion lies in building cohesive design systems,
              advancing developer productivity, and fostering inclusive
              engineering cultures that unlock bold ideas.
            </p>
            <Link
              href={resume.about.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-sm font-semibold text-accent transition-colors hover:text-accent/80"
            >
              Explore complete résumé →
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-6"
          >
            <Card className="grid gap-4 p-6">
              <h3 className="text-lg font-semibold text-foreground">
                Core principles
              </h3>
              <ul className="space-y-3 text-sm text-muted">
                <li>
                  • Build for accessibility and inclusivity from the start.
                </li>
                <li>
                  • Invest in automation to preserve focus for innovation.
                </li>
                <li>• Design API-first experiences that scale gracefully.</li>
              </ul>
            </Card>
            <Card className="grid gap-4 p-6">
              <h3 className="text-lg font-semibold text-foreground">
                Highlights
              </h3>
              <ul className="space-y-3 text-sm text-muted">
                {highlights.map((item) => (
                  <li key={item.label} className="flex flex-col">
                    <span className="text-sm font-semibold uppercase tracking-wide text-accent/90">
                      {item.label}
                    </span>
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
