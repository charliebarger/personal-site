import React from "react";

export const SVG = ({ children, ...rest }) => {
  return (
    <svg {...rest} style={{ height: "40px", width: "40px" }}>
      {children}
    </svg>
  );
};

export default SVG;
