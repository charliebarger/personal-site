import styled, { css } from "styled-components";

const StyledHamburgerWrapper = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  margin-left: auto;
  positition: relative;
  z-index: 3;
  @media ${({ theme }) => theme.breakPoints.tablet} {
    display: none;
  }
`;

const StyledHamburgerIcon = styled.div`
  width: 30px;
  margin-left: auto;
  display: block;
  positition:relative;
  z-index:3;
  div,
  &:after,
  &:before {
    background: black;
    content: "";
    display: block;
    height: 2px;
    width: 30px;
    margin: 6px 0px;
    transition: all 0.5s;
  }
  div{
    margin:auto;
    width:20px;
  }
    ${({ closed }) =>
      closed &&
      css`
        div {
          transform: scale(0);
        }
        &:before {
          transform: translateY(8px) rotate(135deg);
        }
        &:after {
          transform: translateY(-8px) rotate(-135deg);
        }
        div,
        &:after,
        &:before {
          transition: all 0.5s;
          background: grey;
        }
      `}

    ${({ slide }) =>
      slide &&
      css`
        position: absolute;
      `}
  }
`;

export { StyledHamburgerIcon, StyledHamburgerWrapper };
