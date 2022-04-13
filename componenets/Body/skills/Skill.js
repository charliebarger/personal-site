import React from "react";
import Image from "next/image";
import {
  SkillWrapper,
  Wrap,
  ImageWrapper,
  TechName,
  StyledImage,
} from "./SkillsStyles";
import js from "../../../public/skills/javascript.png";
export const Skill = ({ imgSrc, skillName }) => {
  console.log(imgSrc);
  return (
    <SkillWrapper>
      <ImageWrapper>
        <StyledImage src={imgSrc} alt="" />
      </ImageWrapper>
      <TechName>{skillName}</TechName>
    </SkillWrapper>
  );
};

export default Skill;
