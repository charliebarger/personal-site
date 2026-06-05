import React from "react";
import Link from "next/link";

const slideClasses = [
  "animate-nav-slide-1",
  "animate-nav-slide-2",
  "animate-nav-slide-3",
  "animate-nav-slide-4",
];

export const NavLink = ({ clickHandler, linkTo, children, index, animate }) => {
  return (
    <li
      className={`relative text-[hsla(0deg_0%_0%_/_60%)] opacity-0 after:mx-auto after:mt-[5px] after:block after:h-px after:content-[''] hover:text-[hsla(0deg_0%_0%)] hover:after:bg-[hsl(356deg_100%_65%)] hover:after:[animation:nav-grow_0.25s_ease-in-out_forwards] min-[778px]:top-0.5 min-[778px]:text-[hsla(0deg_0%_0%)] min-[778px]:opacity-100 min-[778px]:after:mt-[3px] min-[778px]:hover:after:mt-[3px] ${
        animate ? slideClasses[index] || "" : ""
      }`}
      onClick={() => clickHandler(false)}
    >
      <Link
        className="border-0 text-[hsla(0deg_0%_0%_/_60%)] no-underline hover:text-[hsla(0deg_0%_0%)]"
        href={linkTo}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
