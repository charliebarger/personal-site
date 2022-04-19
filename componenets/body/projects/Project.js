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
      <StyledProjectPreview
        href={siteLink}
        target="_blank"
        aria-label={`${siteName} Live App`}
      >
        <StyledImage alt="" src={imgSrc}></StyledImage>
      </StyledProjectPreview>
      <StyledHeader>{siteName}</StyledHeader>
      <StyledSiteInfo>{siteInfo}</StyledSiteInfo>
      <ButtonWrapper>
        <ProjectButton
          color={"underlineColor"}
          href={siteLink}
          target="_blank"
          aria-label={`${siteName} Live App`}
          role="link"
        >
          Live App
        </ProjectButton>
        <ProjectButton
          color={"accentColor"}
          href={repoLink}
          target="_blank"
          aria-label={`${siteName} Github Repository`}
          role="link"
        >
          Learn More
        </ProjectButton>
      </ButtonWrapper>
    </StyledProjectWrapper>
  );
};

export default Project;
