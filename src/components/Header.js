import { useState } from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <div className="flex justify-between overflow-hidden items-center pl-5 pr-11 md:px-5 py-2 shadow-[2px_2px_4px_0px_rgb(170,170,170)]">
            <Logo moreBold={false} className="font-semibold" />
            <NavBar />
        </div>
    );
}
