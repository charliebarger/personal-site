import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { StyledNavItem, StyledLink } from "./NavStyles";
export const NavLink = ({ clickHandler, linkTo, children }) => {
  const router = useRouter();
  return (
    <StyledNavItem
      active={router.asPath == `/${linkTo}` ? true : false}
      onClick={() => clickHandler(false)}
    >
      <Link href={`${linkTo}`} passHref>
        <StyledLink>{children}</StyledLink>
      </Link>
    </StyledNavItem>
  );
};

export default NavLink;
