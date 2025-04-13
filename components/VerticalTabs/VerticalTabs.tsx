import { useInView } from "react-intersection-observer";

import Tab from "./Tab";
import Pager from "./Pager";

import { ReactNode, useId, useState } from "react";

interface VerticalTabData {
    title: string;
    body: string;
    children: ReactNode;
    last: boolean;
}

interface VerticalTabsProps {
    data: VerticalTabData[];
}

const VerticalTabs = ({ data }: VerticalTabsProps) => {
    const [visibleIndex, setVisibleIndex] = useState(0);
    // generate a random key for identifying this carousel
    const carouselKey = useId();

    const [tabGroupRef, tabGroupVisible] = useInView({ threshold: 0.1 });
    return (
        <div className="relative flex w-screen justify-center bg-black bg-opacity-80">
            <div className="relative w-screen lg:w-[60rem] xl:w-[75rem]">
                <div
                    id="tabs"
                    className={`
                no-scrollbar
                relative z-10
                flex-col gap-y-36
                bg-transparent
                transition-opacity
                duration-500
                `}
                    ref={tabGroupRef}
                >
                    {data.map((tab: VerticalTabData, idx: number) => {
                        return (
                            <div key={idx} className="overflow-none">
                                <Tab
                                    identifier={carouselKey}
                                    idx={idx}
                                    key={idx}
                                    title={tab.title}
                                    body={tab.body}
                                    last={tab.last}
                                    setVisible={setVisibleIndex}
                                >
                                    {tab.children}
                                </Tab>
                            </div>
                        );
                    })}
                </div>
                <div
                    className={`fixed left-0 top-0 z-20 ml-12 flex h-full items-center justify-center transition-opacity duration-500`}
                >
                    <Pager
                        identifier={carouselKey}
                        count={data.length}
                        current={visibleIndex}
                        hidden={!tabGroupVisible}
                    />
                </div>
            </div>
        </div>
    );
};

export default VerticalTabs;
