import Link from "next/link";
import Icon from "../Icon";

const NavbarIconItem = ({ href, icon }) => {
    return (
        <Link href={href}>
            <li className="mx-1 my-2 inline-block rounded-md px-5 py-2 text-2xl font-medium lg:bg-wato-grey-clear lg:px-3 lg:text-sm">
                <span className="pr-1 text-wato-teal lg:hidden">{"// "}</span>
                <Icon content={icon} />
            </li>
        </Link>
    );
};

export default NavbarIconItem;
