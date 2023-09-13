interface TabBannerProps {
    title: string;
    body: string;
}

const TabBanner = ({title, body} : TabBannerProps) => {
    return (
        <div className="w-full lg:w-1/2 bg-transparent text-white font-bold flex flex-col justify-center lg:p-5">
            <div className="text-3xl lg:text-5xl pb-5">
                {title}&nbsp;<span className="text-wato-grey">{"//"}</span>
            </div>
            <div className="text-base lg:text-lg">
                {body}
            </div>
        </div>
    );
};

export default TabBanner;
