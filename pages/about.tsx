import Hero from "../components/Hero";
import VerticalTabs from "../components/VerticalTabs/VerticalTabs";
import img01 from "../public/imgs/img1.jpg";
import e7 from "../public/imgs/jobpostings-header.jpg";
import Image from "next/image";
import MemberList from "../components/VerticalTabs/MemberList";
import VerticalCards from "../components/VerticalCards/VerticalCards";
import Timeline from "../components/VerticalTabs/Timeline";

const HERO_TEXT =
    "WATonomous is an agile team of future developers, engineers, and visionaries looking to become leaders in Robotics and Artificial Intelligence.";

const TAB_PLACEHOLDER =
    "Founded in 2017, WATonomous started from a vision to Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. D";

const IMAGE_PLACEHOLDER = (
    <Image alt="test" src={img01} className="rounded-sm object-cover" />
);

const MemberData = [
    {
        imageSrc: e7,
        firstName: "Eddy",
        lastName: "Zhou",
        description:
            "Eddy is a robotics enthusiast interested in robot embodiment and driven by a vision of cobots. He enjoys leading charges.",
        position: "Co-Captain",
    },
    {
        imageSrc: e7,
        firstName: "Lena",
        lastName: "Ye",
        description:
            "Stumbled into Software by accident. Now serving as living proof of why you should join WATO.",
        position: "BizOps",
    },
    {
        imageSrc: e7,
        firstName: "Jivan",
        lastName: "Kesan",
        description: "",
        position: "World Modelling",
    },
    {
        imageSrc: e7,
        firstName: "Dan",
        lastName: "Huynh",
        description: "",
        position: "Perceptions Lead",
    },
    {
        imageSrc: e7,
        firstName: "Harsharan",
        lastName: "Rakhra",
        description: "",
        position: "Micro Autonomy",
    },
    {
        imageSrc: e7,
        firstName: "Manjot",
        lastName: "Dola",
        description: "",
        position: "Micro Autonomy",
    },
    {
        imageSrc: e7,
        firstName: "Andrew",
        lastName: "Shen",
        description: "",
        position: "ASD + World Modelling",
    },
    {
        imageSrc: e7,
        firstName: "Jessica",
        lastName: "Yuan",
        description: "",
        position: "ASD",
    },
    {
        imageSrc: e7,
        firstName: "Rodney",
        lastName: "Dong",
        description: "",
        position: "Micro Autonomy Lead",
    },
    {
        imageSrc: e7,
        firstName: "Neha",
        lastName: "Kasoju",
        description: "",
        position: "Vehicle Platform",
    },
    {
        imageSrc: e7,
        firstName: "Isaac",
        lastName: "Yu",
        description: "",
        position: "ASD",
    },
    {
        imageSrc: e7,
        firstName: "Sophie",
        lastName: "Xie",
        description: "",
        position: "World Modelling",
    },
    {
        imageSrc: e7,
        firstName: "Owen",
        lastName: "Leather",
        description: "",
        position: "Research Member",
    },
    {
        imageSrc: e7,
        firstName: "Krish",
        lastName: "Chopra",
        description: "",
        position: "Actions",
    },
    {
        imageSrc: e7,
        firstName: "Rajan",
        lastName: "Agarwal",
        description: "",
        position: "Actions",
    },
    {
        imageSrc: e7,
        firstName: "Mahir",
        lastName: "Mahota",
        description: "",
        position: "Autonomous Platform Director",
    },
    {
        imageSrc: e7,
        firstName: "Kai",
        lastName: "Ma",
        description: "",
        position: "Research Member",
    },
    {
        imageSrc: e7,
        firstName: "Lucas",
        lastName: "Reljic-Dumont",
        description: "",
        position: "Perceptions",
    },
    {
        imageSrc: e7,
        firstName: "Luc",
        lastName: "Edes",
        description: "",
        position: "Research Member",
    },
    {
        imageSrc: e7,
        firstName: "Thomason",
        lastName: "Zhou",
        description: "",
        position: "ASD",
    },
    {
        imageSrc: e7,
        firstName: "Kishore",
        lastName: "Yogaraj",
        description: "",
        position: "Perceptions Lead",
    },
    {
        imageSrc: e7,
        firstName: "Mark",
        lastName: "Chiu",
        description: "",
        position: "Research Member",
    },
    {
        imageSrc: e7,
        firstName: "Jadiha",
        lastName: "Aruleswaran",
        description: "",
        position: "BizOps Lead",
    },
    {
        imageSrc: e7,
        firstName: "Hasan",
        lastName: "Tahir",
        description: "",
        position: "Co-Captain",
    },
    {
        imageSrc: e7,
        firstName: "Ken",
        lastName: "Jiang",
        description: "",
        position: "BizOps Lead",
    },
];

const MEMBER_LIST = <MemberList data={MemberData} />;
const VERTICAL_CARDS = <VerticalCards />;
const TIMELINE = <Timeline />;

const TabData = [
    {
        title: "What is WATonomous?",
        body: `WATonomous has one mission: "To show the world a bunch of students can build autonomous robots." WATonomous is a diverse project-based team pursuing various forms of robotics. We are the leading software design team at the University of Waterloo, giving students the opportunity to learn and show off their industry-grade robotics expertise.`,
        children: VERTICAL_CARDS,
        last: false,
    },
    {
        title: "Our Story",
        body: "Founded in 2017, WATonomous started from a vision to build a self-driving car for the Autodrive Challenge. Following the competition, our team chose an unorthodox path to pursue autonomy on our own terms. Since then, WATonomous has diversified its projects to include all things autonomy, whether it be AVs, RC racing, follower bots, or humanoids.",
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
        body: "WATonomous is dedicated to fostering a close-knit community of robotics enthusiasts. Every member brings a unique strength to WATonomous, collaborating to push the boundaries of autonomous technology and make a lasting impact.",
        children: MEMBER_LIST,
        last: false,
    },
    {
        title: "Into the Fire",
        body: "Now that you've gotten to know what WATonomous is all about, it’s time to dive deeper. Explore our latest projects, meet the team behind the technology, or see how you can get involved. Step into the heart of our journey and discover what drives us forward.",
        children: IMAGE_PLACEHOLDER,
        last: true,
    },
];

const About = () => {
    return (
        <div>
            <Hero
                title="Driving Tomorrow, Today"
                subtitle={HERO_TEXT}
                cta="Dive In"
                link="#tabs"
            />
            <VerticalTabs data={TabData} />
        </div>
    );
};

export default About;
