import ModalRight from "./ModalRight";
import ContactForm from "./ContactForm";

const ContactModal = ({modalActive, closeModal}) => {
  return (
    <>
      {
        <div
          className={`${
            modalActive
              ? "fixed opacity-100"
              : "pointer-events-none fixed opacity-0"
          } z-50 flex h-screen w-screen max-w-[100%] items-center justify-center overflow-hidden overscroll-none backdrop-blur-sm transition-all duration-300`}
          onClick={closeModal}
        >
          <div
            className="grid h-[90vh] w-[90vw]grid-cols-1 overflow-y-scroll lg:overflow-hidden rounded-md bg-white text-zinc-100 shadow-md md:w-[60vw] xl:grid-cols-2"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="flex flex-col self-center bg-white px-14 text-zinc-800 md:px-16 mt-5">
              <div className="text-4xl font-black">
                Let's design the future together
              </div>
              <div className="my-2 text-sm font-medium">
                Shoot us a message! We'd love to hear from you and collaborate
                on cool projects!
              </div>
              <div className="my-2 w-fit rounded-md bg-wato-blue text-center text-xs font-medium">
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
              <ContactForm/>
            </div>
            <ModalRight/>
          </div>
        </div>
      }
    </>
  );
};

export default ContactModal;
