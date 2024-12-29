import { JobPostingFrontmatter, JobPostingFrontmatterList } from "../types";

import AccordionContainer from "./AccordionContainer";
import Card from "./Card";

interface JobPostingListProps {
    data: JobPostingFrontmatterList;
    backgroundImage?: string;
}
interface AccordionItem {
    title: string;
    elements: React.JSX.Element[];
}

const JobPostingList = ({ data, backgroundImage }: JobPostingListProps) => {
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
            className={`flex flex-col ${
                backgroundImage ?? "bg-wato-black-vanta"
            } relative p-8 sm:p-16 lg:px-60`}
        >
            <div className="absolute inset-0 bg-[rgb(30,32,33)] opacity-80"></div>
            <div className="z-10 pb-16 text-center text-5xl font-bold text-white">
                Open Roles
            </div>
            <AccordionContainer data={accordionData} />
        </div>
    );
};

export default JobPostingList;
