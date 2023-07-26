import Image from "next/image";
import e7 from "../../public/imgs/e7.png";
import IconButton from "../IconButton";

const ADDRESS_HEADER = "Located at";
const ADDRESS = "University of Waterloo Engineering 7 \n \n 200 University Avenue Waterloo, ON N2L 3G1 Canada";

const BRAND = "WATONOMOUS";
const TAGLINE = "Showing the world who can \n drive themselves";

const ModalRight = () => {
  return (
    <div className="relative hidden overflow-x-hidden bg-white bg-ModalRight xl:block ">
      <div className="absolute top-8 h-64 w-4/5 rounded-r-md bg-zinc-900">
        <Image src={e7} fill alt="e7" className="object-cover"/>
      </div>
      <div className="absolute right-0 top-[3.5em] flex h-52 w-48 flex-col rounded-l-md bg-white p-3 text-black">
        <div className="mb-2 font-bold">{ADDRESS_HEADER}</div>
        <div className="text-sm">
         {ADDRESS}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 mb-10 mr-10 flex flex-col items-end">
        <div className="text-3xl font-medium tracking-wider">{BRAND}</div>
        <div className="my-1 text-right text-sm">
            {TAGLINE}
        </div>
        <div className="mt-2 flex">
          <IconButton content={"fa-instagram"} blue={true} />
          <IconButton content={"fa-twitter"} blue={true} />
          <IconButton content={"fa-linkedin"} blue={true} />
          <IconButton content={"fa-youtube"} blue={true} />
        </div>
      </div>
    </div>
  );
};

export default ModalRight;
