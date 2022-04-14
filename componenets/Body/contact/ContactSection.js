import React from "react";
import Section from "../Section";
import GitHub from "../../social/GitHub";
import LinkedIn from "../../social/LinkedIn";
import {
  ContactWrapper,
  StyledContactP,
  StyedEmailAdress,
  StyledSocialWrapper,
  PleaseHireMe,
} from "./ContactStyles";
export const ContactSection = () => {
  return (
    <Section sectionId={"contact"} headerName={"Contact"}>
      <ContactWrapper>
        <StyledContactP>
          <PleaseHireMe>
            I am currently looking for new opportunities
          </PleaseHireMe>
          , and my inbox is always open! Have a question, want to build
          something together, or just want to connect? Don’t hesitate to reach
          out and i’ll get back to you shortly.
        </StyledContactP>
        <StyedEmailAdress href="mailto: me@charliebarger.dev">
          me@charliebarger.dev
        </StyedEmailAdress>
        <StyledSocialWrapper>
          <GitHub small />
          <LinkedIn small />
        </StyledSocialWrapper>
      </ContactWrapper>
    </Section>
  );
};

export default ContactSection;
