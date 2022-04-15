import styled, { css } from "styled-components";
import Image from "next/image";

const StyledProjectWrapper = styled.div`
  width: 375px;
  padding: 1rem;
  background-color: #fff;
  border-radius: 11px;
  box-shadow: 0 3px 10px ${({ theme }) => theme.colors.secondaryFontColor};
  padding: 22px;
`;

const StyledProjectPreview = styled.a`
  width: 100%;
  display: flex;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transition: 0.5s;
  &:hover {
    transform: scale(0.95);
  }
`;

const StyledHeader = styled.h4`
  font-family: ${({ theme }) => theme.fonts.sansSerifPrimary};
  margin: 16px 0;
  font-size: 1.5rem;
`;

const StyledImage = styled(Image)`
  transition: 0.5s;
`;

const ProjectButton = styled.a`
  border-radius: 4px;
  background: ${({ color, theme }) =>
      color === "underlineColor"
        ? theme.colors.underlineColor
        : theme.colors.accentColor}
    solid 2px;
  text-decoration: none;
  border: ${({ color, theme }) =>
      color === "underlineColor"
        ? theme.colors.underlineColor
        : theme.colors.accentColor}
    solid 2px;
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-size: 1.15rem;
  padding: 0.5rem 1rem;
  transition: 0.5s;
  cursor: pointer;
  box-shadow: 0 3px 10px ${({ theme }) => theme.colors.secondaryFontColor};
  font-family: ${({ theme }) => theme.fonts.sansSerifPrimary};
  position: relative;
  &:after {
    color: ${({ theme }) => theme.colors.backgroundColor};
    content: "»";
    position: absolute;
    opacity: 0;
    top: calc(1.15rem / 2 - 1px);
    right: -20px;
    transition: 0.5s;
  }

  &:hover {
    padding-right: 24px;
    padding-left: 8px;
    background-color: ${({ color, theme }) =>
      color === "underlineColor"
        ? theme.colors.underlineColor
        : theme.colors.accentColor};
    color: ${({ theme }) => theme.colors.backgroundColor};
  }

  &:hover:after {
    opacity: 1;
    right: 10px;
  }
`;

const StyledSiteInfo = styled.p`
  color: ${({ theme }) => theme.colors.secondaryFontColor};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const StyledSectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

export {
  StyledProjectWrapper,
  StyledProjectPreview,
  StyledHeader,
  StyledImage,
  ProjectButton,
  StyledSiteInfo,
  ButtonWrapper,
  StyledSectionWrapper,
};
