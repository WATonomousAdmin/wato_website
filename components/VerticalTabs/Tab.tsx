import { useInView } from "react-intersection-observer";
import TabBanner from "./TabBanner";
import { ReactNode, useEffect } from "react";

interface TabProps {
    identifier: string;
    title: string;
    body: string;
    children: ReactNode;
    idx: number;
    last: boolean;
    setVisible: setVisibleInterface;
}

interface setVisibleInterface {
    (idx: number): void;
}

const Tab = ({
    identifier,
    title,
    body,
    children,
    idx,
    last,
    setVisible,
}: TabProps) => {
    const [ref, isVisible] = useInView({ threshold: 0.8 });
    useEffect(() => {
        setVisible(idx);
    }, [isVisible]);

    return (
        <div
            id={`carousel-${identifier}-${idx}`}
            className={`flex snap-start max-lg:flex-col lg:min-h-[900px]`}
            ref={ref}
        >
            <TabBanner
                title={title}
                identifier={identifier}
                idx={idx}
                last={last}
                body={body}
            />
            <div
                className={`relative flex items-center justify-center lg:w-1/2 ${last ? "max-lg:pb-16" : ""}`}
            >
                {children}
            </div>
        </div>
    );
};

export default Tab;
