import styled, { css, keyframes } from "styled-components";

const wave = keyframes`
   0%,100% 
    {
      clip-path: polygon(0 42%, 13% 48%, 26% 55%, 41% 64%, 56% 65%, 69% 58%, 84% 45%, 100% 38%, 100% 100%, 0% 100%);
    }
    50%
    {
      clip-path: polygon(0 63%, 14% 57%, 25% 50%, 40% 42%, 56% 40%, 71% 44%, 84% 50%, 100% 60%, 100% 100%, 0% 100%);
    }
`;

const StyledH1 = styled.h1`
  font-weight: 500;
  margin: 0;
  padding: 1rem;
  padding-bottom: 0.5rem;
  font-family: "Roboto Slab";
  text-align: center;
  font-size: 2rem;
  margin: auto;
  color: transparent;
  -webkit-text-stroke: 1px black;

  &::before {
    content: "Hello, I'm Charlie";
    position: absolute;
    color: #28afb0;
    animation: ${wave} 3s ease-in-out infinite;
  }
  @media ${({ theme }) => theme.breakPoints.mobileLg} {
    font-size: 3rem;
  }

  @media ${({ theme }) => theme.breakPoints.laptop} {
    font-size: 4rem;
  }
`;

const StyledH2 = styled.h2`
  margin: 0;
  font-weight: 300;
  font-family: "Roboto";
  text-align: center;
  font-size: 1rem;
  @media ${({ theme }) => theme.breakPoints.mobileLg} {
    font-size: 1.25rem;
  }

  @media ${({ theme }) => theme.breakPoints.laptop} {
    font-size: 1.5rem;
  }
`;

const StyledContent = styled.div`
  position: relative;
  display: flex;
`;

export { StyledContent, StyledH1, StyledH2 };
