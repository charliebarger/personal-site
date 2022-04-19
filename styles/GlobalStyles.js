import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    font-size:16px;
    box-sizing: border-box;
    font-family:${({ theme }) => theme.fonts.serifPrimary};
    overflow-x: hidden;
    max-width: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  }

  body{
    padding:0;
    margin:0;
    overflow:${({ closed }) => (!closed ? "" : "hidden")};
    min-height:100vh;
    max-width: 100%;
    overflow-x: hidden;
    max-width: 100%;
  }

  p{
    font-weight:300;
    line-height:initial;
  }

  li{
    list-style:none;
  }

  main{
    padding:1rem 1.5rem 0 1.5rem;
    @media ${({ theme }) => theme.breakPoints.mobileLg} {
      padding:1rem 2rem 0 2rem;
    }
    @media ${({ theme }) => theme.breakPoints.tablet} {
      padding:1rem 3rem 0 3rem;
    }
  }

  #about, #welcome, #skills, #projects, #contact {
  scroll-margin-top: 75px;
}
`;

export default GlobalStyles;
