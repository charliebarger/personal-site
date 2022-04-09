import React, { useState } from "react";
import { Normalize } from "styled-normalize";
import Header from "../componenets/Header/Header";
import GlobalStyles from "../styles/GlobalStyles";
import Head from "next/head";
import { NavContext } from "../utils/NavContext";
import Theme from "../styles/theme";
function MyApp({ Component, pageProps }) {
  const [closed, setClosed] = useState(false);
  return (
    <Theme>
      <NavContext.Provider value={{ closed, setClosed }}>
        <GlobalStyles />
        <Normalize />
        <Header />
        <Component {...pageProps} />
      </NavContext.Provider>
    </Theme>
  );
}

export default MyApp;
