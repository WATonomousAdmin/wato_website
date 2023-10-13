import { useInView } from "react-intersection-observer";

import Tab from "./Tab";
import Pager from "./Pager";
import OurStoryTab from "./OurStoryTab";

import { ReactNode, useId, useState } from "react";

interface VerticalTabData {
    title: string;
    body: string;
    children: ReactNode;
}

interface VerticalTabsProps {
    data: VerticalTabData[];
}

const VerticalTabs = ({ data }: VerticalTabsProps) => {
    const [visibleIndex, setVisibleIndex] = useState(0);
    // generate a random key for identifying this carousel
    const carouselKey = useId();

    const [tabGroupRef, tabGroupVisible] = useInView({ threshold: 0.2 });
    return (
        <div className="flex flex-col justify-center bg-network">
            <div
                id="tabs"
                className={`no-scrollbar z-10 flex snap-x snap-mandatory flex-row bg-transparent transition-opacity duration-500 max-lg:overflow-x-scroll lg:w-full lg:flex-col`}
                ref={tabGroupRef}
            >
                {data.map((tab: VerticalTabData, idx: number) => {
                    return (
                        <div key={idx}>
                            {tab.title === "Our Story" ? (
                                <OurStoryTab
                                    identifier={carouselKey}
                                    idx={idx}
                                    title={tab.title}
                                    body={tab.body}
                                    setVisible={setVisibleIndex}
                                >
                                    {tab.children}
                                </OurStoryTab>
                            ) : (
                                <Tab
                                    identifier={carouselKey}
                                    idx={idx}
                                    key={idx}
                                    title={tab.title}
                                    body={tab.body}
                                    setVisible={setVisibleIndex}
                                >
                                    {tab.children}
                                </Tab>
                            )}
                        </div>
                    );
                })}
            </div>
            <div
                className={`z-20 flex h-[10vh] items-center justify-center transition-opacity duration-500 lg:fixed lg:-left-24 lg:top-1/2 xl:ml-60`}
            >
                <Pager
                    identifier={carouselKey}
                    count={data.length}
                    current={visibleIndex}
                    hidden={!tabGroupVisible}
                />
            </div>
        </div>
    );
};

export default VerticalTabs;
