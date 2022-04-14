import React from "react";
import {
  StyledProjectWrapper,
  StyledProjectPreview,
  StyledHeader,
  StyledImage,
  ProjectButton,
  StyledSiteInfo,
  ButtonWrapper,
} from "./ProjectSectionStyles";

export const Project = ({ siteLink, repoLink, imgSrc, siteName, siteInfo }) => {
  return (
    <StyledProjectWrapper>
      <StyledProjectPreview href={siteLink} target="_blank">
        <StyledImage alt="" src={imgSrc}></StyledImage>
      </StyledProjectPreview>
      <StyledHeader>{siteName}</StyledHeader>
      <StyledSiteInfo>{siteInfo}</StyledSiteInfo>
      <ButtonWrapper>
        <ProjectButton color={"#28afb0"} href={siteLink} target="_blank">
          Live App
        </ProjectButton>
        <ProjectButton color={"#ff4d59"} href={repoLink} target="_blank">
          Learn More
        </ProjectButton>
      </ButtonWrapper>
    </StyledProjectWrapper>
  );
};

export default Project;