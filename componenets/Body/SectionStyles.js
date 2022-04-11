import styled, { css } from "styled-components";

const StyledSection = styled.section`
  padding: 2.5rem 1.5rem;
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
    background: #ff4d59;
    left: 20%;
    top: 2rem;
    position: relative;
    z-index: -1;
  }
`;

export { StyledSectionHeader, StyledSection };
