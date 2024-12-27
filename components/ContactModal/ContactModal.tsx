import ModalRight from "./ModalRight";
import ContactForm from "./ContactForm";
import { IoClose } from "react-icons/io5";

interface ContactModalProps {
    modalActive: boolean;
    closeModal(): any;
}

const ContactModal = ({ modalActive, closeModal }: ContactModalProps) => {
    return (
        <>
            {
                <div
                    className={`${
                        modalActive
                            ? "fixed opacity-100"
                            : "pointer-events-none fixed opacity-0"
                    } z-50 flex h-screen w-screen items-center justify-center overflow-hidden overscroll-none backdrop-blur-sm transition-all duration-300`}
                    onClick={closeModal}
                >
                    <div
                        className="w-[90vw]grid-cols-1 grid h-screen overflow-y-scroll rounded-md bg-wato-black text-zinc-100 shadow-md md:h-[90vh] md:w-[60vw] lg:overflow-hidden xl:grid-cols-2"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <div
                            className={
                                "absolute right-5 top-5 cursor-pointer text-lg font-bold text-wato-grey md:hidden"
                            }
                            onClick={closeModal}
                        >
                            <IoClose />
                        </div>
                        <div className="mt-5 flex flex-col self-center px-14 text-wato-white-bone md:px-16">
                            <div className="flex text-4xl font-black">
                                <div>Let's design the future together</div>
                            </div>
                            <div className="my-2 text-sm font-medium">
                                Shoot us a message! We'd love to hear from you
                                and collaborate on cool projects!
                            </div>
                            <div className="my-2 w-fit rounded-md bg-wato-blue text-center text-xs font-medium">
                                <a
                                    href="mailto:hello@watonomous.com"
                                    className="text-white visited:text-white"
                                >
                                    <div className="px-4 py-2">
                                        <i className="fa-solid fa-envelope text-lg"></i>
                                        <div>hello@watonomous.ca</div>
                                    </div>
                                </a>
                            </div>
                            <ContactForm />
                        </div>
                        <ModalRight />
                    </div>
                </div>
            }
        </>
    );
};

export default ContactModal;
