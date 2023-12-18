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
            ?.scrollIntoView({ block: "center" });
    };

    return (
        <div
            className={`flex items-center transition-opacity duration-500 lg:flex-col ${
                hidden && "opacity-0"
            }`}
        >
            {[...Array(count)].map((_, i) => {
                return (
                    <div
                        key={i}
                        className={`m-4 h-3 w-3 cursor-pointer rounded-full transition-all duration-500 ${
                            i === current
                                ? "scale-125 transform h-8 bg-wato-blue"
                                : "bg-white bg-opacity-50"
                        }`}
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
