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

const StyledSlidingNav = styled.nav`
  padding: 2rem;
  gap: 1rem;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: white;
  color: white;
  z-index: 1;
  & li:nth-child(1) {
  }
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
    `}
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
`;
const StyledNavItem = styled.li`
  color: grey;
  position: relative;
  opacity: 0;
  transition: 0.25s;
  &:after {
    content: "";
    display: block;
    height: 1px;
    margin: 5px auto;
  }
  &:hover {
    color: black;

    &:after {
      content: "";
      display: block;
      height: 1px;
      margin: 5px auto;
      background: red;
      animation: 0.25s ${grow} ease-in-out forwards;
    }
  }
`;

export { StyledSlidingNav, StyledNavItemWrapper, StyledNavItem };
