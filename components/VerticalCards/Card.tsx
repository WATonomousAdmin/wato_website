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
    if (!selected && !somethingIsSelected) return "h-[30vw] xl:h-[10vw] opacity-100";
    else if (!selected && somethingIsSelected) return "h-0 z-0 opacity-0";
    else return "h-[80vw] xl:h-[40vw] z-10 m-5";
  };

  const containerBackground = () => {
    if (isHovered || selected) return "bg-wato-blue";
    else return "bg-wato-grey-clear";
  };

  const imageWidth = () => {
    if (!selected && !somethingIsSelected) return "w-1/3";
    else return "w-3/5";
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
      className={`${containerBackground()} items-center rounded-md ${containerHeight()} transition-all duration-700 overflow-hidden cursor-pointer`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        if (!selected) onToggle(idx);
      }}
    >
      <div className="flex h-full">
        <div
          className={`${imageWidth()} mr-4 ml-4 mt-4 mb-4 bg-wato-white-bone rounded-md transition-all duration-700
          `}
        >
          {/* div for now, change to image later */}
        </div>
        <div className="w-3/4">
        <div className="relative">
            {selected && (
              <button
                onClick={() => {
                  onToggle(-1);
                  setHovered(false);
                  setContent(selected ? body : blurb);
                }}
                className="absolute top-0 right-0 mt-2 mr-2 font-bold"
              >
                X
              </button>
            )}
          </div>
          <div className="text-black font-bold mt-3 mb-1 text-xl">
            {(isHovered || selected) ? (
              <div>
                {title} <span className="text-wato-teal">{"//"}</span>
              </div>
            ) : (
              title
            )}
          </div>
          <div className={`content-${idx} rounded-md text-wato-white-bone mr-3 transition-opacity`}>{content}</div></div>
      </div>
    </div>
  );
};

export default Card;