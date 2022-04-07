import Link from "next/link";
import React from "react";
import { StyledLogo } from "./HeaderStyles";
export const Header = () => {
  return (
    <header>
      <StyledLogo>Charlie Barger</StyledLogo>
    </header>
  );
};

export default Header;
