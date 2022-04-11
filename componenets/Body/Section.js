import React from "react";
import { StyledSection, StyledSectionHeader } from "./SectionStyles";
export const Section = ({ children, headerName }) => {
  return (
    <StyledSection>
      <StyledSectionHeader>{headerName}</StyledSectionHeader>
      {children}
    </StyledSection>
  );
};

export default Section;
