import { useState } from "react";
import Image from "next/image";
import e7 from "../public/imgs/e7.png";

const ModalButton = ({ text, src }) => {
  return (
    <div className="my-2 w-64 cursor-pointer rounded-md border-[1px] border-solid border-zinc-500 bg-zinc-600 p-2 text-center transition-colors hover:bg-zinc-400">
      {text}
    </div>
  );
};

const IconButton = ({ content, onClick }) => {
  return (
    <div
      className="ml-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-md bg-[#82A5C4] p-2 text-black"
      onClick={onClick}
    >
      <i className={`fa-brands ${content} text-3xl`} />
    </div>
  );
};

const toBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = reject;
});


const onSubmit = async (e) => {
  e.preventDefault();

  const file = document.querySelector('#upload').files[0];
  const convertedFile = await toBase64(file);

  const data = {
    firstName: e.target.firstName.value,
    lastName: e.target.lastName.value,
    email: e.target.email.value,
    purpose: e.target.purpose.value,
    message: e.target.message.value,
    file: convertedFile
  };

  const jsonData = JSON.stringify(data);

  const response = await fetch("/api/connect/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: jsonData,
  });
};

const ContactModal = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <div
        className="absolute z-20 m-5 cursor-pointer select-none rounded-md bg-slate-300 p-2"
        onClick={() => setModalActive(!modalActive)}
      >
        CONNECT
      </div>
      {
        <div
          className={`${
            modalActive
              ? "fixed opacity-100"
              : "pointer-events-none absolute opacity-0"
          } z-10 flex h-screen w-screen max-w-[100%] items-center justify-center overflow-hidden overscroll-none backdrop-blur-sm transition-all duration-300`}
          onClick={() => {
            setModalActive(false);
          }}
        >
          <div
            className="grid h-4/5 w-[90vw] grid-cols-1 overflow-hidden rounded-md bg-zinc-700 text-zinc-100 shadow-md md:w-[60vw] xl:grid-cols-2"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="flex flex-col bg-white px-14 py-8 text-zinc-800 md:px-16 md:py-10">
              <div className="text-4xl font-black">
                Let's design the future together
              </div>
              <div className="my-2 text-sm font-medium">
                Shoot us a message! We'd love to hear from you and collaborate
                on cool projects!
              </div>
              <div className="my-2 w-fit rounded-md bg-[#85A7C6] text-center text-xs font-medium">
                <a
                  href="mailto:hello@watonomous.com"
                  className="text-white visited:text-white"
                >
                  <div className="px-4 py-2">
                    <i className="fa-solid fa-envelope text-lg"></i>
                    <div>hello@watonomous.com</div>
                  </div>
                </a>
              </div>
              <form onSubmit={onSubmit}>
                <div className="grid w-full grid-cols-1 grid-rows-[7] gap-x-5 gap-y-1 text-xs text-[#ACB1B7] lg:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
                  <div className="col-span-1">
                    <label htmlFor="firstName" className="font-medium">
                      First Name
                    </label>
                    <br />
                    <input
                      className="w-full bg-[#F6F8FA] p-1 text-xl"
                      type="text"
                      id="firstName"
                      name="firstName"
                    />
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="lastName" className="font-medium">
                      Last Name
                    </label>
                    <br />
                    <input
                      className="w-full bg-[#F6F8FA] p-1 text-xl"
                      type="text"
                      id="lastName"
                      name="lastName"
                    />
                  </div>
                  <div className="col-span-1 lg:col-span-2 xl:col-span-1 2xl:col-span-2">
                    <label htmlFor="email" className="font-medium">
                      Email
                    </label>
                    <br />
                    <input
                      className="w-full bg-[#F6F8FA] p-1 text-xl"
                      type="text"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="col-span-1 lg:col-span-2 xl:col-span-1 2xl:col-span-2">
                    <label htmlFor="purpose" className="font-medium">
                      Purpose
                    </label>
                    <br />
                    <select
                      className="w-full bg-[#F6F8FA] px-2 py-1 text-xl"
                      id="purpose"
                      name={"purpose"}
                      required
                    >
                      <option value="">- SELECT -</option>
                      <option value="Membership">Membership</option>
                      <option value="Sponsorship">Sponsorship</option>
                    </select>
                  </div>
                  <div className="col-span-1 row-span-5 lg:col-span-2 xl:col-span-1 2xl:col-span-2">
                    <label htmlFor="message" className="font-medium">
                      Message
                    </label>
                    <br />
                    <textarea
                      className="w-full bg-[#F6F8FA] px-5 py-1 text-xl"
                      id="message"
                      name="message"
                      rows="5"
                      style={{ resize: "none" }}
                    />
                  </div>
                  <div className="my-1 flex items-center">
                    <label className="cursor-pointer text-base font-bold text-[#2F2E2E]">
                      <input
                        className="hidden"
                        id="upload"
                        name="upload"
                        type="file"
                      />
                      <div>
                        <i className="fa-solid fa-upload text-lg"></i> UPLOAD
                        FILE
                      </div>
                    </label>
                  </div>
                  <div className="my-1">
                    <input
                      className="w-full cursor-pointer rounded-md bg-[#85A7C6] py-2 text-base text-white"
                      type="submit"
                      value="SUBMIT"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="relative hidden overflow-x-hidden bg-white bg-ModalRight xl:block ">
              <div className="absolute top-8 h-64 w-4/5 rounded-r-md bg-zinc-900">
                <Image src={e7} alt="e7" />
              </div>
              <div className="absolute right-0 top-[3.5em] flex h-52 w-48 flex-col rounded-l-md bg-white p-3 text-black">
                <div className="mb-2 font-bold">Located at</div>
                <div className="text-sm">
                  University of Waterloo Engineering 7
                  <br />
                  <br />
                  200 University Avenue Waterloo, ON N2L 3G1 Canda
                </div>
              </div>
              <div className="absolute bottom-0 right-0 mb-10 mr-10 flex flex-col items-end">
                <div className="text-3xl font-medium tracking-wider">
                  WATONOMOUS
                </div>
                <div className="my-1 text-right text-sm">
                  Showing the world who can
                  <br />
                  drive themselves
                </div>
                <div className="mt-2 flex">
                  <IconButton content={"fa-instagram"} />
                  <IconButton content={"fa-twitter"} />
                  <IconButton content={"fa-linkedin"} />
                  <IconButton content={"fa-youtube"} />
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
