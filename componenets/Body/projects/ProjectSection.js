import React from "react";
import Section from "../Section";
import devImg from "../../../public/projects/dev-spot.png";
import waldoImg from "../../../public/projects/waldo.png";
import cactusImg from "../../../public/projects/cactus.png";
import memberImg from "../../../public/projects/members.png";
import southParkImg from "../../../public/projects/south-park.png";
import toDoImg from "../../../public/projects/to-do.png";
import Project from "./Project";
import { StyledSectionWrapper } from "./ProjectSectionStyles";
export const ProjectSection = () => {
  return (
    <Section id="#skills" headerName={"Projects"}>
      <StyledSectionWrapper>
        <Project
          siteInfo={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s."
          }
          repoLink={"https://github.com/charliebarger/Dev-Spot-Client1"}
          siteLink={"https://charliebarger.github.io/Dev-Spot-Client1/"}
          siteName={"Dev Spot"}
          imgSrc={devImg}
        />
        <Project
          siteInfo={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s."
          }
          repoLink={"https://github.com/charliebarger/where-is-waldo"}
          siteLink={"https://where-s-waldo-8496c.web.app/#/"}
          siteName={"Where's Waldo"}
          imgSrc={waldoImg}
        />
        <Project
          siteInfo={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s."
          }
          repoLink={"https://github.com/charliebarger/members-only"}
          siteLink={"https://morning-thicket-24228.herokuapp.com/"}
          siteName={"Members Only"}
          imgSrc={memberImg}
        />
        <Project
          siteInfo={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s."
          }
          repoLink={"https://github.com/charliebarger/memory-game"}
          siteLink={"https://charliebarger.github.io/memory-game/"}
          siteName={"South Park Memory Game"}
          imgSrc={southParkImg}
        />
        <Project
          siteInfo={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s."
          }
          repoLink={"https://github.com/charliebarger/mini-cactus-shop"}
          siteLink={"https://charliebarger.github.io/mini-cactus-shop/#/"}
          siteName={"Mini Cactus Market"}
          imgSrc={cactusImg}
        />
        <Project
          siteInfo={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s."
          }
          repoLink={"https://github.com/charliebarger/To-Do-List"}
          siteLink={"https://charliebarger.github.io/To-Do-List/"}
          siteName={"To Do List"}
          imgSrc={toDoImg}
        />
      </StyledSectionWrapper>
    </Section>
  );
};

export default ProjectSection;
