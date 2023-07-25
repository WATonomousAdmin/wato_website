import Link from "next/link";

const NavbarBadge = ({ href, children }) => {
  return (
    <Link href={href} className="pointer-events-auto">
      <div className="fixed mx-2 inline-block rounded-md text-white bg-wato-blue px-5 py-2 text-2xl lg:text-sm font-medium max-lg:mt-2 z-40">
        {children}
      </div>
    </Link>
  );
};

export default NavbarBadge;
