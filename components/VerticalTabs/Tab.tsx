import { useInView } from "react-intersection-observer";
import TabBanner from "./TabBanner";
import { useEffect } from "react";

interface TabProps {
    title: string;
    body: string;
    children: any;
    idx: number;
    setVisible: Function;
};

const Tab = ({ title, body, children, idx, setVisible } : TabProps) => {
    const [ref, isVisible] = useInView({threshold: 0.8, rootMargin: "100px 100px 100px 100px"});
    useEffect (() => {
        setVisible(idx);
    }, [isVisible]);
    return (
        <div className="flex h-screen snap-always snap-start flex-col max-lg:pr-10 lg:flex-row items-center bg-transparent" ref={ref}>
            <TabBanner title={title} body={body} />
            <div className="relative mr-5 sm:mr-16 lg:mr-44 xl:mr-60 h-[40%] lg:h-[60%] w-full lg:w-1/2">{children}</div>
        </div>
    );
};

export default Tab;
