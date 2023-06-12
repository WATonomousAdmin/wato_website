const Hero = ({title, image, children}) => {
    return (
        <div className={`justify-left flex h-screen w-screen items-end ${image}`}>
            <div className="mx-8 my-32 text-4xl font-bold text-white md:mx-16 md:text-6xl lg:mx-32">
                <span className="whitespace-pre-line">{title}</span>
            </div>
            {children}
        </div>
    );
}

export default Hero;