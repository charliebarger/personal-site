import styled, { css, keyframes } from "styled-components";
const slideIn = keyframes`
  0% {
    opacity:0;
    transform: translateX(-25px);
  }
  100% {
    opacity:1;
    transform: translateX(0px);
  }
`;

const StyledNav = styled.nav`
  padding: 22px;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  color: ${({ theme }) => theme.colors.backgroundColor};
  background: ${({ theme }) => theme.colors.backgroundColor};
  z-index: 1;
  ${({ closed }) =>
    !closed &&
    css`
      left: 100%;
    `}
  ${({ closed }) =>
    closed &&
    css`
      & li:nth-child(1) {
        animation: 0.5s ${slideIn} ease-in-out 0.25s forwards;
      }
      & li:nth-child(2) {
        animation: 0.5s ${slideIn} ease-in-out 0.5s forwards;
      }
      & li:nth-child(3) {
        animation: 0.5s ${slideIn} ease-in-out 0.75s forwards;
      }
      & li:nth-child(4) {
        animation: 0.5s ${slideIn} ease-in-out 1s forwards;
      }
      & div {
        animation: 0.5s ${slideIn} ease-in-out 1.25s forwards;
      }
    `}

    @media ${({ theme }) => theme.breakPoints.tablet} {
    flex-direction: row;
    position: static;
    padding: 0;
    height: auto;
    width: auto;
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.backgroundColor};
    margin-left: auto;
    && li {
      animation: none;
    }
    & div {
      animation: none;
    }
  }
`;

const grow = keyframes`
  from {
    width:0%;
  }

  to {
    width:80%;
  }
`;

const StyledNavItemWrapper = styled.ul`
  list-style: none;
  padding: 0;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-bottom: 32px;
  position: relative;
  @media ${({ theme }) => theme.breakPoints.tablet} {
    flex-direction: row;
    font-size: 1rem;
    margin: 0;
  }
  @media ${({ theme }) => theme.breakPoints.desktop} {
    font-size: 1.25rem;
  }
`;

const StyledNavItem = styled.li`
  color: ${({ theme }) => theme.colors.secondaryFontColor};
  position: relative;
  opacity: 0;
  &:after {
    content: "";
    display: block;
    height: 1px;
    margin: 5px auto;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primaryFontColor};
    &:after {
      content: "";
      display: block;
      height: 1px;
      margin: 5px auto;
      background: ${({ theme }) => theme.colors.underlineColor};
      animation: 0.25s ${grow} ease-in-out forwards;
    }
  }
  @media ${({ theme }) => theme.breakPoints.tablet} {
    transition: none;
    opacity: 1;
    color: ${({ theme }) => theme.colors.primaryFontColor};
    top: 2px;
    &:after {
      margin: 0 auto;
      margin-top: 3px;
    }
    &:hover {
      color: ${({ theme }) => theme.colors.primaryFontColor};
      &:after {
        margin: 0 auto;
        margin-top: 3px;
      }
    }
  }
`;

const StyledLink = styled.a`
  border: none;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondaryFontColor};
  &:hover {
    color: ${({ theme }) => theme.colors.primaryFontColor};
  }
`;

export { StyledNav, StyledNavItemWrapper, StyledNavItem, StyledLink };
