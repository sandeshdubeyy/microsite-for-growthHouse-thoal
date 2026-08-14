import {
    BadgeCheck,
    Wind,
    Compass,
    Landmark,
    Home,
    SunMoon,
    Maximize2,
    Building2,
} from "lucide-react";
import {
    motion,
    useMotionValue,
    useSpring,
    useMotionTemplate,
    type Variants,
} from "motion/react";
import { type MouseEvent } from "react";

const amenities = [
    { icon: BadgeCheck, title: "RERA Registered" },
    { icon: Wind, title: "Well Ventilated Homes" },
    { icon: Compass, title: "Vaastu Compliant Flats" },
    { icon: Landmark, title: "Elite Gated Community" },
    { icon: Home, title: "1 & 2 BHK Residences" },
    { icon: SunMoon, title: "East & West Facing Units" },
    { icon: Maximize2, title: "Spacious Apartments" },
    { icon: Building2, title: "Contemporary Elevation" },
];

const headerFade: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

// Wave stagger: parent triggers each card in sequence
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
    // Cursor spotlight on the amenities grid (desktop only)
    const spotlightX = useMotionValue(0);
    const spotlightY = useMotionValue(0);
    const springSpotX = useSpring(spotlightX, { damping: 30, stiffness: 200 });
    const springSpotY = useSpring(spotlightY, { damping: 30, stiffness: 200 });
    const spotlightBackground = useMotionTemplate`radial-gradient(280px circle at ${springSpotX}px ${springSpotY}px, rgba(34,197,94,0.18), transparent 80%)`;

    function handleGridMouseMove(e: MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        spotlightX.set(e.clientX - rect.left);
        spotlightY.set(e.clientY - rect.top);
    }

    return (
        <section id="amenities" className="px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="py-12 sm:py-16 md:py-20">
                {/* Header - black band with border beam + dotted SVG background */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={headerFade}
                    className="relative mb-10 overflow-hidden rounded-2xl bg-black px-6 py-12 text-center sm:mb-12 sm:px-10 sm:py-16"
                >
                    {/* Border beam - wide, always-visible glowing arc that continuously rotates */}
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
                    </div>
                </motion.div>

                {/* Amenities Grid - wave stagger entrance, breathing icons, cursor spotlight (desktop) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={gridVariants}
                    onMouseMove={handleGridMouseMove}
                    className="relative mb-8 grid grid-cols-2 divide-x divide-y divide-black overflow-hidden rounded-2xl border border-black sm:mb-10 sm:grid-cols-3 md:grid-cols-5"
                >
                    {/* Cursor spotlight overlay - desktop only, sits above cards, below the button */}
                    <motion.div
                        className="pointer-events-none absolute inset-0 z-20 hidden md:block"
                        style={{ background: spotlightBackground }}
                    />

                    {amenities.map(({ icon: Icon, title }, i) => (
                        <motion.div
                            key={title}
                            variants={cardVariants}
                            className="flex flex-col items-center justify-center gap-3 p-4 text-center sm:p-6"
                        >
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
                        </motion.div>
                    ))}

                    {/* Desktop only: button fills the empty space in row 2, inside the box.
                        z-30 keeps it above the spotlight overlay (z-20) so the green glow
                        never bleeds onto it, since the button's own bg-black is opaque. */}
                    <motion.a
                        href="#enquire"
                        variants={cardVariants}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="relative z-30 hidden items-center justify-center bg-black p-6 text-center text-sm font-medium text-white transition-opacity hover:opacity-80 md:col-span-2 md:flex"
                    >
                        Load More Amenities
                    </motion.a>
                </motion.div>

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
        </section>
    );
}

export default Amenities;