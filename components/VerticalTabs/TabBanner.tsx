import Link from "next/link";
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
        document
            .getElementById(`carousel-${identifier}-${idx}`)
            ?.scrollIntoView({ block: "start" });
    };

    return (
        <div className="mt-12 flex w-full flex-col justify-center bg-transparent p-5 font-bold text-white lg:mr-10 lg:mt-16 lg:w-1/2">
            <div className="pb-5 text-2xl lg:text-4xl">
                {title}&nbsp;<span className="text-wato-teal">{"//"}</span>
            </div>
            <div className="text-sm font-normal">{body}</div>
            {!last && (
                <div className="mb-4 mt-4">
                    <div
                        onClick={() => scrollTo(idx + 1)}
                        className="flex cursor-pointer items-center text-sm text-wato-teal lg:text-lg lg:font-medium"
                    >
                        <p>See Next</p>
                        <FaArrowAltCircleDown className="ml-3 text-2xl max-lg:hidden" />
                        <FaArrowAltCircleRight className="ml-3 text-2xl lg:hidden" />
                    </div>
                </div>
            )}
            {last && (
                <div className="mb-4 mt-4">
                    <Link
                        href={"/careers"}
                        className="flex cursor-pointer items-center text-sm font-medium text-wato-teal lg:text-xl"
                    >
                        <p>See Careers</p>
                        <FaArrowAltCircleRight className="ml-3 text-2xl" />
                    </Link>
                </div>
            )}
        </div>
    );
};

export default TabBanner;
