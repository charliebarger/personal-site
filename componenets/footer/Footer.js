import React from "react";
import { StyledFooter, StyledCopy, StyledArrowWrapper } from "./FooterStyles";
export const Footer = () => {
  return (
    <StyledFooter>
      <StyledArrowWrapper href="#top" aria-label="Go to top of page">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 24 24"
        >
          <path d="M17.707 10.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM17.707 17.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
        </svg>
      </StyledArrowWrapper>
      <StyledCopy>© 2022 - Charlie Barger</StyledCopy>
    </StyledFooter>
  );
};

export default Footer;
