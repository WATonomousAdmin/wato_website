import { ReactNode, useState } from "react";
import NavbarCommonContainer from "./NavbarCommonContainer";

interface NavbarFolderProps {
    title: ReactNode;
    children: ReactNode;
}

const NavbarFolder = ({ title, children }: NavbarFolderProps) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="group relative inline-block">
            <NavbarCommonContainer
                onClick={() => {
                    setExpanded(!expanded);
                }}
                classes={"max-lg:-mb-3"}
            >
                <span className="select-none max-lg:text-wato-grey">
                    {title}
                </span>
            </NavbarCommonContainer>
            <div
                className={`pointer-events-none origin-top-left scale-95 flex flex-col opacity-0 transition-all duration-200 [@media(hover:none)_and_(pointer:coarse){&}]:pointer-events-auto group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100 max-lg:ml-6 max-lg:mt-2 max-lg:scale-100 max-lg:opacity-100 lg:absolute lg:-mt-1 lg:left-1 lg:pt-2`}
            >
                <ul className="flex flex-col rounded-md bg-wato-grey-clear px-1 py-2 shadow-lg [&>*>li]:my-0.5">
                    {children}
                </ul>
            </div>
        </div>
    );
};

export default NavbarFolder;
