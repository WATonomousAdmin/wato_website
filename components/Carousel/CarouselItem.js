import Image from "next/image";
import { useEffect, useState } from "react";

const CarouselItem = ({ title, cta, blurb, body, image, selected, idx, onToggle }) => {
  let active = selected == idx;
  const [content, setContent] = useState(blurb);

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
    const elements = [document.querySelector(`.content-${idx}`), document.querySelector(`.cta-${idx}`)];
    fadeElement(0, elements);
    setTimeout(() => {
      fadeElement(1, elements);
      setContent(active ? body : blurb);
    },1400)
  }, [active]);
  return (
    <div className={`m-5 h-[70vh] ${!active && selected !== -1 ? "w-[0px] opacity-0 overflow-hidden" : "max-lg:w-[40vw] lg:w-[30%] delay-1000"}  transition-all duration-500`}>
      <div className={`relative h-[50vh] transition-all ${active ? "-translate-x-1/2 delay-200 w-[200%]" : "w-[100%]"} duration-1000`}>
        <Image src={image} fill className="rounded-sm object-cover" />
      </div>
      <div id={idx} className={` duration-1000 ${active ? "translate-x-full -translate-y-full z-50 delay-200 h-[71.4%] w-[95%] mx-[2.5%]" : "translate-y-[-50%] w-[90%] mx-[5%] h-[40%]"} ${!active && selected !== -1 ? "text-transparent" : "text-black"} relative flex flex-col rounded-sm border-[0.5px] border-[#A6A6A6] bg-white px-4 py-6 transition-all justify-start`}>
        <div className="flex flex-row justify-between"> 
          <div className="text-4xl font-medium">{title}</div>
          {
            active && <div className="text-slate-400 cursor-pointer" onClick={() => onToggle(idx)}>X</div>
          }
        </div>
        <div className={`content-${idx} transition-opacity font-light my-5 ${!active && "max-h-20"}`}>{content}</div>
        {
          !active && <div className={`${!active && selected !== -1 ? "text-transparent" : "text-[#1F5D96]"} cta-${idx} cursor-pointer transition-color`} onClick={() => onToggle(idx)}>{cta} →</div>
        }
      </div>
    </div>
  );
};

export default CarouselItem;
