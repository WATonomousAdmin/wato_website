import { useInView } from "react-intersection-observer";
import TabBanner from "./TabBanner";
import Button from "../Button";
import { ReactNode, useEffect } from "react";

interface TabProps {
    identifier: string;
    title: string;
    body: string;
    idx: number;
    setVisible: setVisibleInterface;
}

interface setVisibleInterface {
    (idx: number): void;
}

const OurStoryTab = ({
    identifier,
    title,
    body,
    idx,
    setVisible,
}: TabProps) => {
    const [ref, isVisible] = useInView({ threshold: 0.8 });
    useEffect(() => {
        setVisible(idx);
    }, [isVisible]);

    return (
        <div
            id={`carousel-${identifier}-${idx}`}
            className={`flex min-w-[100vw] snap-start px-16 py-24 max-lg:h-[90vh] max-lg:flex-col lg:min-h-[80vh] lg:px-44 lg:py-6 xl:px-60`}
            ref={ref}
        >
            <TabBanner identifier={identifier} title={title} body={body} />
            <div className="flex w-full flex-col justify-center bg-transparent font-bold text-white lg:w-1/2 lg:p-5">
                <p>Hello</p>
            </div>
        </div>
    );
};

export default OurStoryTab;
