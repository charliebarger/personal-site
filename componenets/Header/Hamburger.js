import React, { useContext } from "react";
import { NavContext } from "../../utils/NavContext";
import { StyledHamburgerIcon, StyledHamburgerWrapper } from "./HamburgerStyles";
const Hamburger = () => {
  const { closed, setClosed } = useContext(NavContext);
  return (
    <StyledHamburgerWrapper>
      <StyledHamburgerIcon closed={closed} onClick={() => setClosed(!closed)}>
        <div />
      </StyledHamburgerIcon>
    </StyledHamburgerWrapper>
  );
};

export default Hamburger;
