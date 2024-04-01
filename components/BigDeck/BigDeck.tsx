import { useState } from "react";
import BigCard from "./BigCard";
import { BigCardData } from "../../types";
interface BigDeckProps {
    title: string;
    subtitle: string;
    data: BigCardData[];
    backgroundImage: string;
}

const BigDeck = ({ title, subtitle, data, backgroundImage }: BigDeckProps) => {
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
            className={`relative flex flex-col items-center ${backgroundImage} py-16 max-lg:items-center`}
        >
            <div className="absolute inset-0 opacity-80 bg-[rgb(30,32,33)]"></div>

            <div
                className="z-10 mb-5 text-center text-4xl font-bold text-white lg:text-5xl relative"
            >
                {title}
            </div>
            <div
                className="z-10 mb-5 text-center text-xl font-light text-white lg:w-1/2 relative"
            >
                {subtitle}
            </div>

            <div
                className="flex flex-row flex-wrap justify-center z-10"
                style={{ overflowAnchor: "none" }}
            >
                {items}
            </div>
        </div>
    );
};

export default BigDeck;
