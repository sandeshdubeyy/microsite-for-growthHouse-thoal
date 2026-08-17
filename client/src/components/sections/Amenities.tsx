import {
    BadgeCheck,
    Zap,
    Shield,
    Home,
    SunMoon,
    Maximize2,
    Users,
    TreePine,
    X,
} from "lucide-react";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useSpring,
    useVelocity,
    useTransform,
    useMotionTemplate,
    type Variants,
} from "motion/react";
import { useState, useEffect, type MouseEvent } from "react";

import reraRegistered from "../../assets/images/reraRegistered.png";
import spacious from "../../assets/images/spacious.png";
import eastAndWest from "../../assets/images/eastAndWest.png";
import bhkResidency from "../../assets/images/bhkResidency.png";
import infra from "../../assets/images/infra.png";
import security from "../../assets/images/security.png";
import community from "../../assets/images/community.png";
import trees from "../../assets/images/trees.png";

const amenities = [
    { icon: BadgeCheck, title: "RERA Registered", image: reraRegistered },
    { icon: Zap, title: "Modern Infrastructure", image: infra },
    { icon: Shield, title: "24/7 Security", image: security },
    { icon: Users, title: "Community Living", image: community },
    { icon: Home, title: "1 & 2 BHK Residences", image: bhkResidency },
    { icon: SunMoon, title: "East & West Facing Units", image: eastAndWest },
    { icon: Maximize2, title: "Spacious Apartments", image: spacious },
    { icon: TreePine, title: "Green Spaces", image: trees },
];

const headerFade: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const gridVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.85, y: 12 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 260, damping: 16 },
    },
};

