import logo from "../../assets/images/logo.webp"

function NavbarForThankyou() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-12">
                <div className="flex h-16 sm:h-18 md:h-20 w-full items-center justify-between gap-3">
                    <a href="/">
                        <img src={logo} alt="" className="h-7 sm:h-8 md:h-10 w-auto shrink-0" />
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default NavbarForThankyou;