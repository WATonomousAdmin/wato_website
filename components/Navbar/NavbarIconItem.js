import Link from "next/link";
import Icon from "../Icon";

const NavbarIconItem = ({href, icon}) => {
    return (
        <Link href={href}>
            <li className="mx-1 my-2 px-5 lg:px-3 py-2 inline-block lg:bg-wato-grey-clear rounded-md font-medium text-2xl lg:text-sm">
                <span className="text-wato-teal lg:hidden pr-1">// </span><Icon content={icon}/>
            </li>
        </Link>
    );
}

export default NavbarIconItem;