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

const TAB_PLACEHOLDER =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sdfsdfsdf dsfsdfs sdfsdf sdfsdfsdf Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut";

const TabData = [
    {
        title: "2017 Event",
        year: 2017,
        body: `2017 ${TAB_PLACEHOLDER}`,
        children: "/_next/static/media/img1.b7d1895c.jpg",
    },
    {
        title: "2018 Event",
        year: 2018,
        body: `2018 ${TAB_PLACEHOLDER}`,
        children: "/_next/static/media/img1.b7d1895c.jpg",
    },
    {
        title: "2019 Event",
        year: 2019,
        body: `2019 ${TAB_PLACEHOLDER}`,
        children: "/_next/static/media/img1.b7d1895c.jpg",
    },
    {
        title: "2020 Event",
        year: 2020,
        body: `2020 ${TAB_PLACEHOLDER}`,
        children: "/_next/static/media/img1.b7d1895c.jpg",
    },
    {
        title: "2021 Event",
        year: 2021,
        body: `2021 ${TAB_PLACEHOLDER}`,
        children: "/_next/static/media/img1.b7d1895c.jpg",
    },
    {
        title: "2022 Event",
        year: 2022,
        body: `2022 ${TAB_PLACEHOLDER}`,
        children: "/_next/static/media/img1.b7d1895c.jpg",
    },
    {
        title: "2023 Event",
        year: 2023,
        body: `2023 ${TAB_PLACEHOLDER}`,
        children: "/_next/static/media/img1.b7d1895c.jpg",
    },
];

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
                    {TabData.map((item) => (
                        <div
                            key={item.year}
                            className={`mr-4 flex flex-col ${
                                selectedYear === item.year
                                    ? "border-t-4 border-wato-teal text-wato-teal"
                                    : "border-t-4 border-gray-500 text-white"
                            }`}
                        >
                            <button onClick={() => setSelectedYear(item.year)}>
                                {item.year}
                            </button>
                        </div>
                    ))}
                </div>
                <div className="mt-4 pb-5 text-2xl lg:text-4xl">
                    {TabData.find((item) => item.year === selectedYear)?.title}
                    &nbsp;<span className="text-wato-teal">{"//"}</span>
                </div>
                <span>
                    {TabData.find((item) => item.year === selectedYear)?.body}
                </span>
                <img
                    className="mt-8"
                    src={
                        TabData.find((item) => item.year === selectedYear)
                            ?.children
                    }
                    alt={`Event ${selectedYear}`}
                />
            </div>
        </div>
    );
};

export default OurStoryTab;
