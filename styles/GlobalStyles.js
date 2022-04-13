import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
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
    position:${({ closed }) => (!closed ? "relative" : "fixed")};;
    min-height:100vh;
    max-width: 100%;
    overflow-x: hidden;

  }

  main{
    padding:1rem 2rem;
  }

  #about {
  scroll-margin-top: 50px;
}
`;

export default GlobalStyles;
