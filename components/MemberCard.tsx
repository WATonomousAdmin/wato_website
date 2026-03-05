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
        <div className="flex min-h-[12.5rem] flex-col items-center overflow-hidden rounded-xl border border-wato-grey/20 bg-wato-black-vanta/85 px-3 py-3 text-center lg:min-h-[14.5rem] lg:px-4 lg:py-4">
            <div className="relative mb-2.5 flex w-full justify-center lg:mb-3">
                <Image
                    alt="Image of member"
                    src={imageSrc}
                    className="aspect-square rounded-full border-2 border-wato-teal/70 object-cover"
                    width={108}
                    height={108}
                />
            </div>
            <h2 className="min-h-[3rem] text-lg font-bold leading-snug text-wato-white-bone lg:min-h-[3.4rem] lg:text-xl">
                <span className="block whitespace-nowrap">{firstName}</span>
                <span className="block whitespace-nowrap">{lastName}</span>
            </h2>
            <h4 className="mt-1.5 max-w-[11rem] [display:-webkit-box] overflow-hidden break-words text-center text-xs font-medium leading-tight text-wato-grey [-webkit-box-orient:vertical] [-webkit-line-clamp:3] lg:max-w-[11.75rem] lg:text-sm">
                {position}
            </h4>
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
