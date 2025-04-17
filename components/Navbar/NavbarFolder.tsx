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
                //className={`absolute flex h-32 flex-col overflow-hidden bg-red-300 transition-all`}
                className={`flex flex-col overflow-hidden transition-all duration-300 group-hover:max-h-96 max-lg:ml-6 lg:absolute lg:max-h-0`}
            >
                <ul className="flex flex-col">{children}</ul>
            </div>
        </div>
    );
};

export default NavbarFolder;
