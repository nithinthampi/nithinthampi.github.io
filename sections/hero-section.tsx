"use client";

import Link from "next/link";
import { ArrowDownRight, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { resume } from "@/lib/resume";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pb-24 pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.25),transparent_55%)]" />
      <Container className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div className="space-y-8">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent"
          >
            <Sparkles className="h-4 w-4" aria-hidden /> Principal Engineer
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {resume.name}
            <span className="block text-gradient">{resume.title}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-lg leading-relaxed text-muted"
          >
            {resume.about.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button asChild>
              <Link
                href={resume.about.resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Download Résumé
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="#contact">Let&apos;s collaborate</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-center gap-4 text-sm text-muted"
          >
            <span className="inline-flex items-center gap-2 font-medium text-foreground">
              <MapPin className="h-4 w-4" aria-hidden />
              {resume.basic.address}
            </span>
            <span>{resume.basic.email}</span>
            <span>{resume.basic.phone}</span>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
        >
          <Card className="bg-gradient-to-br from-card via-card/70 to-transparent p-8">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-muted">
                  Snapshot
                </p>
                <p className="text-lg font-medium text-foreground">
                  {resume.basic.title}
                </p>
              </div>
              <div className="grid gap-3 text-sm text-muted">
                <div>
                  <p className="font-semibold text-foreground">
                    Years of experience
                  </p>
                  <p>13+ years building immersive digital products.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Specialties</p>
                  <p>
                    Design systems, front-end architecture, developer
                    experience.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Currently</p>
                  <p>Leading teams &amp; modernizing experiences at Globex.</p>
                </div>
              </div>
              <Link
                href="#experience"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
              >
                Discover the journey
                <ArrowDownRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
