import Link from "next/link";
import BadgeList from "../Badge/BadgeList";
import Image from "next/image";
import { BlogPostData } from "../../types";

interface PostProps {
    data: BlogPostData;
}

const Post = ({ data }: PostProps) => {
    return (
        <div className="relative mb-2 flex w-full flex-col rounded-xl bg-wato-black transition-all duration-300 hover:shadow-NoOffset hover:shadow-wato-teal">
            <Link href={`/blogs/${data.id}`} className="p-8 text-white">
                <div className="relative mb-5 h-48 w-full">
                    <Image
                        alt={"post image"}
                        src={data.image}
                        fill
                        className="rounded-sm object-cover"
                    />
                </div>
                <div className="mb-1 text-2xl font-medium">
                    {data.title}&nbsp;
                    <span className="text-wato-teal">{"//"}</span>
                </div>
                <div className="mb-5">
                    <span className="font-bold">{data.authors[0]}</span> •{" "}
                    <span>{data.date}</span>
                </div>
                <div className="mb-10 text-sm font-light">
                    {data.description}
                </div>
                <div className="absolute bottom-5">
                    <BadgeList badges={data.tags} />
                </div>
            </Link>
        </div>
    );
};

export default Post;
