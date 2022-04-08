import { NavContext } from "../utils/NavContext";
import React, { useContext } from "react";
import styled, { css } from "styled-components";
import {
  StyledSlidingNav,
  StyledNavItemWrapper,
  StyledNavItem,
} from "./StyledSlidingNav";

const SlidingNav = () => {
  const { closed, setClosed } = useContext(NavContext);
  return (
    <StyledSlidingNav closed={closed} onClick={() => setClosed(false)}>
      <StyledNavItemWrapper>
        <StyledNavItem>About</StyledNavItem>
        <StyledNavItem>Skills</StyledNavItem>
        <StyledNavItem>Projects</StyledNavItem>
        <StyledNavItem>Contact</StyledNavItem>
      </StyledNavItemWrapper>
    </StyledSlidingNav>
  );
};

export default SlidingNav;
