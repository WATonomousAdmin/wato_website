import * as fs from 'fs'
import path from "path"
import matter from 'gray-matter'
import {marked} from 'marked'
import Link from 'next/link'
import { getBlogData, getBlogIds } from '../../lib/blogsDAL'
import HeroBlog from '../../components/HeroBlog'
import Detail from '../../components/Detail'
import BadgeList from '../../components/Badge/BadgeList'
import Icon from '../../components/Icon'
import IconButton from '../../components/IconButton'

export default function BlogPage({blogData}){
    return (
        <div className="overflow-x-hidden scroll-smooth">
            <HeroBlog blog={blogData}/>
            <Detail title="published">
                {blogData.date}
            </Detail>
            <Detail title="written by" last>
                {blogData.authors.join(", ")}
            </Detail>
            <article className="py-32 px-10 lg:px-60 max-w-none prose lg:prose-xl prose-h1:font-bold prose-h1:mb-0 prose-h1:text-4xl prose-h2:font-medium prose-h2:mt-6 prose-a:no-underline prose-p:w-fit">
                <div
                dangerouslySetInnerHTML={{ __html: blogData.contentHtml }}
                />
            </article>
            <Detail title="tags">
                <BadgeList badges={blogData.tags}/>
            </Detail>
            <Detail title="share" last>
                <div className="flex flex-row">
                <IconButton content={"fa-instagram"}/>
                <IconButton content={"fa-linkedin"}/>
                <IconButton content={"fa-twitter"}/>
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

export async function getStaticProps({params}){
    const blogData = await getBlogData(params.id);
    return {
        props:{
            blogData,
        }
    };
}



