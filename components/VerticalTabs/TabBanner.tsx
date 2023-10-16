import Button from "../Button";

interface TabBannerProps {
    title: string;
    body: string;
    identifier: string;
    idx: number;
    last: boolean;
}

const TabBanner = ({ title, body, identifier, last, idx }: TabBannerProps) => {
    const scrollTo = (idx: number) => {
        console.log("scrolling");
        document
            .getElementById(`carousel-${identifier}-${idx}`)
            ?.scrollIntoView({ block: "center" });
    };

    return (
        <div className="flex w-full flex-col justify-center bg-transparent font-bold text-white lg:w-1/2 lg:p-5">
            <div className="pb-5 text-3xl lg:text-5xl">
                {title}&nbsp;<span className="text-wato-grey">{"//"}</span>
            </div>
            <div className="text-base lg:text-lg">{body}</div>
            {!last && (
                <div className="mb-4 mt-4">
                    <Button
                        text={"See Next"}
                        onClick={() => scrollTo(idx + 1)}
                    />
                </div>
            )}
        </div>
    );
};

export default TabBanner;
