import { useState } from "react";
import Card from "./Card";
import img01 from "../../public/imgs/img1.jpg";

const SMALL_CONTENT_PLACEHOLDER =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor";
const FULL_CONTENT_PLACEHOLDER =
    "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

const CardData = [
    {
        title: "800+ Alumni , 3 YC Founders",
        blurb: "Members have gone off to pursue careers at top tech companies.",
        body: "Members of WATonomous have gone off to pursue careers at top tech companies like Nvidia, Tesla, Google, Apple, and more! Others have gone off to build their own startups in robotics and other fields. With some joining prestigious accelerators like Y Combinator.",
        image: img01,
    },
    {
        title: "90% Undergraduates",
        blurb: "WATonomous is a completely student-led team with strong support from the University of Waterloo.",
        body: "WATonomous is a completely student-led team with strong support from the University of Waterloo. We accept applicants from all years, prioritizing your ability to learn over your current technical prowess. WATonomous is dedicated to promoting equity, diversity, and inclusivity, gladly providing access to resources for those who need it.",
        image: img01,
    },
    {
        title: "10+ Research Papers",
        blurb: "WATonomous has a rich history of outputting cutting-edge research in AI and Robotics.",
        body: "WATonomous has a rich history of outputting cutting-edge research in AI and Robotics. We've pulished papers to IEEE conferences such as ICRA, IEEE-IV, IEEE-T-ITS, IEEE-T-CYB, and IEEE-JAS. All WATonomous research papers were written by undergraduates!",
        image: img01,
    },
];

const VerticalCards = () => {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const onToggle = (idx: number) => {
        if (selectedIndex === idx) setSelectedIndex(-1);
        else setSelectedIndex(idx);
    };

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
    });

    return (
        <div className="lg:py-auto flex w-full flex-col justify-center">
            {items}
        </div>
    );
};

export default VerticalCards;
