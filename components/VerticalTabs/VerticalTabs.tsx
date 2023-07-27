import Image from "next/image";

import Tab from "./Tab";
import Pager from "./Pager";
import Hero from "../Hero";

import img01 from "../../public/imgs/img1.jpg";
import img02 from "../../public/imgs/e7.png";
import img03 from "../../public/imgs/team.jpg";
import img04 from "../../public/imgs/jobpostings-02.jpg";
import img05 from "../../public/imgs/blog-01.png";
import { useState } from "react";
import car from "../../public/imgs/roadcar.png";

const TAB_PLACEHOLDER =
    "Founded in 2017, WATonomous started from a vision to Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. D";

const HERO_PLACEHOLDER = "WATonomous is an agile team of future developers, engineers, and visionaries looking to become leaders in AV, Robotics, and AI";

const VerticalTabs = () => {
    const [visible, setVisible] = useState(0);
    return (
        <div className="h-screen w-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll">
            <div className="absolute origin-bottom-left bottom-0 left-0 w-[30rem] z-0">
                <Image alt={"car"} src={car} className="object-cover"/>
            </div>
            <section className="flex h-screen w-screen snap-always snap-start justify-center bg-main">
                <div className="z-20">
                    <Hero title="Driving Tomorrow, Today" subtitle={HERO_PLACEHOLDER} image="bg-main" cta="Dive In" link="#tabs"/>
                </div>
            </section>
            <div className="flex h-screen w-screen snap-always snap-start flex-row bg-network">
                <div className="ml-5 sm:ml-16 lg:ml-44 xl:ml-60 flex w-20 items-center">
                    <Pager count={5} current={visible} />
                </div>
                <div id="tabs" className="w-full snap-y snap-mandatory overflow-y-scroll bg-transparent z-10">
                    <Tab
                        title="What is WATOnomous?"
                        body={TAB_PLACEHOLDER}
                        idx={0}
                        setVisible={setVisible}
                    >
                        <Image
                            alt="test"
                            src={img01}
                            fill
                            className="rounded-sm object-cover"
                        />
                    </Tab>

                    <Tab
                        title="Our Story"
                        body={TAB_PLACEHOLDER}
                        idx={1}
                        setVisible={setVisible}
                    >
                        <Image
                            alt="test"
                            src={img02}
                            fill
                            className="rounded-sm object-cover"
                        />
                    </Tab>

                    <Tab
                        title="Our Vision"
                        body={TAB_PLACEHOLDER}
                        idx={2}
                        setVisible={setVisible}
                    >
                        <Image
                            alt="test"
                            src={img03}
                            fill
                            className="rounded-sm object-cover"
                        />
                    </Tab>

                    <Tab
                        title="Built by Many"
                        body={TAB_PLACEHOLDER}
                        idx={3}
                        setVisible={setVisible}
                    >
                        <Image
                            alt="test"
                            src={img04}
                            fill
                            className="rounded-sm object-cover"
                        />
                    </Tab>

                    <Tab
                        title="Into the Fire"
                        body={TAB_PLACEHOLDER}
                        idx={4}
                        setVisible={setVisible}
                    >
                        <Image
                            alt="test"
                            src={img05}
                            fill
                            className="rounded-sm object-cover"
                        />
                    </Tab>
                </div>
            </div>
        </div>
    );
};

export default VerticalTabs;
