import JobForm from "../../components/JobForm.js";
import { getPostIds, getPostData } from "../../lib/jobPostingsDAL.js";

const JobPosting = ({ postData }) => {
  return (
    <div className="py-32 px-32 lg:px-44">
      <div>
        <a href="#apply">
            <div className="align-top font-medium text-lg text-zinc-100 bg-[#1F5D96] rounded-md flex items-center pb-2 pt-1 px-3 w-fit">
                Apply
            </div>
        </a>
      </div>
      <div
        id="job-posting"
        className="list-inside"
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
