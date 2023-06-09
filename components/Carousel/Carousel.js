import { useState } from "react";
import CarouselItem from "./CarouselItem";

const Carousel = ({ title, subtitle, data }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const onToggle = (idx) => {
    if (selectedIndex === idx) setSelectedIndex(-1);
    else setSelectedIndex(idx);
  };

  const items = data.map((d, idx) => {
    return (
      <CarouselItem
        selected={selectedIndex}
        idx={idx}
        onToggle={onToggle}
        key={idx}
        title={d.title}
        blurb={d.blurb}
        body={d.body}
        cta={d.cta}
        image={d.image}
      />
    );
  });

  return (
    <div className="px-12 lg:px-60 py-12 bg-[#EBEDEF] flex flex-col items-center">
      <div className="text-5xl text-center font-bold mb-5">
        {title}
      </div>
      <div className="text-xl text-center font-light lg:w-1/2 mb-5">
        {subtitle}
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {items}
      </div>
    </div>
  );
};

export default Carousel;
