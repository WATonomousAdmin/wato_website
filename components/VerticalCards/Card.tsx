import { useState, useEffect } from "react";
import { VerticalCardData } from "../../types";
import Image from "next/image";

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
  image,
}: CardProps) => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const selected = selectedIdx == idx;

  const somethingIsSelected = selectedIdx !== -1;

  const [content, setContent] = useState(blurb);

  const containerHeight = () => {
    if (!selected && somethingIsSelected) 
    return "h-0 hidden opacity-0 transition-opacity duration-700";
    else return "h-full";
  };

  const imageWidth = () => {
    if (!selected && !somethingIsSelected) return "w-1/3";
    else return "w-3/5";
  };

  useEffect(() => {
    setContent(selected ? body : blurb);
  }, [selected]);

  return (
    <div
      className={
        isHovered
          ? `flex-1 bg-wato-blue text-white rounded-md cursor-default hover:cursor-pointer ${containerHeight()}`
          : `flex-1 bg-wato-grey-clear text-white rounded-md ${containerHeight()}`
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        if (!selected) onToggle(idx);
      }}
    >
      <div className="flex justify-center h-full">
        <div
          className={`${imageWidth()} mr-4 ml-4 mt-4 mb-4 bg-wato-white-bone rounded-md`}
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
                }}
                className="absolute top-0 right-0 mt-2 mr-2"
              >
                X
              </button>
            )}
          </div>
          <p className="text-black font-bold mt-3 text-lg">
            {isHovered ? (
              <span>
                {title} <span className="text-wato-teal">//</span>
              </span>
            ) : (
              title
            )}
          </p>
          <p className="mt-2">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
