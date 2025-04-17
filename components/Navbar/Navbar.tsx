import { useState } from "react";
import NavbarActionItem from "./NavbarActionItem";
import NavbarBadge from "./NavbarBadge";
import NavbarIconItem from "./NavbarIconItem";
import NavbarItem from "./NavbarItem";
import NavbarMobileIcon from "./NavbarMobileIcon";
import Image from "next/image";

import WatoLogo from "../../public/imgs/watonomous.png";
import NavbarFolder from "./NavbarFolder";

import { MdOpenInNew } from "react-icons/md";
interface NavBarProps {
    toggleModal(): any;
    dark?: boolean;
}

const Navbar = ({ toggleModal, dark }: NavBarProps) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleMobile = () => setMobileOpen(!mobileOpen);
    const closeMobile = () => setMobileOpen(false);

    return (
        <div className="flex w-screen justify-center">
            <div className="pointer-events-none fixed z-30 h-screen w-screen bg-TopGradient" />
            <div className="align-center pointer-events-none fixed z-40 flex w-screen justify-between max-lg:px-8 lg:mt-10 lg:w-[90vw] xl:max-w-[100rem]">
                <NavbarBadge href={"/"}>
                    <Image src={WatoLogo} alt={"WATonomous logo"} width={150} />
                </NavbarBadge>
                <div className={`flex flex-row`}>
                    <NavbarMobileIcon
                        active={mobileOpen}
                        onclick={toggleMobile}
                        dark={dark}
                    />
                    <ul
                        className={` list-none max-lg:absolute max-lg:left-0 max-lg:z-20 max-lg:flex max-lg:w-full max-lg:flex-col max-lg:pt-16 ${
                            mobileOpen
                                ? "max-lg:h-[100vh] max-lg:bg-wato-black-vanta"
                                : "max-lg:h-0"
                        } pointer-events-auto flex transition-all duration-500 max-lg:overflow-hidden`}
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
                            SPONSORS
                        </NavbarItem>
                        <NavbarFolder
                            title={
                                <div className="flex items-center">
                                    EXTERNAL
                                    <MdOpenInNew className="ml-1" />
                                </div>
                            }
                        >
                            <NavbarItem
                                href={"https://wiki.watonomous.ca/"}
                                toggle={closeMobile}
                                newTab
                            >
                                WIKI
                            </NavbarItem>
                            <NavbarItem
                                href={"https://cloud.watonomous.ca/"}
                                toggle={closeMobile}
                                newTab
                            >
                                WATcloud
                            </NavbarItem>
                        </NavbarFolder>
                        <NavbarIconItem
                            href={"https://www.instagram.com/watonomous"}
                            icon={"fa-instagram"}
                        />
                        <NavbarIconItem
                            href={
                                "https://www.linkedin.com/company/watonomous/"
                            }
                            icon={"fa-linkedin"}
                        />
                        <NavbarIconItem
                            href={"https://www.youtube.com/@WATonomous/videos"}
                            icon={"fa-youtube"}
                        />
                        <NavbarActionItem actions={[toggleModal, closeMobile]}>
                            CONNECT
                        </NavbarActionItem>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
