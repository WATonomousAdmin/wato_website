import { useState, useEffect } from "react";
import { VerticalCardData, Fade } from "../../types";
import { fadeElement } from "../../lib/utils";

interface CardProps extends VerticalCardData {
    selectedIdx: number;
    idx: number;
    onToggle(idx: number): any;
}

const Card = ({
    selectedIdx,
    idx,
    onToggle,
    title,
    blurb,
    body,
}: CardProps) => {
    const [isHovered, setHovered] = useState(false);
    const [content, setContent] = useState(blurb);

    const selected = selectedIdx == idx;
    const somethingIsSelected = selectedIdx !== -1;

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const containerHeight = () => {
        if (!selected && !somethingIsSelected)
            return "h-[15vh] lg:h-[15vh] opacity-100";
        else if (!selected && somethingIsSelected) return "h-0 z-0 opacity-0";
        else return "h-[50vh] lg:h-[60vh] z-10 m-1 lg:m-5";
    };

    const containerBackground = () => {
        if (isHovered || selected) return "bg-wato-blue";
        else return "bg-wato-black";
    };

    const imageWidth = () => {
        if (!selected && !somethingIsSelected) return "w-1/3";
        else return "w-0 md:w-3/5";
    };

    useEffect(() => {
        const elements = [document.querySelector(`.content-${idx}`)];
        fadeElement(Fade.Out, elements);
        setTimeout(() => {
            fadeElement(Fade.In, elements);
            setContent(selected ? body : blurb);
        }, 1000);
    }, [selected]);

    return (
        <div
            className={`w-full ${containerBackground()} items-center rounded-md ${containerHeight()} cursor-pointer overflow-hidden transition-all duration-700 lg:-mr-16`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
                if (!selected) onToggle(idx);
            }}
        >
            <div className="flex h-full">
                <div
                    className={`${imageWidth()} mb-4 ml-4 mr-4 mt-4 rounded-md bg-wato-white-bone transition-all duration-700`}
                >
                    {/* div for now, change to image later */}
                </div>
                <div className="w-[100%]">
                    <div className="relative">
                        {selected && (
                            <button
                                onClick={() => {
                                    onToggle(-1);
                                    setHovered(false);
                                    setContent(selected ? body : blurb);
                                }}
                                className="absolute right-0 top-0 mr-2 mt-2 font-bold"
                            >
                                X
                            </button>
                        )}
                    </div>
                    <div className="mb-1 mt-3 text-sm font-bold text-white lg:text-xl">
                        {isHovered || selected ? (
                            <div>
                                {title}{" "}
                                <span className="text-wato-teal">{"//"}</span>
                            </div>
                        ) : (
                            title
                        )}
                    </div>
                    <div
                        className={`content-${idx} mr-3 mt-3 rounded-md text-wato-white-bone transition-opacity`}
                    >
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
