import styled, { css } from "styled-components";
import Image from "next/image";

const StyledProjectWrapper = styled.div`
  width: 375px;
  padding: 1rem;
  background-color: #fff;
  border-radius: 11px;
  box-shadow: 0 3px 10px grey;
  padding: 22px;
  margin: 10px;
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
  font-family: "Roboto";
  margin: 16px 0;
  font-size: 1.5rem;
`;

const StyledImage = styled(Image)`
  transition: 0.5s;
`;

const ProjectButton = styled.a`
  border-radius: 4px;
  background: white;
  text-decoration: none;
  border: ${(props) => props.color} solid 2px;
  color: black;
  font-size: 1.15rem;
  padding: 0.5rem 1rem;
  transition: 0.5s;
  cursor: pointer;
  box-shadow: 0 3px 10px grey;
  font-family: "Roboto";
  position: relative;
  &:after {
    color: white;
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
    background-color: ${(props) => props.color};
    color: white;
  }

  &:hover:after {
    opacity: 1;
    right: 10px;
  }
`;

const StyledSiteInfo = styled.p``;

const ButtonWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const StyledSectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
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
