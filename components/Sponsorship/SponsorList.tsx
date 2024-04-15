import Image, { StaticImageData } from "next/image";

interface SponsorProps {
    org: StaticImageData;
}
const Sponsor = ({ org }: SponsorProps) => {
    return (
        <div className="bg-wato-semigrey bg-opacity-60 p-5">
            <Image src={org} alt={"Sponsor"} className="w-96" />
        </div>
    );
};

interface SponsorTierProps {
    title: string;
    orgs: StaticImageData[];
}
const SponsorTier = ({ title, orgs }: SponsorTierProps) => {
    return (
        <div className="mb-10">
            <h2 className="mb-5 text-4xl font-bold text-white">{title}</h2>
            <div className="flex flex-wrap gap-3">
                {orgs.map((org) => {
                    return <Sponsor org={org} />;
                })}
            </div>
        </div>
    );
};

interface SponsorListProps {
    sponsorTiers: SponsorTierProps[];
}
const SponsorList = ({ sponsorTiers }: SponsorListProps) => {
    return (
        <div className="bg-main">
            <div className="bg-[rgb(30,32,33)] bg-opacity-80 px-14 py-10 lg:px-44 xl:px-60">
                <h1 className="mb-24 text-center text-6xl font-bold text-white">
                    Current Sponsors
                </h1>
                {sponsorTiers.map((sponsorTier) => {
                    return (
                        <SponsorTier
                            title={sponsorTier.title}
                            orgs={sponsorTier.orgs}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default SponsorList;