function Amenities() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // Cursor spotlight (background glow) - tracked relative to the grid box itself
    const spotlightX = useMotionValue(0);
    const spotlightY = useMotionValue(0);
    const springSpotX = useSpring(spotlightX, { damping: 30, stiffness: 200 });
    const springSpotY = useSpring(spotlightY, { damping: 30, stiffness: 200 });
    const spotlightBackground = useMotionTemplate`radial-gradient(280px circle at ${springSpotX}px ${springSpotY}px, rgba(34,197,94,0.18), transparent 80%)`;

    // Cursor-follow enlarged image popup (desktop) - tracked relative to the OUTER wrapper,
    // which is not clipped, so the popup can roam anywhere across header + grid + button.
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

    function handleOuterMouseMove(e: MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    }

    function handleGridMouseMove(e: MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        spotlightX.set(e.clientX - rect.left);
        spotlightY.set(e.clientY - rect.top);
    }

    // Lock page scroll while the mobile lightbox is open
    useEffect(() => {
        document.body.style.overflow = activeIndex !== null ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [activeIndex]);

    return (
        <section id="amenities" className="px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="py-6 sm:py-8 md:py-10">
                {/* Outer wrapper - NOT clipped, so the floating image can roam across header + grid + button */}
                <div
                    className="relative"
                    onMouseMove={handleOuterMouseMove}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    {/* Header - black band with border beam + dotted SVG background */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={headerFade}
                        className="relative mb-10 overflow-hidden rounded-2xl bg-black px-6 py-12 text-center sm:mb-12 sm:px-10 sm:py-16"
                    >
                        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-2xl">
                            <motion.div
                                className="absolute inset-[-50%]"
                                style={{
                                    background:
                                        "conic-gradient(from 0deg, transparent 0%, rgba(34,197,94,0.15) 30%, rgba(34,197,94,0.55) 55%, rgba(34,197,94,1) 68%, rgba(34,197,94,0.55) 78%, rgba(34,197,94,0.15) 90%, transparent 100%)",
                                }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                        <div className="absolute inset-[5px] z-[1] rounded-2xl bg-black" />

                        <svg
                            width="100%"
                            height="100%"
                            className="pointer-events-none absolute inset-0 z-[2] text-white"
                            aria-hidden="true"
                        >
                            <defs>
                                <pattern
                                    id="amenities-dot-grid"
                                    width="24"
                                    height="24"
                                    patternUnits="userSpaceOnUse"
                                >
                                    <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" opacity="0.25" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#amenities-dot-grid)" />
                        </svg>

                        <div className="relative z-10 mx-auto max-w-3xl">
                            <motion.h2
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                                className="text-2xl font-bold text-green-500 sm:text-3xl md:text-4xl"
                            >
                                Amenities At House of Abhinandan Lodha Naigaon
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                                className="mt-4 text-sm leading-6 text-gray-300 sm:text-base sm:leading-7"
                            >
                                Carefully designed to complement a comfortable lifestyle, the facilities at
                                Abhinandan Lodha Ventures Naigaon blend functional infrastructure with modern
                                community living, providing comfort and convenience that caters to your dreams
                                and the demands of a contemporary lifestyle.
                            </motion.p>

                            {/* Hint text - tells the user this grid is interactive */}
                            <motion.p
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
                                className="mt-3 text-xs font-medium uppercase tracking-wide text-green-500 sm:hidden"
                            >
                                Tap to View
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
                                className="mt-3 hidden text-xs font-medium uppercase tracking-wide text-green-500 sm:block"
                            >
                                Hover to Reveal
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Amenities Grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={gridVariants}
                        onMouseMove={handleGridMouseMove}
                        className="mb-8 grid grid-cols-2 divide-x divide-y divide-black overflow-hidden rounded-2xl border border-black sm:mb-10 sm:grid-cols-3 md:grid-cols-5"
                    >
                        {/* Cursor spotlight overlay - desktop only, ambient glow */}
                        <motion.div
                            className="pointer-events-none absolute inset-0 z-20 hidden md:block"
                            style={{ background: spotlightBackground }}
                        />

                        {amenities.map(({ icon: Icon, title }, i) => (
                            <motion.div
                                key={title}
                                variants={cardVariants}
                                className="relative cursor-pointer"
                                onMouseEnter={() => setHoveredIndex(i)}
                                onClick={() => setActiveIndex(i)}
                            >
                                <div className="flex flex-col items-center justify-center gap-3 p-4 text-center sm:p-6">
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: i * 0.15,
                                        }}
                                    >
                                        <Icon className="h-7 w-7 shrink-0 text-black sm:h-8 sm:w-8" />
                                    </motion.div>
                                    <h3 className="text-xs font-bold leading-snug sm:text-sm">
                                        {title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}

                        {/* Desktop only: button fills the empty space in row 2, inside the box.
                            onMouseEnter clears hoveredIndex so the floating image disappears
                            the instant the cursor reaches this button. */}
                        <motion.a
                            href="#enquire"
                            variants={cardVariants}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onMouseEnter={() => setHoveredIndex(null)}
                            className="relative z-30 hidden items-center justify-center bg-black p-6 text-center text-sm font-medium text-white transition-opacity hover:opacity-80 md:col-span-2 md:flex"
                        >
                            Load More Amenities
                        </motion.a>
                    </motion.div>

                    {/* Desktop: cursor-follow enlarged image popup - sibling of header/grid, free to roam the whole wrapper */}
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
                                className="z-50 hidden h-64 w-96 overflow-hidden rounded-2xl shadow-2xl md:block"
                            >
                                <img
                                    src={amenities[hoveredIndex].image}
                                    alt={amenities[hoveredIndex].title}
                                    className="h-full w-full object-cover"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Mobile/tablet only: button sits below the box */}
                <div className="flex justify-center md:hidden">
                    <motion.a
                        href="#enquire"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80 sm:px-8 sm:py-4"
                    >
                        Load More Amenities
                    </motion.a>
                </div>
            </div>

            {/* Full-screen lightbox - same pattern as the Gallery section, mobile/tablet only */}
            {activeIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:hidden"
                    onClick={() => setActiveIndex(null)}
                >
                    <div
                        className="relative flex max-h-[90vh] w-full max-w-lg flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={amenities[activeIndex].image}
                            alt={amenities[activeIndex].title}
                            className="max-h-[75vh] w-full rounded-lg object-contain"
                        />
                        <p className="mt-4 text-center text-base font-bold text-white">
                            {amenities[activeIndex].title}
                        </p>

                        {/* Close Button */}
                        <button
                            onClick={() => setActiveIndex(null)}
                            className="absolute right-2 top-2 rounded-full bg-white p-2 transition-colors hover:bg-gray-200"
                        >
                            <X className="h-6 w-6 text-black" />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Amenities;