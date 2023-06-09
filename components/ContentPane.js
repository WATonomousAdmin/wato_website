import Image from "next/image";

const ContentPane = ({leftOriented, img, title, subtitle, children}) => {
    return (
        <div className={`flex flex-col ${leftOriented ? "lg:flex-row" : "lg:flex-row-reverse"} my-16 max-lg:items-center`}>
            <div className={`${!leftOriented ? "lg:pr-60 lg:pl-32" : "lg:pl-60 lg:pr-32"} text-black lg:w-[51%] flex flex-col justify-center max-lg:items-center`}>
                <div className="text-4xl sm:text-5xl max-lg:text-center font-black">
                    {title} <span className="text-[#66DDC8]">//</span>
                </div>
                <div className="text-2xl lg:mb-6 max-lg:text-center">
                    {subtitle}
                </div>
                <div className="max-lg:w-screen max-lg:p-12 max-lg:text-center">
                    {children}
                </div>
            </div>
            <div className={`w-4/5 lg:w-[55%] flex justify-center self-center ${leftOriented ? "lg:pr-60" : "lg:pl-60"}`}>
                <Image src={img} className="rounded-md"></Image>
            </div>
        </div>
    );
}

export default ContentPane;