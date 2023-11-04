import { useState } from "react";

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

const Timeline = () => {
    const [selectedYear, setSelectedYear] = useState(2017);

    return (
        <div className="flex w-full flex-col justify-center bg-transparent bg-wato-blue font-bold text-white">
            <div className="m-2 flex w-full flex-row">
                {TabData.map((item) => (
                    <div
                        key={item.year}
                        className={`mr-4 flex flex-col ${
                            selectedYear === item.year
                                ? "w-full border-t-4 border-wato-teal text-wato-teal"
                                : "w-full border-t-4 border-gray-500 text-white"
                        }`}
                    >
                        <button onClick={() => setSelectedYear(item.year)}>
                            {item.year}
                        </button>
                    </div>
                ))}
            </div>
            <div className="m-2 pb-5 text-2xl lg:text-4xl">
                {TabData.find((item) => item.year === selectedYear)?.title}
                &nbsp;<span className="text-wato-teal">{"//"}</span>
            </div>
            <span className="m-2">
                {TabData.find((item) => item.year === selectedYear)?.body}
            </span>
            <img
                className="m-2"
                src={
                    TabData.find((item) => item.year === selectedYear)?.children
                }
                alt={`Event ${selectedYear}`}
            />
        </div>
    );
};

export default Timeline;
