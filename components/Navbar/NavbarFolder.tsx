import { ReactNode } from "react";
import NavbarCommonContainer from "./NavbarCommonContainer";

interface NavbarFolderProps {
    title: ReactNode;
    children: ReactNode;
}

const NavbarFolder = ({ title, children }: NavbarFolderProps) => {
    return (
        <div className="group relative inline-block">
            <NavbarCommonContainer classes={"max-lg:hidden"}>
                <span className="select-none">
                    {title}
                </span>
            </NavbarCommonContainer>
            <div
                className={`pointer-events-none origin-top-left scale-95 flex flex-col opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100 max-lg:pointer-events-auto max-lg:ml-0 max-lg:scale-100 max-lg:opacity-100 lg:absolute lg:-mt-1 lg:left-1 lg:pt-2`}
            >
                <ul className="flex flex-col rounded-md bg-wato-grey-clear px-1 py-2 shadow-lg [&>*>li]:my-0.5 max-lg:bg-transparent max-lg:shadow-none max-lg:px-0">
                    {children}
                </ul>
            </div>
        </div>
    );
};

export default NavbarFolder;
