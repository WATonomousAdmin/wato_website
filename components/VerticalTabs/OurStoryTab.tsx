import { useInView } from "react-intersection-observer";
import TabBanner from "./TabBanner";
import { useState, useEffect } from "react";

interface TabProps {
    identifier: string;
    title: string;
    body: string;
    idx: number;
    setVisible: setVisibleInterface;
}

interface setVisibleInterface {
    (idx: number): void;
}

const years = [2017, 2018, 2019, 2020, 2021, 2022, 2023];

const OurStoryTab = ({
    identifier,
    title,
    body,
    idx,
    setVisible,
}: TabProps) => {
    const [ref, isVisible] = useInView({ threshold: 0.8 });
    useEffect(() => {
        setVisible(idx);
    }, [isVisible]);

    const [selectedYear, setSelectedYear] = useState(2017);

    return (
        <div
            id={`carousel-${identifier}-${idx}`}
            className={`flex min-w-[100vw] snap-start px-16 py-24 max-lg:h-[90vh] max-lg:flex-col lg:min-h-[80vh] lg:px-44 lg:py-6 xl:px-60`}
            ref={ref}
        >
            <TabBanner identifier={identifier} title={title} body={body} />
            <div className="flex w-full flex-col justify-center bg-transparent bg-wato-blue font-bold text-white lg:w-1/2 lg:p-5">
                <div className="flex flex-row">
                    {years.map((year) => (
                        <div
                            key={year}
                            className={`mr-4 flex flex-col ${
                                selectedYear === year
                                    ? "border-t-4 border-wato-teal text-wato-teal"
                                    : "border-t-4 border-gray-500 text-white"
                            }`}
                        >
                            <button onClick={() => setSelectedYear(year)}>
                                {year}
                            </button>
                        </div>
                    ))}
                </div>
                <div className="mt-4 pb-5 text-2xl lg:text-4xl">
                    Event&nbsp;<span className="text-wato-grey">{"//"}</span>
                </div>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut sdfsdfsdf dsfsdfs sdfsdf sdfsdfsdf Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut
                </span>
                <img
                    className="mt-8"
                    src="/_next/static/media/img1.b7d1895c.jpg"
                ></img>
            </div>
        </div>
    );
};

export default OurStoryTab;
