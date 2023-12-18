import Button from "./Button";
import { FaArrowAltCircleDown } from "react-icons/fa";

interface HeroProps {
    title: string;
    subtitle: string;
    cta: string;
    link: string;
    image: string;
}

const Hero = ({ title, subtitle, cta, link, image } : HeroProps) => {
    return (
        <div
            className={`justify-left flex h-screen w-screen items-end ${image} bg-cover`}
        >
            <div className="mx-8 my-32 text-white md:mx-16 lg:mx-32">
                <div className="mb-6 whitespace-pre-line text-5xl font-black lg:text-5xl">
                    {title}&nbsp;<span className="text-wato-blue">{"//"}</span>
                </div>
                <div className="text-sm mb-6 lg:w-1/2 lg:text-lg">
                    {subtitle}
                </div>
                <div className="flex justify-end">
                    <a className="flex cursor-pointer text-wato-white font-medium text-xl" href={link}>
                        <p>Dive In</p>
                        <FaArrowAltCircleDown 
                        className="ml-3 text-2xl"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
