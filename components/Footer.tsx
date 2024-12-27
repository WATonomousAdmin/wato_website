import Image from "next/image";
import { ReactNode } from "react";
import IconButton from "./IconButton";

interface FooterCategoryProps {
    title: string;
    href: string;
    children?: ReactNode;
}

interface FooterItemProps {
    title: string;
    href: string;
}

interface FooterProps {
    dark?: boolean;
}

const FooterCategory = ({ title, href, children }: FooterCategoryProps) => {
    return (
        <ul className="ml-10 flex list-none flex-col justify-center max-md:mb-3 lg:ml-20">
            <li className="text-base font-bold md:mb-2 md:text-lg">
                <a href={href}>{title}</a>
            </li>
            <div className="max-md:flex">{children}</div>
        </ul>
    );
};

const FooterItem = ({ title, href }: FooterItemProps) => {
    return (
        <li className="max-md:pr-5">
            <a href={href}>{title}</a>
        </li>
    );
};

const Footer = ({ dark }: FooterProps) => {
    // let colors = "bg-white text-wato-grey";
    // if (dark) {
    //     colors = "bg-black text-wato-grey";
    // }
    const colors = "bg-black text-wato-grey";
    dark = true;
    return (
        <div
            className={`relative flex h-64 items-center justify-center ${colors}`}
        >
            <div className="text-medium flex w-screen items-start justify-between px-4 md:px-16 xl:px-60">
                <div className="flex text-sm text-wato-grey">
                    <div className="mr-5 flex flex-col text-sm">
                        <IconButton
                            content="fa-instagram"
                            onClick={() =>
                                window.open(
                                    "https://www.instagram.com/watonomous"
                                )
                            }
                            empty
                        />
                        <IconButton
                            content="fa-linkedin"
                            onClick={() =>
                                window.open(
                                    "https://www.linkedin.com/company/watonomous/"
                                )
                            }
                            empty
                        />
                        <IconButton
                            content="fa-youtube"
                            onClick={() =>
                                window.open(
                                    "https://www.youtube.com/@WATonomous/videos"
                                )
                            }
                            empty
                        />
                    </div>
                    <div>
                        <div className="relative mb-10 h-10 md:-ml-2 md:w-[300px]">
                            <Image
                                alt="watonomous logo"
                                src="/imgs/watonomous.png"
                                fill
                                className={`object-cover ${
                                    !dark && "invert"
                                } max-md:hidden`}
                            />
                            <h1 className="text-lg font-bold md:hidden">
                                WATONOMOUS
                            </h1>
                        </div>
                        <p className="">200 University Avenue</p>
                        <p className="">University of Waterloo, ON</p>
                        <p className="mt-1 text-xs">
                            &copy; {new Date().getFullYear()} by WATonomous
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-start max-md:text-xs md:flex-row">
                    <FooterCategory title="Home" href="/" />
                    <FooterCategory title="About" href="/about" />
                    <FooterCategory title="Careers" href="/careers">
                        <FooterItem
                            title="Open Roles"
                            href="/careers#open-roles"
                        />
                    </FooterCategory>
                    {/* <FooterCategory title="Sponsors" href="/sponsor">
                        <FooterItem title="Apply to Sponsor" href="/sponsor" />
                    </FooterCategory> */}
                </div>
            </div>
        </div>
    );
};

export default Footer;
