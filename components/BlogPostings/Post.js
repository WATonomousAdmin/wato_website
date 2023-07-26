import Link from "next/link";
import BadgeList from "../Badge/BadgeList";
import Image from "next/image";

const Post = ({ data }) => {
    return (
        <div className="relative mb-9 flex w-[90%] flex-col rounded-sm bg-white p-5 md:w-[70%] lg:w-[48%] xl:w-[33%]">
            <div className="relative mb-5 h-64 w-full">
                <Image
                    src={data.image}
                    fill
                    className="rounded-sm object-cover"
                />
            </div>
            <div className="mb-5 text-4xl font-medium">
                {data.title}&nbsp;<span className="text-wato-teal">//</span>
            </div>
            <div className="mb-5">
                <span className="font-bold">{data.authors[0]}</span> •{" "}
                <span className="text-wato-grey">{data.date}</span>
            </div>
            <div className="mb-10 font-light">{data.description}</div>
            <div className="absolute bottom-5">
                <BadgeList badges={data.tags} />
            </div>
        </div>
    );
};

export default Post;
