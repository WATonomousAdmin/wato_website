import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { VerticalCardData, Fade } from "../../types";
import { fadeElement } from "../../lib/utils";
import { IoClose } from "react-icons/io5";
import Button from "../../components/Button";

const info_button_txt = "Learn More"

interface CardProps extends VerticalCardData {
    selectedIdx: number;
    idx: number;
    src: string | undefined;
    onToggle(idx: number): any;
}

const Card = ({
    selectedIdx,
    idx,
    onToggle,
    title,
    blurb,
    body,
    src,
}: CardProps) => {
    const router = useRouter();

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
            return "lg:h-32 opacity-100 my-2 lg:my-5";
        else if (!selected && somethingIsSelected) return "h-0 z-0 opacity-0";
        else return "h-[30vh] lg:h-[30vh] z-10";
    };

    const containerBackground = () => {
        if (isHovered || selected) return "bg-wato-blue";
        else return "bg-wato-black";
    };

    useEffect(() => {
        const elements = [document.querySelector(`.content-${idx}`)];
        fadeElement(Fade.Out, elements);
        //Moved this here so there is no lag with the updated details being displayed; not sure if taking this out of the timeout is a problem
        setContent(selected ? body : blurb);

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
                            setContent(selected ? body : blurb);
                        }}
                        className="absolute right-2 top-1 text-xl text-white"
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
            <div className="grid h-full grid-cols-3 p-4">
                {/* <div
                    className={`col-span-1 mr-4 rounded-md bg-wato-white-bone transition-all duration-700`}
                >
                </div> */}

                <div className={`col-span-3 flex flex-col overflow-y-hidden`}>
                    <div className="mb-4 font-bold text-white lg:text-lg">
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
                        className={`content-${idx} mr-3 rounded-md text-sm text-wato-white-bone transition-opacity `}
                    >
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
