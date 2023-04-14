import { useState } from "react";

const ModalButton = ({text, src}) => {
    return (
        <div className="w-64 text-center border-solid border-zinc-500 border-[1px] rounded-md bg-zinc-600 my-2 p-2 hover:bg-zinc-400 cursor-pointer transition-colors">
            {text}
        </div>
    );
}

const ContactModal = () => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <>
            <div className="absolute p-2 bg-slate-300 cursor-pointer rounded-md m-5 z-20 select-none" onClick={() => setModalActive(!modalActive)}>
                CONNECT
            </div>
            {
                <div
                    className={`${modalActive ? "opacity-100 fixed" : "opacity-0 absolute"} w-screen max-w-[100%] h-screen overflow-hidden duration-300 transition-all backdrop-blur-sm z-10 flex justify-center items-center overscroll-none`}
                    onClick={() => {setModalActive(false)}}>
                    <div className="flex flex-col bg-zinc-700 text-zinc-100 p-2 rounded-md text-xl" onClick={(e) => {e.stopPropagation()}}>
                        <div className="font-bold">
                            Contact Us
                        </div>
                        <ModalButton text={"Instagram"}/>
                        <ModalButton text={"Discord"}/>
                        <ModalButton text={"Email"}/>
                    </div>
                </div>
            }
        </>
    );
}

export default ContactModal