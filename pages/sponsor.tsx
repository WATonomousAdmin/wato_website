import BigDeck from "../components/BigDeck/BigDeck";
import Hero from "../components/Hero";
import SponsorList from "../components/Sponsorship/SponsorList";

import img01 from "../public/imgs/jobpostings-01.jpg";
import img02 from "../public/imgs/jobpostings-02.jpg";
import img03 from "../public/imgs/jobpostings-03.jpg";

const HERO_TITLE_PLACEHOLDER = "Support our Future";
const HERO_SUBTITLE_PLACEHOLDER = "Help WATonomous change the world.";

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

import i1 from "../public/imgs/jobpostings-01.jpg";
import i2 from "../public/imgs/jobpostings-02.jpg";
import i3 from "../public/imgs/jobpostings-03.jpg";
const SPONSOR_TIERS = [
    {
        title: "Diamond",
        orgs: [i1, i2],
    },
    {
        title: "Gold",
        orgs: [i3],
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
                backgroundImage="bg-main"
            />
            <SponsorList sponsorTiers={SPONSOR_TIERS} />
        </div>
    );
};

export default Sponsor;
