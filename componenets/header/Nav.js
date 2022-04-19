import { NavContext } from "../../utils/NavContext";
import React, { useContext } from "react";
import NavLink from "./NavLink";
import { StyledNav, StyledNavItemWrapper } from "./NavStyles";
import SocialLinks from "../social/SocialLinks";
const Nav = () => {
  const { closed, setClosed } = useContext(NavContext);
  return (
    <StyledNav closed={closed}>
      <StyledNavItemWrapper>
        <NavLink linkTo={"#about"} clickHandler={setClosed}>
          About
        </NavLink>
        <NavLink linkTo={"#skills"} clickHandler={setClosed}>
          Skills
        </NavLink>
        <NavLink linkTo={"#projects"} clickHandler={setClosed}>
          Projects
        </NavLink>
        <NavLink linkTo={"#contact"} clickHandler={setClosed}>
          Contact
        </NavLink>
      </StyledNavItemWrapper>
      <SocialLinks />
    </StyledNav>
  );
};

export default Nav;
