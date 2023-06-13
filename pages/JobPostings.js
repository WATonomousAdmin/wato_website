import { getPostings } from "../lib/jobPostingsDAL.js";

import JobPostingList from "../components/JobPostingList.js";
import ContentPane from "../components/ContentPane.js";

import img01 from "../public/imgs/jobpostings-01.jpg";
import img02 from "../public/imgs/jobpostings-02.jpg";
import img03 from "../public/imgs/jobpostings-03.jpg";
import Hero from "../components/Hero.js";
import ExtendedContentPane from "../components/ExtendedContentPane.js";
import Carousel from "../components/Carousel/Carousel.js";

export const getStaticProps = async () => {
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
const CAROUSEL_TITLE = "Member Perks";

const CarouselData = [
  {
    title: TITLE_PLACEHOLDER,
    blurb: SMALL_CONTENT_PLACEHOLDER,
    body: CONTENT_PLACEHOLDER,
    cta: "Read more",
    image: img01,
  },
  {
    title: TITLE_PLACEHOLDER,
    blurb: SMALL_CONTENT_PLACEHOLDER,
    body: CONTENT_PLACEHOLDER,
    cta: "Read more",
    image: img02,
  },
  {
    title: TITLE_PLACEHOLDER,
    blurb: SMALL_CONTENT_PLACEHOLDER,
    body: CONTENT_PLACEHOLDER,
    cta: "Read more",
    image: img03,
  },
];

const JobPostings = ({ allPostingsData }) => {
  return (
    <div className={`overflow-hidden scroll-smooth bg-cover`}>
      <Hero
        image={"bg-JobPostingHero"}
        title={PAGE_TITLE}
        subtitle={SMALL_CONTENT_PLACEHOLDER}
        cta={"Open Roles"}
        link={"#open-roles"}
      />
      <ExtendedContentPane
        title={PANE1_TITLE}
        subtitle={SUBTITLE_PLACEHOLDER}
        img={img01}
        leftOriented={true}
      >
        {CONTENT_PLACEHOLDER}
      </ExtendedContentPane>
      <Carousel
        title={CAROUSEL_TITLE}
        subtitle={SMALL_CONTENT_PLACEHOLDER}
        data={CarouselData}
      />
      <ContentPane
        title={TITLE_PLACEHOLDER}
        subtitle={SUBTITLE_PLACEHOLDER}
        img={img02}
        leftOriented={true}
      >
        {CONTENT_PLACEHOLDER}
      </ContentPane>
      <ContentPane
        title={TITLE_PLACEHOLDER}
        subtitle={SUBTITLE_PLACEHOLDER}
        img={img02}
        leftOriented={false}
      >
        {CONTENT_PLACEHOLDER}
      </ContentPane>
      <JobPostingList data={allPostingsData} />
    </div>
  );
};

export default JobPostings;
