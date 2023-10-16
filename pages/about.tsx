import Hero from "../components/Hero";
import VerticalTabs from "../components/VerticalTabs/VerticalTabs";
import img01 from "../public/imgs/img1.jpg";
import Image from "next/image";
import Timeline from "../components/VerticalTabs/Timeline";

const HERO_PLACEHOLDER =
    "WATonomous is an agile team of future developers, engineers, and visionaries looking to become leaders in AV, Robotics, and AI";

const TAB_PLACEHOLDER =
    "Founded in 2017, WATonomous started from a vision to Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. D";

const IMAGE_PLACEHOLDER = (
    <Image alt="test" src={img01} fill className="rounded-sm object-cover" />
);

const TIMELINE = <Timeline></Timeline>;

const TabData = [
    {
        title: "What is WATonomous?",
        body: TAB_PLACEHOLDER,
        children: IMAGE_PLACEHOLDER,
    },
    {
        title: "Our Story",
        body: TAB_PLACEHOLDER,
        children: TIMELINE,
    },
    {
        title: "Our Vision",
        body: TAB_PLACEHOLDER,
        children: IMAGE_PLACEHOLDER,
    },
    {
        title: "Built By Many",
        body: TAB_PLACEHOLDER,
        children: IMAGE_PLACEHOLDER,
    },
    {
        title: "Into the Fire",
        body: TAB_PLACEHOLDER,
        children: IMAGE_PLACEHOLDER,
    },
];
const About = () => {
    return (
        <div>
            <Hero
                title="Driving Tomorrow, Today"
                subtitle={HERO_PLACEHOLDER}
                image="bg-main"
                cta="Dive In"
                link="#tabs"
            />
            <VerticalTabs data={TabData} />
        </div>
    );
};

export default About;
