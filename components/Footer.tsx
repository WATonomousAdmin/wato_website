import NavbarIconItem from "./Navbar/NavbarIconItem";

const Footer = () => {
    return (
        <div className="flex h-96 items-center justify-start bg-zinc-950">
            <p className="rotate-90 transform text-white">
                &copy; 2023 by WATonomous
            </p>
            <div className="h-200 ml-20 flex items-start bg-zinc-950">
                <div className="mr-6 flex flex-col justify-center">
                    <p className="mb-6 text-lg font-bold text-white">
                        Contact Us
                    </p>
                    <p className="text-white">hello@watonomous.ca</p>
                    <p className="text-white">Located at 200 University,</p>
                    <p className="text-white">University of Waterloo, ON</p>
                </div>
                <div className="ml-6 mr-6 flex flex-col justify-center">
                    <a
                        href={"/about"}
                        className="mb-6 text-lg font-bold text-white"
                    >
                        About Us
                    </a>
                    <a href={"/about#tabs"} className="text-white">
                        Overview
                    </a>
                    <a href={"/impact"} className="text-white">
                        Impact
                    </a>
                </div>
                <div className="ml-6 mr-6 flex flex-col justify-center">
                    <p className="mb-6 text-lg font-bold text-white">
                        Sponsorship
                    </p>
                    <a href={"/sponsor"} className="text-white">
                        Opportunities
                    </a>
                    <a href={"/sponsor"} className="text-white">
                        Current Sponsors
                    </a>
                </div>
                <div className="ml-6 mr-6 flex flex-col justify-center">
                    <a
                        href={"/careers"}
                        className="mb-6 text-lg font-bold text-white"
                    >
                        Join The Team
                    </a>
                    <a href={"/careers#open-roles"} className="text-white">
                        Roles
                    </a>
                    <a href={"/careers#open-roles"} className="text-white">
                        Applications
                    </a>
                </div>
                <div className="ml-20 flex flex-col justify-center">
                    <div className="flex items-start">
                        <NavbarIconItem
                            href={"https://kenjiang.ca"}
                            icon={"fa-instagram"}
                        />
                        <NavbarIconItem
                            href={"https://kenjiang.ca"}
                            icon={"fa-twitter"}
                        />
                        <NavbarIconItem
                            href={"https://kenjiang.ca"}
                            icon={"fa-linkedin"}
                        />
                    </div>
                    <img src="./imgs/wato.png" className="ml-1 h-auto w-32" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
