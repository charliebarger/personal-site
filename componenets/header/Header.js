import React from "react";
import Hamburger from "./Hamburger";
import Nav from "./Nav";
export const Header = () => {
  return (
    <header className="fixed top-0 z-[90] flex w-screen items-center  p-[22px]">
      <div className="[font-family:'Roboto_Slab',serif] text-2xl font-semibold">
        Charlie Barger
      </div>
      <Hamburger />
      <Nav />
    </header>
  );
};

export default Header;
