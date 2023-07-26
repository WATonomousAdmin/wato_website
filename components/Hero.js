import Button from "./Button";

const Hero = ({ title, subtitle, cta, link, image }) => {
    return (
        <div
            className={`justify-left flex h-screen w-screen items-end ${image} bg-cover`}
        >
            <div className="mx-8 my-32 text-white md:mx-16 lg:mx-32">
                <div className="mb-6 whitespace-pre-line text-5xl font-black lg:text-7xl">
                    {title}&nbsp;<span className="text-wato-blue">{"//"}</span>
                </div>
                <div className="text-md mb-6 lg:w-1/2 lg:text-xl">
                    {subtitle}
                </div>
                <Button text={cta} anchor={link} />
            </div>
        </div>
    );
};

export default Hero;
