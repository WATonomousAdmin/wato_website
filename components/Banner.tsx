interface BannerProps {
    title: string;
    subtitle: string;
}

const Banner = ({ title, subtitle } : BannerProps) => {
    return (
        <div className="flex h-80 flex-col items-center justify-center bg-wato-blue-gloomy font-bold">
            <div>{title}</div>
            <div className="mt-12 text-5xl">{subtitle}</div>
        </div>
    );
};

export default Banner;
