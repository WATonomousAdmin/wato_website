const Detail = ({ title, children }) => {
    return (
        <div
            className={`flex w-screen flex-row items-center bg-wato-white-bone px-5 py-6 sm:px-16 lg:px-60`}
        >
            <div className="w-48 font-bold uppercase text-wato-grey">
                {title}
            </div>
            <div className="text-black">{children}</div>
        </div>
    );
};

export default Detail;
