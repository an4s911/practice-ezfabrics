import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <div
            className={
                "sticky top-0 bg-white shadow-[2px_2px_4px_0_rgb(170,170,170)]  h-16 " +
                "md:grid md:grid-cols-[max-content_1fr]"
            }
        >
            <Logo />
            <NavBar />
        </div>
    );
}
