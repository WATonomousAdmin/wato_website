import { getPostings } from "../lib/jobPostingsDAL";

import { JobPostingFrontmatterList } from "../types";

import JobPostingList from "../components/JobPostingList";
import ContentPane from "../components/ContentPane";

import imgtop from "../public/imgs/jobpostings-top.jpg";
import img01 from "../public/imgs/jobpostings-01.jpg";
import img02 from "../public/imgs/jobpostings-02.jpg";
import img03 from "../public/imgs/jobpostings-03.jpg";

import imgpane01 from "../public/imgs/jobpostings-pane1.jpg";
import imgpane02 from "../public/imgs/all_logos.png";
import imgpane03 from "../public/imgs/jobpostings-pane3.jpg";

import Hero from "../components/Hero";
import BigDeck from "../components/BigDeck/BigDeck";

interface JobPostingProps {
    props: {
        allPostingsData: JobPostingFrontmatterList;
    };
}

interface JobPostingPageProps {
    allPostingsData: JobPostingFrontmatterList;
}

export const getStaticProps = async (): Promise<JobPostingProps> => {
    const allPostingsData = getPostings();
    return {
        props: {
            allPostingsData,
        },
    };
};

const PAGE_TITLE = "Join the Ride";
const HERO_TEXT =
    "WATonomous welcomes all students from varying backgrounds and circumstances. You don't need to be a super-genius to join!";

const TOPPANE_TITLE = "Why Choose WATonomous?";
const PUNCHLINE = "Awesome culture, limitless growth potential.";
const EXTENDED_CONTENT = `WATonomous gives you the opportunity to learn industry-grade robotics development, project management, leadership, technical communication, and shareholder management. Joining our team means joining a community of likeminded individuals, all unified by a dream of changing the world for the better.`;

const DECK_TITLE = "Member Perks";
const DECK_SUBTITLE =
    "Contributors to WATonomous have access to a plethora of benefits.";

const PANE1_TITLE = "Equity, Diversity & Inclusion";
const PANE1_SUBTITLE = "Fostering Opportunities for people of all backgrounds.";
const PANE1_CONTENT = `We at WATonomous try our best to foster an inclusive environment by actively encouraging participation from students of all backgrounds, recognizing that diversity drives innovation in the field of robotics. This team promotes equity by providing equal opportunities for skill development through worksessions and mentorship, ensuring everyone, regardless of experience or identity, can contribute meaningfully to the team’s success.`;

const PANE2_TITLE = "Proud of our Alumni";
const PANE2_SUBTITLE = "WATonomous members are everywhere!";
const PANE2_CONTENT = `Members of WATonomous frequently go on to shape the future of robotics, AI, and autonomous technology at cutting-edge companies and research institutions. Their journeys highlight the transformative impact of hands-on experience, mentorship, and collaboration gained through our community. By staying connected with alumni, current members can draw inspiration, seek guidance, and envision their own path toward making meaningful contributions to the field.`;

const PANE3_TITLE = "Leadership";
const PANE3_SUBTITLE = "Anyone can be a lead at WATonomous";
const PANE3_CONTENT = `We believe that leaders emerge through initiative, creativity, and the willingness to support others. Effective leaders model the team’s core values—embracing challenges, proactiveness, and fostering a sense of belonging. Whether it’s guiding a project from concept to completion, mentoring newer members, or facilitating cross-team collaboration, strong leadership ensures that every individual can grow, contribute, and thrive within our community.`;

const DeckData = [
    {
        title: "Develop your Skills",
        blurb: "Acquire hands-on experience in autonomous systems development.",
        body: `WATonomous provides opportunities to learn industry-relevant robotics skills, guiding you through the fundamentals of autonomous systems—from sensor integration and data processing to machine learning–based navigation and reasoning. With hands-on projects and expert mentorship, you’ll gain the confidence and technical know-how to design, build, and deploy intelligent autonomous systems for real-world challenges, shaping a future where you can help lead the development of cutting-edge technologies in robotics, AI, and beyond.`,
        cta: "Read more →",
        image: img01,
    },
    {
        title: "Avenues for Recognition",
        blurb: "Showcase your achievements through our various outreach initiatives.",
        body: `At WATonomous, you have a plethora of opportunities to showcase your expertise to a wider audience. Through blog posts, vlog diaries, social media posts, and showcase events, you can highlight your accomplishments and innovation in the field of autonomous systems. These outreach initiatives not only validate your technical prowess but also help you build professional relationships and enhance your personal brand, opening doors to new projects, partnerships, and career milestones.`,
        cta: "Read more →",
        image: img02,
    },
    {
        title: "Community and Networking",
        blurb: "Get access to a wide community of roboticists, future-founders, and alumni.",
        body: `Become part of a thriving community of roboticists, aspiring entrepreneurs, and accomplished alumni who share your curiosity and drive. By engaging with large-scale robotics projects, you’ll connect with like-minded individuals, build mentoring opportunities, and collaborate on cutting-edge initiatives. These collective experiences will help you build a supportive network and gain valuable insights as you continue to grow both personally and professionally in the world of robotics.`,
        cta: "Read more →",
        image: img03,
    },
];

const Careers = ({ allPostingsData }: JobPostingPageProps) => {
    return (
        <div
            className={`flex flex-col gap-y-48 overflow-hidden scroll-smooth bg-black bg-cover`}
        >
            <Hero
                image={"bg-JobPostingHero"}
                title={PAGE_TITLE}
                subtitle={HERO_TEXT}
                cta={"Open Roles"}
                link={"#open-roles"}
            />
            <ContentPane
                title={TOPPANE_TITLE}
                subtitle={PUNCHLINE}
                img={imgtop}
                leftOriented={true}
            >
                {EXTENDED_CONTENT}
            </ContentPane>
            <BigDeck
                title={DECK_TITLE}
                subtitle={DECK_SUBTITLE}
                data={DeckData}
            />
            <ContentPane
                title={PANE1_TITLE}
                subtitle={PANE1_SUBTITLE}
                img={imgpane01}
                leftOriented={true}
            >
                {PANE1_CONTENT}
            </ContentPane>
            <ContentPane
                title={PANE2_TITLE}
                subtitle={PANE2_SUBTITLE}
                img={imgpane02}
                leftOriented={false}
            >
                {PANE2_CONTENT}
            </ContentPane>
            <ContentPane
                title={PANE3_TITLE}
                subtitle={PANE3_SUBTITLE}
                img={imgpane03}
                leftOriented={true}
            >
                {PANE3_CONTENT}
            </ContentPane>
            <JobPostingList data={allPostingsData} />
        </div>
    );
};

export default Careers;
