import logo from "../assets/images/logo.webp"

function Navbar() {
    return (
        <header className="w-full border-b border-gray-200 bg-white">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-12">
                <div className="flex h-16 sm:h-18 md:h-20 w-full items-center justify-between gap-3">
                    <img src={logo} alt="" className="h-7 sm:h-8 md:h-10 w-auto shrink-0" />

                    <div className="hidden md:flex items-center gap-6 lg:gap-10">
                        <a
                            href="#overview"
                            className="relative text-sm text-gray-700 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:font-semibold hover:text-black hover:after:w-full"
                        >
                            Overview
                        </a>

                        <a
                            href="#highlights"
                            className="relative text-sm text-gray-700 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:font-semibold hover:text-black hover:after:w-full"
                        >
                            Highlights
                        </a>

                        <a
                            href="#amenities"
                            className="relative text-sm text-gray-700 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:font-semibold hover:text-black hover:after:w-full"
                        >
                            Amenities
                        </a>

                        <a
                            href="#location"
                            className="relative text-sm text-gray-700 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:font-semibold hover:text-black hover:after:w-full"
                        >
                            Location
                        </a>

                        <a
                            href="#faq"
                            className="relative text-sm text-gray-700 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:font-semibold hover:text-black hover:after:w-full"
                        >
                            FAQ
                        </a>
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