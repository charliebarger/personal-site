import styled, { css } from "styled-components";

const StyledSection = styled.section`
  padding: 2.5rem 1.5rem;
  max-width: 955px;
  margin: auto;
`;

const StyledSectionHeader = styled.h3`
  font-size: 1.75rem;
  position: relative;
  margin: 0;
  display: inline-block;
  &:before {
    content: "";
    width: 100%;
    height: 0.75rem;
    display: block;
    background: ${({ theme }) => theme.colors.underlineColor};
    left: 20%;
    top: 2rem;
    position: relative;
    z-index: -1;
  }

  @media ${({ theme }) => theme.breakPoints.laptop} {
    font-size: 2.25rem;
    &:before {
      top: 2.5rem;
      height: 1rem;
    }
  }
`;

const StyledSectionBody = styled.div`
  padding: 1rem 0;
`;

export { StyledSectionHeader, StyledSection, StyledSectionBody };
