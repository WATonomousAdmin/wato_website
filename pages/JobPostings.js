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
    <div className="overflow-x-hidden font-bold bg-JobPostingBg bg-black bg-cover">
        <div className="flex justify-left items-end w-screen h-screen bg-JobPostingHero">
            <div className="font-bold text-4xl md:text-6xl text-white my-32 mx-8 md:mx-16 lg:mx-32">
                Summer 2023 Applications
                <br></br>
                Are Now Open!
            </div>
        </div>
        <div>
            <div className="p-6 md:p-16 lg:p-32 flex items-center">
                <div className="hidden xl:block h-96 w-2/5 relative">
                    <Image src={working} alt={"People Working"} layout="fill" objectFit="contain"></Image>  
                </div>
                <div className="flex flex-col w-full xl:w-3/5 text-white px-10">
                    <div className="font-bold text-4xl lg:text-6xl mb-10">
                        Why Choose WATonomous?
                    </div>
                    <div className="font-medium text-md md:text-xl lg:text-2xl">
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
            <div className="m-8 sm:m-16 md:mx-32 flex flex-col ">
                {/* <JobPostingList allPostingsData={allPostingsData}/> */}
                <div className="text-white text-5xl text-center mb-16">
                    Open Roles
                </div>
                <JobPostingList
                    data={allPostingsData}/>
            </div>
            <div className="h-96">

            </div>
        </div>
    </div>
    );
}

export default JobPostings