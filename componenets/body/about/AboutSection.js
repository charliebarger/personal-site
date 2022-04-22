import React from "react";
import Image from "next/image";
import headshot from "../../../public/headshot.jpg";
import Section from "../Section";
import {
  StyledAboutInfo,
  StyledAboutWrapper,
  StyledAboutHeadshotWrapper,
  StyledImageWrapper,
  StyledResumeAnchor,
  StyledInfoWrapper,
} from "./AboutStyles";
export const About = () => {
  return (
    <Section sectionId={"about"} headerName={"About"}>
      <StyledAboutWrapper>
        <StyledInfoWrapper>
          <StyledAboutInfo>
            I am a full stack web developer and kids coding instructor based in
            Denver, CO!
          </StyledAboutInfo>
          <StyledAboutInfo>
            With an eye for detail and a background in the visual arts, I aim to
            create eloquent, responsive, and accessible websites that provide an
            exceptional user experience.
          </StyledAboutInfo>
          <StyledResumeAnchor
            downlaod
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Get My Resume
          </StyledResumeAnchor>
        </StyledInfoWrapper>
        <StyledAboutHeadshotWrapper>
          <StyledImageWrapper>
            <Image src={headshot} alt="Headshot"></Image>
          </StyledImageWrapper>
        </StyledAboutHeadshotWrapper>
      </StyledAboutWrapper>
    </Section>
  );
};

export default About;
