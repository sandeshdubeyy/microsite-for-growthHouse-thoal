import { Zap, Shield, TreePine, Users, Award } from "lucide-react";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useSpring,
    useVelocity,
    useTransform,
    type Variants,
} from "motion/react";
import { useState, useEffect, type MouseEvent } from "react";

import infra from "../../assets/images/infra.png";
import security from "../../assets/images/security.png";
import trees from "../../assets/images/trees.png";
import community from "../../assets/images/community.png";
import award from "../../assets/images/award.png";

const highlights = [
    {
        icon: Zap,
        title: "Modern Infrastructure",
        description: "State-of-the-art facilities and utilities",
        image: infra,
    },
    {
        icon: Shield,
        title: "24/7 Security",
        description: "Advanced surveillance and gated access",
        image: security,
    },
    {
        icon: TreePine,
        title: "Green Spaces",
        description: "Lush gardens and eco-friendly design",
        hideDescriptionOnTablet: true,
        image: trees,
    },
    {
        icon: Users,
        title: "Community Living",
        description: "Social spaces and events for residents",
        image: community,
    },
    {
        icon: Award,
        title: "Award Winning",
        description: "Recognized for excellence and design",
        image: award,
    },
];

const headerFade: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

function ProjectHighlights() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { damping: 20, stiffness: 300, mass: 0.5 });
    const springY = useSpring(mouseY, { damping: 20, stiffness: 300, mass: 0.5 });
    const velocityX = useVelocity(springX);
    const velocityY = useVelocity(springY);
    const skewX = useSpring(useTransform(velocityX, [-2000, 2000], [-12, 12]), {
        damping: 15,
        stiffness: 200,
    });
    const skewY = useSpring(useTransform(velocityY, [-2000, 2000], [-8, 8]), {
        damping: 15,
        stiffness: 200,
    });

    function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    }

    // Mobile: auto-close the active image after 3s. Resets whenever activeIndex changes
    // (so switching cards or holding it open both restart the countdown correctly).
    useEffect(() => {
        if (activeIndex === null) return;
        const timer = setTimeout(() => setActiveIndex(null), 3000);
        return () => clearTimeout(timer);
    }, [activeIndex]);

    function handleCardTap(index: number) {
        setActiveIndex((current) => (current === index ? null : index));
    }

    return (
        <section className="px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="py-6 sm:py-8 md:py-10">
                <div
                    className="relative"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    {/* Header - black band with dotted SVG background, animated in on scroll */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={headerFade}
                        className="relative mb-10 overflow-hidden rounded-2xl bg-black py-12 text-center sm:mb-12 sm:py-16"
                    >
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
                            <motion.h2
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                                className="text-3xl font-bold text-white sm:text-4xl"
                            >
                                Project Highlights
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                                className="mt-2 text-sm text-gray-300 sm:text-base"
                            >
                                Discover what makes this project exceptional
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Highlight Cards */}
                    <div className="relative mb-10 grid grid-cols-1 divide-y divide-black overflow-hidden rounded-2xl border border-black sm:mb-12 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:grid-cols-5">
                        {highlights.map(({ icon: Icon, title, description, hideDescriptionOnTablet }, index) => (
                            <div
                                key={title}
                                className="relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onClick={() => handleCardTap(index)}
                            >
                                <div className="flex items-center gap-4 p-4 text-left sm:block sm:p-6 sm:text-center">
                                    <Icon className="h-7 w-7 shrink-0 text-black sm:mx-auto sm:mb-4 sm:h-10 sm:w-10" />
                                    <h3 className="text-sm font-bold sm:mb-2 sm:text-base md:text-lg">
                                        {title}
                                    </h3>
                                    <p
                                        className={`hidden text-xs text-gray-600 sm:block sm:text-sm ${hideDescriptionOnTablet ? "sm:hidden md:block" : ""
                                            }`}
                                    >
                                        {description}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* Mobile: tap-to-reveal image covers the ENTIRE grid, auto-closes after 3s */}
                        <AnimatePresence>
                            {activeIndex !== null && (
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    onClick={() => setActiveIndex(null)}
                                    className="absolute inset-0 z-20 sm:hidden"
                                >
                                    <img
                                        src={highlights[activeIndex].image}
                                        alt={highlights[activeIndex].title}
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20" />
                                    <p className="absolute bottom-4 left-4 text-base font-bold text-white">
                                        {highlights[activeIndex].title}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Desktop: cursor-follow image popup */}
                    <AnimatePresence>
                        {hoveredIndex !== null && (
                            <motion.div
                                key={hoveredIndex}
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.85 }}
                                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                                style={{
                                    position: "absolute",
                                    left: springX,
                                    top: springY,
                                    x: "-50%",
                                    y: "-110%",
                                    skewX,
                                    skewY,
                                    pointerEvents: "none",
                                }}
                                className="z-30 hidden h-72 w-[26rem] overflow-hidden rounded-2xl shadow-2xl md:block"
                            >
                                <img
                                    src={highlights[hoveredIndex].image}
                                    alt={highlights[hoveredIndex].title}
                                    className="h-full w-full object-cover"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Explore More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    className="flex justify-center"
                >
                    <motion.a
                        href="#enquire"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80 sm:px-8 sm:py-4"
                    >
                        Explore More Amenities
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}

export default ProjectHighlights;