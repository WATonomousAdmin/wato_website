import { BlogPostData } from "../../types";
import Post from "./Post";

interface BlogPostingsProps {
    title: string;
    postings: BlogPostData[];
}

const BlogPostings = ({ title, postings }: BlogPostingsProps) => {
    return (
        <div className="bg-wato-black-vanta py-12 sm:px-16 lg:px-44 xl:px-60">
            <div className="py-6 text-5xl font-bold text-white max-lg:text-center lg:text-5xl">
                {title}
            </div>
            <div className="flex flex-wrap justify-center lg:justify-between">
                {postings.map((x) => {
                    return <Post key={x.id} data={x} />;
                })}
            </div>
        </div>
    );
};

export default BlogPostings;
