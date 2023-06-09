import {useState} from "react";

const AccordionCategory = ({active, idx, onToggle, title, elements}) => {
    return (
        <div key={`${idx}-${title}`}>
            <div onClick={() => onToggle(idx)} className="text-2xl sm:text-3xl text-white w-auto bg-[#1F5D96] rounded-md p-5 font-medium flex justify-between cursor-pointer my-2">
                <div>
                    {title}
                </div>
                <div>
                {
                    active ? "▲" : "▼"
                }
                </div>
            </div>
            <div className={`flex flex-wrap transition-all duration-500 ${!active ? "opacity-0 max-h-0 overflow-y-hidden" : "max-h-screen opacity-100"}`}>
                {
                    elements.map(e => {return e})
                }
            </div>
        </div>
    );
}

/*
data: [
    {
        title: "Accordion 1";
        elements: [<Card>]
    }
]
*/
const AccordionContainer = ({data}) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const onToggle = (idx) => {
        if (selectedIndex === idx)
            setSelectedIndex(-1);
        else
            setSelectedIndex(idx);
    }
    return (
        <div style={{"overflowAnchor": "none"}}>
            {
                data.map((d, idx) => {
                    return <AccordionCategory
                        active={selectedIndex === idx}
                        idx={idx}
                        onToggle={onToggle}
                        title={d.title}
                        elements={d.elements} />
                })
            }
        </div>
    );
}

export default AccordionContainer;