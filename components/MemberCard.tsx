import { StaticImageData } from "next/image";
import Image from "next/image";
import { useState } from "react";

const MemberCard = ({imageSrc, firstName, lastName, description, position}: MemberCardProps) => {
    const [hovered, setHovered] = useState(false);

    return(
        <div className="flex flex-col items-center justify-center rounded bg-wato-grey-porcelain py-3"
            onMouseEnter={() => {setHovered(true)}}
            onMouseLeave={() => {setHovered(false)}}
        >
            <div className="px-3 pb-3 relative w-[90%]">  
                <Image alt="Image of member" src={imageSrc} className="rounded-full"/>  
            </div> 
            <h2 className="font-black -mb-2">{firstName}</h2>  
            <h2 className="font-black">{lastName}</h2>  
            <h4 className="text-wato-blue">{position}</h4>
            <h6 className="font-extralight text-xs align-center p-1 pl-4">{description}</h6> 
            <div>
            { hovered ?
                <></>
                // <h6 className="font-extralight text-xs align-center p-1 pl-4">{description}</h6>
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