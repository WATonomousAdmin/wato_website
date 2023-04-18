import JobForm from "../../components/JobForm.js";
import { getPostIds, getPostData } from "../../lib/jobPostingsDAL.js";

const JobPosting = ({ postData }) => {
  return (
    <div className="py-32 px-32 lg:px-44">
      <div
        id="job-posting"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
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
