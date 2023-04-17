import { useState } from "react";
import Image from "next/image";
import e7 from "../public/imgs/e7.png";

const ModalButton = ({ text, src }) => {
  return (
    <div className="w-64 text-center border-solid border-zinc-500 border-[1px] rounded-md bg-zinc-600 my-2 p-2 hover:bg-zinc-400 cursor-pointer transition-colors">
      {text}
    </div>
  );
};

const IconButton = ({ content, onClick }) => {
  return (
    <div
      className="text-black bg-[#82A5C4] p-2 rounded-md ml-1 w-10 h-10 flex justify-center align-middle cursor-pointer"
      onClick={onClick}
    >
      {content}
    </div>
  );
};

const ContactModal = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <div
        className="absolute p-2 bg-slate-300 cursor-pointer rounded-md m-5 z-20 select-none"
        onClick={() => setModalActive(!modalActive)}
      >
        CONNECT
      </div>
      {
        <div
          className={`${
            modalActive ? "opacity-100 fixed" : "opacity-0 absolute"
          } w-screen max-w-[100%] h-screen overflow-hidden duration-300 transition-all backdrop-blur-sm z-10 flex justify-center items-center overscroll-none`}
          onClick={() => {
            setModalActive(false);
          }}
        >
          <div
            className="bg-zinc-700 text-zinc-100 rounded-md w-[60vw] h-[700px] grid grid-cols-2 overflow-hidden"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="flex flex-col px-16 py-10 bg-white text-zinc-800">
              <div className="font-black text-4xl">
                Let's design
                <br />
                the future together
              </div>
              <div className="font-medium text-sm my-2">
                Shoot us a message! We'd love to hear from you
                <br />
                and collaborate on cool projects!
              </div>
              <div className="my-2 text-xs bg-[#85A7C6] text-white p-3 rounded-md w-fit text-center font-base">
                <div>(Email Logo)</div>
                <div>hello@watonomous.com</div>
              </div>
              <div className="grid grid-cols-2 grid-rows-[7] gap-x-5 gap-y-1 text-[#ACB1B7] text-xs w-full">
                <div>
                  <label htmlFor="firstName" className="font-medium">
                    First Name
                  </label>
                  <br />
                  <input
                    className="bg-[#F6F8FA] w-full text-xl p-1"
                    type="text"
                    id="firstName"
                    name="firstName"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="font-medium">
                    Last Name
                  </label>
                  <br />
                  <input
                    className="bg-[#F6F8FA] w-full text-xl p-1"
                    type="text"
                    id="lastName"
                    name="lastName"
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="email" className="font-medium">
                    Email
                  </label>
                  <br />
                  <input
                    className="bg-[#F6F8FA] w-full text-xl p-1"
                    type="text"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="purpose" className="font-medium">
                    Purpose
                  </label>
                  <br />
                  <select
                    className="bg-[#F6F8FA] w-full text-xl py-1 px-2"
                    id="purpose"
                    name={"purpose"}
                    required
                  >
                    <option value="">- SELECT -</option>
                    <option value="Membership">Membership</option>
                    <option value="Sponsorship">Sponsorship</option>
                  </select>
                </div>
                <div className="col-span-2 row-span-5">
                  <label htmlFor="message" className="font-medium">
                    Message
                  </label>
                  <br />
                  <textarea
                    className="bg-[#F6F8FA] w-full text-xl py-1 px-5"
                    id="message"
                    name="message"
                    rows="5"
                    style={{ resize: "none" }}
                  />
                </div>
                <div>
                  <label className="font-bold text-[#2F2E2E] text-base">
                    <input
                      className="hidden"
                      id="upload"
                      name="upload"
                      type="file"
                    />
                    <div>[^] UPLOAD FILE</div>
                  </label>
                </div>
                <div>
                  <input
                    className="bg-[#85A7C6] rounded-md text-white py-2 cursor-pointer text-base w-full"
                    type="submit"
                    value="SUBMIT"
                  />
                </div>
              </div>
            </div>
            <div className="overflow-x-hidden bg-white bg-ModalRight relative">
              <div className="bg-zinc-900 h-64 w-4/5 rounded-r-md absolute top-8">
                <Image src={e7} alt="e7" />
              </div>
              <div className="bg-white text-black h-52 w-48 absolute rounded-l-md top-[3.5em] right-0 flex flex-col p-3">
                <div className="font-bold mb-2">Located at</div>
                <div className="text-sm">
                  University of Waterloo Engineering 7
                  <br />
                  <br />
                  200 University Avenue Waterloo, ON N2L 3G1 Canda
                </div>
              </div>
              <div className="absolute bottom-10 right-0 flex flex-col items-end mr-10">
                <div className="font-medium text-3xl tracking-wider">
                  WATONOMOUS
                </div>
                <div className="text-right text-sm my-1">
                  Showing the world who can
                  <br />
                  drive themselves
                </div>
                <div className="flex mt-2">
                  <IconButton content={"ig"} />
                  <IconButton content={"tt"} />
                  <IconButton content={"li"} />
                  <IconButton content={"yt"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default ContactModal;
