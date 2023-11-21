import Link from "next/link";
import Icon from "../Icon";

interface NavbarIconItemProps {
    href: string;
    icon: string;
}

const NavbarIconItem = ({ href, icon }: NavbarIconItemProps) => {
    return (
        <li className="mx-1 my-2 inline-block rounded-md lg:bg-wato-grey-clear">
            <Link href={href}>
                <div className="px-5 py-2 text-2xl font-medium lg:px-3 lg:text-sm">
                    <span className="pr-1 text-wato-teal lg:hidden">
                        {"// "}
                    </span>
                    <Icon content={icon} />
                </div>
            </Link>
        </li>
    );
};

export default NavbarIconItem;
