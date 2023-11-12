import NavbarIconItem from "./Navbar/NavbarIconItem";

interface FooterProps {
    toggleModal(): any;
}

const Footer = ({ toggleModal }: FooterProps) => {
    return (
        <div className="h-96 bg-black py-[6rem]">
            <div className="flex justify-around">
                <div className="pl-8">
                    <img src="./imgs/wato.png" className="w-32 h-auto" />
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
                <div className="border-r border-wato-white-bone pr-4">
                </div>
                <div className="text-wato-white-bone leading-8">
                    <a href={"/about"} className="font-bold text-xl">About Us</a>
                    <a className="mt-8 font-light block">Our Story</a>
                    <a className="font-light block">Our Vision</a>
                </div>
                <div className="text-wato-white-bone leading-8">
                    <a onClick={toggleModal} className="font-bold text-xl">Contact Us</a>
                    <p className="mt-8 font-light">hello@watonomous.ca</p>
                    <p className="font-light">Located at 200 University,</p>
                    <p className="font-light">University of Waterloo, ON</p>
                </div>
                <div className="text-wato-white-bone leading-8">
                    <a href={"/sponsor"} className="font-bold text-xl">Sponsorship</a>
                    <a href={"/sponsor"} className="mt-8 font-light block">Opportunities</a>
                    <a href={"/sponsor"} className="font-light block">Current Sponsors</a>
                </div>
                <div className="text-wato-white-bone leading-8">
                    <a href={"/careers"} className="font-bold text-xl">Join the Team</a>
                    <a href={"/careers#open-roles"} className="mt-8 font-light block">Roles</a>
                    <a href={"/careers#open-roles"} className="font-light block">Applications</a>
                </div>
            </div>
            <div className="text-wato-white-bone flex justify-center font-light mt-16 text-sm">
                &#169; 2023 by WATonomous
            </div>
        </div>
    );
}

export default Footer;