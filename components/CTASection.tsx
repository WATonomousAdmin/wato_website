import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";

interface CTASectionProps {
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
}

const CTASection = ({ title, description, ctaText, ctaLink }: CTASectionProps) => {
    return (
        <div className="relative flex flex-col items-center bg-black bg-opacity-80 py-32">
            <div className="relative z-10 flex w-full max-w-[95rem] flex-col items-center justify-center px-8 text-center text-white md:px-16 lg:w-[85vw] lg:px-0">
                <h2 className="mb-4 text-4xl font-bold">
                    {title}
                </h2>
                <p className="mb-8 text-lg">
                    {description}
                </p>
                <Link
                    href={ctaLink}
                    className="flex cursor-pointer items-center text-base font-medium text-wato-teal"
                >
                    <p>{ctaText}</p>
                    <FaArrowAltCircleRight className="ml-3 text-2xl" />
                </Link>
            </div>
        </div>
    );
};

export default CTASection;
