import { BlogPostData } from "../../types";
import Post from "./Post";

interface BlogPostingsProps {
    title: string;
    postings: BlogPostData[];
}

const BlogPostings = ({ title, postings }: BlogPostingsProps) => {
    return (
        <div className="pb-24 sm:px-16 lg:px-44 xl:px-60">
            <div className="text-bold my-12 text-5xl max-lg:text-center">
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
