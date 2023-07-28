import { getBlogData, getBlogIds } from "../../lib/blogsDAL";
import HeroBlog from "../../components/HeroBlog";
import Detail from "../../components/Detail";
import BadgeList from "../../components/Badge/BadgeList";
import IconButton from "../../components/IconButton";

export default function BlogPage({ blogData }) {
    return (
        <div className="overflow-x-hidden scroll-smooth">
            <HeroBlog blog={blogData} content="" />
            <Detail title="published">{blogData.date}</Detail>
            <Detail title="written by">{blogData.authors.join(", ")}</Detail>
            <article className="prose max-w-none px-10 py-32 lg:prose-xl prose-h1:mb-0 prose-h1:text-4xl prose-h1:font-bold prose-h2:mt-6 prose-h2:font-medium prose-p:w-fit prose-a:no-underline lg:px-60">
                <div
                    dangerouslySetInnerHTML={{ __html: blogData.contentHtml }}
                />
            </article>
            <Detail title="tags">
                <BadgeList badges={blogData.tags} />
            </Detail>
            <Detail title="share">
                <div className="flex flex-row">
                    <IconButton content={"fa-instagram"} onClick={() => {}} />
                    <IconButton content={"fa-linkedin"} onClick={() => {}} />
                    <IconButton content={"fa-twitter"} onClick={() => {}} />
                </div>
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

export async function getStaticProps({ params }) {
    const blogData = await getBlogData(params.id);
    return {
        props: {
            blogData,
        },
    };
}
