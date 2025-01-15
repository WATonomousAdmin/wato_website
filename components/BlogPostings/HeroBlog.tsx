import { BlogPostData } from "../../types";
import BadgeList from "../Badge/BadgeList";
import Button from "../Button";

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
            <div className="flex h-screen w-screen items-end bg-gradient-to-t from-[#000000B0]">
                <div className="mx-8 my-32 text-white md:mx-16 lg:mx-32">
                    <div className="mb-8 whitespace-pre-line text-5xl font-black lg:text-7xl">
                        {blog.title}&nbsp;
                        <span className="text-wato-blue">{"//"}</span>
                    </div>
                    {content && (
                        <>
                            <div className="mb-3 text-sm lg:text-lg">
                                {blog.authors[0]} • {blog.date}
                            </div>
                            <div className="text-md mb-3 lg:w-3/4 lg:text-xl">
                                {blog.description}
                            </div>
                            <div className="mb-3">
                                <BadgeList badges={blog.tags} />
                            </div>
                            <div>
                                <Button
                                    text={"Read More"}
                                    src={`/blogs/${blog.id}`}
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeroBlog;
