import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const CAROUSEL_ROTATION_INTERVAL = 50000;

const MarqueeItem = ({ idx, isCurrent, content, onClick }) => {
    return (
        <div
            className={`m-2 flex h-[10rem] w-[30%] items-center justify-center text-center font-bold lg:w-64 ${
                isCurrent && "text-xl text-wato-blue lg:text-3xl"
            }`}
            onClick={() => onClick(idx)}
        >
            {content}
        </div>
    );
};

const Marquee = ({ titles, fastTitles }) => {
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
        <div className="mb-12 flex justify-center border-b-2 border-wato-blue">
            <div className="spotlight-container min-h-[5em] overflow-hidden">
                {/* apply transforms here */}
                <div className="spotlight-mask absolute z-20 flex bg-wato-blue-gloomy opacity-0">
                    {FastMarqueeItems}
                </div>
                <div className="spotlight-list flex transition-all">
                    {MarqueeItems}
                </div>
            </div>
        </div>
    );
};

const Spotlight = ({ postings }) => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [fastIdx, setFastIdx] = useState(0);
    const timer = useRef();

    const post = postings.at(currentIdx % postings.length);

    const getNext = () =>
        transitionSpotlight(
            1,
            () => setFastIdx((currentIdx) => currentIdx + 1),
            () => setCurrentIdx((currentIdx) => currentIdx + 1)
        );

    // const getPrev = () =>
    //     transitionSpotlight(
    //         -1,
    //         () => setFastIdx((currentIdx) => currentIdx - 1),
    //         () => setCurrentIdx((currentIdx) => currentIdx - 1)
    //     );

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
        <div
            className={`flex flex-col bg-wato-blue-gloomy px-5 pb-10 sm:px-16 lg:px-44 xl:h-[80vh] xl:px-60`}
        >
            <Marquee
                fastTitles={fastPostings.map((x) => x.title)}
                titles={marqueePostings.map((x) => x.title)}
            />
            <div className="spotlight grid auto-rows-min gap-x-24 gap-y-12 transition-opacity lg:grid-cols-2">
                <div className="col-start-1 col-end-2 text-6xl font-medium">
                    {post.title}
                </div>
                <div className="col-start-1 col-end-2 text-xl font-light">
                    {post.description}
                </div>
                <div className="col-start-1 col-end-2">
                    <span className="text-xl font-bold">Related</span>
                    <div className="mt-2 flex">
                        <div className="mr-4 flex h-32 flex-col justify-between rounded-sm bg-wato-blue-water p-4 lg:w-64">
                            <div className="font-bold">
                                Harry Potter and the Goblet of Fire
                            </div>
                            <div className="font-light text-wato-blue">
                                Read more →
                            </div>
                        </div>
                        <div className="mr-4 flex flex-col justify-between rounded-sm bg-wato-blue-water p-4 lg:h-32 lg:w-64">
                            <div className="font-bold">The Sun Also Rises</div>
                            <div className="font-light text-wato-blue">
                                Read more →
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative col-start-2 col-end-3 row-start-1 row-end-4 max-lg:hidden">
                    <Image fill src={post.image} className="object-cover" />
                </div>
            </div>
            {/* <div onClick={getPrev}>prev</div>
      <div onClick={getNext}>next</div> */}
        </div>
    );
};

export default Spotlight;
