import { useEffect, useMemo, useReducer, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
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
        title: "Going Student-Centric",
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
    children: StaticImageData;
}
interface YearElementProps {
    data: IContent;
    selected: boolean;
    changeData(data: IContent): void;
}

const YearElement = ({ data, selected, changeData }: YearElementProps) => {
    return (
        <div
            className={`w-full cursor-pointer select-none border-b-4 text-center max-md:text-sm ${
                selected
                    ? "border-wato-teal text-wato-teal"
                    : "border-wato-white-bone text-wato-white-bone"
            } hover:brightness-90`}
            onClick={() => {
                changeData(data);
            }}
        >
            <span className="max-lg:hidden">{data.year}</span>
            <span className="lg:hidden">'{data.year.toString().slice(2)}</span>
        </div>
    );
};

interface TimelineContentProps {
    data: IContent;
    selected?: boolean;
}
const TimelineContent = ({ data, selected = false }: TimelineContentProps) => {
    return (
        <div className={`${!selected && "hidden"}`}>
            <h1 className="mb-2 text-3xl font-bold text-wato-white-bone">
                {data.title} <span className="text-wato-teal">//</span>
            </h1>
            <p className="mb-2 text-sm text-wato-white-bone">{data.body}</p>
            <Image
                priority
                src={data.children}
                alt={`Image for ${data.title}`}
                height={300}
                width={1000}
                className="object-cover"
            />
        </div>
    );
};

enum Actions {
    next = "next",
    previous = "previous",
    change = "change",
}
interface IAction {
    type: Actions;
    data: IContent;
}
const timelineReducer = (selectedData: IContent, action: IAction) => {
    const idx = TabData.findIndex((x) => x.year === action.data.year);
    switch (action.type) {
        case Actions.next:
            // selectedData is the current value
            return idx + 1 >= TabData.length ? selectedData : TabData[idx + 1];
        case Actions.previous:
            // selectedData is the current value
            return idx - 1 < 0 ? selectedData : TabData[idx - 1];
        case Actions.change:
            // selectedData is what we want to change to
            return action.data;
    }
};

const Timeline = () => {
    const [selectedData, dispatch] = useReducer(timelineReducer, TabData[0]);
    const [fade, setFade] = useState<boolean>(false);
    const [isFirst, isLast, idx] = useMemo(() => {
        const idx = TabData.findIndex((x) => x.year === selectedData.year);
        return [idx <= 0, idx + 1 >= TabData.length, idx];
    }, [selectedData]);

    useEffect(() => {
        if (fade)
            setTimeout(() => {
                setFade(false);
            }, 300);
    }, [fade]);

    const handleBack = async (data: IContent) => {
        setFade(true);
        setTimeout(() => {
            dispatch({
                type: Actions.previous,
                data: data,
            });
        }, 150);
    };
    const handleForward = async (data: IContent) => {
        setFade(true);
        setTimeout(() => {
            dispatch({
                type: Actions.next,
                data: data,
            });
        }, 150);
    };
    const handleChange = async (data: IContent) => {
        setFade(true);
        setTimeout(() => {
            dispatch({
                type: Actions.change,
                data: data,
            });
        }, 150);
    };
    return (
        <div className="flex w-full items-center justify-between">
            <IoIosArrowBack
                className={`w-8 lg:w-16 ${
                    isFirst
                        ? "cursor-not-allowed"
                        : "cursor-pointer hover:text-wato-teal"
                } select-none text-4xl text-white transition-colors`}
                onClick={() => {
                    if (isFirst) return;
                    handleBack(selectedData);
                }}
            />
            <div className="relative flex w-[calc(100%-2rem-2rem)] flex-col lg:w-[calc(100%-4rem-4rem)]">
                <div className="mb-4 flex">
                    {TabData.map((x) => (
                        <YearElement
                            data={x}
                            selected={selectedData.year === x.year}
                            changeData={handleChange}
                        />
                    ))}
                </div>
                <div
                    className={`h-96 overflow-hidden transition-opacity ${
                        fade ? "opacity-0" : "opacity-100"
                    }`}
                >
                    {/* we preload all images for performance by loading all panes */}
                    {TabData.map((x) => (
                        <TimelineContent
                            data={x}
                            selected={selectedData.year === x.year}
                        />
                    ))}
                </div>
            </div>
            <IoIosArrowForward
                className={`w-8 lg:w-16 ${
                    isLast
                        ? "cursor-not-allowed"
                        : "cursor-pointer hover:text-wato-teal"
                } select-none text-4xl text-white transition-colors`}
                onClick={() => {
                    if (isLast) return;
                    handleForward(selectedData);
                }}
            />
        </div>
    );
};

export default Timeline;
