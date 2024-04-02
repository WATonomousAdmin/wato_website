import BigDeck from "../components/BigDeck/BigDeck";
import Hero from "../components/Hero";

import img01 from "../public/imgs/jobpostings-01.jpg";
import img02 from "../public/imgs/jobpostings-02.jpg";
import img03 from "../public/imgs/jobpostings-03.jpg";

const HERO_TITLE_PLACEHOLDER = "Sponsorship";
const HERO_SUBTITLE_PLACEHOLDER =
    "Help support WATonomous to change the world.";

const DECK_TITLE = "Why support WATonomous?";

const TITLE_PLACEHOLDER = "Title here";
const SMALL_CONTENT_PLACEHOLDER =
    "insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here.";
const CONTENT_PLACEHOLDER =
    "insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. insert text here. ";

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

const Sponsor = () => {
    return (
        <div className={`overflow-hidden scroll-smooth bg-cover`}>
            <Hero
                title={HERO_TITLE_PLACEHOLDER}
                subtitle={HERO_SUBTITLE_PLACEHOLDER}
                cta="Request to Sponsor"
                link="#rts"
                image="bg-SponsorHero"
            />
            <BigDeck
                title={DECK_TITLE}
                subtitle={SMALL_CONTENT_PLACEHOLDER}
                data={DeckData}
            />
        </div>
    );
};

export default Sponsor;
