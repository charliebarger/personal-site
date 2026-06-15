import React from "react";
import Link from "next/link";

const slideClasses = [
  "animate-nav-slide-1",
  "animate-nav-slide-2",
  "animate-nav-slide-3",
  "animate-nav-slide-4",
];

export const NavLink = ({
  clickHandler,
  linkTo,
  children,
  index,
  animate,
  newTab = false,
}) => {
  return (
    <li
      className={`relative text-muted-text opacity-0 hover:text-hello-blue min-[778px]:top-0.5 min-[778px]:text-base-text min-[778px]:opacity-100 ${
        animate ? slideClasses[index] || "" : ""
      }`}
      onClick={() => clickHandler(false)}
    >
      <Link
        className="border-0 text-muted-text no-underline hover:text-hello-blue min-[778px]:text-base-text min-[778px]:hover:text-hello-blue"
        href={linkTo}
        rel={newTab ? "noreferrer" : undefined}
        target={newTab ? "_blank" : undefined}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
