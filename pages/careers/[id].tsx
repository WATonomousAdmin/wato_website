import Button from "../../components/Button";
import JobForm from "../../components/JobForm";
import { getPostIds, getPostData } from "../../lib/jobPostingsDAL";
import { JobPostingData, StaticProps } from "../../types";

interface JobPostingProps {
    postData: JobPostingData;
}

const FORM_ID = "apply";

const JobPosting = ({ postData }: JobPostingProps) => {
    return (
        <div className="scroll-smooth bg-wato-black px-10">
            <article className="prose prose-invert flex max-w-none justify-center bg-wato-black pt-40">
                <div className="flex flex-col">
                    <h1 className="mb-0">{postData.title}</h1>
                    <h2>{postData.subtitle}</h2>
                    <Button text="Jump to Application" src={`#${FORM_ID}`} />
                    <div
                        className="md:w-[45rem] lg:w-[50rem] xl:w-[75rem]"
                        dangerouslySetInnerHTML={{
                            __html: postData.contentHtml,
                        }}
                    />
                    <div id={FORM_ID} className="h-36" />
                    <hr />
                    <h2>Apply for this position:</h2>
                </div>
            </article>
            <div className="flex flex-col items-center justify-center">
                <div className="md:w-[45rem] lg:w-[50rem] xl:w-[75rem]">
                    <JobForm id={postData.id}></JobForm>
                </div>
            </div>
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

export async function getStaticProps({ params }: StaticProps) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export default JobPosting;
