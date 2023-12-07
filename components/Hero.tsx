import Button from "./Button";

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
                <div className="mb-6 whitespace-pre-line text-5xl font-black lg:text-7xl">
                    {title}&nbsp;<span className="text-wato-blue">{"//"}</span>
                </div>
                <div className="text-md mb-6 lg:w-[40vw] lg:text-xl">
                    {subtitle}
                </div>
                <Button text={cta} src={link} />
            </div>
        </div>
    );
};

export default Hero;
