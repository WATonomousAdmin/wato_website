const NavbarMobileIcon = ({ active, onclick }) => {
    return (
        <div
            className="pointer-events-auto z-40 m-5 h-8 w-8 cursor-pointer lg:hidden"
            onClick={onclick}
        >
            <div
                className={`relative h-1 w-8 origin-left rounded-md bg-black ${
                    active
                        ? "translate-x-[5px] translate-y-[2px] rotate-45"
                        : "translate-y-2"
                } transition-all`}
            ></div>
            <div
                className={`relative h-1 w-8 origin-left rounded-md bg-black ${
                    active
                        ? "translate-x-[5px] translate-y-5 -rotate-45"
                        : "translate-y-4"
                } transition-all`}
            ></div>
        </div>
    );
};

export default NavbarMobileIcon;
