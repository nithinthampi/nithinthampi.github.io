"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-4",
        align === "center"
          ? "items-center text-center"
          : "items-start text-left",
        className,
      )}
    >
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="rounded-full bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="max-w-2xl text-base text-muted"
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  );
}
