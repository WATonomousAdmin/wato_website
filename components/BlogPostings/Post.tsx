import Link from "next/link";
import BadgeList from "../Badge/BadgeList";
import Image from "next/image";
import { BlogPostData } from "../../types";

interface PostProps {
    data: BlogPostData;
}

const Post = ({ data }: PostProps) => {
    return (
        <div className="relative mb-2 flex w-[90%] flex-col rounded-sm bg-white transition-transform hover:scale-[1.01] md:w-[70%] lg:w-[48%] xl:w-[33%]">
            <Link href={`/blogs/${data.id}`} className="p-5">
                <div className="relative mb-5 h-64 w-full">
                    <Image
                        alt={"post image"}
                        src={data.image}
                        fill
                        className="rounded-sm object-cover"
                    />
                </div>
                <div className="mb-5 text-4xl font-medium">
                    {data.title}&nbsp;
                    <span className="text-wato-teal">{"//"}</span>
                </div>
                <div className="mb-5">
                    <span className="font-bold">{data.authors[0]}</span> •{" "}
                    <span className="text-wato-grey">{data.date}</span>
                </div>
                <div className="mb-10 font-light">{data.description}</div>
                <div className="absolute bottom-5">
                    <BadgeList badges={data.tags} />
                </div>
            </Link>
        </div>
    );
};

export default Post;
