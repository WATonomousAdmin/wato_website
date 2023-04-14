import * as fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/Header'
import Post from '../components/Post'
import {sortByDate} from '../utils'

export default function MyComponent({posts}) {
  return (
    <body>
      <div>
        <main className='container blogs'>
          <div className='posts'>
            {posts.map((post,index) => (
              <Post key={index} post ={post} />
            ))}
          </div>
        </main>
        </div>
    </body>

  )
}

export async function getStaticProps(){
  //Get files from file system
  const files = fs.readdirSync(path.join('assets/blogs'))
  
  const posts= files.map(filename=>{

    const blog =filename.replace('.md','')

    const markdownWithMeta = fs.readFileSync(path.join('assets/blogs',filename),'utf-8')

    const {data:frontmatter} = matter(markdownWithMeta)
    
    return{
      blog,
      frontmatter
    }
  })



  return {
    props:{
      posts: posts.sort(sortByDate)
    },
  }
}