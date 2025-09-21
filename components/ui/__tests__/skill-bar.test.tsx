import { render, screen } from "@testing-library/react";
import { SkillBar } from "@/components/ui/skill-bar";
import type { Skill } from "@/types/resume";

describe("SkillBar", () => {
  it("renders skill label and value", () => {
    const skill: Skill = { name: "TypeScript", rating: 90 };

    render(<SkillBar skill={skill} />);

    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText(/90%/)).toBeInTheDocument();
  });
});
