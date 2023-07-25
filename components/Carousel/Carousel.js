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
        selectedIdx={selectedIndex}
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
    <div className="py-5 lg:py-auto bg-wato-grey-porcelain flex flex-col items-center">
      <div className="text-5xl text-center font-bold mb-5">
        {title}
      </div>
      <div className="text-xl text-center font-light lg:w-1/2 mb-5">
        {subtitle}
      </div>
      <div className="flex flex-row flex-wrap justify-center" style={{"overflowAnchor": "none"}}>
        {items}
      </div>
    </div>
  );
};

export default Carousel;
