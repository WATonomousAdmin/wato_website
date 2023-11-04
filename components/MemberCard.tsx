import { StaticImageData } from "next/image";
import Image from "next/image";
import { useState } from "react";

const MemberCard = ({imageSrc, firstName, lastName, description, position}: MemberCardProps) => {
    const [hovered, setHovered] = useState(false);

    return(
        <div className="flex flex-col items-center justify-center rounded bg-wato-grey-porcelain lg:w-[8vw] lg:min-w-[8vw]"
            onMouseEnter={() => {setHovered(true)}}
            onMouseLeave={() => {setHovered(false)}}
        >
            <Image alt="Image of member" src={imageSrc} className="rounded-full p-3" />
            <h2 className="font-semibold">{firstName + ","}</h2>
            <h2 className="pb-1 font-semibold">{lastName}</h2>
            <h4 className="pb-1 font-normal">{position}</h4>
            <div>
            { hovered ?
                <h6 className="font-extralight text-xs align-center p-1 pl-4">{description}</h6>
                :
                <></>
            }
            </div>
        </div>
    )
}

export interface MemberCardProps {
    imageSrc: StaticImageData,
    firstName: string,
    lastName: string,
    description: string,
    position: string
}

export default MemberCard;