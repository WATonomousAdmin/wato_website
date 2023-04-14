import * as fs from 'fs'
import path from "path"
import matter from 'gray-matter'
import {marked} from 'marked'
import Link from 'next/link'

export default function BlogPage({frontmatter:{title,date,image},blog,content}){
    return <>
    <main className='container blogs'>
        <Link href='/blogs'>
         <a className="blog-btn blog-btn-back">Go Back</a>
        </Link>
        <div className="blog-card blog-card-page">
            <h1 className="post-title">{title}</h1>
            <div className="post-date">{date}</div>
            <img src={image} alt=''/>
            <div className="post-body">
                <div dangerouslySetInnerHTML={{__html:marked(content)}}></div>
            </div>
        </div>
        </main>
    </>
}
 

export async function getStaticPaths(){
    const files = fs.readdirSync(path.join('assets/blogs'))
    const paths =files.map(filename => ({
        params:{
            blog:filename.replace('.md','')
      }
    }))
    
    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps({params:{blog}}){
    const markdownWithMeta = fs.readFileSync(path.join('assets/blogs',blog +'.md'),'utf-8')

    const {data:frontmatter, content} = matter(markdownWithMeta)


    return {
        props:{
            frontmatter,
            blog,
            content
        }
    }
}



