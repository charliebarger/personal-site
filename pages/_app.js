import React, { useEffect, useState } from "react";
import "../styles/tailwind.css";
import Header from "../componenets/header/Header";
import { NavContext } from "../utils/NavContext";
import Footer from "../componenets/footer/Footer";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    document.body.style.overflow = closed ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [closed]);

  return (
    <>
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
        <meta property="og:type" content="Website" />
        <meta
          name="image"
          property="og:image"
          content="https://live.staticflickr.com/65535/52030583960_b22e377590_z.jpg"
        />
        <meta name="author" content="Charles Barger" />
      </Head>
      <div className="relative overflow-x-hidden">
        <NavContext.Provider value={{ closed, setClosed }}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </NavContext.Provider>
      </div>
    </>
  );
}

export default MyApp;
