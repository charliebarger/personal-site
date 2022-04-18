import react, { useEffect } from "react";
import Welcome from "../componenets/body/welcome/WelcomeSection";
import About from "../componenets/body/about/AboutSection";
import Skills from "../componenets/body/skills/SkillsSection";
import ContactSection from "../componenets/body/contact/ContactSection";
import ProjectSection from "../componenets/body/projects/ProjectSection";
export default function Home() {
  useEffect(() => {
    const headings = document.querySelectorAll("section[id]");
    console.log(headings);
    document.addEventListener("scroll", (e) => {
      headings.forEach((ha) => {
        const rect = ha.getBoundingClientRect();
        if (rect.top > 0 && rect.top < 100) {
          const location = window.location.toString().split("#")[0];
          history.replaceState(null, null, location + "#" + ha.id);
        }
      });
    });
  }, []);
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
