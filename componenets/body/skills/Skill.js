import React from "react";
import {
  StyledSkillWrapper,
  StyledImageWrapper,
  StyledTechName,
  StyledImage,
} from "./SkillsStyles";
export const Skill = ({ imgSrc, skillName }) => {
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
