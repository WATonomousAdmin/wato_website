import Image from "next/image";

const ContentPane = ({leftOriented, img, title, subtitle, content}) => {
    return (
        <div className={`flex flex-col ${leftOriented ? "lg:flex-row" : "lg:flex-row-reverse"} my-16 max-lg:items-center`}>
            <div className="lg:p-32 text-black lg:w-[51%] flex flex-col justify-center max-lg:items-center">
                <div className="text-5xl max-lg:text-center">
                    {title}
                </div>
                <div className="text-2xl lg:mb-6 max-lg:text-center">
                    {subtitle}
                </div>
                <div className="max-lg:w-screen max-lg:p-12 max-lg:text-center">
                    {content}
                </div>
            </div>
            <div className={`w-4/5 lg:w-[49%] flex justify-center self-center ${leftOriented ? "lg:pr-32" : "lg:pl-32"}`}>
                <Image src={img}></Image>
            </div>
        </div>
    );
}

export default ContentPane;