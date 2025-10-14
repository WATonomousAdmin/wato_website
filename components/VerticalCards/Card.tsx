import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { VerticalCardData, Fade } from "../../types";
import { fadeElement } from "../../lib/utils";
import { IoClose } from "react-icons/io5";
import { LucideIcon } from "lucide-react";

const info_button_txt = "Learn More"

interface CardProps extends VerticalCardData {
    selectedIdx: number;
    idx: number;
    src: string | undefined;
    icon?: LucideIcon;
    cardHeight?: string;
    onToggle(idx: number): any;
}

const Card = ({
    selectedIdx,
    idx,
    onToggle,
    title,
    body,
    src,
    icon: Icon,
    cardHeight = "lg:h-32",
}: CardProps) => {
    const router = useRouter();

    const [isHovered, setHovered] = useState(false);
    const [content, setContent] = useState("");

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
            return `${cardHeight} opacity-100 my-2 lg:my-5`;
        else if (!selected && somethingIsSelected) return "h-0 z-0 opacity-0";
        else return "h-[25vh] lg:h-[30vh] z-10";
    };

    const containerBackground = () => {
        if (isHovered || selected) return "bg-wato-blue";
        else return "bg-wato-black";
    };

    useEffect(() => {
        const elements = [document.querySelector(`.content-${idx}`)];
        fadeElement(Fade.Out, elements);
        //Moved this here so there is no lag with the updated details being displayed; not sure if taking this out of the timeout is a problem
        setContent(selected ? body : "");

        setTimeout(() => {
            fadeElement(Fade.In, elements);
        }, 1000);
    }, [selected]);

    return (
        <div
            //Note, I changed this to relative because positioning of the "Learn More" button was not working and needed the button container div to have a relative parent
            className={`relative w-full ${containerBackground()} items-center rounded-md ${containerHeight()} transition-all duration-700 lg:-mr-16`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
                 if (!selected) onToggle(idx);
            }}
        >
            <div className="absolute w-full h-full">
                {selected && (
                    <button
                        onClick={() => {
                            onToggle(-1);
                            setHovered(false);
                            setContent("");
                        }}
                        className="absolute right-4 top-3 text-xl text-white"
                    >
                        <IoClose />
                    </button>
                )}

                {selected && src && (
                    <button
                        onClick={() => {
                            onToggle(-1);
                            setHovered(false);
                            router.push(src)
                        }}
                        className="absolute right-2 bottom-0 translate-y-10 text-xl text-white font-bold"
                    >
                        {info_button_txt}
                    </button>

                    // Alternate Button component approach, works fine but for now I chose the above approach for consistency w/ IO close button

                    // <div className="absolute right-2 bottom-0 translate-y-10 text-xl">
                    //     <Button
                    //         text={info_button_txt}
                    //         color="text-white"
                    //         outline
                    //         src={src}
                    //         onClick={() => {
                    //             onToggle(-1);
                    //             setHovered(false);  
                    //         }}
                    //     >
                    //     </Button>
                    // </div>
                )}
                
            </div>
            <div className="grid h-full grid-cols-3 p-3 lg:p-4">
                {/* <div
                    className={`col-span-1 mr-4 rounded-md bg-wato-white-bone transition-all duration-700`}
                >
                </div> */}

                <div className={`col-span-3 flex flex-col justify-center overflow-y-hidden pl-3 lg:pl-6`}>
                    <div className="flex items-center gap-3 text-xl font-bold text-white lg:gap-4 lg:text-4xl">
                        {Icon && <Icon className="flex-shrink-0 w-7 h-7 lg:w-10 lg:h-10" />}
                        <div>
                            {isHovered || selected ? (
                                <div>
                                    {title}{" "}
                                    <span className="text-wato-teal">{"//"}</span>
                                </div>
                            ) : (
                                title
                            )}
                        </div>
                    </div>
                    {selected && (
                        <div
                            className={`content-${idx} mt-4 mr-3 rounded-md text-sm text-wato-white-bone transition-opacity lg:text-xl`}
                        >
                            {content}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
