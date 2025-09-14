import Hero from "../components/Hero";

const PAGE_TITLE = "Under Construction";
const HERO_TEXT = "This page isn't ready just yet!";

const Humanoid = () => {
    return (
        <div
            className={`flex flex-col gap-y-48 overflow-hidden scroll-smooth bg-black bg-cover`}
        >
            <Hero
                title={PAGE_TITLE}
                subtitle={HERO_TEXT}
                cta={"Go Back"}
                link={"/"}
                fixed
            />
        </div>
    );
};

export default Humanoid;
