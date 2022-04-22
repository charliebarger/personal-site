import styled from "styled-components";

const StyledH1 = styled.h1`
  font-weight: 500;
  margin: 0;
  padding: 1rem;
  padding-bottom: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.serifPrimary};
  text-align: center;
  font-size: 3rem;
  margin: auto;
`;

const StyledH2 = styled.h2`
  margin: 0;
  font-weight: 300;
  font-family: ${({ theme }) => theme.fonts.sansSerifPrimary};
  text-align: center;
  font-size: 1rem;
`;

const StyledAboutWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: auto;
`;

const StyledInfoWrapper = styled.div`
  flex: 1;
`;

const StyledAboutInfo = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  min-width: 300px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondaryFontColor};
  @media ${({ theme }) => theme.breakPoints.laptop} {
    font-size: 1.25rem;
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
  margin-bottom: 30px;
  display: flex;
  box-shadow: 30px 30px 0 ${({ theme }) => theme.colors.accentColor};
`;

const StyledResumeAnchor = styled.a`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fonts.sansSerifPrimary};
  cursor: pointer;
  text-underline-offset: 1px;
  font-weight: 600;
`;

export {
  StyledH1,
  StyledH2,
  StyledAboutWrapper,
  StyledAboutInfo,
  StyledAboutHeadshotWrapper,
  StyledImageWrapper,
  StyledResumeAnchor,
  StyledInfoWrapper,
};
