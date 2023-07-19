import Image from "next/image";
import { useEffect, useState } from "react";

const CarouselItem = ({selectedIdx, idx, onToggle, title, blurb, body, cta, image}) => {
    const selected = selectedIdx == idx;
    const somethingIsSelected = selectedIdx !== -1;

    const [content, setContent] = useState(blurb);

    const containerWidth = () => {
        if (!selected && !somethingIsSelected) return "w-[26rem] opacity-100 delay-500"
        else if (!selected && somethingIsSelected) return "w-0 z-0 opacity-0";
        else return "w-[40vw] z-10";
    }
    
    const containerTransform = () => {
        if (!selected && !somethingIsSelected) return ""; 
        else if (!selected && somethingIsSelected) return "";
        else return "-translate-x-48 delay-500";
    }

    const contentTransform = () => {
        if (!selected && !somethingIsSelected) return "w-96 p-5 h-52 -translate-y-24 translate-x-4";
        else if (!selected && somethingIsSelected) return "w-0 h-0 translate-y-0 translate-x-0";
        else return "w-96 p-5 h-[30rem] -translate-y-[30rem]  translate-x-[28rem] lg:translate-x-[48rem] delay-500";
    }

    const fadeElement = (direction, elements) => {
        for (const element of elements) {
          if (!element || !element.classList) continue;
          if (direction) {
            element.classList.add("opacity-1");
            element.classList.remove("opacity-0");
            continue;
          }
          element.classList.add("opacity-0");
          element.classList.remove("opacity-1");
        }
      }
    
      useEffect(() => {
        const elements = [document.querySelector(`.content-${idx}`)];
        fadeElement(0, elements);
        setTimeout(() => {
          fadeElement(1, elements);
          setContent(selected ? body : blurb);
        },1000)
      }, [selected]);

    return (
        <div className={`bg-transparent ${containerWidth()} ${containerTransform()} m-5 transition-all duration-700 h-[35rem]`}>
            <div className={`relative h-[30rem]`}>
                <Image src={image} fill className="object-cover rounded-sm transition-all"/>
            </div>
            <div className={`absolute rounded-sm bg-white ${contentTransform()} overflow-hidden transition-all duration-700`}>
                <div className="flex justify-between">
                    <div className="text-4xl font-medium mb-5">
                        {title}
                    </div>
                        {selected && 
                        <div onClick={() => onToggle(-1)} className="cursor-pointer text-slate-400">
                            X
                        </div>}
                    </div>
                <div className={`font-light content-${idx} transition-all`}>
                    {content}
                </div>
                {!selected &&
                <div onClick={() => onToggle(idx)} className="text-[#1F5D96] cursor-pointer">
                    {cta}
                </div>}
            </div>
        </div>
    );
}

export default CarouselItem;