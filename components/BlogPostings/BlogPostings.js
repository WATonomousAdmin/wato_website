import Post from "./Post";

const BlogPostings = ({title, postings}) => {
    return (
        <div className="sm:px-16 lg:px-60 pb-12">
            <div className="text-5xl text-bold my-5">
                {title}
            </div>
            <div className="flex flex-wrap">
                {
                    postings.map((x) => {
                        return (
                            <Post key={x.id} data={x} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default BlogPostings;