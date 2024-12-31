import { useState } from "react";
import NavbarActionItem from "./NavbarActionItem";
import NavbarBadge from "./NavbarBadge";
import NavbarIconItem from "./NavbarIconItem";
import NavbarItem from "./NavbarItem";
import NavbarMobileIcon from "./NavbarMobileIcon";
import Image from "next/image";

import WatoLogo from "../../public/imgs/watonomous.png";

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
            <div className="align-center pointer-events-none fixed z-40 flex w-[80vw] justify-between lg:mt-10 xl:max-w-[80rem]">
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
                        {/* <NavbarItem href={"/sponsor"} toggle={closeMobile}>
                        SPONSOR
                    </NavbarItem> */}
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
