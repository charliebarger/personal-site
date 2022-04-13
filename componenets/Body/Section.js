import React from "react";
import {
  StyledSection,
  StyledSectionHeader,
  StyledSectionBody,
} from "./SectionStyles";
export const Section = ({ children, headerName, sectionId }) => {
  return (
    <StyledSection id={sectionId}>
      <StyledSectionHeader>{headerName}</StyledSectionHeader>
      <StyledSectionBody> {children}</StyledSectionBody>
    </StyledSection>
  );
};

export default Section;
