import Image, { StaticImageData } from "next/image";
interface ContentPaneProps {
    leftOriented: boolean;
    img: StaticImageData;
    title: string;
    subtitle: string;
    children: React.ReactNode | any;
}

const ContentPane = ({
    leftOriented,
    img,
    title,
    subtitle,
    children,
}: ContentPaneProps) => {
    return (
        <div
            className={`relative flex flex-col items-center bg-black bg-opacity-80 py-32`}
        >
            <div className={`relative z-10 flex w-full max-w-[100rem] flex-col gap-x-16 px-8 md:px-16 lg:w-[90vw] lg:px-0 ${
                leftOriented ? "lg:flex-row" : "lg:flex-row-reverse"
            } max-lg:items-center`}>
            <div
                className={`flex flex-col justify-center text-white max-lg:items-center lg:w-[51%]`}
            >
                <div className="text-4xl font-black max-lg:text-center">
                    {title}&nbsp;<span className="text-wato-teal">{"//"}</span>
                </div>
                <div className="text-lg italic text-wato-teal max-lg:text-center lg:mb-6 lg:mt-2">
                    {subtitle}
                </div>
                <div className="max-lg:py-8 max-lg:text-sm">
                    {children}
                </div>
            </div>

            <div
                className={`flex w-4/5 justify-center self-center lg:w-[45%]`}
            >
                <Image alt={"image"} src={img} className="rounded-md"></Image>
            </div>
            </div>
        </div>
    );
};

export default ContentPane;
