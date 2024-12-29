import { ReactNode } from "react";
import NavbarCommonContainer from "./NavbarCommonContainer";

interface NavbarActionItemProps {
    actions: Array<() => void>;
    children: ReactNode;
}

const NavbarActionItem = ({ actions, children }: NavbarActionItemProps) => {
    return (
        <NavbarCommonContainer
            onClick={() => {
                actions.forEach((action) => action());
            }}
        >
            <span className="text-wato-teal lg:hidden">{"// "}</span>
            {children}
        </NavbarCommonContainer>
    );
};

export default NavbarActionItem;
