import React from "react";
import Image from "next/image";
import Section from "../Section";
import Skill from "./Skill";
export const Skills = () => {
  return (
    <Section id="#skills" headerName={"Skills"}>
      <Skill />
    </Section>
  );
};

export default Skills;
