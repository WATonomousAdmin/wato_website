import Link from "next/link";

const Post = ({post}) => {
    return(
        <div className='blog-card'>
            <img src={post.frontmatter.image} alt='' />

            <div className="post-date"> {post.frontmatter.date}</div>

            <h3>{post.frontmatter.title}</h3>
            <p>{post.frontmatter.description}</p>
            <Link href={`/blogs/${post.blog}`}>
            <a className='blog-btn'>Read More</a>
            </Link>
        </div>
    );
}

export default Post;
