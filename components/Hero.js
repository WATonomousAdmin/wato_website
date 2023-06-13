import Button from "./Button";

const Hero = ({ title, subtitle, cta, link, image }) => {
  return (
    <div className={`justify-left flex h-screen w-screen items-end ${image} bg-cover`}>
      <div className="mx-8 my-32 text-white md:mx-16 lg:mx-32">
        <div className="whitespace-pre-line text-7xl font-bold mb-6">{title}</div>
        <div className="w-1/2 text-xl mb-6">{subtitle}</div>
        <Button text={cta} anchor={link}/>
      </div>
    </div>
  );
};

export default Hero;
