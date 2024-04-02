import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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

    const goToPreviousYear = () => {
        const index = TabData.findIndex((item) => item.year === selectedYear);
        if (index > 0) {
            setSelectedYear(TabData[index - 1].year);
        } else {
            setSelectedYear(TabData[TabData.length - 1].year);
        }
    };

    const goToNextYear = () => {
        const index = TabData.findIndex((item) => item.year === selectedYear);
        if (index < TabData.length - 1) {
            setSelectedYear(TabData[index + 1].year);
        } else {
            setSelectedYear(TabData[0].year);
        }
    };

    return (
        <div>
            <div className="m-2 mb-6 flex pt-3 bg-opacity-50">
                {TabData.map((item) => (
                    <div
                        key={item.year}
                        className={`mr-4 flex flex-col ${
                            selectedYear === item.year
                                ? "w-full border-t-4 border-wato-teal text-wato-teal"
                                : "w-full border-t-4 border-gray-500 text-white"
                        }`}
                    >
                        <div className="flex justify-center">
                            {item.year}
                        </div>
                    </div>
                ))}
                
            </div>
            <div className="flex items-center justify-between">
                <IoIosArrowBack
                className="text-8xl text-white cursor-pointer" 
                onClick={goToPreviousYear}
                />
                <div className="flex-2 flex w-full flex-col justify-center bg-transparent bg-wato-blue font-bold text-white">
                    <div className="m-2 pb-5 text-2xl lg:text-4xl">
                        {TabData.find((item) => item.year === selectedYear)?.title}
                        &nbsp;<span className="text-wato-teal">{"//"}</span>
                    </div>
                    <span className="m-2 font-normal">
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
                <IoIosArrowForward
                className="text-8xl text-white cursor-pointer"
                onClick={goToNextYear}
                />
            </div>
        </div>
    );
};

export default Timeline;
