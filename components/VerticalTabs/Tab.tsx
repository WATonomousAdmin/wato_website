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
        //  px-4 py-24 md:px-16 lg:px-44 lg:py-6 xl:px-60
        <div
            id={`carousel-${identifier}-${idx}`}
            className={`flex snap-start max-lg:h-[90vh] max-lg:w-screen max-lg:flex-col max-lg:px-4 max-lg:pr-5 lg:min-h-[900px]`}
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
                className={`relative flex items-center justify-center lg:w-1/2`}
            >
                {children}
            </div>
        </div>
    );
};

export default Tab;
