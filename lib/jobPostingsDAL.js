import fs from 'fs';
import path, { parse } from 'path';
import matter from 'gray-matter';

import { remark } from 'remark';
import html from 'remark-html';

const PATH = path.join(process.cwd(), "job_postings");

export const getPostings = () => {
    const files = fs.readdirSync(PATH);
    const categories = {};
    files.map((filename) => {
        const id = filename.replace(/\.md$/, "");
        const filePath = path.join(PATH, filename);
        const content = fs.readFileSync(filePath, 'utf8');

        const parsedContent = matter(content);
        parsedContent.orig = "";

        if (!(parsedContent.data.team in categories)) {
            categories[parsedContent.data.team] = [];
        }

        categories[parsedContent.data.team].push({id, ...parsedContent.data});
    });
    return categories;
}

export const getPostIds = () => {
    const fileNames = fs.readdirSync(PATH);
    return fileNames.map((filename) => {
        return {
            params: {
                id: filename.replace(/\.md$/, "")
            }
        }
    });
}

export const getPostData = async (id) => {
    const filePath = path.join(PATH, `${id}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const parsedContent = matter(fileContents);
    const contentHtml = await remark()
        .use(html)
        .process(parsedContent.content);
    return {
        id,
        title: parsedContent.data.title,
        subtitle: `${parsedContent.data.team} - ${parsedContent.data.subteam}`,
        contentHtml: contentHtml.toString()
    }
}