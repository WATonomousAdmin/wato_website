import AccordionContainer from "./AccordionContainer";
import Card from "./Card";

const JobPostingList = ({ data }) => {
    const accordionData = [];
    for (const team in data) {
        accordionData.push({
            title: team,
            elements: data[team].map((posting) => {
                return (
                    <Card
                        title={posting.title}
                        subtitle={`${posting.team} - ${posting.subteam}`}
                        body={[posting.location, posting.type]}
                        cta={"Apply"}
                        buttonLink={`/JobPostings/${posting.id}`}
                    />
                );
            }),
        });
    }
    return (
        <div
            id={"open-roles"}
            className="flex flex-col bg-wato-blue-gloomy p-8 sm:p-16 lg:px-60"
        >
            <div className="pb-16 text-center text-5xl font-bold">
                Open Roles
            </div>
            <AccordionContainer data={accordionData} />
        </div>
    );
};

export default JobPostingList;
