import React, { useEffect, useRef } from "react";
import { StyledContent, StyledH1, StyledH2 } from "./WecomeStyles";
export const Welcome = () => {
  return (
    <section id="welcome">
      <StyledContent>
        <StyledH1>Hello, I'm Charlie</StyledH1>
      </StyledContent>
      <StyledH2>Full Stack Web Developer</StyledH2>
    </section>
  );
};

export default Welcome;
