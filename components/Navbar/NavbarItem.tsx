import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";
import NavbarCommonContainer from "./NavbarCommonContainer";

interface NavbarItemProps {
    href: string;
    toggle: MouseEventHandler;
    children: ReactNode;
    newTab?: boolean;
}

const NavbarItem = ({
    href,
    toggle,
    children,
    newTab = false,
}: NavbarItemProps) => {
    return (
        <Link href={href} onClick={toggle} target={newTab ? "_blank" : ""}>
            <NavbarCommonContainer>
                <span className="text-wato-teal lg:hidden">{"// "}</span>
                {children}
            </NavbarCommonContainer>
        </Link>
    );
};

export default NavbarItem;
