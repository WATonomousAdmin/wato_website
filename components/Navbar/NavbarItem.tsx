import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

interface NavbarItemProps {
    href: string;
    toggle: MouseEventHandler;
    children: ReactNode;
}

const NavbarItem = ({ href, toggle, children }: NavbarItemProps) => {
    return (
        <Link href={href} onClick={toggle}>
            <li className="mx-1 my-2 inline-block rounded-md px-5 py-2 text-2xl font-medium lg:bg-wato-grey-clear lg:text-sm">
                <span className="text-wato-teal lg:hidden">{"// "}</span>
                {children}
            </li>
        </Link>
    );
};

export default NavbarItem;
