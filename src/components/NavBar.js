import { useState } from "react";
import HamBurgerIcon from "./HamBurgerIcon";
import NavMenu from "./NavMenu";

export default function NavBar() {
    const [open, setOpen] = useState(false);

    function NavLink({ href, children }) {
        return (
            <a
                className="mx-1 hidden md:block py-[5px] px-[20px] font-thin text-sm tracking-wide"
                href={href}
            >
                {children}
            </a>
        );
    }

    return (
        <div className="md:flex md:w-max md:justify-between md:gap-6 whitespace-nowrap">
            <HamBurgerIcon size={16} onClick={() => setOpen(true)} />
            <NavMenu open={open} closeClick={() => setOpen(false)} />

            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/example"}>Example</NavLink>
            <NavLink href={"/design"}>Make Design</NavLink>
            <NavLink href={"/about"}>About Us</NavLink>
            <NavLink href={"/login"}>Log in</NavLink>
        </div>
    );
}
