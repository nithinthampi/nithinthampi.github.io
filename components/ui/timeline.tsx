"use client";

import type { NarrativeItem } from "@/types/resume";
import { motion } from "framer-motion";

interface TimelineProps {
  items: NarrativeItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative pl-8">
      <div
        className="absolute left-2 top-0 h-full w-0.5 bg-gradient-to-b from-accent/60 to-transparent"
        aria-hidden
      />
      <ul className="space-y-12">
        {items.map((item, index) => (
          <li key={`${item.title}-${index}`} className="relative pl-6">
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="absolute -left-10 flex h-8 w-8 items-center justify-center rounded-full bg-background text-sm font-semibold text-accent ring-2 ring-accent/60"
            >
              {index + 1}
            </motion.span>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              viewport={{ once: true }}
              className="space-y-3 rounded-2xl bg-gradient-to-br from-card via-card/70 to-transparent p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <span className="text-sm font-medium text-accent/90">
                  {item.year}
                </span>
              </div>
              <p className="text-sm font-medium uppercase tracking-wide text-muted/90">
                {item.institute}
              </p>
              <p className="text-base text-muted">{item.shortDesc}</p>
              <p className="text-sm leading-relaxed text-muted/80">
                {item.longDesc}
              </p>
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
}
