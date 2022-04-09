import styled, { css } from "styled-components";

const StlyedSocialLink = styled.svg`
  fill: black;
  height: 40px;
  width: 40px;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledSocialSlidingWrapper = styled.div`
  opacity: 0;
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
`;

export { StlyedSocialLink, StyledSocialSlidingWrapper };
