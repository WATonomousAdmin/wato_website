const Badge = ({content}) => {
    return (
        <div className="bg-gradient-to-r from-[#1F5D96] to-[#46A3B1] text-white font-base uppercase px-1 mr-2 rounded-lg">
            {content}
        </div>
    );
}

export default Badge;