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
        <div className="flex h-72 flex-col items-center justify-center rounded bg-[#1A1A1A] bg-opacity-80 py-3">
            <div className="relative flex w-3/4 justify-center px-3 pb-3">
                <Image
                    alt="Image of member"
                    src={imageSrc}
                    className="aspect-square rounded-full object-cover"
                    width={100}
                    height={100}
                />
            </div>
            <h2 className="-mb-2 text-xl font-bold text-wato-white-bone">
                {firstName}
            </h2>
            <h2 className="text-xl font-bold text-wato-white-bone">
                {lastName}
            </h2>
            <h4 className="text-center text-wato-grey">{position}</h4>
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
