import React, { useState } from "react";
import { Normalize } from "styled-normalize";
import Header from "../componenets/Header/Header";
import GlobalStyles from "../styles/GlobalStyles";
import { NavContext } from "../utils/NavContext";
import Theme from "../styles/theme";
import Footer from "../componenets/footer/Footer";
function MyApp({ Component, pageProps }) {
  const [closed, setClosed] = useState(false);
  return (
    <Theme>
      <div style={{ contain: "paint", position: "relative" }}>
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
