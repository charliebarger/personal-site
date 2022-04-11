import React from "react";
import Image from "next/image";
import headshot from "../../../public/headshot.png";
import { SectionHeader } from "../Section";
import Section from "../Section";
import {
  StyledH1,
  StyledH2,
  StyledAboutInfo,
  StyledAboutWrapper,
  StyledAboutHeadshotWrapper,
  StyledImageWrapper,
} from "./AboutStyles";
export const About = () => {
  return (
    <Section id="#about" headerName={"About"}>
      <StyledAboutWrapper>
        <StyledAboutInfo>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </StyledAboutInfo>
        <StyledAboutHeadshotWrapper>
          <StyledImageWrapper>
            <Image
              src={headshot}
              alt="Headshot"
              style={{ boxShadow: "-30px 30px 0 rgb(208, 0, 0)" }}
            ></Image>
          </StyledImageWrapper>
        </StyledAboutHeadshotWrapper>
      </StyledAboutWrapper>
    </Section>
  );
};

export default About;
