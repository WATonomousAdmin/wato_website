import { getPostings } from "../lib/jobPostingsDAL.js";

import JobPostingList from "../components/JobPostingList.js";
import ContentPane from "../components/ContentPane.js";

import img01 from "../public/imgs/jobpostings-01.jpg";
import img02 from "../public/imgs/jobpostings-02.jpg";
import img03 from "../public/imgs/jobpostings-03.jpg";
import Hero from "../components/Hero.js";
import Banner from "../components/Banner.js";
import CenteredContentPane from "../components/CenteredContentPane.js";
import Carousel from "../components/Carousel/Carousel.js";

export const getStaticProps = async () => {
  const allPostingsData = getPostings();
  return {
    props: {
      allPostingsData,
    },
  };
};

const TITLE_PLACEHOLDER = "Title here.";
const SUBTITLE_PLACEHOLDER = "Punchline Here.";
const SMALL_CONTENT_PLACEHOLDER = "insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here.";
const CONTENT_PLACEHOLDER =
  "insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. ";
const PAGE_TITLE = "Summer 2023 Applications \n Are Now Open!";
const PANE1_TITLE = "Why Choose WATonomous?";
const BANNER_TITLE = "Join our Mission";
const BANNER_SUBTITLE = "Driven With a Purpose, to Drive Change.";
const CAROUSEL_TITLE = "Why You Should Join WATonomous";

const CarouselData = [
  {
    title: TITLE_PLACEHOLDER,
    blurb: SMALL_CONTENT_PLACEHOLDER,
    body: CONTENT_PLACEHOLDER,
    cta: "Read more",
    image: img01    
  },
  {
    title: TITLE_PLACEHOLDER,
    blurb: SMALL_CONTENT_PLACEHOLDER,
    body: CONTENT_PLACEHOLDER,
    cta: "Read more",
    image: img02    
  },
  {
    title: TITLE_PLACEHOLDER,
    blurb: SMALL_CONTENT_PLACEHOLDER,
    body: CONTENT_PLACEHOLDER,
    cta: "Read more",
    image: img03    
  }
]

const JobPostings = ({ allPostingsData }) => {
  return (
    <div className={`overflow-x-hidden bg-cover font-bold`}>
      {/* bg-JobPostingBg */}
      <Hero
        image={"bg-JobPostingHero"}
        title={PAGE_TITLE}
      />
        <CenteredContentPane
          content={CONTENT_PLACEHOLDER}
          title={PANE1_TITLE}
          subtitle={SUBTITLE_PLACEHOLDER}
          img={img01}
          leftOriented={false}  
        />
        <Banner
          title={BANNER_TITLE}
          subtitle={BANNER_SUBTITLE}
        />
        <ContentPane
          content={CONTENT_PLACEHOLDER}
          title={TITLE_PLACEHOLDER}
          subtitle={SUBTITLE_PLACEHOLDER}
          img={img02}
          leftOriented={true}
        />
        <ContentPane
          content={CONTENT_PLACEHOLDER}
          title={TITLE_PLACEHOLDER}
          subtitle={SUBTITLE_PLACEHOLDER}
          img={img02}
          leftOriented={false}
        />
        <div className="text-5xl mb-10 lg:pl-32 max-lg:text-center">
            {CAROUSEL_TITLE}
        </div>
        <Carousel
          data={CarouselData}
        />
        <JobPostingList data={allPostingsData} />
        <div className="h-96"></div>
    </div>
  );
};

export default JobPostings;
