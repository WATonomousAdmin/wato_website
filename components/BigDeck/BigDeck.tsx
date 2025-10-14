import { useState } from "react";
import BigCard from "./BigCard";
import { BigCardData } from "../../types";
interface BigDeckProps {
    title: string;
    subtitle: string;
    data: BigCardData[];
}

const BigDeck = ({ title, subtitle, data }: BigDeckProps) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const onToggle = (idx: number) => {
        if (selectedIndex === idx) setSelectedIndex(-1);
        else setSelectedIndex(idx);
    };

    const items = data.map((d, idx) => {
        return (
            <BigCard
                selectedIdx={selectedIndex}
                idx={idx}
                onToggle={onToggle}
                key={idx}
                title={d.title}
                blurb={d.blurb}
                body={d.body}
                cta={d.cta}
                image={d.image}
            />
        );
    });

    return (
        <div
            className={`relative flex flex-col items-center bg-black bg-opacity-90 lg:bg-opacity-80 py-48`}
        >
            <div className="relative z-10 mx-auto w-full max-w-[95rem] px-8 md:px-16 lg:w-[85vw] lg:px-0">
            <div className="mb-2 text-center text-4xl font-bold text-white lg:text-5xl">
                {title}
            </div>
            <div className="mb-5 text-center text-xl font-light italic text-wato-teal lg:mx-auto lg:w-1/2">
                {subtitle}
            </div>

            <div
                className="flex flex-row flex-wrap justify-center"
                style={{ overflowAnchor: "none" }}
            >
                {items}
            </div>
            </div>
        </div>
    );
};

export default BigDeck;
