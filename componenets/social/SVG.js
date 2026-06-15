import React from "react";
export const SVG = ({ children, ...rest }) => {
  return (
    <svg
      className="h-full w-full fill-base-text hover:scale-110"
      {...rest}
    >
      {children}
    </svg>
  );
};

export default SVG;
