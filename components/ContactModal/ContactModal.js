import { useState } from "react";
import ModalRight from "./ModalRight";

const onSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(document.querySelector("#modal-form"));
  const response = await fetch("/api/connect/submit", {
    method: "POST",
    body: formData,
  });
  console.log(response);
};

const ContactModal = () => {
  const [modalActive, setModalActive] = useState(false);
  const [fileName, setFileName] = useState("");

  const onFileUpload = (data) => {
    let fn = data.target.files[0].name;
    if (fn.length > 20) {
      fn = `${fn.slice(0,8)}...${fn.slice(-8)}`;
    }
    setFileName(fn);
  }

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
            className="grid h-4/5 w-[90vw] grid-cols-1 overflow-hidden rounded-md bg-white text-zinc-100 shadow-md md:w-[60vw] xl:grid-cols-2"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="flex flex-col self-center bg-white px-14 text-zinc-800 md:px-16">
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
              <form id="modal-form" onSubmit={onSubmit}>
                <div className="grid w-full grid-cols-1 grid-rows-[7] gap-x-5 gap-y-4 text-xs text-[#ACB1B7] lg:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
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
                        accept=".pdf, .doc, .docx, .png, .jpg, .jpeg, .txt"
                        name="upload"
                        type="file"
                        onChange={onFileUpload}
                      />
                      <div>
                        <i className="fa-solid fa-upload text-lg"></i> UPLOAD
                        FILE
                      </div>
                      <div className="w-56 h-6 overflow-hidden">
                        {fileName}
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
            <ModalRight/>
          </div>
        </div>
      }
    </>
  );
};

export default ContactModal;
