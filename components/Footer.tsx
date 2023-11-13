import Image from "next/image";
import { ReactNode } from "react";
import IconButton from "./IconButton";

interface FooterCategoryProps {
    title: string,
    href: string,
    children?: ReactNode
}

interface FooterItemProps {
    title: string,
    href: string
}

interface FooterProps {
    dark?: boolean
}

const FooterCategory = ({title, href, children} : FooterCategoryProps )=> {
    return (
        <ul className="max-md:mb-3 ml-10 lg:ml-20 flex list-none flex-col justify-center">
            <li className="md:mb-2 text-base md:text-lg font-bold">
                <a href={href}>{title}</a>            
            </li>
            <div className="max-md:flex">
                {children}
            </div>
        </ul>   
    );
};

const FooterItem = ({title, href} : FooterItemProps) => {
    return (
        <li className="max-md:pr-5">
            <a href={href}>{title}</a>
        </li>
    );
}

const Footer = ({ dark } : FooterProps) => {
    let colors = "bg-white text-wato-grey"
    if (dark) {
        colors = "bg-black text-wato-grey";
    }
    return (
        <div className={`flex h-64 items-center justify-center ${colors}`}>
            <div className="flex w-screen justify-between px-4 md:px-16 xl:px-60 items-start text-medium">
                <div className="flex text-sm text-wato-grey">
                    <div className="flex flex-col text-sm mr-5">
                        <IconButton content="fa-instagram" onClick={() => window.open('https://kenjiang.ca')} empty />
                        <IconButton content="fa-linkedin" onClick={() => window.open('https://kenjiang.ca')} empty />
                        <IconButton content="fa-twitter" onClick={() => window.open('https://kenjiang.ca')} empty />
                    </div>
                    <div>
                        <div className="relative md:-ml-2 mb-10 h-10 md:w-[300px]">
                            <Image
                                alt="watonomous logo"
                                src="/imgs/watonomous.png"
                                fill
                                className={`object-cover ${!dark && "invert"} max-md:hidden`}
                            />
                            <h1 className="text-lg font-bold md:hidden">WATONOMOUS</h1>
                        </div>
                        <p className="">200 University Avenue</p>
                        <p className="">University of Waterloo, ON</p>
                        <p className="mt-1 text-xs">&copy; 2023 by WATonomous</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-start max-md:text-xs">
                    <FooterCategory title="Home" href="/" />
                    <FooterCategory title="About" href="/about">
                        <FooterItem title="Impact" href="/impact"/>
                        <FooterItem title="Blogs" href="/blogs"/>
                    </FooterCategory>
                    <FooterCategory title="Careers" href="/careers">
                        <FooterItem title="Open Roles" href="/careers#open-roles"/>
                    </FooterCategory>
                    <FooterCategory title="Sponsors" href="/sponsor">
                        <FooterItem title="Apply to Sponsor" href="/sponsor"/>
                    </FooterCategory>
                </div>
            </div>
        </div>
    );
};

export default Footer;
