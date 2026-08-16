import logo from "../assets/images/logo.webp"

const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Highlights", href: "#highlights" },
    { label: "Amenities", href: "#amenities" },
    { label: "Floor Plans", href: "#floor-plans" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location", href: "#location" },
    { label: "FAQ", href: "#faq" },
];

function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-12">
                <div className="flex h-16 sm:h-18 md:h-20 w-full items-center justify-between gap-3">
                    <img src={logo} alt="" className="h-7 sm:h-8 md:h-10 w-auto shrink-0" />

                    <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="relative whitespace-nowrap text-xs lg:text-sm text-gray-700 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:font-semibold hover:text-black hover:after:w-full"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <a
                        href="#enquire"
                        className="shrink-0 whitespace-nowrap rounded-lg bg-black px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm md:px-5 md:py-3 font-medium text-white transition-opacity hover:opacity-80"
                    >
                        Enquire Now
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;