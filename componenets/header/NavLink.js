import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { StyledNavItem, StyledLink } from "./NavStyles";
export const NavLink = ({ clickHandler, linkTo, children }) => {
  const router = useRouter();
  const active = router.asPath == `/${linkTo}` ? true : false;
  return (
    <StyledNavItem active={active} onClick={() => clickHandler(false)}>
      <Link href={`${linkTo}`} passHref>
        <StyledLink active={active}>{children}</StyledLink>
      </Link>
    </StyledNavItem>
  );
};

export default NavLink;
