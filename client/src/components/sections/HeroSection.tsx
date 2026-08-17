import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { useRef } from "react";
import heroSectionImg from "../../assets/images/heroSection.png";

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.35,
        },
    },
};

const panelVariants: Variants = {
    hidden: { opacity: 0, x: -32 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const wordVariants: Variants = {
    hidden: { opacity: 0, y: "100%" },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
    },
};

const dividerVariants: Variants = {
    hidden: { scaleY: 0 },
    visible: {
        scaleY: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const bracketVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut", delay: 1 },
    },
};

const architecturalLineVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: { duration: 2, ease: "easeInOut", delay: 0.4 },
    },
};

const sweepVariants: Variants = {
    hidden: { x: "-120%", opacity: 1 },
    visible: {
        x: "250%",
        opacity: [1, 1, 0],
        transition: { duration: 1.4, ease: "easeInOut", delay: 1.2 },
    },
};

// Headline split into words, with the key phrase flagged for the green accent color
const headlineWords = [
    { text: "Where" },
    { text: "Naigaon's" },
    { text: "Growth", accent: true },
    { text: "Story", accent: true },
    { text: "Begins." },
];

function CornerBracket({ className, flip }: { className: string; flip?: boolean; }) {
    return (
        <svg
            className={className}
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            style={flip ? { transform: "scale(-1, -1)" } : undefined}
        >
            <motion.path
                d="M0 10 V0 H10"
                stroke="black"
                strokeWidth="1.5"
                variants={bracketVariants}
            />
        </svg>
    );
}

function HeroSection() {
    const imageRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: imageRef,
        offset: ["start end", "end start"],
    });
    const imageY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

    return (
        <section className="relative overflow-hidden px-4 sm:px-6 md:px-12 lg:px-16">
            {/* Dot-grid background */}
            <svg
                className="pointer-events-none absolute inset-0 h-full w-full text-gray-300"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="dot-grid"
                        width="28"
                        height="28"
                        patternUnits="userSpaceOnUse"
                    >
                        <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" opacity="0.35" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dot-grid)" />
            </svg>

            {/* Architectural line-drawing accent */}
            <svg
                className="pointer-events-none absolute -right-10 top-10 hidden h-[420px] w-[420px] text-gray-300 md:block lg:h-[520px] lg:w-[520px]"
                viewBox="0 0 400 400"
                fill="none"
                aria-hidden="true"
            >
                <motion.path
                    d="M40 320 L40 160 L200 60 L360 160 L360 320 M100 320 L100 200 L160 200 L160 320 M220 320 L220 220 L300 220 L300 320 M40 220 L360 220"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    variants={architecturalLineVariants}
                    initial="hidden"
                    animate="visible"
                />
            </svg>

            <motion.div
                className="relative z-10 grid min-h-fit grid-cols-1 items-stretch gap-14 py-10 md:min-h-[calc(100vh-5rem)] md:grid-cols-2 md:gap-12 md:py-8 lg:gap-16"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="relative">
                    {/* Desktop panel: solid black background */}
                    
                    <motion.div
                        variants={panelVariants}
                        className="absolute inset-0 -z-0 hidden rounded-3xl bg-black md:block"
                        aria-hidden="true"
                    />
                    

                    {/* Mobile panel: hero image as background with a dark overlay so text stays readable */}
                    <motion.div
                        variants={panelVariants}
                        className="absolute inset-0 -z-0 overflow-hidden rounded-3xl md:hidden"
                        aria-hidden="true"
                    >
                        <img
                            src={heroSectionImg}
                            alt=""
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/75" />
                    </motion.div>

                    <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12">
                        <motion.p
                            variants={fadeUp}
                            className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-400 sm:mb-5 sm:text-sm"
                        >
                            Naigaon's Growth Corridor, Redefined
                        </motion.p>

                        <h1 className="relative max-w-2xl pb-2 text-4xl font-bold leading-[1.2] tracking-tight text-white sm:text-5xl sm:leading-[1.15] md:text-6xl md:leading-[1.15]">
                            {headlineWords.map(({ text, accent }, i) => (
                                <span key={i} className="mr-[0.25em] inline-block overflow-hidden pb-1">
                                    <motion.span
                                        variants={wordVariants}
                                        className={`inline-block ${accent ? "text-green-500" : ""}`}
                                    >
                                        {text}
                                    </motion.span>
                                </span>
                            ))}

                            {/* Light-sweep reveal */}
                            <motion.span
                                variants={sweepVariants}
                                initial="hidden"
                                animate="visible"
                                className="pointer-events-none absolute inset-y-0 left-0 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/50 to-transparent mix-blend-screen"
                                aria-hidden="true"
                            />
                        </h1>

                        <motion.p
                            variants={fadeUp}
                            className="mt-5 max-w-xl text-base leading-7 text-gray-300 sm:mt-7 sm:text-lg sm:leading-8"
                        >
                            9 highrise towers, 80+ lifestyle amenities, and a home just 2 minutes
                            from Naigaon Station — by HoABL, India's largest land buyer in 2024.
                        </motion.p>

                        <motion.div variants={fadeUp} className="mt-6 sm:mt-8">
                            <motion.a
                                href="#enquire"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-200 sm:px-7 sm:py-4"
                            >
                                Enquire Now
                            </motion.a>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            className="mt-10 flex items-center gap-6 sm:mt-14 sm:gap-10"
                        >
                            <div>
                                <p className="text-xl font-bold text-white sm:text-2xl">
                                    9+ Towers
                                </p>

                                <span className="text-xs text-gray-400 sm:text-sm">
                                    G+35 Storey Highrises
                                </span>
                            </div>

                            <motion.div
                                variants={dividerVariants}
                                style={{ transformOrigin: "top" }}
                                className="h-10 w-px bg-white/20"
                            />

                            <div>
                                <p className="text-xl font-bold text-white sm:text-2xl">
                                    80+ Amenities
                                </p>

                                <span className="text-xs text-gray-400 sm:text-sm">
                                    Across 6 Lifestyle Zones
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Desktop-only image column - hidden entirely on mobile since the image now lives behind the text panel */}
                <motion.div
                    ref={imageRef}
                    variants={imageVariants}
                    style={{ y: imageY }}
                    className="relative hidden min-h-0 overflow-hidden rounded-2xl bg-gray-100 md:flex md:items-center md:justify-center"
                >
                    <img
                        src={heroSectionImg}
                        alt="Property visual"
                        className="block h-full w-full object-cover"
                    />

                    <motion.div initial="hidden" animate="visible">
                        <CornerBracket className="absolute -left-1 -top-1" />
                        <CornerBracket className="absolute -right-1 -top-1 rotate-90" />
                        <CornerBracket className="absolute -bottom-1 -left-1 -rotate-90" />
                        <CornerBracket className="absolute -bottom-1 -right-1 rotate-180" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default HeroSection;