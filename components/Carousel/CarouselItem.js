import Image from "next/image";
import { useEffect, useState } from "react";

const CarouselItem = ({ title, cta, blurb, body, image, selected, idx, onToggle }) => {
  let active = selected == idx;
  const [content, setContent] = useState(blurb);
  useEffect(() => {
    if (!active) {
      setContent(blurb);
    } else {
      setTimeout(()=>{
        setContent(body);
       }, 1400)
    }
  }, [active]);
  return (
    <div className={`m-5 h-[70vh] ${/*"group"*/ ""} ${!active && selected !== -1 ? "w-[0px] opacity-0 overflow-hidden" : "max-lg:w-[40vw] lg:w-[30%] delay-1000"}  transition-all duration-500`}>
      <div className={`relative h-[50vh] transition-all ${active ? "-translate-x-1/2 delay-200 w-[200%]" : "w-[100%]"} duration-1000`}>
        <Image src={image} fill className="rounded-sm object-cover" />
      </div>
      <div id={idx} className={`duration-1000 ${active && "translate-x-full -translate-y-full z-50 delay-200 h-[71.4%]"} ${!active && selected !== -1 ? "text-transparent" : "text-black"} relative flex ${active ? "w-[95%] mx-[2.5%] shadow-2xl" : "w-[90%] mx-[5%] h-[40%] group-hover:h-[45%] group-hover:mx-[2.5%] group-hover:w-[95%] group-hover:shadow-2xl"} translate-y-[-50%] flex-col rounded-sm border-[0.5px] border-[#A6A6A6] bg-white px-4 py-6 transition-all justify-center`}>
        <div className="flex flex-row justify-between">
          <div className="text-4xl font-medium">{title}</div>
          {
            active && <div className="text-slate-400 cursor-pointer" onClick={() => onToggle(idx)}>X</div>
          }
        </div>
        <div className={`font-light my-5 ${!active && "max-h-20"}`}>{content}</div>
        {
          !active && <div className={`${!active && selected !== -1 ? "text-transparent" : "text-[#1F5D96] delay-700"} cursor-pointer`} onClick={() => onToggle(idx)}>{cta} →</div>
        }
      </div>
    </div>
  );
};

export default CarouselItem;
