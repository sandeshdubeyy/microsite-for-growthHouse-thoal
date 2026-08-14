import { Zap, Shield, TreePine, Users, Award } from "lucide-react";

const highlights = [
    {
        icon: Zap,
        title: "Modern Infrastructure",
        description: "State-of-the-art facilities and utilities",
    },
    {
        icon: Shield,
        title: "24/7 Security",
        description: "Advanced surveillance and gated access",
    },
    {
        icon: TreePine,
        title: "Green Spaces",
        description: "Lush gardens and eco-friendly design",
        hideDescriptionOnTablet: true,
    },
    {
        icon: Users,
        title: "Community Living",
        description: "Social spaces and events for residents",
    },
    {
        icon: Award,
        title: "Award Winning",
        description: "Recognized for excellence and design",
    },
];

function ProjectHighlights() {
    return (
        <section className="px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="py-12 sm:py-16 md:py-20">
                {/* Header - black band with dotted SVG background */}
                <div className="relative mb-10 overflow-hidden rounded-2xl bg-black py-12 text-center sm:mb-12 sm:py-16">
                    <svg
                        className="pointer-events-none absolute inset-0 h-full w-full text-white"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="highlights-dot-grid"
                                width="24"
                                height="24"
                                patternUnits="userSpaceOnUse"
                            >
                                <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" opacity="0.25" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#highlights-dot-grid)" />
                    </svg>

                    <div className="relative z-10 px-4">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">
                            Project Highlights
                        </h2>
                        <p className="mt-2 text-sm text-gray-300 sm:text-base">
                            Discover what makes this project exceptional
                        </p>
                    </div>
                </div>

                {/* Highlight Cards - table rows on mobile, grid with dividers from sm up */}
                <div className="mb-10 grid grid-cols-1 divide-y divide-black overflow-hidden rounded-2xl border border-black sm:mb-12 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:grid-cols-5">
                    {highlights.map(({ icon: Icon, title, description, hideDescriptionOnTablet }) => (
                        <div
                            key={title}
                            className="flex items-center gap-4 p-4 text-left sm:block sm:p-6 sm:text-center"
                        >
                            <Icon className="h-7 w-7 shrink-0 text-black sm:mx-auto sm:mb-4 sm:h-10 sm:w-10" />
                            <h3 className="text-sm font-bold sm:mb-2 sm:text-base md:text-lg">
                                {title}
                            </h3>
                            <p
                                className={`hidden text-xs text-gray-600 sm:block sm:text-sm ${
                                    hideDescriptionOnTablet ? "sm:hidden md:block" : ""
                                }`}
                            >
                                {description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Explore More Button */}
                <div className="flex justify-center">
                    <a
                        href="#enquire"
                        className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80 sm:px-8 sm:py-4"
                    >
                        Explore More Amenities
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ProjectHighlights;