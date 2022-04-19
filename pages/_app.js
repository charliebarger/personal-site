import React, { useState } from "react";
import { Normalize } from "styled-normalize";
import Header from "../componenets/header/Header";
import GlobalStyles from "../styles/GlobalStyles";
import { NavContext } from "../utils/NavContext";
import Theme from "../styles/Theme";
import Footer from "../componenets/footer/Footer";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  const [closed, setClosed] = useState(false);
  return (
    <Theme>
      <Head>
        <title>Charles Barger | Full Stack Web Developer</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="description" content="need to fill content"></meta>
      </Head>
      <div style={{ overflowX: "hidden", position: "relative" }}>
        <NavContext.Provider value={{ closed, setClosed }}>
          <GlobalStyles closed={closed} />
          <Normalize />
          <div id="top" />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </NavContext.Provider>
      </div>
    </Theme>
  );
}

export default MyApp;
