interface PagerProps {
    identifier: string;
    count: number;
    current: number;
    hidden?: boolean;
}

const Pager = ({ identifier, count, current, hidden }: PagerProps) => {
    const scrollTo = (idx: number) => {
        document
            .getElementById(`carousel-${identifier}-${idx}`)
            ?.scrollIntoView({ block: "start" });
    };

    return (
        <div
            className={`z-30 flex items-center transition-opacity duration-500 lg:flex-col ${
                hidden && "opacity-0"
            }`}
        >
            {[...Array(count)].map((_, i) => {
                const dotSize = i === current ? "max-xl:w-8 xl:h-8" : "w-8 h-8";

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
                            console.log(i);
                            scrollTo(i);
                        }}
                    ></div>
                );
            })}
        </div>
    );
};

export default Pager;
