import Link from "next/link";
import BadgeList from "../Badge/BadgeList";
import Image from "next/image";

const Post = ({data}) => {
    return(
        <div className="relative bg-white flex flex-col w-[90%] md:w-[70%] lg:w-[48%] xl:w-[33%] p-5 rounded-sm mb-9">
            <div className="relative w-full h-64 mb-5">
                <Image src={data.image} fill className="rounded-sm object-cover" />
            </div>
            <div className="text-4xl font-medium mb-5">
                {data.title}&nbsp;<span className="text-wato-teal">//</span>
            </div>
            <div className="mb-5">
                <span className="font-bold">{data.authors[0]}</span> • <span className="text-wato-grey">{data.date}</span>
            </div>
            <div className="font-light mb-10">
                {data.description}
            </div>
            <div className="absolute bottom-5">
                <BadgeList badges={data.tags}/>
            </div>
        </div>
    );
}

export default Post;
