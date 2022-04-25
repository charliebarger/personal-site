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
        <title>Charlie Barger | Full Stack Web Developer</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          name="description"
          content="Full stack web developer with an eye for detail and a background in the visual arts. Well-versed in both back end and front end development with the ability to quickly learn new technologies as they arise."
        ></meta>
        <meta
          name="title"
          property="og:title"
          content="Charlie Barger | Full Stack Web Developer"
        />
        <meta property="og:type" content="Website" />
        <meta
          name="image"
          property="og:image"
          content="https://live.staticflickr.com/65535/52030583960_b22e377590_z.jpg"
        />
        <meta
          name="description"
          property="og:description"
          content="Personal Site"
        />
        <meta name="author" content="Charles Barger" />
      </Head>
      <div style={{ overflowX: "hidden", position: "relative" }}>
        <NavContext.Provider value={{ closed, setClosed }}>
          <GlobalStyles closed={closed} />
          <Normalize />
          <div id="top" style={{ paddingBottom: "75px" }} />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </NavContext.Provider>
      </div>
    </Theme>
  );
}

export default MyApp;
