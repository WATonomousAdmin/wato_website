import Image, { StaticImageData } from "next/image";

interface ExtendedContentPaneProps {
    leftOriented: boolean;
    img: StaticImageData;
    title: string;
    subtitle: string;
    children: React.ReactNode | any;
}

const ExtendedContentPane = ({
    leftOriented,
    img,
    title,
    subtitle,
    children,
}: ExtendedContentPaneProps) => {
    return (
        <div className="flex justify-center">
        <div
            className={`flex w-full max-w-[100rem] flex-col px-8 md:px-16 lg:w-[90vw] lg:px-0 ${
                leftOriented ? "lg:flex-row" : "lg:flex-row-reverse"
            } mt-8 justify-between max-lg:items-center`}
        >
            <div
                className={`${
                    !leftOriented ? "lg:pr-16" : "lg:pl-16"
                } flex flex-col justify-center text-black max-lg:items-center lg:w-[51%]`}
            >
                <div className="text-4xl font-black max-lg:text-center sm:text-5xl">
                    {title}&nbsp;<span className="text-wato-teal">{"//"}</span>
                </div>
                <div className="text-2xl max-lg:text-center lg:mb-6">
                    {subtitle}
                </div>
                <div className="max-lg:p-8 max-lg:text-center">
                    {children}
                </div>
            </div>
            <div className="lg:w-[45%] lg:-translate-y-20">
                <div
                    className={`relative flex max-h-[700px] max-w-[500px] justify-center self-center max-lg:hidden lg:h-[50vh] lg:w-full`}
                >
                    <Image
                        alt={"image"}
                        src={img}
                        className="object-cover grayscale"
                        fill
                    ></Image>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ExtendedContentPane;
