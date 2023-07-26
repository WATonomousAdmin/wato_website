const Badge = ({ content }) => {
    return (
        <div className="font-base mr-2 line-clamp-1 text-ellipsis rounded-lg bg-badge px-1 uppercase text-white">
            {content}
        </div>
    );
};

export default Badge;
