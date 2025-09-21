"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { resume } from "@/lib/resume";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const mailto = new URL(`mailto:${resume.basic.email}`);
    const params = new URLSearchParams({
      subject: `Portfolio inquiry from ${name ?? ""}`,
      body: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    window.location.href = `${mailto.toString()}?${params.toString()}`;
    setStatus("sent");
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-24">
      <Container>
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something remarkable"
          description="Whether it's evolving your design system, mentoring teams, or delivering complex web experiences, I'd love to collaborate."
        />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full space-y-6 p-6">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-muted">
                  Direct line
                </p>
                <p className="text-2xl font-semibold text-foreground">
                  {resume.basic.email}
                </p>
              </div>
              <div className="space-y-4 text-sm text-muted">
                <p>
                  Prefer a quick chat? Reach out on Skype at{" "}
                  <span className="text-foreground">{resume.basic.skype}</span>{" "}
                  or call
                  <span className="text-foreground"> {resume.basic.phone}</span>
                  .
                </p>
                <p>
                  I respond within 1-2 business days and enjoy understanding a
                  problem deeply before proposing the solution.
                </p>
              </div>
              <div className="space-y-3 text-sm text-muted">
                <p className="font-semibold text-foreground">Connect</p>
                <ul className="space-y-2">
                  {resume.social?.map((social) => (
                    <li key={social.url}>
                      <a
                        className="transition-colors hover:text-foreground"
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {social.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-6">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
                    Name
                    <input
                      name="name"
                      type="text"
                      required
                      className="rounded-xl border border-border/50 bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
                    Email
                    <input
                      name="email"
                      type="email"
                      required
                      className="rounded-xl border border-border/50 bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
                  How can I help?
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="rounded-2xl border border-border/50 bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
                  />
                </label>
                <div className="flex flex-wrap items-center gap-4">
                  <Button type="submit">Send message</Button>
                  {status === "sent" ? (
                    <span className="text-sm text-accent/80">
                      Drafting email…
                    </span>
                  ) : null}
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
