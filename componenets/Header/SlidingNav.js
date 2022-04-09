import { NavContext } from "../../utils/NavContext";
import React, { useContext } from "react";
import {
  StyledSlidingNav,
  StyledNavItemWrapper,
  StyledNavItem,
} from "./SlidingNavStyles";
import SocialLinks from "../Social/SocialLinks";
const SlidingNav = () => {
  const { closed, setClosed } = useContext(NavContext);
  return (
    <StyledSlidingNav closed={closed}>
      <StyledNavItemWrapper>
        <StyledNavItem onClick={() => setClosed(false)}>About</StyledNavItem>
        <StyledNavItem onClick={() => setClosed(false)}>Skills</StyledNavItem>
        <StyledNavItem onClick={() => setClosed(false)}>Projects</StyledNavItem>
        <StyledNavItem onClick={() => setClosed(false)}>Contact</StyledNavItem>
      </StyledNavItemWrapper>
      <SocialLinks />
    </StyledSlidingNav>
  );
};

export default SlidingNav;
