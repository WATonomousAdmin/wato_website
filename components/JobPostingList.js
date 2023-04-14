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
                    title={posting.team} 
                    body={posting.title}
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