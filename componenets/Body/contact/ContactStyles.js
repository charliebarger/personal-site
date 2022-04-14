import styled, { css } from "styled-components";

const ContactWrapper = styled.div`
  max-width: 450px;
`;

const StyledContactP = styled.p``;

const StyedEmailAdress = styled.a`
  color: black;
  font-family: "Roboto";
  cursor: pointer;
  text-underline-offset: 1px;
  font-weight: 500;
`;

const StyledSocialWrapper = styled.div`
  display: flex;
  margin: 1rem 0;
  gap: 0.4rem;
  min-height: 250px;
`;

const PleaseHireMe = styled.span`
  font-weight: bold;
`;

export {
  ContactWrapper,
  StyledContactP,
  StyedEmailAdress,
  StyledSocialWrapper,
  PleaseHireMe,
};
