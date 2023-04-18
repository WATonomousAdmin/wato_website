import ContactModal from '../components/ContactModal'
import "../styles/globals.css";
import Headers from "../components/Header";
import localFont from "next/font/local";
import Head from 'next/head';

const styrene = localFont({
  src: [
    {
      path: "../public/fonts/StyreneA-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/StyreneA-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/StyreneA-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/StyreneA-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/StyreneA-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/StyreneA-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/StyreneA-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../public/fonts/StyreneA-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/StyreneA-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/StyreneA-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/StyreneA-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/StyreneA-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
  ],
})

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Head>
          <title>WATonomous</title>
          <script src="https://kit.fontawesome.com/f419351c8b.js" crossorigin="anonymous"></script>
        </Head>
        <Headers />
        <main className={styrene.className}>
          <ContactModal></ContactModal>
          <Component {...pageProps} />
        </main>
    </>
  );
}

export default MyApp;
