const Badge = ({content}) => {
    return (
        <div className="bg-badge text-white font-base uppercase px-1 mr-2 rounded-lg text-ellipsis line-clamp-1">
            {content}
        </div>
    );
}

export default Badge;