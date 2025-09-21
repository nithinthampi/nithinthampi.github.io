import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border/60 bg-card/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_25px_60px_-15px_rgba(15,118,110,0.35)]",
        className,
      )}
      {...props}
    />
  );
}
