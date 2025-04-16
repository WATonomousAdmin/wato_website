interface BadgeProps {
    content: HTMLElement | Element | any;
}

const Badge = ({ content }: BadgeProps) => {
    return (
        <div className="mr-2 line-clamp-1 text-ellipsis rounded-lg bg-badge px-2 py-1 text-xs uppercase text-white">
            {content}
        </div>
    );
};

export default Badge;
