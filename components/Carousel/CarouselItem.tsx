import Image from "next/image";
import { useEffect, useState } from "react";
import { CarouselData } from "../../types";
import { fadeElement } from "../../lib/utils";

interface CarouselItemProps extends CarouselData {
    selectedIdx: number;
    idx: number;
    onToggle(idx: number): any;
}

const CarouselItem = ({
    selectedIdx,
    idx,
    onToggle,
    title,
    blurb,
    body,
    cta,
    image,
} : CarouselItemProps) => {
    const selected = selectedIdx == idx;
    const somethingIsSelected = selectedIdx !== -1;

    const [content, setContent] = useState(blurb);

    const containerWidth = () => {
        if (!selected && !somethingIsSelected)
            return "w-[90vw] lg:w-[26rem] opacity-100 xl:delay-500 m-5";
        else if (!selected && somethingIsSelected) return "w-0 z-0 opacity-0";
        else return "w-[90vw] xl:w-[40vw] z-10 m-5";
    };

    const containerTransform = () => {
        if (!selected && !somethingIsSelected) return "";
        else if (!selected && somethingIsSelected) return "";
        else return "xl:-translate-x-48 xl:delay-500 my-5";
    };

    const contentTransform = () => {
        if (!selected && !somethingIsSelected)
            return "w-[85vw] lg:w-96 p-5 h-52 -translate-y-24 translate-x-[2.5vw] lg:translate-x-4";
        else if (!selected && somethingIsSelected)
            return "w-0 h-0 translate-y-0 translate-x-0";
        else
            return "w-[90vw] xl:w-96 p-5 h-[30rem] -translate-y-[30rem] xl:translate-x-[40vw] xl:delay-500";
    };

    useEffect(() => {
        const elements = [document.querySelector(`.content-${idx}`)];
        fadeElement(0, elements);
        setTimeout(() => {
            fadeElement(1, elements);
            setContent(selected ? body : blurb);
        }, 1000);
    }, [selected]);

    return (
        <div
            className={`bg-transparent ${containerWidth()} ${containerTransform()} h-[35rem] transition-all duration-700`}
        >
            <div className={`relative h-[30rem]`}>
                <Image
                    alt={"wow"}
                    src={image}
                    fill
                    className="rounded-sm object-cover transition-all"
                />
            </div>
            <div
                className={`absolute rounded-sm bg-white ${contentTransform()} overflow-hidden transition-all duration-700`}
            >
                <div className="flex justify-between">
                    <div className="text-xl font-medium lg:mb-5 lg:text-4xl">
                        {title}
                    </div>
                    {selected && (
                        <div
                            onClick={() => onToggle(-1)}
                            className="cursor-pointer text-wato-grey"
                        >
                            X
                        </div>
                    )}
                </div>
                <div className={`font-light content-${idx} transition-all`}>
                    {content}
                </div>
                {!selected && (
                    <div
                        onClick={() => onToggle(idx)}
                        className="cursor-pointer text-wato-blue"
                    >
                        {cta}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CarouselItem;
