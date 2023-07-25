import Post from "./Post";

const BlogPostings = ({title, postings}) => {
    return (
        <div className="sm:px-16 lg:px-44 xl:px-60 pb-24">
            <div className="text-5xl text-bold my-12 max-lg:text-center">
                {title}
            </div>
            <div className="flex flex-wrap justify-center lg:justify-between">
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