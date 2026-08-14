import { Building, Home, LayoutGrid, Sparkles } from "lucide-react";
import { motion, useInView, animate, type Variants } from "motion/react";
import { useEffect, useRef, useState } from "react";
import projectSnapshotImg from "../../assets/images/projectSnapshot.png";

const panelVariants: Variants = {
    hidden: { opacity: 0, x: 32 },
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

const underlineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
    },
};

const marqueeTags = [
    "Sustainable",
    "Modern Architecture",
    "Premium Living",
    "Smart Homes",
    "Green Spaces",
];

function CountUp({
    value,
    suffix = "",
    duration = 1.6,
}: {
    value: number;
    suffix?: string;
    duration?: number;
}) {
    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        const controls = animate(0, value, {
            duration,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (v) => setDisplay(Math.round(v)),
        });
        return () => controls.stop();
    }, [isInView, value, duration]);

    return (
        <p ref={ref} className="flex justify-center whitespace-nowrap text-xs font-bold sm:text-base md:text-xl">
            {display}
            {suffix}
        </p>
    );
}

const stats = [
    { icon: Building, label: "Total Area", value: 45, suffix: " acres" },
    { icon: Home, label: "Number of Units", value: 800, suffix: "+" },
    { icon: LayoutGrid, label: "Configurations", value: 4, suffix: " Types" },
    { icon: Sparkles, label: "Amenities", value: 25, suffix: "+" },
];

function ProjectSnapshot() {
    return (
        <section id="overview" className="overflow-hidden px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="py-12 sm:py-16 md:py-20">
                <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12">
                    {/* LEFT SIDE - Bordered box wrapping Image + Stats */}
                    <div>
                        <div className="rounded-2xl p-3 sm:p-4 md:p-5">
                            {/* Image with curtain wipe + Ken Burns + blueprint ring */}
                            <div className="relative mb-5 sm:mb-6">
                                <svg
                                    className="pointer-events-none absolute -inset-3 hidden md:block"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    aria-hidden="true"
                                >
                                    <motion.rect
                                        x="1"
                                        y="1"
                                        width="98"
                                        height="98"
                                        rx="4"
                                        fill="none"
                                        stroke="black"
                                        strokeWidth="0.4"
                                        strokeDasharray="4 3"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.6, ease: "easeInOut", delay: 0.5 }}
                                    />
                                </svg>

                                <div className="relative overflow-hidden rounded-lg bg-gray-100 sm:min-h-[340px] md:min-h-full">
                                    <motion.div
                                        className="h-full w-full"
                                        initial={{ scale: 1 }}
                                        whileInView={{ scale: 1.08 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 10,
                                            repeat: Infinity,
                                            repeatType: "mirror",
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <img
                                            src={projectSnapshotImg}
                                            alt="Project overview"
                                            className="block h-full w-full object-cover"
                                        />
                                    </motion.div>

                                    {/* Curtain wipe reveal */}
                                    <motion.div
                                        className="absolute inset-0 z-10 bg-black"
                                        style={{ originX: 1 }}
                                        initial={{ scaleX: 1 }}
                                        whileInView={{ scaleX: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
                                    />
                                </div>
                            </div>

                            {/* Stats in 1x4 Grid */}
                            <div className="grid grid-cols-4 gap-2 sm:gap-4">
                                {stats.map(({ icon: Icon, label, value, suffix }, i) => (
                                    <motion.div
                                        key={label}
                                        className="group cursor-default"
                                        whileHover={{ y: -4 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                    >
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 14,
                                                delay: i * 0.1,
                                            }}
                                            className="flex justify-center"
                                        >
                                            <Icon className="mb-2 h-4 w-4 text-black transition-transform duration-300 group-hover:rotate-12 sm:mb-3 sm:h-5 sm:w-5" />
                                        </motion.div>
                                        <p className="flex justify-center whitespace-nowrap text-[9px] text-gray-500 sm:text-xs">
                                            {label}
                                        </p>
                                        <CountUp value={value} suffix={suffix} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE - Text, black panel */}
                    <motion.div
                        variants={panelVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="rounded-3xl bg-black p-6 sm:p-8 md:p-10 lg:p-12"
                    >
                        <motion.h2
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-white sm:text-4xl"
                        >
                            Project Overview
                        </motion.h2>

                        <motion.div
                            variants={underlineVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            style={{ transformOrigin: "left" }}
                            className="mt-4 h-px w-10 bg-white/40"
                        />

                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="mt-5 text-base text-gray-300 sm:text-lg"
                        >
                            Discover the essence of modern living with our thoughtfully designed community that brings together premium architecture and sustainable living.
                        </motion.p>
                    </motion.div>
                </div>

                {/* Marquee teaser strip */}
                <div className="pt-10 sm:pt-14 md:pt-25 overflow-hiddenpy-3">
                    <motion.div
                        className="flex w-max items-center gap-8 whitespace-nowrap text-xs uppercase tracking-[0.2em] text-gray-500"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        {[...marqueeTags, ...marqueeTags].map((tag, i) => (
                            <span key={i} className="flex items-center gap-8">
                                {tag}
                                <span className="text-gray-300">•</span>
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default ProjectSnapshot;