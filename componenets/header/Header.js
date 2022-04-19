import React from "react";
import { StyledHeader, StyledLogo } from "./HeaderStyles";
import Hamburger from "./Hamburger";
import Nav from "./Nav";
export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>Charlie Barger</StyledLogo>
      <Hamburger />
      <Nav></Nav>
    </StyledHeader>
  );
};

export default Header;
