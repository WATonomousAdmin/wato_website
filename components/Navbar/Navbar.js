import { useState } from "react";
import Icon from "../Icon";
import NavbarActionItem from "./NavbarActionItem";
import NavbarBadge from "./NavbarBadge";
import NavbarIconItem from "./NavbarIconItem";
import NavbarItem from "./NavbarItem";
import NavbarMobileIcon from "./NavbarMobileIcon";

const Navbar = ({toggleModal}) => {
  const [mobileOpen, setMobileOpen] = useState(true);

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="fixed z-40 w-full lg:w-[calc(100vw-6rem)] xl:w-[calc(100vw-16rem)] flex align-center justify-between lg:mt-10 lg:mx-12 xl:mx-32 pointer-events-none">
      <NavbarBadge href={"/"}>WATONOMOUS</NavbarBadge>
      <div className={`flex flex-row`}>
        <NavbarMobileIcon active={mobileOpen} onclick={toggleMobile}/>
        <ul className={` max-lg:pt-16 max-lg:w-full max-lg:z-20 max-lg:absolute max-lg:left-0 list-none max-lg:flex max-lg:flex-col ${mobileOpen ? "max-lg:h-[100vh] max-lg:bg-white" : "max-lg:h-0"} overflow-hidden duration-500 transition-all pointer-events-auto`}>
          <NavbarItem href={"/"} toggle={closeMobile}>ABOUT</NavbarItem>
          <NavbarItem href={"/"} toggle={closeMobile}>IMPACT</NavbarItem>
          <NavbarItem href={"/blogs"} toggle={closeMobile}>BLOG</NavbarItem>
          <NavbarItem href={"/JobPostings"} toggle={closeMobile}>GET INVOLVED</NavbarItem>
          <NavbarItem href={"/"} toggle={closeMobile}>SPONSOR</NavbarItem>
          <NavbarIconItem href={"https://kenjiang.ca"} icon={"fa-instagram"}/>
          <NavbarIconItem href={"https://kenjiang.ca"} icon={"fa-twitter"}/>
          <NavbarIconItem href={"https://kenjiang.ca"} icon={"fa-linkedin"}/>
          <NavbarActionItem action={toggleModal} toggle={closeMobile}>CONNECT</NavbarActionItem>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
