import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    font-size:16px;
    box-sizing: border-box;
    font-family:${({ theme }) => theme.fonts.serifPrimary};
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  }

  body{
    padding:0;
    margin:0;
    position:relative;
    min-height:100vh;
  }
`;

export default GlobalStyles;
