import Button from "./Button";

const Hero = ({ title, subtitle, cta, link, image }) => {
  return (
    <div className={`justify-left flex h-screen w-screen items-end ${image} bg-cover`}>
      <div className="mx-8 my-32 text-white md:mx-16 lg:mx-32">
        <div className="whitespace-pre-line text-5xl lg:text-7xl font-black mb-6">{title}&nbsp;<span className="text-wato-blue">//</span></div>
        <div className="lg:w-1/2 text-md lg:text-xl mb-6">{subtitle}</div>
        <Button text={cta} anchor={link}/>
      </div>
    </div>
  );
};

export default Hero;
