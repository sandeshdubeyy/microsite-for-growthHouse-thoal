function Navbar() {
    return (
        <header className="w-full border-b border-gray-200 bg-white">
            <nav className="flex min-h-[72px] w-full items-center justify-between px-12">
                <a
                    href="/"
                    className="text-xl font-bold tracking-tight"
                >
                    Growth Housing
                </a>

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
            </nav>
        </header>
    );
}

export default Navbar;