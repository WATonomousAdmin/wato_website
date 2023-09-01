interface BadgeProps {
    content: HTMLElement | Element | any;
}

const Badge = ({ content }: BadgeProps) => {
    return (
        <div className="font-base mr-2 line-clamp-1 text-ellipsis rounded-lg bg-badge px-1 uppercase text-white">
            {content}
        </div>
    );
};

export default Badge;
