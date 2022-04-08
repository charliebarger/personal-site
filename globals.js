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

  body{
    padding:0;
    margin:0;
    position:relative;
    min-height:100vh;
  }

`;

export default GlobalStyle;
