import { JobPostingFrontmatter, JobPostingFrontmatterList } from "../types";

import AccordionContainer from "./AccordionContainer";
import Card from "./Card";

interface JobPostingListProps {
    data: JobPostingFrontmatterList;
}
interface AccordionItem {
    title: string;
    elements: React.JSX.Element[];
}

const JobPostingList = ({ data }: JobPostingListProps) => {
    const accordionData: AccordionItem[] = [
        {
            title: "WATcloud",
            elements: [
                <Card
                    key={"Infra"}
                    title={"WATcloud Engineer"}
                    subtitle={`Cloud - General Application`}
                    body={["Waterloo, ON", "Full Time"]}
                    cta={"Apply"}
                    buttonLink={`https://cloud.watonomous.ca/get-involved/join`}
                />,
            ],
        },
    ];

    for (const team in data) {
        accordionData.push({
            title: team,
            elements: data[team].map((posting: JobPostingFrontmatter) => {
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
            className={`flex flex-col relative items-center bg-black bg-opacity-80 py-32`}
        >
            <div className="mx-auto w-full max-w-[100rem] px-8 md:px-16 lg:w-[90vw] lg:px-0">
            <div className="pb-16 text-center text-4xl font-bold text-white">
                Open Roles
            </div>
            <AccordionContainer data={accordionData} />
            </div>
        </div>
    );
};

export default JobPostingList;
