import SponsorCard, { SponsorCardProps } from "./SponsorCard";

interface TierProps {
    title: string;
    sponsors: SponsorCardProps[];
}

const Tier = ({ title, sponsors }: TierProps) => {
    return (
        <div className="mb-32 flex flex-col items-center justify-center">
            <div className="w-min text-4xl font-bold text-white md:w-max">
                {title}&nbsp;<span className="text-wato-teal">{"//"}</span>
            </div>
            <section className="flex flex-wrap justify-center">
                {sponsors.map((x) => {
                    return <SponsorCard key={x.title} {...x} />;
                })}
            </section>
        </div>
    );
};

export default Tier;
