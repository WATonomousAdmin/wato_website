interface PagerProps {
    identifier: string;
    count: number;
    current: number;
    hidden?: boolean;
}

const Pager = ({ identifier, count, current, hidden }: PagerProps) => {

    const scrollTo = (idx: number) => {
        document.getElementById(`carousel-${identifier}-${idx}`)?.scrollIntoView();
    }

    return (
        <div className={`flex items-center lg:flex-col duration-500 transition-opacity ${hidden && "opacity-0"}`}>
            {[...Array(count)].map((_, i) => {
                return (
                    <div
                        key={i}
                        className={`m-4 w-3 h-3 rounded-full transition-all duration-500 cursor-pointer ${
                            i === current
                                ? "bg-wato-blue scale-125"
                                : "bg-white bg-opacity-50"
                        }`}
                        onClick={() => {scrollTo(i)}}
                    ></div>
                );
            })}
        </div>
    );
};

export default Pager;
