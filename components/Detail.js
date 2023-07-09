const Detail = ({title, children, last}) => {
    return (
        <div className={`w-screen bg-[#F0F0F0] flex flex-row items-center sm:px-16 lg:px-60 py-6 border-b-[1px] ${!last && "border-b-[#A6A6A6]"}`}>
            <div className="text-[#737373] font-bold uppercase w-48">
                {title}
            </div>
            <div className="text-black">
                {children}
            </div>
        </div>
    );
}

export default Detail;