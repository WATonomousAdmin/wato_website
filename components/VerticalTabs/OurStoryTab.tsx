import { useInView } from "react-intersection-observer";
import TabBanner from "./TabBanner";
import Button from "../Button";
import { ReactNode, useEffect } from "react";

interface TabProps {
    identifier: string;
    title: string;
    body: string;
    children: ReactNode;
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
    children,
    idx,
    setVisible,
}: TabProps) => {
    const [ref, isVisible] = useInView({ threshold: 0.8 });
    useEffect(() => {
        setVisible(idx);
    }, [isVisible]);

    const scrollTo = (idx: number) => {
        document
            .getElementById(`carousel-${identifier}-${idx}`)
            ?.scrollIntoView();
    };

    return (
        <div
            id={`carousel-${identifier}-${idx}`}
            className={`flex min-w-[100vw] snap-start items-center justify-center px-16 py-24 max-lg:h-[90vh] max-lg:flex-col lg:min-h-[80vh] lg:px-44 lg:py-6 xl:px-60`}
            ref={ref}
        >
            <div className="items-left flex flex-col">
                <div>
                    <TabBanner title={title} body={body} />
                </div>
                <div className="ml-4">
                    <Button text={"See Next"} onClick={() => scrollTo(2)} />
                </div>
            </div>
        </div>
    );
};

export default OurStoryTab;
