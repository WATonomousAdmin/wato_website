import { FaArrowAltCircleDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import WatoVideo from "./WatoVideo";

interface HeroProps {
    title: string;
    subtitle: string;
    cta: string;
    link: string;
    image?: string;
}

const Hero = ({ title, subtitle, cta, link, image }: HeroProps) => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const delay = setTimeout(() => {
            setFadeIn(true);
        }, 500);

        return () => clearTimeout(delay);
    }, []);

    return (
        <div
            className={`justify-left flex h-screen items-end ${
                image ? `${image} bg-cover` : "bg-black"
            }`}
        >
            {!image && (
                <div className="absolute">
                    <WatoVideo />
                </div>
            )}
            <div
                className={`absolute inset-0 bg-black transition-all ${
                    fadeIn ? "opacity-80 ease-in" : " opacity-0"
                }`}
            ></div>
            <div className={`relative mx-8 my-32 text-white md:mx-16 lg:mx-32`}>
                <div className="mb-6 whitespace-pre-line text-5xl font-black lg:text-5xl">
                    {title}&nbsp;<span className="text-wato-teal">{"//"}</span>
                </div>
                <div className="mb-6 text-sm lg:w-1/2 lg:text-lg">
                    {subtitle}
                </div>
                <div className={`flex w-full`}>
                    <a
                        className={`flex cursor-pointer items-center text-xl font-medium text-wato-teal ${
                            fadeIn
                                ? "opacity-100 transition-opacity duration-150 ease-in"
                                : "opacity-0"
                        }`}
                        href={link}
                    >
                        <p>{cta}</p>
                        <FaArrowAltCircleDown className="ml-3 text-2xl" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
