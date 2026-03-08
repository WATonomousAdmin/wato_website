import IconButton from "../IconButton";

const BRAND = "WATONOMOUS";
const TAGLINE = "Showing the world who can \n drive themselves";

const ModalRight = () => {
    return (
        <div className="relative hidden h-full items-end justify-end overflow-x-hidden bg-wato-black-vanta xl:flex xl:pb-3 xl:pr-5">
            <div className="absolute left-8 right-8 top-10 h-2/3 rounded-r-md bg-zinc-900">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.4120415323946!2d-80.53947309728923!3d43.472870731213376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf403ba0150eb%3A0xebbfa4342ecc7943!2sEngineering%207%20(E7)!5e0!3m2!1sen!2sca!4v1769832404960!5m2!1sen!2sca"
                    className="absolute inset-0 h-full w-full rounded-r-md border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                />
            </div>
            <div className="flex flex-col items-end">
                <div className="text-3xl font-medium tracking-wider">
                    {BRAND}
                </div>
                <div className="my-1 text-right text-sm">{TAGLINE}</div>
                <div className="mt-2 flex">
                    <IconButton
                        content="fa-instagram"
                        onClick={() =>
                            window.open("https://www.instagram.com/watonomous")
                        }
                        empty
                    />
                    <IconButton
                        content="fa-linkedin"
                        onClick={() =>
                            window.open(
                                "https://www.linkedin.com/company/watonomous/"
                            )
                        }
                        empty
                    />
                    <IconButton
                        content="fa-youtube"
                        onClick={() =>
                            window.open(
                                "https://www.youtube.com/@WATonomous/videos"
                            )
                        }
                        empty
                    />
                </div>
            </div>
        </div>
    );
};

export default ModalRight;
