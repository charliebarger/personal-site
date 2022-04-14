import styled, { css } from "styled-components";

const ContactWrapper = styled.div`
  max-width: 450px;
`;

const StyledContactP = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
`;

const StyedEmailAdress = styled.a`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fonts.sansSerifPrimary};
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
