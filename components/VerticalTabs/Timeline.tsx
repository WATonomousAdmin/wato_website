import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { fadeElement } from "../../lib/utils";
import { Fade } from "../../types";

const TAB_PLACEHOLDER =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit";

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

interface IContent {
    title: string;
    year: number;
    body: string;
    children: string;
}

const Timeline = () => {
    const [selectedYear, setSelectedYear] = useState(2017);
    const [content, setContent] = useState<IContent>({
        title: "",
        year: 0,
        body: "",
        children: "",
    });

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

    const goToYear = (year: number) => {
        setSelectedYear(year);
    };

    useEffect(() => {
        const elements = [document.querySelector(`.content-${selectedYear}`)];
        const newItem = TabData.find((item) => item.year === selectedYear);
        fadeElement(Fade.Out, elements);
        setTimeout(() => {
            setContent(newItem as IContent);
            fadeElement(Fade.In, elements);
        }, 300);
    }, [selectedYear]);

    return (
        <div>
            <div className="mb-2 flex bg-opacity-50 lg:mb-6">
                {TabData.map((item) => (
                    <div
                        key={item.year}
                        className={`flex cursor-pointer flex-col justify-center hover:border-wato-white-bone hover:text-wato-white-bone ${
                            selectedYear === item.year
                                ? "w-full border-t-4 border-wato-teal text-wato-teal"
                                : "w-full border-t-4 border-gray-500 text-white"
                        }`}
                        onClick={() => goToYear(item.year)}
                    >
                        <div className="flex justify-center">{item.year}</div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between">
                <IoIosArrowBack
                    className="cursor-pointer text-6xl text-white transition-colors hover:text-wato-teal lg:text-8xl"
                    onClick={goToPreviousYear}
                />
                <div
                    className={`flex w-full flex-col justify-center rounded-md bg-transparent bg-wato-blue px-5 py-2 font-bold text-white lg:px-10 lg:py-5`}
                >
                    <div
                        className={`content-${selectedYear} transition-opacity`}
                    >
                        <h2 className="text-2xl lg:pb-5 lg:text-4xl">
                            {content.title}
                            &nbsp;<span className="text-wato-teal">{"//"}</span>
                        </h2>
                        <p className="mb-2 font-normal max-lg:text-sm">
                            {content?.body}
                        </p>
                        <img
                            src={content.children}
                            alt={`Event ${selectedYear}`}
                        />
                    </div>
                </div>
                <IoIosArrowForward
                    className="hover: cursor-pointer text-6xl text-white transition-colors hover:text-wato-teal lg:text-8xl"
                    onClick={goToNextYear}
                />
            </div>
        </div>
    );
};

export default Timeline;
