import Image from "next/image";

const ContentPane = ({ leftOriented, img, title, subtitle, children }) => {
    return (
        <div
            className={`flex flex-col ${
                leftOriented ? "lg:flex-row" : "lg:flex-row-reverse"
            } my-16 max-lg:items-center`}
        >
            <div
                className={`${
                    !leftOriented ? "lg:pr-44 xl:pr-60" : "lg:pl-44 xl:pl-60"
                } flex flex-col justify-center text-black max-lg:items-center sm:px-16 lg:w-[51%]`}
            >
                <div className="text-4xl font-black max-lg:text-center sm:text-5xl">
                    {title}&nbsp;<span className="text-wato-teal">{"//"}</span>
                </div>
                <div className="text-2xl max-lg:text-center lg:mb-6">
                    {subtitle}
                </div>
                <div className="max-lg:w-screen max-lg:p-12 max-lg:text-center">
                    {children}
                </div>
            </div>
            <div
                className={`flex w-4/5 justify-center self-center lg:w-[55%] ${
                    leftOriented ? "lg:pr-44 xl:pr-60" : "lg:pl-44 xl:pl-60"
                }`}
            >
                <Image src={img} className="rounded-md"></Image>
            </div>
        </div>
    );
};

export default ContentPane;
