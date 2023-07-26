const NavbarActionItem = ({ action, toggle, children }) => {
    return (
        <li
            className="mx-1 my-2 inline-block w-fit cursor-pointer rounded-md px-5 py-2 text-2xl font-medium lg:bg-wato-grey-clear lg:text-sm"
            onClick={() => {
                action();
                toggle();
            }}
        >
            <span className="text-wato-teal lg:hidden">{"// "}</span>
            {children}
        </li>
    );
};

export default NavbarActionItem;
