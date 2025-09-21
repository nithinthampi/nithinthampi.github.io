"use client";

import { motion } from "framer-motion";
import { resume } from "@/lib/resume";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Timeline } from "@/components/ui/timeline";

export function EducationSection() {
  return (
    <section id="education" className="py-24">
      <Container>
        <SectionHeader
          eyebrow="Education"
          title="Academic foundation"
          description="Continuous learning has shaped my engineering practice—from fundamentals to the latest frameworks and leadership methodologies."
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Timeline items={resume.education} />
        </motion.div>
      </Container>
    </section>
  );
}
