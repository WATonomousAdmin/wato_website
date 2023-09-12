import { useState } from "react";
import CarouselItem from "./CarouselItem";
import { CarouselData } from "../../types";
interface CarouselProps {
    title: string;
    subtitle: string;
    data: CarouselData[];
}

const Carousel = ({ title, subtitle, data } : CarouselProps) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const onToggle = (idx : number) => {
        if (selectedIndex === idx) setSelectedIndex(-1);
        else setSelectedIndex(idx);
    };

    const items = data.map((d, idx) => {
        return (
            <CarouselItem
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
        <div className="lg:py-auto flex flex-col items-center bg-wato-grey-porcelain py-5">
            <div className="mb-5 text-center text-4xl font-bold lg:text-5xl">
                {title}
            </div>
            <div className="mb-5 text-center text-xl font-light lg:w-1/2">
                {subtitle}
            </div>
            <div
                className="flex flex-row flex-wrap justify-center"
                style={{ overflowAnchor: "none" }}
            >
                {items}
            </div>
        </div>
    );
};

export default Carousel;
