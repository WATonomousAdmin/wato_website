import { BlogPostData } from "../../types";
import Post from "./Post";

interface BlogPostingsProps {
    title: string;
    postings: BlogPostData[];
}

const BlogPostings = ({ title, postings }: BlogPostingsProps) => {
    return (
        <div className="flex flex-col items-center bg-wato-black-vanta py-12">
            <div className="py-6 text-5xl font-bold text-white max-lg:text-center lg:text-5xl">
                {title}
            </div>
            <div className="flex w-screen justify-center md:w-[45rem] lg:w-[50rem] xl:w-[75rem]">
                <div className="grid grid-cols-1 gap-6 p-4 max-md:mx-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    {postings.map((x) => {
                        return <Post key={x.id} data={x} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default BlogPostings;
