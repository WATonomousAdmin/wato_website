// import { useInView } from "react-intersection-observer";
import MemberCard, { MemberCardProps } from "../MemberCard";

interface MemberListProps {
    data: MemberCardProps[];
}

const MemberList = ({ data }: MemberListProps) => {
    return (
        <div className="-mt-5 flex flex-col">
            <div className="flex flex-row pb-2">
                <h1 className="pl-4 text-2xl text-wato-teal lg:text-4xl">
                    80+{" "}
                </h1>
                <h1 className="px-4 pt-2 text-white lg:text-xl">Members</h1>
                <h1 className="pl-6 text-2xl text-wato-teal lg:text-4xl">
                    800+{" "}
                </h1>
                <h1 className="px-4 pt-2 text-white lg:text-xl">Alumni</h1>
            </div>
            {/* <div className="flex space-x-4"> */}
            <div className="memberlist grid max-h-[45vh] grid-cols-3 gap-2 overflow-y-scroll px-2 lg:grid-cols-4 lg:gap-3">
                {/* <MemberCard imageSrc={e7} firstName="WATO" lastName="Member" description="This is a WATO member" position="Overlord" /> */}
                {data.map((member: MemberCardProps, id: number) => {
                    return (
                        <MemberCard
                            key={id}
                            imageSrc={member.imageSrc}
                            firstName={member.firstName}
                            lastName={member.lastName}
                            description={member.description}
                            position={member.position}
                        />
                    );
                })}
            </div>
            <div>
                <h4 className="p-1 text-white">...and many more!</h4>
            </div>
        </div>
    );
};

export default MemberList;
