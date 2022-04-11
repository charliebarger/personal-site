import React from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import js from "../../../public/skills/javascript.png";
const SkillWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    padding: 5px;
    background: linear-gradient(45deg, #ff4d59, #28aeb0);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

const Wrap = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-wrap: wrap;
`;

const IMAGEWrapper = styled.div`
  width: 60px;
  display: flex;
`;

const TechName = styled.span``;

export const Skill = () => {
  return (
    <Wrap>
      <SkillWrapper>
        <IMAGEWrapper>
          <Image src={js} />
        </IMAGEWrapper>
        <TechName>JavaScript</TechName>
      </SkillWrapper>
    </Wrap>
  );
};

export default Skill;
