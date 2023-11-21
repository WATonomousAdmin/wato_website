import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

interface NavbarItemProps {
    href: string;
    toggle: MouseEventHandler;
    children: ReactNode;
}

const NavbarItem = ({ href, toggle, children }: NavbarItemProps) => {
    return (
        <li className="mx-1 my-2 inline-block rounded-md lg:bg-wato-grey-clear">
            <Link href={href} onClick={toggle}>
                <div className=" px-5 py-2 text-2xl font-medium  lg:text-sm">
                    <span className="text-wato-teal lg:hidden">{"// "}</span>
                    {children}
                </div>
            </Link>
        </li>
    );
};

export default NavbarItem;
