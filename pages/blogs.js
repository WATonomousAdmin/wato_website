import { getBlogs } from '../lib/blogsDAL'
import HeroBlog from '../components/HeroBlog'
import BlogPostings from '../components/BlogPostings/BlogPostings';
import { useState } from 'react';
import Filter from '../components/Filter';
import Spotlight from '../components/BlogPostings/Spotlight';

const Blogs = ({allBlogsData}) => {
  const [filters, setFilters] = useState("");

  const blogFilter = (post) => {
    return (`${post.title} ${post.authors.join(" ")} ${post.date.toString()} ${post.description} ${post.tags.join(" ")}`).toLowerCase().includes(filters.toLowerCase());
  }

  return (
    <div className="bg-wato-grey-porcelain overflow-x-hidden">
      <HeroBlog blog={allBlogsData.all[0]} content/>
      <BlogPostings title={"Featured"} postings={allBlogsData.featured}/>
      <Spotlight postings={allBlogsData.spotlight}/>
      <Filter categories={[]} placeholder={"Search for a title, description, tag or author"} filters={filters} setFilters={setFilters}/>
      <BlogPostings title={"All Articles"} postings={allBlogsData.all.filter(blogFilter)}/>
    </div>
  )
}

export async function getStaticProps(){
  const allBlogsData = getBlogs();
  return {
    props: {
      allBlogsData,
    },
  };
}

export default Blogs;