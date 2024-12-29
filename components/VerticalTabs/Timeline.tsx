import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { fadeElement } from "../../lib/utils";
import { Fade } from "../../types";
import Image, { StaticImageData } from "next/image";

import img01 from "../../public/imgs/timeline_01.png";
import img02 from "../../public/imgs/timeline_02.png";
import img03 from "../../public/imgs/timeline_03.png";
import img04 from "../../public/imgs/timeline_04.jpg";
import img05 from "../../public/imgs/timeline_05.jpg";
import img06 from "../../public/imgs/timeline_06.jpg";
import img07 from "../../public/imgs/timeline_07.png";
import img08 from "../../public/imgs/timeline_08.jpg";
import img09 from "../../public/imgs/timeline_09.png";

const TabData = [
    {
        title: "SAE Autodrive",
        year: 2017,
        body: `WATonomous selected to join SAE Autodrive Challenge to pursue level 4 self driving.`,
        children: img01,
    },
    {
        title: "Basic Maneuvering",
        year: 2018,
        body: `Team achieves basic maneuvering and object avoidance in Arizona.`,
        children: img02,
    },
    {
        title: "The Race",
        year: 2019,
        body: `WATonomous featured on the Amazing Race Canada. Team successfully masters multi-lane changing.`,
        children: img03,
    },
    {
        title: "Complex Navigation",
        year: 2020,
        body: `Team achieves complex urban navigation and moving object avoidance.`,
        children: img04,
    },
    {
        title: "2nd Place",
        year: 2021,
        body: `WATonomous achieves North America’s 2nd place AV overall in Autodrive Challenge. Team explores new exciting competitions`,
        children: img05,
    },
    {
        title: "Student-Centric",
        year: 2022,
        body: `WATonomous goes student-centric, writing blogs about projects and creating research opportunities for undergrads.`,
        children: img06,
    },
    {
        title: "New Car",
        year: 2023,
        body: `New car, new beginnings! Kia Soul EV arrives in our new AV garage. Now to execute on what we planned...`,
        children: img07,
    },
    {
        title: "Perception",
        year: 2024,
        body: `Team achieves rudimentary perception and car control. Work continues on the internal software stack.`,
        children: img08,
    },
    {
        title: "The Future",
        year: 2025,
        body: `Goal: Point and Click Autonomy around a test track.`,
        children: img09,
    },
];

interface IContent {
    title: string;
    year: number;
    body: string;
    children?: StaticImageData;
}

const Timeline = () => {
    const [selectedYear, setSelectedYear] = useState(2017);
    const [content, setContent] = useState<IContent>({
        title: "",
        year: 0,
        body: "",
        children: undefined,
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
            <div className="mb-2 flex justify-center bg-opacity-50 lg:mb-6">
                {TabData.map((item) => (
                    <div
                        key={item.year}
                        className={`flex w-min cursor-pointer flex-col justify-center border-t-4 px-1 hover:border-wato-white-bone hover:text-wato-white-bone max-lg:text-xs lg:px-2 ${
                            selectedYear === item.year
                                ? "border-wato-teal text-wato-teal"
                                : "border-gray-500 text-white"
                        }`}
                        onClick={() => goToYear(item.year)}
                    >
                        <div className="flex justify-center">{item.year}</div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between">
                <IoIosArrowBack
                    className="cursor-pointer text-4xl text-white transition-colors hover:text-wato-teal"
                    onClick={goToPreviousYear}
                />
                <div
                    className={`flex h-96 w-96 flex-col rounded-md bg-transparent bg-wato-black px-5 py-2 font-bold text-white lg:px-7 lg:py-3`}
                >
                    <div
                        className={`content-${selectedYear} flex h-full flex-col transition-opacity`}
                    >
                        <h2 className="text-2xl lg:pb-2 lg:text-2xl">
                            {content.title}
                            &nbsp;<span className="text-wato-teal">{"//"}</span>
                        </h2>
                        <p className="mb-4 text-sm font-normal">
                            {content?.body}
                        </p>
                        <div className="relative h-full">
                            {content.children && (
                                <Image
                                    src={content.children}
                                    alt={`Event ${selectedYear}`}
                                    className="object-cover"
                                    fill
                                    priority
                                />
                            )}
                        </div>
                    </div>
                </div>
                <IoIosArrowForward
                    className="hover: cursor-pointer text-4xl text-white transition-colors hover:text-wato-teal"
                    onClick={goToNextYear}
                />
            </div>
        </div>
    );
};

export default Timeline;
