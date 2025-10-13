import { FaArrowAltCircleDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import WatoVideo from "./WatoVideo";
import { StaticImageData } from "next/image";

interface HeroProps {
    title: string;
    subtitle: string;
    cta: string;
    link: string;
    image?: string | StaticImageData;
    video?: string;
    fixed?: boolean;
}

const Hero = ({
    title,
    subtitle,
    cta,
    link,
    image,
    video,
    fixed = false,
}: HeroProps) => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const delay = setTimeout(() => {
            setFadeIn(true);
        }, 50);

        return () => clearTimeout(delay);
    }, []);

    const isImageObject = typeof image === "object";
    const backgroundStyle = isImageObject
        ? { backgroundImage: `url(${image.src})` }
        : {};

    return (
        <div
            className={`justify-left flex h-screen items-end ${
                video || image
                    ? image
                        ? isImageObject
                            ? "bg-cover"
                            : `${image} bg-cover`
                        : "bg-black"
                    : "bg-black"
            } w-full overflow-x-hidden`}
            style={isImageObject ? backgroundStyle : {}}
        >
            {video && (
                <div className={`${fixed ? "fixed" : "absolute"} inset-0`}>
                    <video
                        autoPlay
                        playsInline
                        muted
                        loop
                        className="absolute inset-0 h-full w-full object-cover"
                    >
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            )}
            {!image && !video && (
                <div className={`${fixed ? "fixed" : "absolute"} w-full`}>
                    <WatoVideo />
                </div>
            )}

            <div
                className={`absolute inset-0 h-[100lvh] bg-black transition-all ${
                    fadeIn ? "opacity-30 ease-in" : " opacity-0"
                }`}
            ></div>
            <div
                className={`absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black to-transparent transition-all ${
                    fadeIn ? "opacity-70 ease-in" : "opacity-0"
                }`}
            ></div>
            <div className={`relative mx-8 my-32 text-white md:mx-16 lg:mx-32`}>
                <div className="mb-3 whitespace-pre-line text-4xl font-black">
                    {title}&nbsp;<span className="text-wato-teal">{"//"}</span>
                </div>
                <div className="mb-6 text-sm lg:w-1/2 lg:text-base">
                    {subtitle}
                </div>
                <div className={`flex w-full`}>
                    <a
                        className={`flex cursor-pointer items-center text-base font-medium text-wato-teal ${
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
