import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const CAROUSEL_ROTATION_INTERVAL = 5000;

const MarqueeItem = ({ idx, isCurrent, content, onClick }) => {
  return (
    <div
      className={`m-2 flex w-64 items-center justify-center text-center font-bold ${
        isCurrent && false && "text-2xl text-[#1F5D96]"
      }`}
      onClick={() => onClick(idx)}
    >
      {content}
    </div>
  );
};

const Marquee = ({ currentIdx, setCurrentIdx, titles, fastTitles }) => {
  const onMarqueeItemClick = (idx) => {
    console.log(idx);
  };

  const MarqueeItems = titles.map((title, index) => {
    return (
      <MarqueeItem
        idx={index}
        isCurrent={index === Math.floor(titles.length / 2)}
        key={index}
        content={title}
        onClick={onMarqueeItemClick}
      />
    );
  });
  const FastMarqueeItems = fastTitles.map((title, index) => {
    return (
      <MarqueeItem
        idx={index}
        isCurrent={index === Math.floor(titles.length / 2)}
        key={index}
        content={title}
        onClick={onMarqueeItemClick}
      />
    );
  });
  return (
    <div className="flex justify-center">
      <div className="spotlight-container min-h-[5em] w-min overflow-hidden">
        {/* apply transforms here */}
        <div className="spotlight-mask absolute z-20 flex bg-[#BCCEE0] opacity-0">
          {FastMarqueeItems}
        </div>
        <div className="spotlight-list flex transition-all">{MarqueeItems}</div>
      </div>
    </div>
  );
};

const Spotlight = ({ postings }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [fastIdx, setFastIdx] = useState(0);
  const timer = useRef();

  const post = postings.at(currentIdx % postings.length);

  const getNext = () => transitionSpotlight(1, () => setFastIdx((currentIdx) => currentIdx + 1), () => setCurrentIdx((currentIdx) => currentIdx + 1));

  const getPrev = () => transitionSpotlight(-1, () => setFastIdx((currentIdx) => currentIdx - 1), () => setCurrentIdx((currentIdx) => currentIdx - 1));

  useEffect(() => {
    timer.current = setInterval(getNext, CAROUSEL_ROTATION_INTERVAL);
    return () => clearInterval(timer.current);
  }, []);

  const marqueePostings = [
    postings.at((currentIdx - 1) % postings.length),
    postings.at(currentIdx % postings.length),
    postings.at((currentIdx + 1) % postings.length),
  ];

  const fastPostings = [
    postings.at((fastIdx - 1) % postings.length),
    postings.at(fastIdx % postings.length),
    postings.at((fastIdx + 1) % postings.length),
  ];

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
  };

  const delay = (d) => {
    return new Promise((resolve) => setTimeout(resolve, d));
  };

  const transitionSpotlight = async (direction, fastFn, fn) => {
    const elements = document.querySelectorAll(`.spotlight`);
    const list = document.querySelector(`.spotlight-list`);
    const listMask = document.querySelector(`.spotlight-mask`);

    clearInterval(timer.current);
    timer.current = setInterval(getNext, CAROUSEL_ROTATION_INTERVAL);

    fastFn();

    fadeElement(0, elements);

    list.classList.add(
      direction === 1 ? "-translate-x-[271.6px]" : "translate-x-[271.6px]"
    );

    await delay(100);

    listMask.classList.remove("opacity-0");

    await delay(300);

    list.classList.remove(
      direction === 1 ? "-translate-x-[271.6px]" : "translate-x-[271.6px]"
    );
    list.classList.remove("transition-all");
    fn();

    await delay(100);

    listMask.classList.add("opacity-0");

    fadeElement(1, elements);

    list.classList.add("transition-all");
  };

  return (
    <div className={`flex h-[80vh] flex-col bg-[#BCCEE0] px-60 py-20`}>
      <Marquee
        currentIdx={currentIdx}
        fastTitles={fastPostings.map((x) => x.title)}
        setCurrentIdx={setCurrentIdx}
        titles={marqueePostings.map((x) => x.title)}
      />
      <div className="spotlight grid grid-cols-2 grid-rows-3 gap-x-24 transition-opacity">
        <div className="col-start-1 col-end-2 text-6xl font-medium">
          {post.title}
        </div>
        <div className="col-start-1 col-end-2">{post.description}</div>
        <div className="col-start-1 col-end-2">
          <span className="text-xl font-bold">Related</span>
          <div className="mt-1 flex">
            <div className="mr-4 h-32 w-64 bg-[#D3E3F3]">something</div>
            <div className="h-32 w-64 bg-[#D3E3F3]">something</div>
          </div>
        </div>
        <div className="relative col-start-2 col-end-3 row-start-1 row-end-4">
          <Image fill src={post.image} className="object-cover" />
        </div>
      </div>
      <div onClick={getPrev}>prev</div>
      <div onClick={getNext}>next</div>
    </div>
  );
};

export default Spotlight;
