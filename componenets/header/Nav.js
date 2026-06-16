import { NavContext } from "../../utils/NavContext";
import React, { useContext } from "react";
import NavLink from "./NavLink";
const Nav = () => {
  const { closed, setClosed } = useContext(NavContext);
  return (
    <nav
      className={`absolute top-0 bottom-0 z-[1] flex h-screen w-screen flex-col items-start justify-center p-[22px] text-white min-[778px]:static min-[778px]:ml-auto min-[778px]:h-auto min-[778px]:w-auto min-[778px]:flex-row min-[778px]:items-center min-[778px]:p-0 ${
        closed ? "left-0" : "left-full"
      }`}
    >
      <ul className="relative mb-8 flex cursor-pointer list-none flex-col items-start gap-8 p-0 font-sans text-2xl font-normal min-[778px]:m-0 min-[778px]:flex-row min-[778px]:items-center min-[778px]:text-base min-[1200px]:text-xl">
        <NavLink
          linkTo={"#welcome"}
          clickHandler={setClosed}
          index={0}
          animate={closed}
        >
          Home
        </NavLink>
        <NavLink
          linkTo={"#work"}
          clickHandler={setClosed}
          index={1}
          animate={closed}
        >
          Work
        </NavLink>
        <NavLink
          linkTo={"/resume.pdf"}
          clickHandler={setClosed}
          index={2}
          animate={closed}
          newTab
        >
          Resume
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
