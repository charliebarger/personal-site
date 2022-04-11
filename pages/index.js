import Head from "next/head";
import Image from "next/image";
import { StyledH1, StyledH2 } from "../componenets/Body/about/AboutStyles";
import About from "../componenets/Body/about/About";
import Skills from "../componenets/Body/skills/Skills";
export default function Home() {
  return (
    <main>
      <div className="content">
        <StyledH1>Hello, I'm Charlie</StyledH1>
      </div>
      <StyledH2>Full Stack Developer</StyledH2>
      <About />
      <Skills />
    </main>
  );
}
