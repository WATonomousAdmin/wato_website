import BadgeList from "./Badge/BadgeList";

const HeroBlog = ({blog, content}) => {
    return (
        <div 
        style={{"--bg-image":`url(${blog.image})`}}
        className="h-screen w-screen bg-[image:var(--bg-image)]">
            <div className="h-screen w-screen bg-gradient-to-t from-[#000000B0] flex items-end">
                <div className="mx-8 my-32 text-white md:mx-16 lg:mx-32">
                    <div className="whitespace-pre-line text-7xl font-black mb-8">
                        {blog.title} <span className="text-[#1F5D96]"> //</span>
                    </div>
                    {
                        content &&
                        <>
                            <div className="text-lg mb-3">
                                {blog.authors[0]} • {blog.date} 
                            </div>
                            <div className="text-xl mb-3 w-3/4">
                                {blog.description}
                            </div>
                            <div>
                                <BadgeList badges={blog.tags}/>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}

export default HeroBlog;