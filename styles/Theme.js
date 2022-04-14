import React from "react";
import { ThemeProvider } from "styled-components";

const minWidth = (number) => {
  return `only screen and (min-width: ${number}px)`;
};

const theme = {
  breakPoints: {
    mobileSm: minWidth(420),
    mobileLg: minWidth(500),
    tablet: minWidth(768),
    laptop: minWidth(1024),
    desktop: minWidth(1200),
  },
  colors: {
    primaryFontColor: "hsla(0deg 0% 0%)",
    secondaryFontColor: "hsla(0deg 0% 0% / 60%)",
    underlineColor: "hsl(356deg 100% 65%)",
    accentColor: "hsl(180deg 63% 42%)",
    backgroundColor: "hsla(360deg, 100%, 100%, 1)",
  },
  fonts: {
    serifPrimary: "'Roboto Slab', serif;",
    sansSerifPrimary: "'Roboto', sans-serif",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
