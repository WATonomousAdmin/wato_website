import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { remark } from "remark";
import html from "remark-html";
import { JobPostingFrontmatterList } from "../types";

interface JobPostingId {
    params: {
        id: string;
    };
}
interface JobPosting {
    id: string;
    title: string;
    subtitle: string;
    contentHtml: string;
}

const PATH = path.join(process.cwd(), "job_postings");

export const getPostings = () => {
    const files = fs.readdirSync(PATH);
    const categories: JobPostingFrontmatterList = {};
    files.map((filename) => {
        const id = filename.replace(/\.md$/, "");
        const filePath = path.join(PATH, filename);
        const content = fs.readFileSync(filePath, "utf8");
        const parsedContent = matter(content);
        parsedContent.orig = "";

        if (!(parsedContent.data.team in categories)) {
            categories[parsedContent.data.team] = [];
        }

        const { title, team, subteam, location, type } = parsedContent.data;
        categories[parsedContent.data.team].push({
            id,
            title,
            team,
            subteam,
            location,
            type,
        });
    });
    return categories;
};

export const getPostIds = (): JobPostingId[] => {
    const fileNames = fs.readdirSync(PATH);
    return fileNames.map((filename) => {
        return {
            params: {
                id: filename.replace(/\.md$/, ""),
            },
        };
    });
};

export const getPostData = async (id: string): Promise<JobPosting> => {
    const filePath = path.join(PATH, `${id}.md`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const parsedContent = matter(fileContents);
    const contentHtml = await remark().use(html).process(parsedContent.content);
    return {
        id,
        title: parsedContent.data.title,
        subtitle: `${parsedContent.data.team} - ${parsedContent.data.subteam}`,
        contentHtml: contentHtml.toString(),
    };
};
