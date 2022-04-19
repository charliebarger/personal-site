import React from "react";
import Section from "../Section";
import Skill from "./Skill";
import js from "../../../public/skills/javascript.png";
import css from "../../../public/skills/css.png";
import html from "../../../public/skills/html.png";
import react from "../../../public/skills/react.png";
import node from "../../../public/skills/node.png";
import git from "../../../public/skills/git.png";
import bootstrap from "../../../public/skills/bootstrap.png";
import express from "../../../public/skills/express.png";
import mongoDb from "../../../public/skills/mongoDb.png";
import next from "../../../public/skills/next.webp";
import { StyledFlexWrapper } from "./SkillsStyles";
export const Skills = () => {
  return (
    <Section sectionId={"skills"} headerName={"Skills"}>
      <StyledFlexWrapper>
        <Skill imgSrc={js} skillName="JavaScript" />
        <Skill imgSrc={css} skillName="CSS" />
        <Skill imgSrc={html} skillName="HTML" />
        <Skill imgSrc={react} skillName="React" />
        <Skill imgSrc={node} skillName="Node.js" />
        <Skill imgSrc={git} skillName="Git" />
        <Skill imgSrc={bootstrap} skillName="Bootstrap" />
        <Skill imgSrc={express} skillName="Express.js" />
        <Skill imgSrc={mongoDb} skillName="MongoDB" />
        <Skill imgSrc={next} skillName="Next.js" />
      </StyledFlexWrapper>
    </Section>
  );
};

export default Skills;
