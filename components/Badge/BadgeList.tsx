import Badge from "./Badge";

interface BadgeListProps {
    badges: string[];
}

const BadgeList = ({ badges }: BadgeListProps) => {
    return (
        <div className="flex overflow-hidden">
            {badges.map((text: string, idx: number) => {
                return <Badge key={idx} content={text} />;
            })}
        </div>
    );
};

export default BadgeList;
