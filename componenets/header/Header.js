import React from "react";
import Hamburger from "./Hamburger";
import Nav from "./Nav";
export const Header = () => {
  return (
    <header className="absolute top-0 left-0 z-[90] flex w-screen items-center p-[22px]">
      <div className="text-2xl font-semibold">Charlie Barger</div>
      <Hamburger />
      <Nav />
    </header>
  );
};

export default Header;
