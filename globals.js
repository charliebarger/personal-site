import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size:16px;
    box-sizing: border-box;
    font-family:"Roboto, Arial, Helvetica, sans-serif";
  }
  *, *:before, *:after {
    box-sizing: inherit;
    font-family:"Roboto", Arial, Helvetica, sans-serif;
  }
  }


`;

export default GlobalStyle;
