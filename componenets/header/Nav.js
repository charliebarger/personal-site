import { NavContext } from "../../utils/NavContext";
import React, { useContext } from "react";
import NavLink from "./NavLink";
import SocialLinks from "../social/SocialLinks";
const Nav = () => {
  const { closed, setClosed } = useContext(NavContext);
  return (
    <nav
      className={`absolute top-0 bottom-0 z-[1] flex h-screen w-screen flex-col items-center justify-center p-[22px] text-white min-[778px]:static min-[778px]:ml-auto min-[778px]:h-auto min-[778px]:w-auto min-[778px]:flex-row min-[778px]:p-0 ${
        closed ? "left-0" : "left-full"
      }`}
    >
      <ul className="relative mb-8 flex cursor-pointer list-none flex-col items-center gap-8 p-0 text-2xl font-extralight min-[778px]:m-0 min-[778px]:flex-row min-[778px]:text-base min-[1200px]:text-xl">
        <NavLink
          linkTo={"#about"}
          clickHandler={setClosed}
          index={0}
          animate={closed}
        >
          About
        </NavLink>
        <NavLink
          linkTo={"#skills"}
          clickHandler={setClosed}
          index={1}
          animate={closed}
        >
          Skills
        </NavLink>
        <NavLink
          linkTo={"#projects"}
          clickHandler={setClosed}
          index={2}
          animate={closed}
        >
          Projects
        </NavLink>
        <NavLink
          linkTo={"#contact"}
          clickHandler={setClosed}
          index={3}
          animate={closed}
        >
          Contact
        </NavLink>
      </ul>
      <SocialLinks animate={closed} />
    </nav>
  );
};

export default Nav;
