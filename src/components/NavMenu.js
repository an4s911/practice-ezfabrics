import { CSSTransition } from "react-transition-group";
import { useRef } from "react";
import Logo from "./Logo";
import "../index.css";

export default function NavMenu({ open, closeClick }) {
    const nodeRef = useRef(null);

    function NavLink({ href, children }) {
        return (
            <a
                href={href}
                className="font-thin text-sm tracking-widest border-b border-b-gray-300 border-solid py-2.5 text-black hover:text-gray-500"
            >
                {children}
            </a>
        );
    }

    function MoreBoldLogo() {
        return (
            <div className="mb-3">
                <Logo moreBold={true} />
            </div>
        );
    }

    function CrossIcon() {
        return (
            <div onClick={closeClick} className="p-1 cursor-pointer">
                <div className="relative w-7 h-5">
                    <CrossIconLine rotateClass="rotate-45" />
                    <CrossIconLine rotateClass="-rotate-45" />
                </div>
            </div>
        );
    }

    function CrossIconLine({ rotateClass }) {
        return (
            <div
                className={`absolute rounded-sm w-full h-1.5 top-[7px] bg-black ${rotateClass}`}
            ></div>
        );
    }

    return (
        <div className="md:hidden">
            <CSSTransition
                unmountOnExit
                nodeRef={nodeRef}
                timeout={500}
                in={open}
                classNames={"nav-menu"}
            >
                <div
                    ref={nodeRef}
                    className="absolute py-5 px-5 top-0 right-0 bg-white h-screen w-full flex flex-col"
                >
                    <div className="flex justify-between w-full">
                        <MoreBoldLogo />
                        <CrossIcon />
                    </div>
                    <NavLink href={"/"}>Home</NavLink>
                    <NavLink href={"/example"}>Example</NavLink>
                    <NavLink href={"/design"}>Make Design</NavLink>
                    <NavLink href={"/about"}>About Us</NavLink>
                    <NavLink href={"/login"}>Log in</NavLink>
                </div>
            </CSSTransition>
        </div>
    );
}
