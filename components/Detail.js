const Detail = ({title, children, last}) => {
    return (
        <div className={`w-screen bg-wato-white-bone flex flex-row items-center sm:px-16 lg:px-60 py-6`}>
            <div className="text-wato-grey font-bold uppercase w-48">
                {title}
            </div>
            <div className="text-black">
                {children}
            </div>
        </div>
    );
}

export default Detail;