import Head from "next/head";
import Navbar from "./Navbar/Navbar";
import ContactModal from "./ContactModal/ContactModal";
import localFont from "next/font/local";
import { ReactNode, useEffect, useState } from "react";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { useModal } from "../lib/ModalContext";

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
});

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const modalContext = useModal();

    const router = useRouter();
    const dark = true; // all pages are dark now

    useEffect(() => {
        modalContext.open
            ? document.documentElement.classList.add("overflow-y-hidden")
            : document.documentElement.classList.remove("overflow-y-hidden");
    }, [modalContext.open]);

    const toggleModal = () => {
        modalContext.setOpen(!modalContext.open);
        modalContext.setSponsorship(false);
    };

    return (
        <>
            <Head>
                <title>WATonomous</title>
                <script src="https://cdn.jsdelivr.net/npm/tsparticles-confetti@2.9.3/tsparticles.confetti.bundle.min.js" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            </Head>
            <main className={`${styrene.className} w-screen`}>
                <ContactModal
                    closeModal={() => {
                        modalContext.setOpen(false);
                        modalContext.setSponsorship(false);
                    }}
                />
                <Navbar toggleModal={toggleModal} dark={dark} />
                {children}
            </main>
            <footer>{router.pathname != "/" && <Footer dark={dark} />}</footer>
        </>
    );
};

export default Layout;
