"use client";

import { motion } from "framer-motion";
import { resume } from "@/lib/resume";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { SkillBar } from "@/components/ui/skill-bar";

export function SkillsSection() {
  const entries = Object.entries(resume.skills);

  return (
    <section id="skills" className="py-8">
      <Container>
        <SectionHeader
          eyebrow="Skills"
          title="Crafting rich experiences with modern tooling"
          description="Deep expertise across front-end engineering, product strategy, and the collaborative skills that bring cross-functional teams together."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {entries.map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="flex h-full flex-col gap-6 p-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category}
                  </h3>
                  <p className="text-sm text-muted/80">
                    {skills.length} core strengths
                  </p>
                </div>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
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
