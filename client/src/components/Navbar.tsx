import logo from "../assets/images/logo.webp"

function Navbar() {
    return (
        <header className="w-full border-b border-gray-200 bg-white">
            <nav className="mx-auto max-w-7xl px-12">
                <div className="flex min-h-[92px] items-center justify-between">
                    <img src={logo} alt="" className="h-15" />

                    <div className="flex items-center gap-8">
                        <a href="#overview" className="text-sm transition-opacity hover:opacity-60">
                            Overview
                        </a>

                        <a href="#highlights" className="text-sm transition-opacity hover:opacity-60">
                            Highlights
                        </a>

                        <a href="#amenities" className="text-sm transition-opacity hover:opacity-60">
                            Amenities
                        </a>

                        <a href="#location" className="text-sm transition-opacity hover:opacity-60">
                            Location
                        </a>

                        <a href="#faq" className="text-sm transition-opacity hover:opacity-60">
                            FAQ
                        </a>
                    </div>

                    <a
                        href="#enquire"
                        className="rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
                    >
                        Enquire Now
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;