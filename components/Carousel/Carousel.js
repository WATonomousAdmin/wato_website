import { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";

const Carousel = ({ data }) => {
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
    <div className="mx-32 flex flex-row flex-wrap justify-center">{items}</div>
  );
};

export default Carousel;
