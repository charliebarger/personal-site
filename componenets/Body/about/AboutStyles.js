import styled, { css } from "styled-components";

const StyledH1 = styled.h1`
  font-weight: 500;
  margin: 0;
  padding: 1rem;
  padding-bottom: 0.5rem;
  font-family: "Roboto Slab";
  text-align: center;
  font-size: 3rem;
  margin: auto;
`;

const StyledH2 = styled.h2`
  margin: 0;
  font-weight: 300;
  font-family: "Roboto";
  text-align: center;
  font-size: 1rem;
`;

const StyledAboutWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: auto;
`;

const StyledAboutInfo = styled.p`
  flex: 1;
  min-width: 300px;
  font-size: 1rem;
  @media ${({ theme }) => theme.breakPoints.laptop} {
    font-size: 1.15rem;
  }
`;

const StyledAboutHeadshotWrapper = styled.div`
  flex: 1;
  min-width: 300px;
`;

const StyledImageWrapper = styled.div`
  width: 75%;
  max-width: 350px;
  margin: auto;
  display: flex;
  box-shadow: 30px 30px 0 rgb(40 174 176);
`;

export {
  StyledH1,
  StyledH2,
  StyledAboutWrapper,
  StyledAboutInfo,
  StyledAboutHeadshotWrapper,
  StyledImageWrapper,
};
