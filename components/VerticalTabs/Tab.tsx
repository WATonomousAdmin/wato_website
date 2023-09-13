import { useInView } from "react-intersection-observer";
import TabBanner from "./TabBanner";
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
    (idx: number): void
}

const Tab = ({ identifier, title, body, children, idx, setVisible } : TabProps) => {
    const [ref, isVisible] = useInView({threshold: 0.8});
    useEffect (() => {
        setVisible(idx);
    }, [isVisible]);
    return (
        <div id={`carousel-${identifier}-${idx}`} className={`flex max-lg:h-[90vh] lg:min-h-[80vh] max-lg:flex-col min-w-[100vw] px-16 lg:px-44 xl:px-60 py-24 lg:py-6 snap-start`} ref={ref}>
            <TabBanner title={title} body={body} />
            <div className={`max-lg:mt-6 max-lg:h-1/2 lg:w-1/2 relative`}>
                {children}
            </div>
        </div>
    );
};

export default Tab;
