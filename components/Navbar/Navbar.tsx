import { useState } from "react";
import NavbarActionItem from "./NavbarActionItem";
import NavbarBadge from "./NavbarBadge";
import NavbarIconItem from "./NavbarIconItem";
import NavbarItem from "./NavbarItem";
import NavbarMobileIcon from "./NavbarMobileIcon";

interface NavBarProps {
    toggleModal(): any;
    dark?: boolean;
}

const Navbar = ({ toggleModal, dark }: NavBarProps) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleMobile = () => setMobileOpen(!mobileOpen);
    const closeMobile = () => setMobileOpen(false);

    return (
        <div className="align-center pointer-events-none fixed z-40 flex w-full justify-between lg:mx-12 lg:mt-10 lg:w-[calc(100vw-6rem)] xl:mx-32 xl:w-[calc(100vw-16rem)]">
            <NavbarBadge href={"/"}>WATONOMOUS</NavbarBadge>
            <div className={`flex flex-row`}>
                <NavbarMobileIcon
                    active={mobileOpen}
                    onclick={toggleMobile}
                    dark={dark}
                />
                <ul
                    className={` list-none max-lg:absolute max-lg:left-0 max-lg:z-20 max-lg:flex max-lg:w-full max-lg:flex-col max-lg:pt-16 ${
                        mobileOpen
                            ? "max-lg:h-[100vh] max-lg:bg-white"
                            : "max-lg:h-0"
                    } pointer-events-auto overflow-hidden transition-all duration-500`}
                >
                    <NavbarItem href={"/about"} toggle={closeMobile}>
                        ABOUT
                    </NavbarItem>
                    {/* <NavbarItem href={"/blogs"} toggle={closeMobile}>
                        BLOG
                    </NavbarItem> */}
                    <NavbarItem href={"/careers"} toggle={closeMobile}>
                        GET INVOLVED
                    </NavbarItem>
                    <NavbarItem href={"/sponsor"} toggle={closeMobile}>
                        SPONSOR
                    </NavbarItem>
                    <NavbarIconItem
                        href={"https://kenjiang.ca"}
                        icon={"fa-instagram"}
                    />
                    <NavbarIconItem
                        href={"https://kenjiang.ca"}
                        icon={"fa-twitter"}
                    />
                    <NavbarIconItem
                        href={"https://kenjiang.ca"}
                        icon={"fa-linkedin"}
                    />
                    <NavbarActionItem actions={[toggleModal, closeMobile]}>
                        CONNECT
                    </NavbarActionItem>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
