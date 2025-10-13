interface NavbarCommonContainerProps {
    children: React.ReactNode;
    classes?: string;
    onClick?(): void;
}
const NavbarCommonContainer = ({
    children,
    classes,
    onClick,
}: NavbarCommonContainerProps) => {
    return (
        <li
            className={`mx-1 my-2 flex cursor-pointer items-center rounded-md px-5 py-2 text-xl font-medium
                text-wato-white-bone transition-colors max-lg:hover:text-wato-grey lg:bg-wato-grey-clear lg:text-xs
                lg:text-wato-black-vanta lg:hover:bg-[#918e8cb5] ${classes}`}
            onClick={() => {
                if (onClick) {
                    onClick();
                }
            }}
        >
            <span className="translate-y-[1px]">{children}</span>
        </li>
    );
};

export default NavbarCommonContainer;
