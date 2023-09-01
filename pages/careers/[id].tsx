import Button from "../../components/Button";
import JobForm from "../../components/JobForm";
import { getPostIds, getPostData } from "../../lib/jobPostingsDAL";
import { JobPostingData, StaticProps } from "../../types";

interface JobPostingProps {
    postData: JobPostingData;
}

const JobPosting = ({ postData } : JobPostingProps) => {
    return (
        <div className="scroll-smooth px-10 py-32 lg:px-60">
            <article className="prose max-w-none lg:prose-xl prose-h1:mb-0 prose-h1:text-4xl prose-h1:font-bold prose-h2:mt-6 prose-h2:font-medium prose-p:w-fit prose-a:no-underline">
                <h1>{postData.title}</h1>
                <h2>{postData.subtitle}</h2>
                <Button text="Apply" src="#apply" />
                <div
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
            </article>
            <JobForm id={postData.id}></JobForm>
        </div>
    );
};

export async function getStaticPaths() {
    const paths = getPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params } : StaticProps) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export default JobPosting;
