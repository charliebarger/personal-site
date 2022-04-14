import styled, { css } from "styled-components";

const StyledSocialLink = styled.a`
  display: flex;
  height: 40px;
  width: 40px;
  ${({ small }) =>
    small &&
    css`
      height: 30px;
      width: 30px;
    `}
  @media ${({ theme }) => theme.breakPoints.tablet} {
    height: 30px;
    width: 30px;
  }
`;

const StlyedSocialLogo = styled.svg`
  fill: black;
  height: 100%;
  width: 100%;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledSocialWrapper = styled.div`
  opacity: 0;
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
  @media ${({ theme }) => theme.breakPoints.tablet} {
    opacity: 1;
    margin-bottom: 0;
    margin-left: 32px;
    gap: 0;
  }
`;

export { StlyedSocialLogo, StyledSocialWrapper, StyledSocialLink };
