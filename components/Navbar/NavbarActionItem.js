import Link from "next/link";

const NavbarActionItem = ({action, toggle, children}) => {
    return (
        <li className="mx-1 my-2 px-5 py-2 inline-block lg:bg-[#e6e2dfb5] rounded-md font-medium text-2xl lg:text-sm cursor-pointer w-fit" onClick={() => {action(); toggle();}}>
            <span className="text-[#66DDC8] lg:hidden">// </span>{children}
        </li>
    );
}

export default NavbarActionItem;