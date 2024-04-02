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
            className={`flex min-w-[100vw] snap-start px-4 py-24 max-lg:h-[90vh] max-lg:flex-col md:px-16 lg:min-h-[80vh] lg:px-44 lg:py-6 xl:px-60`}
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
                className={`relative flex items-center justify-center p-1 max-lg:mt-6 lg:w-1/2`}
            >
                {children}
            </div>
        </div>
    );
};

export default Tab;
