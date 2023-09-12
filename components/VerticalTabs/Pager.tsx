interface PagerProps {
    count: number;
    current: number;
}

const Pager = ({ count, current }: PagerProps) => {
    return (
        <div className="flex flex-col items-center">
            {[...Array(count)].map((_, i) => {
                return (
                    <div
                        key={i}
                        className={`my-2 h-10 w-1 rounded-sm transition-all duration-500 ${
                            i == current
                                ? "bg-wato-blue"
                                : "bg-white bg-opacity-50"
                        }`}
                    ></div>
                );
            })}
            <div
                className={`flex flex-col items-center ${
                    current ? "opacity-0" : "opacity-100"
                } transition-opacity duration-300`}
            >
                <div className=" text-white opacity-50">Scroll</div>
                <div className="text-white opacity-50 motion-safe:animate-bounce">
                    ⌄
                </div>
            </div>
        </div>
    );
};

export default Pager;
