import { FaArrowAltCircleDown, FaArrowAltCircleRight } from "react-icons/fa";

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
            ?.scrollIntoView({ block: "start" });
    };

    return (
        <div className="mr-10 mt-16 flex w-full flex-col justify-center bg-transparent p-5 font-bold text-white lg:w-1/2">
            <div className="pb-5 text-2xl lg:text-5xl">
                {title}&nbsp;<span className="text-wato-teal">{"//"}</span>
            </div>
            <div className="text-base font-medium lg:text-lg">{body}</div>
            {!last && (
                <div className="mb-4 mt-4">
                    <div
                        onClick={() => scrollTo(idx + 1)}
                        className="flex cursor-pointer items-center text-xl font-medium text-wato-teal"
                    >
                        <p>See Next</p>
                        <FaArrowAltCircleDown className="ml-3 text-2xl max-lg:hidden" />
                        <FaArrowAltCircleRight className="ml-3 text-2xl lg:hidden" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default TabBanner;
