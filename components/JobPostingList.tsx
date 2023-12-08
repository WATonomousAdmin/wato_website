import { JobPostingFrontmatter, JobPostingFrontmatterList } from "../types";

import AccordionContainer from "./AccordionContainer";
import Card from "./Card";

interface JobPostingListProps {
    data: JobPostingFrontmatterList;
    backgroundImage: string;
}
interface AccordionItem {
    title: string;
    elements: React.JSX.Element[];
}

const JobPostingList = ({data, backgroundImage} : JobPostingListProps) => {
    const accordionData : AccordionItem[] = [];
    for (const team in data) {
        accordionData.push({
            title: team,
            elements: data[team].map((posting : JobPostingFrontmatter) => {
                return (
                    <Card
                        key={posting.title}
                        title={posting.title}
                        subtitle={`${posting.team} - ${posting.subteam}`}
                        body={[posting.location, posting.type]}
                        cta={"Apply"}
                        buttonLink={`/careers/${posting.id}`}
                    />
                );
            }),
        });
    }
    return (
        <div
            id={"open-roles"}
            className={`flex flex-col ${backgroundImage} p-8 sm:p-16 lg:px-60 relative`}
        >
            <div className="absolute inset-0 opacity-80 bg-[rgb(30,32,33)]"></div>
            <div className="pb-16 text-center text-5xl font-bold text-white z-10">
                Open Roles
            </div>
            <AccordionContainer data={accordionData} />
        </div>
    );
};

export default JobPostingList;
