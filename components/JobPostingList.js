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
                    sz={"sq"}
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
        <AccordionContainer data={accordionData}/>
    )
}

export default JobPostingList