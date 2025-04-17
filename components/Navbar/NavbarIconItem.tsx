import Link from "next/link";
import Icon from "../Icon";
import NavbarCommonContainer from "./NavbarCommonContainer";

interface NavbarIconItemProps {
    href: string;
    icon: string;
}

const NavbarIconItem = ({ href, icon }: NavbarIconItemProps) => {
    return (
        <Link href={href} target="_blank">
            <NavbarCommonContainer classes="lg:px-2 lg:py-[2px]">
                <span className="pr-1 text-wato-teal lg:hidden">{"// "}</span>
                <Icon content={icon} />
            </NavbarCommonContainer>
        </Link>
    );
};

export default NavbarIconItem;
