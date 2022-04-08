import React, { useState } from "react";
import Header from "../componenets/Header/Header";
import GlobalStyle from "../globals";
import Head from "next/head";
import { NavContext } from "../utils/NavContext";

function MyApp({ Component, pageProps }) {
  const [closed, setClosed] = useState(false);
  return (
    <NavContext.Provider value={{ closed, setClosed }}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </NavContext.Provider>
  );
}

export default MyApp;
