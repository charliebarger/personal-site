import React from "react";
import Image from "next/image";
import { StyledSocialSlidingWrapper } from "./SocialLinksStyles";
import githubSvg from "../../public/github.svg";
import { SVG } from "./SVG";
import LinkedIn from "./LinkedIn";
import Github from "./Github";
import Email from "./Email";
import Link from "next/link";
export const SocialLinks = () => {
  const icons = [];
  return (
    <StyledSocialSlidingWrapper>
      <LinkedIn />
      <Github />
      <Email />
    </StyledSocialSlidingWrapper>
  );
};

export default SocialLinks;
