import { useState } from "react";
import Card from './Card';
import img01 from "../../public/imgs/img1.jpg";

const SMALL_CONTENT_PLACEHOLDER = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
const FULL_CONTENT_PLACEHOLDER = "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

const CardData = [
  {
      title: "Statistic 1",
      blurb: SMALL_CONTENT_PLACEHOLDER,
      body: FULL_CONTENT_PLACEHOLDER,
      image: img01,
  },
  {
      title: "Achievement 1",
      blurb: SMALL_CONTENT_PLACEHOLDER,
      body: FULL_CONTENT_PLACEHOLDER,
      image: img01,
  },
  {
      title: "Statistic 2",
      blurb: SMALL_CONTENT_PLACEHOLDER,
      body: FULL_CONTENT_PLACEHOLDER,
      image: img01,
  },
  {
      title: "Achievement 2",
      blurb: SMALL_CONTENT_PLACEHOLDER,
      body: FULL_CONTENT_PLACEHOLDER,
      image: img01
  },
];


const VerticalCards = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const onToggle = ( idx: number ) => {
    if (selectedIndex === idx) setSelectedIndex(-1);
    else setSelectedIndex(idx);
  }

  const items = CardData.map((d, idx) => {
    return (
      <Card
      selectedIdx={selectedIndex}
      idx={idx}
      onToggle={onToggle}
      key={idx}
      title={d.title}
      blurb={d.blurb}
      body={d.body}
      />
    );
  })

  return (
  <div className="lg:py-auto flex flex-col h-full justify-center space-y-4">
    {items}
  </div>
  );
};

export default VerticalCards;