import React from "react";
import { StlyedSocialLogo } from "./SocialLinksStyles";
export const SVG = ({ children, ...rest }) => {
  return <StlyedSocialLogo {...rest}>{children}</StlyedSocialLogo>;
};

export default SVG;
