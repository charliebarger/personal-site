import React from "react";
export const SVG = ({ children, ...rest }) => {
  return (
    <svg
      className="h-full w-full fill-[hsla(0deg_0%_0%)] hover:scale-110"
      {...rest}
    >
      {children}
    </svg>
  );
};

export default SVG;
