import { getPostings } from "../lib/jobPostingsDAL.js";
import JobPostingList from "../components/JobPostingList.js";
import Image from "next/image";
import working from '../public/imgs/working.jpg';

export const getStaticProps = async () => {
    const allPostingsData = getPostings();
    return {
        props: {
            allPostingsData
        }
    };
}

const JobPostings = ({allPostingsData}) => {
    console.log(allPostingsData);
    return (
    <div className="overflow-x-hidden bg-zinc-800">
        <div className="flex justify-left items-end w-screen h-screen bg-JobPostingHero">
            <div className="font-sans text-6xl text-white m-32">
                Summer 2023 Applications
                <br></br>
                Are Now Open!
            </div>
        </div>
        <div className="p-32 flex items-center">
            <div className="h-96 w-[200em] relative">
                <Image src={working} alt={"People Working"} layout="fill" objectFit="contain"></Image>  
            </div>
            <div className="flex flex-col text-white px-10">
                <div className="font-medium text-6xl mb-10">
                    Why Choose WATonomous?
                </div>
                <div className="text-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in malesuada ex,
                    at dignissim libero. Vestibulum imperdiet fermentum risus sit amet sodales. Nulla
                    facilisi. Cras vitae scelerisque lacus. Quisque quis mauris placerat, posuere
                    lacus eget, facilisis ligula. Sed id efficitur odio. Nullam lobortis massa
                    vitae justo sagittis faucibus. Vestibulum ligula nisi, fermentum id nunc nec,
                    maximus vehicula velit. Nam nec ullamcorper odio. Ut aliquet ipsum a mauris
                    finibus cursus. Nulla iaculis velit enim, sit amet accumsan elit fermentum ac.
                </div>
            </div>
        </div>
        <div className="mx-32 flex flex-col" style={{"overflow-anchor": "none"}}>
            {/* <JobPostingList allPostingsData={allPostingsData}/> */}
            <div className="text-white text-5xl text-center">
                Open Roles
            </div>
            <JobPostingList
                data={allPostingsData}/>
        </div>
    </div>
    );
}

export default JobPostings