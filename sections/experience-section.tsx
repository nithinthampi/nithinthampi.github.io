"use client";

import { motion } from "framer-motion";
import { resume } from "@/lib/resume";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Timeline } from "@/components/ui/timeline";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <Container>
        <SectionHeader
          eyebrow="Experience"
          title="Leading vision with engineering excellence"
          description="A track record of driving end-to-end delivery, empowering teams, and launching products that make a measurable impact."
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Timeline items={resume.experience} />
        </motion.div>
      </Container>
    </section>
  );
}
