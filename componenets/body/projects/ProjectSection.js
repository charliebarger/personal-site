import React from "react";
import Section from "../Section";
import devImg from "../../../public/projects/dev-spot.png";
import waldoImg from "../../../public/projects/waldo.png";
import cactusImg from "../../../public/projects/cactus.png";
import memberImg from "../../../public/projects/members.png";
import southParkImg from "../../../public/projects/south-park.png";
import toDoImg from "../../../public/projects/to-do.png";
import Project from "./Project";
import { StyledFlexWrapper } from "./ProjectSectionStyles";
export const ProjectSection = () => {
  return (
    <Section sectionId={"projects"} headerName={"Projects"}>
      <StyledFlexWrapper>
        <Project
          siteInfo={
            "Blog site that allows users to create articles, save drafts, and read and comment on published articles. Built with React, Express, MongoDB, and Node."
          }
          repoLink={"https://github.com/charliebarger/dev-spot-client"}
          siteLink={"https://charliebarger.github.io/dev-spot-client/"}
          siteName={"Dev Spot"}
          imgSrc={devImg}
        />
        <Project
          siteInfo={
            "Photo-tagging game, where a stopwatch times the user as they attempt to locate all of the required characters. Built with React and Firebase. "
          }
          repoLink={"https://github.com/charliebarger/where-is-waldo"}
          siteLink={"https://where-s-waldo-8496c.web.app/#/"}
          siteName={"Where's Waldo"}
          imgSrc={waldoImg}
        />
        <Project
          siteInfo={
            "Message board that changes from a hardware store into an exclusive online speakeasy after the user logs in. Made with Express, MongoDB, Node, and EJS."
          }
          repoLink={"https://github.com/charliebarger/speakeasy"}
          siteLink={"https://morning-thicket-24228.herokuapp.com/"}
          siteName={"The Speakeasy"}
          imgSrc={memberImg}
        />
        <Project
          siteInfo={
            "Memory game where a user tries to remember to only select characters that they have not selected before. Made with React."
          }
          repoLink={"https://github.com/charliebarger/memory-game"}
          siteLink={"https://charliebarger.github.io/memory-game/"}
          siteName={"South Park Memory Game"}
          imgSrc={southParkImg}
        />
        <Project
          siteInfo={
            "Faux E-Commerce site that showcases inventory and has full shopping cart capabilities. Made with React and React Router."
          }
          repoLink={"https://github.com/charliebarger/mini-cactus-shop"}
          siteLink={"https://charliebarger.github.io/mini-cactus-shop/#/"}
          siteName={"Mini Cactus Market"}
          imgSrc={cactusImg}
        />
        <Project
          siteInfo={
            "Productivity app with different folders that contain to-do lists. User Data is stored in local storage. Made with JavaScript, HTML, and CSS"
          }
          repoLink={"https://github.com/charliebarger/To-Do-List"}
          siteLink={"https://charliebarger.github.io/To-Do-List/"}
          siteName={"To Do List"}
          imgSrc={toDoImg}
        />
      </StyledFlexWrapper>
    </Section>
  );
};

export default ProjectSection;
