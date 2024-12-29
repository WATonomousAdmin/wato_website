import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";
import NavbarCommonContainer from "./NavbarCommonContainer";

interface NavbarItemProps {
    href: string;
    toggle: MouseEventHandler;
    children: ReactNode;
}

const NavbarItem = ({ href, toggle, children }: NavbarItemProps) => {
    return (
        <Link href={href} onClick={toggle}>
            <NavbarCommonContainer>
                <span className="text-wato-teal lg:hidden">{"// "}</span>
                {children}
            </NavbarCommonContainer>
        </Link>
    );
};

export default NavbarItem;
