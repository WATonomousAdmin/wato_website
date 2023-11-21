import { getPostings } from "../lib/jobPostingsDAL";

import { JobPostingFrontmatterList } from "../types";

import JobPostingList from "../components/JobPostingList";
import ContentPane from "../components/ContentPane";

import img01 from "../public/imgs/jobpostings-01.jpg";
import img02 from "../public/imgs/jobpostings-02.jpg";
import img03 from "../public/imgs/jobpostings-03.jpg";
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

const TITLE_PLACEHOLDER = "Title here";
const SUBTITLE_PLACEHOLDER = "Punchline Here.";
const SMALL_CONTENT_PLACEHOLDER =
    "insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here.";
const CONTENT_PLACEHOLDER =
    "insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. ";
const PAGE_TITLE = "Join the Ride";
const PANE1_TITLE = "Why Choose WATonomous?";
const DECK_TITLE = "Member Perks";

const DeckData = [
    {
        title: TITLE_PLACEHOLDER,
        blurb: SMALL_CONTENT_PLACEHOLDER,
        body: CONTENT_PLACEHOLDER,
        cta: "Read more →",
        image: img01,
    },
    {
        title: TITLE_PLACEHOLDER,
        blurb: SMALL_CONTENT_PLACEHOLDER,
        body: CONTENT_PLACEHOLDER,
        cta: "Read more →",
        image: img02,
    },
    {
        title: TITLE_PLACEHOLDER,
        blurb: SMALL_CONTENT_PLACEHOLDER,
        body: CONTENT_PLACEHOLDER,
        cta: "Read more →",
        image: img03,
    },
];

const Careers = ({ allPostingsData }: JobPostingPageProps) => {
    return (
        <div className={`overflow-hidden scroll-smooth bg-cover`}>
            <Hero
                image={"bg-main"}
                title={PAGE_TITLE}
                subtitle={SMALL_CONTENT_PLACEHOLDER}
                cta={"Open Roles"}
                link={"#open-roles"}
            />
            <ContentPane
                title={PANE1_TITLE}
                subtitle={SUBTITLE_PLACEHOLDER}
                img={img01}
                leftOriented={true}
                backgroundImage={"bg-main"}
            >
                {CONTENT_PLACEHOLDER}
            </ContentPane>
            <BigDeck
                title={DECK_TITLE}
                subtitle={SMALL_CONTENT_PLACEHOLDER}
                data={DeckData}
            />
            <ContentPane
                title={TITLE_PLACEHOLDER}
                subtitle={SUBTITLE_PLACEHOLDER}
                img={img02}
                leftOriented={true}
                backgroundImage={"bg-main"}
            >
                {CONTENT_PLACEHOLDER}
            </ContentPane>
            <ContentPane
                title={TITLE_PLACEHOLDER}
                subtitle={SUBTITLE_PLACEHOLDER}
                img={img02}
                leftOriented={false}
                backgroundImage={"bg-main"}
            >
                {CONTENT_PLACEHOLDER}
            </ContentPane>
            <JobPostingList data={allPostingsData} />
        </div>
    );
};

export default Careers;
