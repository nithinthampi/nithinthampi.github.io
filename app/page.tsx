import { AboutSection } from "@/sections/about-section";
import { ContactSection } from "@/sections/contact-section";
import { EducationSection } from "@/sections/education-section";
import { ExperienceSection } from "@/sections/experience-section";
import { HeroSection } from "@/sections/hero-section";
import { ProjectsSection } from "@/sections/projects-section";
import { SkillsSection } from "@/sections/skills-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}
