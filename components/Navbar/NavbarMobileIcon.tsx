import { useRouter } from "next/router";
import { MouseEventHandler } from "react";

interface NavbarMobileIconProps {
    active: boolean;
    onclick: MouseEventHandler;
}

const DARK_PAGES = [
    "/about"
];

const NavbarMobileIcon = ({ active, onclick } : NavbarMobileIconProps) => {
    const router = useRouter();
    const color = DARK_PAGES.includes(router.pathname) ? "bg-white" : "bg-black"; 
    return (
        <div
            className={`pointer-events-auto z-40 m-5 h-9 w-9 cursor-pointer lg:hidden rounded-md p-1`}
            onClick={onclick}
        >
            <div
                className={`relative h-1 w-7 origin-left rounded-md ${
                    active
                        ? "translate-x-[4px] translate-y-[3px] rotate-45 bg-black"
                        : `translate-y-1 ${color}`
                } transition-all`}
            ></div>
            <div
                className={`relative h-1 w-7 origin-left translate-y-2 rounded-md ${
                    active
                        ? "bg-transparent"
                        : `${color}`
                } transition-all`}
            ></div>
            <div
                className={`relative h-1 w-7 origin-left rounded-md ${
                    active
                        ? "translate-x-[4px] translate-y-[15px] -rotate-45 bg-black"
                        : `translate-y-3 ${color}`
                } transition-all`}
            ></div>
        </div>
    );
};

export default NavbarMobileIcon;
