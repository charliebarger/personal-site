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
    position:${({ closed }) => (!closed ? "relative" : "fixed")};;
    min-height:100vh;
    max-width: 100%;
    overflow-x: hidden;

  }

  main{
    padding:1rem 2rem;
  }


.content {
	position: relative;
  display:flex;
}

.content h1 {
	color: black;
}

.content h1:nth-child(1) {
	color: transparent;
	-webkit-text-stroke: 1px black;
}

@keyframes animate {
	0%,
	100% {
		clip-path: polygon(
			0% 45%,
			16% 44%,
			33% 50%,
			54% 60%,
			70% 61%,
			84% 59%,
			100% 52%,
			100% 100%,
			0% 100%
		);
	}

	50% {
		clip-path: polygon(
			0% 60%,
			15% 65%,
			34% 66%,
			51% 62%,
			67% 50%,
			84% 45%,
			100% 46%,
			100% 100%,
			0% 100%
		);
	}
}

.content {
    position: relative;
     h1 {
      font: {
        size: 8rem;
        weight: 900;
      }
      color: white;
         &::before {
          content: "Hello, I'm Charlie";
          position: absolute;
          color: #28AFB0;
          animation: wave 3s ease-in-out infinite;
         }
       
    }
  }

  @keyframes wave {
    0%,100% 
    {
      clip-path: polygon(0 42%, 13% 48%, 26% 55%, 41% 64%, 56% 65%, 69% 58%, 84% 45%, 100% 38%, 100% 100%, 0% 100%);
    }
    50%
    {
      clip-path: polygon(0 63%, 14% 57%, 25% 50%, 40% 42%, 56% 40%, 71% 44%, 84% 50%, 100% 60%, 100% 100%, 0% 100%);
    }
  }
}

`;

export default GlobalStyles;
