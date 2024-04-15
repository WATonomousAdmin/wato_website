import Hero from "../components/Hero";
import VerticalTabs from "../components/VerticalTabs/VerticalTabs";
import img01 from "../public/imgs/img1.jpg";
import e7 from "../public/imgs/jobpostings-header.jpg";
import Image from "next/image";
import MemberList from "../components/VerticalTabs/MemberList";
import VerticalCards from "../components/VerticalCards/VerticalCards";
import Timeline from "../components/VerticalTabs/Timeline";

const HERO_PLACEHOLDER =
    "WATonomous is an agile team of future developers, engineers, and visionaries looking to become leaders in AV, Robotics, and AI";

const TAB_PLACEHOLDER =
    "Founded in 2017, WATonomous started from a vision to Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. D";

const IMAGE_PLACEHOLDER = (
    <Image alt="test" src={img01} className="rounded-sm object-cover" />
);

// dummy data
const MemberData = Array(20).fill({
    imageSrc: e7,
    firstName: "Member",
    lastName: "One",
    description: "This is a WATO Member",
    position: "Position",
});

const MEMBER_LIST = <MemberList data={MemberData} />;
const VERTICAL_CARDS = <VerticalCards />;
const TIMELINE = <Timeline />;

const TabData = [
    {
        title: "What is WATonomous?",
        body: TAB_PLACEHOLDER,
        children: VERTICAL_CARDS,
        last: false,
    },
    {
        title: "Our Story",
        body: TAB_PLACEHOLDER,
        children: TIMELINE,
        last: false,
    },
    {
        title: "Our Vision",
        body: TAB_PLACEHOLDER,
        children: IMAGE_PLACEHOLDER,
        last: false,
    },
    {
        title: "Built By Many",
        body: TAB_PLACEHOLDER,
        children: MEMBER_LIST,
        last: false,
    },
    {
        title: "Into the Fire",
        body: TAB_PLACEHOLDER,
        children: IMAGE_PLACEHOLDER,
        last: true,
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
