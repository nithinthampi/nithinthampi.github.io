"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="h-10 w-10 rounded-full border border-border/40 p-0"
    >
      {mounted ? (
        isDark ? (
          <SunMedium className="h-5 w-5" aria-hidden />
        ) : (
          <MoonStar className="h-5 w-5" aria-hidden />
        )
      ) : (
        <span className="block h-5 w-5" />
      )}
    </Button>
  );
}
