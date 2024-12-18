import Image, { StaticImageData } from "next/image";
interface ContentPaneProps {
    leftOriented: boolean;
    img: StaticImageData;
    title: string;
    subtitle: string;
    children: React.ReactNode | any;
    backgroundImage?: string;
}

const ContentPane = ({
    leftOriented,
    img,
    title,
    subtitle,
    children,
    backgroundImage,
}: ContentPaneProps) => {
    return (
        <div
            className={`relative flex flex-col ${
                leftOriented ? "lg:flex-row" : "lg:flex-row-reverse"
            } ${
                backgroundImage ?? "bg-wato-black-vanta"
            } py-8 max-lg:items-center`}
        >
            <div className="absolute inset-0 bg-cover bg-center" />
            <div className="absolute inset-0 bg-black opacity-80"></div>

            <div
                className={`${
                    !leftOriented ? "lg:pr-44 xl:pr-60" : "lg:pl-44 xl:pl-60"
                } relative z-10 flex flex-col justify-center text-white max-lg:items-center sm:px-16 lg:w-[51%]`}
            >
                <div className="text-4xl font-black max-lg:text-center sm:text-5xl">
                    {title}&nbsp;<span className="text-wato-teal">{"//"}</span>
                </div>
                <div className="text-xl italic text-wato-teal max-lg:text-center lg:mb-6 lg:mt-2">
                    {subtitle}
                </div>
                <div className="max-lg:w-screen max-lg:p-12 max-lg:text-center">
                    {children}
                </div>
            </div>

            <div
                className={`flex w-4/5 justify-center self-center lg:w-[55%] ${
                    leftOriented ? "lg:pr-44 xl:pr-60" : "lg:pl-44 xl:pl-60"
                } relative z-10`}
            >
                <Image alt={"image"} src={img} className="rounded-md"></Image>
            </div>
        </div>
    );
};

export default ContentPane;
