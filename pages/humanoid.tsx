import { getPostings } from "../lib/jobPostingsDAL";

import { JobPostingFrontmatterList } from "../types";

import JobPostingList from "../components/JobPostingList";
import ContentPane from "../components/ContentPane";

//TODO replace the images with desired images
import imgpane01 from "../public/imgs/jobpostings-pane1.jpg";
import imgpane02 from "../public/imgs/all_logos.png";
import imgpane03 from "../public/imgs/jobpostings-pane3.jpg";

import Hero from "../components/Hero";

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


//TODO add proper text/content
const PAGE_TITLE = "Humanoid Page Title";
const HERO_TEXT =
    "Hero text";

const PANE1_TITLE = "Pane 1 Title";
const PANE1_SUBTITLE = "Pane 1 Subtitle";
const PANE1_CONTENT = `Pane 1 Content`;

const PANE2_TITLE = "Pane 2 Title";
const PANE2_SUBTITLE = "Pane 2 Subtitle";
const PANE2_CONTENT = `Pane 2 Content`;

const PANE3_TITLE = "Pane 3 Title";
const PANE3_SUBTITLE = "Pane 3 Subtitle";
const PANE3_CONTENT = `Pane 3 Content`;

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
