import React from "react";
import Image from "next/image";
import {
  StyledSkillWrapper,
  Wrap,
  StyledImageWrapper,
  StyledTechName,
  StyledImage,
} from "./SkillsStyles";
import js from "../../../public/skills/javascript.png";
export const Skill = ({ imgSrc, skillName }) => {
  console.log(imgSrc);
  return (
    <StyledSkillWrapper>
      <StyledImageWrapper>
        <StyledImage src={imgSrc} alt="" />
      </StyledImageWrapper>
      <StyledTechName>{skillName}</StyledTechName>
    </StyledSkillWrapper>
  );
};

export default Skill;
