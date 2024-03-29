import { useState } from "react";

interface AccordionCategoryProps {
    active: boolean;
    idx: number;
    onToggle(idx: number): any;
    title: string;
    elements: HTMLElement[] | Element[] | any[];
}

const AccordionCategory = ({
    active,
    idx,
    onToggle,
    title,
    elements,
}: AccordionCategoryProps) => {
    return (
        <div key={`${idx}-${title}`}>
            <div
                onClick={() => onToggle(idx)}
                className="my-2 flex w-auto cursor-pointer justify-between rounded-md bg-wato-blue p-5 text-2xl font-medium text-white sm:text-3xl"
            >
                <div>{title}</div>
                <div>{active ? "▲" : "▼"}</div>
            </div>
            <div
                className={`flex flex-wrap transition-all duration-500 ${
                    !active
                        ? "max-h-0 overflow-y-hidden opacity-0"
                        : "max-h-[200vh] opacity-100"
                }`}
            >
                {elements.map((e) => {
                    return e;
                })}
            </div>
        </div>
    );
};

interface AccordionContainerData {
    title: string;
    elements: HTMLElement[] | Element[] | any[];
}
interface AccordionContainerProps {
    data: AccordionContainerData[];
}

const AccordionContainer = ({ data }: AccordionContainerProps) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const onToggle = (idx: number) => {
        if (selectedIndex === idx) setSelectedIndex(-1);
        else setSelectedIndex(idx);
    };
    return (
        <div style={{ overflowAnchor: "none" }}>
            {data.map((d, idx) => {
                return (
                    <AccordionCategory
                        key={idx}
                        active={selectedIndex === idx}
                        idx={idx}
                        onToggle={onToggle}
                        title={d.title}
                        elements={d.elements}
                    />
                );
            })}
        </div>
    );
};

export default AccordionContainer;
