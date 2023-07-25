import Link from "next/link";

const NavbarActionItem = ({action, toggle, children}) => {
    return (
        <li className="mx-1 my-2 px-5 py-2 inline-block lg:bg-wato-grey-clear rounded-md font-medium text-2xl lg:text-sm cursor-pointer w-fit" onClick={() => {action(); toggle();}}>
            <span className="text-wato-teal lg:hidden">// </span>{children}
        </li>
    );
}

export default NavbarActionItem;