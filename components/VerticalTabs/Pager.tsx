import { useState, useEffect } from "react";

interface PagerProps {
    identifier: string;
    count: number;
    current: number;
    hidden?: boolean;
}

const Pager = ({ identifier, count, current, hidden }: PagerProps) => {
    const [isDesktop, setDesktop] = useState(false);

    const scrollTo = (idx: number) => {
        document
            .getElementById(`carousel-${identifier}-${idx}`)
            ?.scrollIntoView({ block: "center" });
    };

    useEffect(() => {
        if (window.innerWidth > 1200) {
          setDesktop(true);
        } else {
          setDesktop(false);
        }
    
        const updateMedia = () => {
          if (window.innerWidth > 1200) {
            setDesktop(true);
          } else {
            setDesktop(false);
          }
        };
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
      }, []);
    

    return (
        <div
            className={`flex items-center transition-opacity duration-500 lg:flex-col ${
                hidden && "opacity-0"
            }`}
        >
            {[...Array(count)].map((_, i) => {
                const dotSize = i === current ? (isDesktop ? "h-8" : "w-8") : (isDesktop ? "w-8" : "h-8")

                return (
                    <div
                        key={i}
                        className={`m-4 h-3 w-3 cursor-pointer rounded-full transition-all duration-500 ${
                            i === current
                                ? `scale-125 bg-wato-blue ${dotSize}`
                                : "bg-white bg-opacity-50"
                        }
                        `}
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