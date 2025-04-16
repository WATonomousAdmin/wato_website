import { getBlogData, getBlogIds } from "../../lib/blogsDAL";
import HeroBlog from "../../components/BlogPostings/HeroBlog";
import Detail from "../../components/Detail";
import BadgeList from "../../components/Badge/BadgeList";
import IconButton from "../../components/IconButton";
import { BlogPostData, StaticProps } from "../../types";

interface BlogPageProps {
    blogData: BlogPostData;
}

export default function BlogPage({ blogData }: BlogPageProps) {
    return (
        <div className="overflow-x-hidden scroll-smooth">
            <HeroBlog blog={blogData} content={false} />
            <Detail title="published">{blogData.date}</Detail>
            <Detail title="written by">{blogData.authors.join(", ")}</Detail>
            <article className="prose prose-invert flex w-screen max-w-none justify-center bg-wato-black px-10 py-10">
                <div
                    className="w-screen md:w-[45rem] lg:w-[50rem] xl:w-[75rem]"
                    dangerouslySetInnerHTML={{ __html: blogData.contentHtml }}
                />
            </article>
            <Detail title="tags">
                <BadgeList badges={blogData.tags} />
            </Detail>
        </div>
    );
}

export async function getStaticPaths() {
    const paths = getBlogIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: StaticProps) {
    const blogData = await getBlogData(params.id);
    return {
        props: {
            blogData,
        },
    };
}
