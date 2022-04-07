import Header from "../componenets/Header";
import GlobalStyle from "../globals";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
