import { StaticImageData } from "next/image";
import Image from "next/image";

const MemberCard = ({
    imageSrc,
    firstName,
    lastName,
    description, // currently unused
    position,
}: MemberCardProps) => {
    return (
        <div className="flex h-52 flex-col items-center justify-center rounded bg-[#1A1A1A] bg-opacity-90 lg:bg-opacity-80 py-1 lg:h-72 lg:py-2">
            <div className="relative flex w-3/4 justify-center px-2 pb-2 lg:px-3 lg:pb-3">
                <Image
                    alt="Image of member"
                    src={imageSrc}
                    className="aspect-square rounded-full object-cover"
                    width={100}
                    height={100}
                />
            </div>
            <h2 className="-mb-1 text-sm font-bold text-wato-white-bone lg:-mb-2 lg:text-xl">
                {firstName}
            </h2>
            <h2 className="text-sm font-bold text-wato-white-bone lg:text-xl">
                {lastName}
            </h2>
            <h4 className="text-center text-xs text-wato-grey lg:text-base">{position}</h4>
            <p className="hidden">{description}</p>
        </div>
    );
};

export interface MemberCardProps {
    imageSrc: StaticImageData;
    firstName: string;
    lastName: string;
    description: string;
    position: string;
}

export default MemberCard;
