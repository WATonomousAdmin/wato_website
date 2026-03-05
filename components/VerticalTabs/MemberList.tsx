// import { useInView } from "react-intersection-observer";
import MemberCard, { MemberCardProps } from "../MemberCard";

interface MemberListProps {
    data: MemberCardProps[];
}

const MemberList = ({ data }: MemberListProps) => {
    return (
        <div className="-mt-4 flex flex-col rounded-xl border border-wato-grey/20 bg-wato-black-vanta/50 p-1.5 lg:-mt-2 lg:p-2">
            <div className="mb-3 flex flex-wrap items-center gap-2 px-0.5 lg:mb-4 lg:gap-3">
                <div className="rounded-full border border-wato-teal/40 bg-wato-black-vanta/80 px-3 py-1.5 lg:px-4 lg:py-2">
                    <span className="mr-1 text-2xl font-bold text-wato-teal lg:text-3xl">
                        80+
                    </span>
                    <span className="text-sm font-medium text-wato-white-bone lg:text-base">
                        Members
                    </span>
                </div>
                <div className="rounded-full border border-wato-teal/40 bg-wato-black-vanta/80 px-3 py-1.5 lg:px-4 lg:py-2">
                    <span className="mr-1 text-2xl font-bold text-wato-teal lg:text-3xl">
                        800+
                    </span>
                    <span className="text-sm font-medium text-wato-white-bone lg:text-base">
                        Alumni
                    </span>
                </div>
            </div>
            <div className="memberlist no-scrollbar grid max-h-[52vh] grid-cols-2 gap-x-2 gap-y-4 overflow-y-auto pb-3 pr-0 sm:grid-cols-4 lg:gap-x-3 lg:gap-y-5 lg:pb-4 lg:pr-1">
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
                <h4 className="px-1 pb-1 pt-3 text-sm font-medium text-wato-grey lg:text-base">
                    ...and many more!
                </h4>
            </div>
        </div>
    );
};

export default MemberList;
