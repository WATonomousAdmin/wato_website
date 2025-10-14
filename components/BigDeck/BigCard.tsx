import Image from "next/image";
import { useEffect, useState } from "react";
import { BigCardData, Fade } from "../../types";
import { fadeElement } from "../../lib/utils";
import { IoClose } from "react-icons/io5";

interface BigCardProps extends BigCardData {
    selectedIdx: number;
    idx: number;
    onToggle(idx: number): any;
}

const BigCard = ({
    selectedIdx,
    idx,
    onToggle,
    title,
    blurb,
    body,
    cta,
    image,
}: BigCardProps) => {
    // is this item selected
    const selected = selectedIdx == idx;
    // is AN item selected
    const somethingIsSelected = selectedIdx !== -1;

    const [content, setContent] = useState(blurb);

    const containerWidth = () => {
        if (!selected && !somethingIsSelected)
            return "w-[calc(100vw-4rem)] lg:w-[24rem] opacity-100 m-5 delay-500";
        else if (!selected && somethingIsSelected)
            return "w-[calc(100vw-4rem)] opacity-100 m-5 lg:w-0 lg:z-0 lg:opacity-0";
        else return "w-[calc(100vw-4rem)] xl:w-[40vw] z-10 m-5";
    };

    const containerTransform = () => {
        if (!selected && !somethingIsSelected) return "";
        else if (!selected && somethingIsSelected) return "";
        else return "xl:-translate-x-48 my-5 delay-500";
    };

    const contentTransform = () => {
        if (!selected && !somethingIsSelected)
            return "w-[calc(100vw-8rem)] translate-x-3 lg:w-96 p-5 h-52 -translate-y-24 lg:translate-x-0";
        else if (!selected && somethingIsSelected)
            return "w-[calc(100vw-8rem)] translate-x-3 p-5 h-52 -translate-y-24 lg:w-0 lg:h-0 lg:translate-y-0 lg:translate-x-0";
        else
            return "w-[calc(100vw-6rem)] xl:w-96 p-5 h-[30rem] -translate-y-[30rem] xl:translate-x-[40vw] lg:delay-500";
    };

    useEffect(() => {
        const elements = [document.querySelector(`.content-${idx}`)];
        fadeElement(Fade.Out, elements);
        setTimeout(() => {
            fadeElement(Fade.In, elements);
            setContent(selected ? body : blurb);
        }, 500);
    }, [selected]);

    return (
        <div
            className={`bg-transparent ${containerWidth()} ${containerTransform()}  h-[35rem] transition-all duration-700`}
        >
            <div
                className={`${
                    selected
                        ? "shadow-NoOffset shadow-wato-teal"
                        : "hover:shadow-NoOffset hover:shadow-wato-teal"
                } duration-200`}
            >
                <div className={`relative h-[30rem] `}>
                    <Image
                        alt={"wow"}
                        src={image}
                        fill
                        className="rounded-sm object-cover transition-all"
                    />
                </div>
                <div
                    className={`absolute rounded-sm bg-neutral-800 ${contentTransform()} overflow-hidden transition-all duration-700 `}
                >
                    <div className="flex justify-between">
                        <div className="text-xl font-medium text-white lg:mb-5 lg:text-4xl">
                            {title}
                        </div>
                        {selected && (
                            <div
                                onClick={() => onToggle(-1)}
                                className="cursor-pointer text-wato-grey pr-2 pt-1"
                            >
                                <IoClose />
                            </div>
                        )}
                    </div>
                    <div
                        className={`mb-4 font-light text-white content-${idx} text-sm transition-all`}
                    >
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
        </div>
    );
};

export default BigCard;
