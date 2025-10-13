// the fact that theres a vertical cards 2 is horrible, ill fix it but i need to ship right now

import { useState } from "react";
import Card from "./Card";
import img01 from "../../public/imgs/img1.jpg";

const CardData = [
    {
        title: "Eve Autonomy",
        blurb: "Our historically core initiative building a self-driving car. ",
        body: "Members of WATonomous have gone off to pursue careers at top tech companies like Nvidia, Tesla, Google, Apple, and more! Others have gone off to build their own startups in robotics and other fields. With some joining prestigious accelerators like Y Combinator.",
        image: img01,
        src: "/projects/eve",
    },
    {
        title: "Micro Autonomy",
        blurb: "Our competition-driven initiative pursuing F1Tenth and other edge-computing platforms. ",
        body: "WATonomous is a completely student-led team with strong support from the University of Waterloo. We accept applicants from all years, prioritizing your ability to learn over your current technical prowess. WATonomous is dedicated to promoting equity, diversity, and inclusivity, gladly providing access to resources for those who need it.",
        image: img01,
        src: "/projects/micro",
    },
    {
        title: "Rover Autonomy",
        blurb: "Our competition-and-project driven initiative building indoor robots.",
        body: "WATonomous has a rich history of outputting cutting-edge research in AI and Robotics. We've pulished papers to IEEE conferences such as ICRA, IEEE-IV, IEEE-T-ITS, IEEE-T-CYB, and IEEE-JAS. All WATonomous research papers were written by undergraduates!",
        image: img01,
        src: "/projects/rover",
    },
    {
        title: "Humanoid Autonomy",
        blurb: "A joint initiative building humanoids learning from VR teleoperation.",
        body: "WATonomous has a rich history of outputting cutting-edge research in AI and Robotics. We've pulished papers to IEEE conferences such as ICRA, IEEE-IV, IEEE-T-ITS, IEEE-T-CYB, and IEEE-JAS. All WATonomous research papers were written by undergraduates!",
        image: img01,
        src: "/projects/humanoid",
    },
];

const VerticalCards2 = () => {
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
            src={d.src}
            />
        )
    });

    return (
        <div className="lg:py-auto flex w-full flex-col justify-center">
            {items}
        </div>
    );
};

export default VerticalCards2;
