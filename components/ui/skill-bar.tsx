"use client";

import type { Skill } from "@/types/resume";
import { motion } from "framer-motion";

interface SkillBarProps {
  skill: Skill;
}

export function SkillBar({ skill }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm font-medium text-foreground">
        <span>{skill.name}</span>
        <span className="text-xs text-muted">{skill.rating}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-foreground/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.rating}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-accent via-fuchsia-500 to-sky-500"
        />
      </div>
    </div>
  );
}
