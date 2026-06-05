import React from "react";
import SVG from "./SVG";
export const Email = () => {
  return (
    <a
      href="mailto: charliebarger96@gmail.com"
      aria-label="Email"
      className="flex h-10 w-10 min-[778px]:h-[30px] min-[778px]:w-[30px]"
    >
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="white"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3 7 12 13 21 7" />
      </SVG>
    </a>
  );
};

export default Email;
