import React from "react";
import Welcome from "../componenets/body/welcome/WelcomeSection";
import About from "../componenets/body/about/AboutSection";
import Skills from "../componenets/body/skills/SkillsSection";
import ContactSection from "../componenets/body/contact/ContactSection";
import ProjectSection from "../componenets/body/projects/ProjectSection";
export default function Home() {
  return (
    <main>
      <Welcome />
      <About />
      <Skills />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
