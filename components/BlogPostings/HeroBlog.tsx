import { BlogPostData } from "../../types";
import BadgeList from "../Badge/BadgeList";
import { FaArrowAltCircleRight } from "react-icons/fa";

interface HeroBlogProps {
    blog: BlogPostData;
    content: boolean;
}

const HeroBlog = ({ blog, content }: HeroBlogProps) => {
    return (
        <div
            style={{ backgroundImage: `url(${blog.image})` }}
            className="h-screen w-screen"
        >
            <div className="flex h-screen w-screen items-end bg-black bg-opacity-80">
                <div className="mx-8 my-32 text-white md:mx-16 lg:mx-32">
                    <div className="mb-8 whitespace-pre-line text-2xl font-black lg:text-5xl">
                        {blog.title}&nbsp;
                        <span className="text-wato-teal">{"//"}</span>
                    </div>
                    {content && (
                        <>
                            <div className="text-md lg:text-medium mb-3 font-medium">
                                {blog.authors[0]} • {blog.date}
                            </div>
                            <div className="text-md lg:text-medium mb-3 font-medium lg:w-3/4">
                                {blog.description}
                            </div>
                            <div className="mb-3">
                                <BadgeList badges={blog.tags} />
                            </div>
                            <div className="mt-4 flex w-full">
                                <a
                                    className="flex cursor-pointer items-center text-xl font-medium text-wato-teal"
                                    href={`/blogs/${blog.id}`}
                                >
                                    <p>Read More</p>
                                    <FaArrowAltCircleRight className="ml-3 text-2xl" />
                                </a>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeroBlog;
