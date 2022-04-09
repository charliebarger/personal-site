import React from "react";
import { StyledSocialWrapper } from "./SocialLinksStyles";
import LinkedIn from "./LinkedIn";
import GitHub from "./GitHub";
import Email from "./Email";
export const SocialLinks = () => {
  return (
    <StyledSocialWrapper>
      <LinkedIn />
      <GitHub />
      <Email />
    </StyledSocialWrapper>
  );
};

export default SocialLinks;
