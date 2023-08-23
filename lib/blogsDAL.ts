import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { remark } from "remark";
import html from "remark-html";

interface BlogsInterface {
    featured: Record<string, string>[];
    spotlight: Record<string, string>[];
    all: Record<string, string>[];
    tags: string[];
}

const PATH = path.join(process.cwd(), "/static/blogs");

const sortByDate = (a, b) => {
    return Date.parse(b.date) - Date.parse(a.date);
};

export const getBlogs = () => {
    const files = fs.readdirSync(PATH);
    const blogs : BlogsInterface = {
        featured: [],
        spotlight: [],
        all: [],
        tags: [],
    };
    const tags = new Set<string>();
    files.map((filename) => {
        const id = filename.replace(/\.md$/, "");
        const filePath = path.join(PATH, filename);
        const content = fs.readFileSync(filePath, "utf8");

        const parsedContent = matter(content);
        parsedContent.orig = "";

        if (parsedContent.data.spotlight)
            blogs.spotlight.push({ id, ...parsedContent.data });

        blogs.all.push({ id, ...parsedContent.data });

        // just add em all, the set will ignore duplicates lolol
        parsedContent.data.tags.map((tag) => tags.add(tag));
    });

    blogs.all.sort(sortByDate);

    blogs.featured = blogs.all.slice(0, 3);

    blogs.tags = Array.from(tags);

    return blogs;
};

export const getBlogIds = () => {
    const fileNames = fs.readdirSync(PATH);
    return fileNames.map((filename) => {
        return {
            params: {
                id: filename.replace(/\.md$/, ""),
            },
        };
    });
};

export const getBlogData = async (id) => {
    const filePath = path.join(PATH, `${id}.md`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const parsedContent = matter(fileContents);
    const contentHtml = await remark().use(html).process(parsedContent.content);
    return {
        id,
        title: parsedContent.data.title,
        date: parsedContent.data.date,
        authors: parsedContent.data.authors,
        tags: parsedContent.data.tags,
        image: parsedContent.data.image,
        contentHtml: contentHtml.toString(),
    };
};
