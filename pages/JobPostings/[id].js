import Button from "../../components/Button.js";
import JobForm from "../../components/JobForm/JobForm.js";
import { getPostIds, getPostData } from "../../lib/jobPostingsDAL.js";

const JobPosting = ({ postData }) => {
  return (
    <div className="py-32 px-10 lg:px-44 scroll-smooth">
      <article className="max-w-none prose lg:prose-xl prose-h1:font-bold prose-h1:mb-0 prose-h2:font-medium prose-h2:mt-6 prose-a:no-underline prose-p:w-fit">
        <h1>
          {postData.title}
        </h1>
        <h2>
          {postData.subtitle}
        </h2>
          <Button text="Apply" anchor="#apply"/>
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

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default JobPosting;
