import Badge from "./Badge";

const BadgeList = ({badges}) => {
    return (
        <div className="flex">
            {
                badges.map((x) => {
                    return(
                        <Badge key={x} content={x}/>
                    );
                })
            }
        </div>
    );
}

export default BadgeList