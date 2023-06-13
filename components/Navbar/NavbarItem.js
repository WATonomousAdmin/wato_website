import Link from "next/link";

const NavbarItem = ({href, toggle, children}) => {
    return (
        <Link href={href} onClick={toggle}>
            <li className="mx-1 my-2 px-5 py-2 inline-block lg:bg-[#e6e2dfb5] rounded-md font-medium text-2xl lg:text-sm">
                <span className="text-[#66DDC8] lg:hidden">// </span>{children}
            </li>
        </Link>
    );
}

export default NavbarItem;