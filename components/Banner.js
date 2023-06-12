const Banner = ({title, subtitle}) => {
    return (
        <div className="flex h-80 flex-col items-center justify-center bg-[#BCCEE0]">
          <div>{title}</div>
          <div className="mt-12 text-5xl">
            {subtitle}
          </div>
        </div>
    );
}

export default Banner;