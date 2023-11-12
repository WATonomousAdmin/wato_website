/* 
TODO:

mobile friendly
contact
finalize ui
*/

import Image from "next/image";
import { ReactNode } from "react";
import IconButton from "./IconButton";

interface FooterCategoryProps {
    title: string,
    href: string,
    children?: ReactNode
};

interface FooterItemProps {
    title: string,
    href: string,
}

const FooterCategory = ({title, href, children} : FooterCategoryProps )=> {
    return (
        <ul className="ml-20 flex list-none flex-col justify-center">
            <li className="mb-2 text-lg font-bold text-wato-grey-porcelain">
                <a href={href}>{title}</a>            
            </li>
            {children}
        </ul>   
    );
};

const FooterItem = ({title, href} : FooterItemProps) => {
    return (
        <li>
            <a href={href}>{title}</a>
        </li>
    );
}

const Footer = () => {
    return (
        <div className="flex h-64 items-center justify-center bg-black text-wato-grey">
            <div className="flex w-screen justify-between px-8 md:px-16 lg:px-60 items-start text-medium">
                <div className="flex text-sm text-wato-grey">
                    <div className="flex flex-col text-sm text-wato-grey mr-5">
                        <IconButton content="fa-instagram" onClick={() => window.open('https://kenjiang.ca')} empty />
                        <IconButton content="fa-linkedin" onClick={() => window.open('https://kenjiang.ca')} empty />
                        <IconButton content="fa-twitter" onClick={() => window.open('https://kenjiang.ca')} empty />
                    </div>
                    <div>
                        <div className="relative -ml-2 mb-10 h-10 w-[300px]">
                            <Image
                                alt="watonomous logo"
                                src="/imgs/watonomous.png"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <p className="">200 University Avenue</p>
                        <p className="">University of Waterloo, ON</p>
                        <p className="mt-1 text-xs">&copy; 2023 by WATonomous</p>
                    </div>
                </div>
                <div className="flex items-start">
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
