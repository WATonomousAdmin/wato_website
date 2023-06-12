import AccordionContainer from "./AccordionContainer"
import Card from "./Card";

const JobPostingList = ({data}) => {
    const accordionData = [];
    for (const team in data) {
        accordionData.push({
            title: team,
            elements: data[team].map(posting => {
                return (
                <Card
                    title={posting.title}
                    subtitle={`${posting.team} - ${posting.subteam}`} 
                    body={[posting.location, posting.type]}
                    cta={"Apply"}
                    buttonLink={`/JobPostings/${posting.id}`}/>
                )
            })
        });
    }
    return (
        <div className="p-8 flex flex-col sm:p-16 md:px-32 bg-[#BCCEE0]">
            <div className="pb-16 text-center text-5xl text-black">
                Open Roles
            </div>
            <AccordionContainer data={accordionData}/>
        </div>
    )
}

export default JobPostingList