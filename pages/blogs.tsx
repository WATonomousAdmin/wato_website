import { getBlogs } from "../lib/blogsDAL";
import HeroBlog from "../components/BlogPostings/HeroBlog";
import BlogPostings from "../components/BlogPostings/BlogPostings";
import { useState } from "react";
import Filter from "../components/Filter";
import { BlogPostData } from "../types";

interface BlogDataList {
    featured: BlogPostData[];
    spotlight: BlogPostData[];
    all: BlogPostData[];
    tags: string[];
}
interface BlogPageProps {
    allBlogsData: BlogDataList;
}

const Blogs = ({ allBlogsData }: BlogPageProps) => {
    const [filters, setFilters] = useState("");

    // just put all the post information in one string and filter it
    // not great but it works
    const blogFilter = (post: BlogPostData) => {
        return `${post.title} ${post.authors.join(
            " "
        )} ${post.date.toString()} ${post.description} ${post.tags.join(" ")}`
            .toLowerCase()
            .includes(filters.toLowerCase());
    };

    return (
        <div className="overflow-x-hidden bg-wato-grey-porcelain">
            <HeroBlog blog={allBlogsData.all[0]} content />
            <BlogPostings title={"Featured"} postings={allBlogsData.featured} />
            <Filter
                placeholder={"Search for a title, description, tag or author"}
                filters={filters}
                setFilters={setFilters}
            />
            <BlogPostings
                title={"All Articles"}
                postings={allBlogsData.all.filter(blogFilter)}
            />
        </div>
    );
};

export async function getStaticProps() {
    const allBlogsData = getBlogs();
    return {
        props: {
            allBlogsData,
        },
    };
}

export default Blogs;
