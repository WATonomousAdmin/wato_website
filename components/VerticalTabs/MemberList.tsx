// import { useInView } from "react-intersection-observer";
import MemberCard, { MemberCardProps } from "../MemberCard";

interface MemberListProps {
    data: MemberCardProps[]
}

const MemberList = ({data}: MemberListProps) => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row p-4">
                <h1 className="text-wato-teal text-4xl pl-4">80+ </h1>
                <h1 className="text-white pt-2 px-4 text-xl"> Members</h1>
                <h1 className="text-wato-teal pl-6 text-4xl">800+ </h1>
                <h1 className="text-white pt-2 px-4 text-xl"> Alumni</h1>
            </div>
            {/* <div className="flex space-x-4"> */}
            <div className="grid max-h-[80vh] grid-cols-3 gap-3 overflow-y-scroll px-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
            {/* <MemberCard imageSrc={e7} firstName="WATO" lastName="Member" description="This is a WATO member" position="Overlord" /> */}
            {data.map((member: MemberCardProps, id: number) => {
                return(
                <MemberCard key={id} imageSrc={member.imageSrc} firstName={member.firstName} lastName={member.lastName} description={member.description} position={member.position} />
                );
            })}
                <div>
                    <h4 className="text-white p-1">...and many more</h4>
                </div>
            </div>
        </div>
    )
}

export default MemberList;