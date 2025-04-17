import ModalRight from "./ModalRight";
import ContactForm from "./ContactForm";
import { IoClose } from "react-icons/io5";
import { useModal } from "../../lib/ModalContext";

interface ContactModalProps {
    closeModal(): any;
}

const ContactModal = ({ closeModal }: ContactModalProps) => {
    const { open: modalActive } = useModal();
    return (
        <>
            {
                <div
                    className={`${
                        modalActive
                            ? "fixed opacity-100"
                            : "pointer-events-none fixed opacity-0"
                    } z-50 flex h-screen w-screen items-center justify-center overscroll-none backdrop-blur-sm transition-all duration-300`}
                    onClick={closeModal}
                >
                    <div
                        className="grid  h-[90vh] w-[90vw] grid-cols-1 overflow-y-auto rounded-md bg-wato-black text-zinc-100 shadow-md md:w-[60vw] xl:grid-cols-2"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <div
                            className={
                                "absolute right-8 top-12 cursor-pointer text-lg font-bold text-wato-grey md:hidden"
                            }
                            onClick={closeModal}
                        >
                            <IoClose />
                        </div>
                        <div className="flex flex-col self-center px-14 text-wato-white-bone md:px-16">
                            <div className="flex pt-2 text-3xl font-black">
                                <div>Let's design the future together</div>
                            </div>
                            <div className="my-2 text-xs font-medium">
                                Shoot us a message! We'd love to hear from you
                                and collaborate on cool projects!
                            </div>
                            <div className="my-2 w-fit rounded-md bg-wato-blue text-center text-xs font-medium max-sm:hidden">
                                <a
                                    href="mailto:hello@watonomous.ca"
                                    className="text-white visited:text-white"
                                >
                                    <div className="flex items-center justify-center px-3 py-1">
                                        <i className="fa-solid fa-envelope mr-2 text-lg"></i>
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
