import Hero from "../components/Hero";

const Sponsor = () => {
    return (
        <div>
            <Hero
                title="Our Sponsors"
                subtitle={
                    "WATonomous would not exist without the generous support from our sponsors. We extend a huge thank you to every organization who helps turn our visions into reality."
                }
                cta="Thank You"
                link="#content"
                fixed
            />
        </div>
    );
};

export default Sponsor;
