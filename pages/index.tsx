import Link from "next/link";
import WatoVideo from "../components/WatoVideo";
import { useEffect, useState } from "react";

export default function Home() {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const delay = setTimeout(() => {
            setFadeIn(true);
        }, 1000);

        return () => clearTimeout(delay);
    }, []);
    return (
        <div className="z-0 h-screen overflow-hidden bg-wato-black-vanta">
            <div className="fixed z-0">
                <WatoVideo />
            </div>
            <div className="relative z-10 flex h-screen items-center justify-center">
                <Link href={"/about"}>
                    <div
                        className={`moving_gradient relative rounded-lg px-6  py-3 text-4xl text-wato-black-vanta transition-all hover:scale-110 ${
                            fadeIn ? "opacity-100 ease-in" : " opacity-0"
                        }`}
                    >
                        <h1 className="">Let's Drive.</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
}
