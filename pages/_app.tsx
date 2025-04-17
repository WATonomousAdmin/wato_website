import "../styles/globals.css";
import Layout from "../components/Layout";
import { AppProps } from "next/app";
import { ModalProvider } from "../lib/ModalContext";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ModalProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ModalProvider>
    );
}

export default MyApp;
