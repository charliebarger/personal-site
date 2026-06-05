import React from "react";
import LinkedIn from "./LinkedIn";
import GitHub from "./GitHub";
import Email from "./Email";
export const SocialLinks = ({ animate = false }) => {
  return (
    <div
      className={`mb-8 flex gap-2 opacity-0 min-[778px]:mb-0 min-[778px]:ml-8 min-[778px]:gap-0 min-[778px]:opacity-100 ${
        animate ? "animate-nav-slide-social" : ""
      }`}
    >
      <LinkedIn />
      <GitHub />
      <Email />
    </div>
  );
};

export default SocialLinks;
