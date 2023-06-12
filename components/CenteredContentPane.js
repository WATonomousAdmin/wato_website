import Image from "next/image";

const CenteredContentPane = ({leftOriented, img, title, subtitle, content}) => {
    return (
        <div className="my-16">
            <div className="text-5xl mb-10 lg:pl-32 max-lg:text-center">
                {title}
            </div>
            <div className={`flex flex-col ${leftOriented ? "lg:flex-row" : "lg:flex-row-reverse"} max-lg:items-center`}>
                <div className="lg:p-32 text-black lg:w-[51%] flex flex-col justify-center max-lg:items-center">
                    <div className="text-5xl font-medium lg:mb-10 text-center">
                        {subtitle}
                    </div>
                    <div className="max-lg:w-screen max-lg:p-12 text-center">
                        {content}
                    </div>
                </div>
                <div className={`w-4/5 lg:w-[49%] flex justify-center self-center ${leftOriented ? "lg:pr-32" : "lg:pl-32"}`}>
                    <Image src={img}></Image>
                </div>
            </div>
        </div>
    );
}

export default CenteredContentPane;