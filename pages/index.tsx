import Link from "next/link";
import WatoVideo from "../components/WatoVideo";
import { useEffect, useRef, useState } from "react";

export default function Home() {
    const [fadeIn, setFadeIn] = useState(false);
    const [dims, setDims] = useState({
        width: 0,
        height: 0,
    });
    const ref = useRef<HTMLDivElement>(null);
    console.log("render");
    const onMouseMove = (e: React.MouseEvent<Element, MouseEvent>) => {
        requestAnimationFrame(() => {
            const { clientX, clientY } = e;
            if (!ref || !ref.current) {
                return;
            }
            ref.current.style.transform = `translate(${
                clientX - dims.width / 2
            }px, ${clientY - dims.height / 2}px)`;
        });
    };
    useEffect(() => {
        const delay = setTimeout(() => {
            setFadeIn(true);
        }, 1000);

        return () => clearTimeout(delay);
    }, []);
    useEffect(() => {
        if (ref && ref.current) {
            const { width, height } = ref.current.getBoundingClientRect();
            setDims({ width, height });
            ref.current.style.transform = `translate(${
                window.innerWidth / 2 - width / 2
            }px, ${window.innerHeight / 2 - height / 2}px)`;
        }
    }, [ref]);
    return (
        <Link href={"/about"}>
            <div
                className="z-0 h-screen cursor-pointer overflow-hidden bg-VideoPlaceholder bg-cover"
                onMouseMove={onMouseMove}
            >
                <div className="fixed z-0">
                    <WatoVideo />
                </div>
                <div
                    className={`relative z-10 flex h-screen items-center justify-center transition-opacity ${
                        fadeIn ? "opacity-100 ease-in" : " opacity-0"
                    }`}
                >
                    <div
                        className={
                            "moving_gradient text-1xl fixed left-0 top-0 rounded-lg bg-white px-6 py-3 font-bold text-wato-black-vanta transition-all hover:scale-110"
                        }
                        ref={ref}
                        style={{
                            willChange: "transform",
                            transition: "transform 0.2s ease-out",
                        }}
                    >
                        <h1 className="">Click to Drive.</h1>
                    </div>
                </div>
            </div>
        </Link>
    );
}
