import Head from "next/head";
import Image from "next/image";
import Welcome from "../componenets/body/welcome/WelcomeSection";
import {
  StyledContent,
  StyledH1,
  StyledH2,
} from "../componenets/body/welcome/WecomeStyles";
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
