const NavbarMobileIcon = ({active, onclick}) => {
    return (
        <div className="w-8 h-8 cursor-pointer lg:hidden z-40 m-5" onClick={onclick}>
            <div className={`rounded-md h-1 w-8 bg-black relative origin-left ${active ? "rotate-45 translate-y-[2px] translate-x-[5px]" : "translate-y-2"} transition-all`}></div>
            <div className={`rounded-md h-1 w-8 bg-black relative origin-left ${active ? "-rotate-45 translate-y-5 translate-x-[5px]" : "translate-y-4"} transition-all`}></div>
        </div>
    );
}

export default NavbarMobileIcon;