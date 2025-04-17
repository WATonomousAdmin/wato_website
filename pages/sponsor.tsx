import Hero from "../components/Hero";
import { SponsorCardProps } from "../components/Sponsor/SponsorCard";
import Tier from "../components/Sponsor/Tier";
import ContentPane from "../components/ContentPane";

import ats from "../public/imgs/sponsors/ats.png";
import weef from "../public/imgs/sponsors/weef.avif";
import mef from "../public/imgs/sponsors/mef.avif";
import avril from "../public/imgs/sponsors/avril.jpg";

import lumentum from "../public/imgs/sponsors/lumentum.png";
import intel from "../public/imgs/sponsors/intel.png";

import trimble from "../public/imgs/sponsors/trimble.png";

import altium from "../public/imgs/sponsors/altium.png";
import onep from "../public/imgs/sponsors/1 password.svg";
import google from "../public/imgs/sponsors/google.webp";
import github from "../public/imgs/sponsors/github.png";
import teleport from "../public/imgs/sponsors/teleport.png";
import cloudflare from "../public/imgs/sponsors/cloudflare.png";
import sentry from "../public/imgs/sponsors/sentry.png";
import elastic from "../public/imgs/sponsors/elastic.svg";
import velodyne from "../public/imgs/sponsors/velodyne.png";
import gm from "../public/imgs/sponsors/gm.png";
import foxglove from "../public/imgs/sponsors/foxglove.png";

import paneImage from "../public/imgs/sponsor.jpg";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useModal } from "../lib/ModalContext";

const GOLD_SPONSORS: SponsorCardProps[] = [
    {
        title: "ATS",
        image: ats,
    },
    {
        title: "WEEF",
        image: weef,
    },
    {
        title: "MEF",
        image: mef,
    },
    {
        title: "AVRIL",
        image: avril,
    },
];

const SILVER_SPONSORS: SponsorCardProps[] = [
    {
        title: "Lumentum",
        image: lumentum,
    },
    {
        title: "Intel",
        image: intel,
    },
];

const BRONZE_SPONSORS: SponsorCardProps[] = [
    // {
    //     title: "Vector",
    //     image: vector,
    // },
    {
        title: "Trimble",
        image: trimble,
    },
];

const PRODUCT_SPONSORS: SponsorCardProps[] = [
    {
        title: "Altium",
        image: altium,
    },
    {
        title: "1Password",
        image: onep,
    },
    {
        title: "Google",
        image: google,
    },
    {
        title: "Github",
        image: github,
    },
    {
        title: "Teleport",
        image: teleport,
    },
    {
        title: "Cloudflare",
        image: cloudflare,
    },
    {
        title: "Sentry",
        image: sentry,
    },
    {
        title: "Elastic",
        image: elastic,
    },
    {
        title: "Velodyne",
        image: velodyne,
    },
    {
        title: "GM",
        image: gm,
    },
    {
        title: "Foxglove",
        image: foxglove,
    },
];

const Sponsor = () => {
    const modalContext = useModal();

    const supportAction = () => {
        modalContext.setSponsorship(true);
        modalContext.setOpen(true);
    };

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
            <div>
                <div
                    id="content"
                    className={`relative flex flex-col items-center bg-[#000000CC] pt-32`}
                >
                    <Tier title="GOLD SPONSORS" sponsors={GOLD_SPONSORS} />
                    <Tier title="SILVER SPONSORS" sponsors={SILVER_SPONSORS} />
                    <Tier title="BRONZE SPONSORS" sponsors={BRONZE_SPONSORS} />
                    <Tier
                        title="PRODUCT SPONSORS"
                        sponsors={PRODUCT_SPONSORS}
                    />
                </div>
                <ContentPane
                    title={"Want to join these organizations?"}
                    subtitle={""}
                    img={paneImage}
                    leftOriented={false}
                >
                    <p className="mb-5">
                        We're always looking to push boundaries and show what a
                        student design team can achieve. If you or your
                        organization are interested in supporting our mission,
                        we'd love to hear from you.
                    </p>
                    <div
                        id="apply"
                        className="flex cursor-pointer items-center text-base font-medium text-wato-teal"
                        onClick={supportAction}
                    >
                        <p>Support Us</p>
                        <FaArrowAltCircleRight className="ml-3 text-2xl" />
                    </div>
                </ContentPane>
            </div>
        </div>
    );
};

export default Sponsor;
