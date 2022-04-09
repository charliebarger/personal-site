import React from "react";
import { StlyedSocialLink } from "./SocialLinksStyles";
export const SVG = ({ children, ...rest }) => {
  return <StlyedSocialLink {...rest}>{children}</StlyedSocialLink>;
};

export default SVG;
