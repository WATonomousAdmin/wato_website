import Link from "next/link";
import { ReactNode } from "react";

interface NavbarBadgeProps {
    href: string;
    children: ReactNode;
}

const NavbarBadge = ({ href, children }: NavbarBadgeProps) => {
    return (
        <Link href={href} className="pointer-events-auto">
            <div className="fixed z-40 mx-2 mt-2 flex h-[36px] items-center justify-center rounded-md bg-wato-blue px-5 py-2 text-sm font-medium text-white max-lg:mt-5">
                {children}
            </div>
        </Link>
    );
};

export default NavbarBadge;
