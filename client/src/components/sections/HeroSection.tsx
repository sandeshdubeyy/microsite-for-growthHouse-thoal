function HeroSection() {
    return (
        <section className="w-full">
            <div className="grid min-h-[calc(100vh-72px)] grid-cols-2 items-center gap-16 py-16">
                <div>
                    <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                        A New Address For Growth
                    </p>

                    <h1 className="max-w-2xl text-6xl font-bold leading-[1.05] tracking-tight">
                        Discover A Better Way To Own Your Future Home.
                    </h1>

                    <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
                        Explore thoughtfully designed homes, modern living,
                        and an opportunity to be part of a growing destination.
                    </p>

                    <div className="mt-8">
                        <a
                            href="#enquire"
                            className="inline-flex items-center justify-center rounded-lg bg-black px-7 py-4 text-sm font-medium text-white transition-opacity hover:opacity-80"
                        >
                            Enquire Now
                        </a>
                    </div>

                    <div className="mt-14 flex items-center gap-10">
                        <div>
                            <p className="text-2xl font-bold">
                                Premium
                            </p>

                            <span className="text-sm text-gray-500">
                                Living Experience
                            </span>
                        </div>

                        <div className="h-10 w-px bg-gray-200" />

                        <div>
                            <p className="text-2xl font-bold">
                                Growing
                            </p>

                            <span className="text-sm text-gray-500">
                                Investment Opportunity
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex min-h-[600px] items-center justify-center rounded-2xl bg-gray-100">
                    <span className="text-sm text-gray-400">
                        Hero Image / Project Visual
                    </span>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;