import SponsorCard, { SponsorCardProps } from "./SponsorCard";

interface TierProps {
    title: string;
    sponsors: SponsorCardProps[];
}

const Tier = ({ title, sponsors }: TierProps) => {
    return (
        <div className="mb-32">
            <h1 className="flex w-screen justify-center text-4xl font-bold text-white">
                {title}&nbsp;<span className="text-wato-teal">{"//"}</span>
            </h1>
            <section className="flex flex-wrap justify-center">
                {sponsors.map((x) => {
                    return <SponsorCard key={x.title} {...x} />;
                })}
            </section>
        </div>
    );
};

export default Tier;
