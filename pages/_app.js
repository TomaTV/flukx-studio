import "../styles/globals.css";
import Layout from "../components/Layout";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

function MyApp({ Component, pageProps }) {
  useSmoothScroll();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
