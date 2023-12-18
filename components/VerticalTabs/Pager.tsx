import { useState, useEffect } from 'react';

interface PagerProps {
    identifier: string;
    count: number;
    current: number;
    hidden?: boolean;
}

const Pager: React.FC<PagerProps> = ({ identifier, count, current, hidden }: PagerProps) => {
    const [isDesktop, setDesktop] = useState(false);

    useEffect(() => {
        const updateMedia = () => {
            setDesktop(window.innerWidth > 1200); // breakpoint
        };

        updateMedia();

        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    }, []);

    const scrollTo = (idx: number) => {
        document
            .getElementById(`carousel-${identifier}-${idx}`)
            ?.scrollIntoView({ block: "center" });
    };

    return (
        <div className={`flex items-center transition-opacity duration-500 lg:flex-col ${hidden ? "opacity-0" : ""}`}>
            {[...Array(count)].map((_, i) => {
                const dotClass = i === current ? (isDesktop ? "h-8" : "w-8") : (isDesktop ? "h-3" : "");

                return (
                    <div
                        key={i}
                        className={`m-4 h-3 w-3 cursor-pointer rounded-full transition-all duration-500 ${
                            i === current ? "scale-125 transform bg-wato-blue" : "bg-white bg-opacity-50"
                        } ${dotClass}`}
                        onClick={() => {
                            scrollTo(i);
                        }}
                    ></div>
                );
            })}
        </div>
    );
};

export default Pager;
