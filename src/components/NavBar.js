import { useState } from "react";
export default function NavBar() {
    function navItems() {
        return [
            <li>
                <a href="/">Home</a>
            </li>,
            <li>
                <a href="/example">Example</a>
            </li>,
            <li>
                <a href="/design">Make Design</a>
            </li>,
            <li>
                <a href="/about">About Us</a>
            </li>,
            <li>
                <a href="/login">Log in</a>
            </li>,
        ];
    }
    const [open, setOpen] = useState(false);

    function handleToggle() {
        setOpen(!open);
    }

    return (
        <div
            className={
                (open ? "w-full" : "w-1/2") +
                " h-full absolute top-0 right-0 flex pr-4 justify-end " +
                "md:w-full md:static md:block"
            }
        >
            {/* Nav items */}
            <div
                className={
                    (open ? "w-full z-0" : "w-0 -z-10 ") +
                    "  overflow-hidden transition-all absolute top-0 right-0 h-screen bg-slate-200 flex flex-col justify-center items-center " +
                    " md:w-full md:z-auto md:static md:bg-transparent md:h-full md:flex md:transition-none md:justify-end md:overflow-visible"
                }
            >
                <ul className="md:flex md:h-full md:items-center md:gap-8">
                    {navItems()}
                </ul>
            </div>

            {/* Hamburger menu */}
            <div
                className={
                    (open ? "h-6 -mt-0.5" : "gap-0.5") +
                    " cursor-pointer flex w-6 top-5 right-4 transition-all flex-col justify-center items-center " +
                    "md:hidden"
                }
                onClick={handleToggle}
            >
                <div
                    className={
                        (open ? "close-btn-line rotate-45" : "") +
                        " transition-all menu-line "
                    }
                ></div>
                <div
                    className={
                        (open ? "close-btn-line -rotate-45" : "") +
                        " menu-line transition-all "
                    }
                ></div>
                {open ? "" : <div className="menu-line"></div>}
            </div>
        </div>
    );
}
