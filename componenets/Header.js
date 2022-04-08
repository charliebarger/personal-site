import Link from "next/link";
import React from "react";
import { StyledHeader, StyledLogo } from "./HeaderStyles";
import Hamburger from "./Hamburger";
import SlidingNav from "./SlidingNav";
export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>Charlie Barger</StyledLogo>
      <Hamburger />
      <SlidingNav></SlidingNav>
    </StyledHeader>
  );
};

export default Header;
