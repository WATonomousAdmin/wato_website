import { FaArrowAltCircleDown } from "react-icons/fa";

interface TabBannerProps {
    title: string;
    body: string;
    identifier: string;
    idx: number;
    last: boolean;
}

const TabBanner = ({ title, body, identifier, last, idx }: TabBannerProps) => {
    const scrollTo = (idx: number) => {
        console.log("scrolling");
        document
            .getElementById(`carousel-${identifier}-${idx}`)
            ?.scrollIntoView({ block: "center" });
    };

    return (
        <div className="flex w-full flex-col justify-center bg-transparent font-bold text-white lg:w-1/2 lg:p-5 mt-16 mr-10">
            <div className="pb-5 text-2xl lg:text-5xl">
                {title}&nbsp;<span className="text-wato-grey">{"//"}</span>
            </div>
            <div className="text-base lg:text-lg font-medium">{body}</div>
            {!last && (
                <div className="mb-4 mt-4">
                    <div onClick={() => scrollTo(idx + 1)} className="flex cursor-pointer text-wato-teal font-medium text-xl">
                        <p>See Next</p>
                        <FaArrowAltCircleDown 
                        className="ml-3 text-2xl"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default TabBanner;
