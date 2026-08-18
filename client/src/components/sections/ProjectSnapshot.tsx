import { Landmark, Building, Layers, Home, Sparkles, LayoutGrid, Tag, CalendarClock } from "lucide-react";
import { motion, useInView, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import projectSnapshotImg from "../../assets/images/projectSnapshot.png";
import projectSnapshot2Img from "../../assets/images/projectSnapshot2.png";

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
    prefix = "",
    duration = 1.6,
}: {
    value: number;
    suffix?: string;
    prefix?: string;
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
            onUpdate: (v) => setDisplay(Math.round(v * 10) / 10),
        });
        return () => controls.stop();
    }, [isInView, value, duration]);

    return (
        <p ref={ref} className="flex justify-center whitespace-nowrap text-xs font-bold sm:text-base md:text-lg">
            {prefix}
            {display}
            {suffix}
        </p>
    );
}

const stats = [
    { icon: Landmark, label: "Land Parcel", value: 12.5, suffix: " acres" },
    { icon: Building, label: "Towers", value: 9, suffix: "+" },
    { icon: Layers, label: "Floors", value: 2, prefix: "G+", suffix: "+35" },
    { icon: Home, label: "Total Units", value: 500, suffix: "+" },
    { icon: LayoutGrid, label: "Configurations", value: 4, suffix: " Types" },
    { icon: Sparkles, label: "Amenities", value: 80, suffix: "+" },
    { icon: Tag, label: "Starting Price", value: 34.99, prefix: "₹", suffix: "L*" },
    { icon: CalendarClock, label: "Possession", value: 2029, suffix: "" },
];

function ProjectSnapshot() {
    return (
        <section id="overview" className="overflow-hidden px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="py-6 sm:py-8 md:py-10">
                {/* Header - black band, border beam, dot-grid SVG, green accent - reduced vertical padding */}
                <div className="relative mb-10 overflow-hidden rounded-2xl bg-black px-6 py-6 text-center sm:mb-12 sm:px-10 sm:py-8">
                    {/* Border beam */}
                    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-2xl">
                        <div
                            className="absolute inset-[-50%] animate-[spin_6s_linear_infinite]"
                            style={{
                                background:
                                    "conic-gradient(from 0deg, transparent 0%, rgba(34,197,94,0.15) 30%, rgba(34,197,94,0.55) 55%, rgba(34,197,94,1) 68%, rgba(34,197,94,0.55) 78%, rgba(34,197,94,0.15) 90%, transparent 100%)",
                            }}
                        />
                    </div>
                    <div className="absolute inset-[5px] z-[1] rounded-2xl bg-black" />

                    {/* Dot-grid pattern */}
                    <svg
                        width="100%"
                        height="100%"
                        className="pointer-events-none absolute inset-0 z-[2] text-white"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="overview-dot-grid"
                                width="24"
                                height="24"
                                patternUnits="userSpaceOnUse"
                            >
                                <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" opacity="0.25" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#overview-dot-grid)" />
                    </svg>

                    <div className="relative z-10 mx-auto max-w-3xl">
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            <span className="text-green-500">Project Overview</span>{" "}
                            <span className="text-white">— A New Chapter In Growth Housing</span>
                        </h2>
                        <p className="mt-3 text-sm leading-6 text-gray-300 sm:text-base sm:leading-7">
                            Set across 12.5 acres of land parcels in Naigaon, this is HoABL's vision
                            for everyday living — 9 highrise towers rising G+2+35 storeys, built for
                            Mumbaikars who see this address as their next big move.
                        </p>
                    </div>
                </div>

                {/* Single bordered box wrapping both images + stats - one border at every breakpoint */}
                <div className="rounded-2xl border border-black p-3 sm:p-4 md:p-5">
                    {/* Two images side by side - 1x2 grid, full width */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                        {[projectSnapshotImg, projectSnapshot2Img].map((img, index) => (
                            <div
                                key={index}
                                className="relative min-h-[280px] overflow-hidden rounded-lg bg-gray-100 sm:min-h-[340px] md:min-h-[420px]"
                            >
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
                                        src={img}
                                        alt={`Project overview ${index + 1}`}
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
                                    transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.15 + index * 0.15 }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Stats row - 8 figures, full width, inside the same bordered box */}
                    <div className="mt-5 grid grid-cols-4 gap-3 sm:mt-6 sm:gap-4 md:grid-cols-8">
                        {stats.map(({ icon: Icon, label, value, prefix, suffix }, i) => (
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
                                        delay: i * 0.08,
                                    }}
                                    className="flex justify-center"
                                >
                                    <Icon className="mb-2 h-4 w-4 text-black transition-transform duration-300 group-hover:rotate-12 sm:mb-3 sm:h-5 sm:w-5" />
                                </motion.div>
                                <p className="flex justify-center whitespace-nowrap text-center text-[9px] text-gray-500 sm:text-xs">
                                    {label}
                                </p>
                                <CountUp value={value} prefix={prefix} suffix={suffix} />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Marquee teaser strip - truly infinite, hardened against reflow glitches */}
                <div className="overflow-hidden pt-10 py-3 sm:pt-14 md:pt-20">
                    <motion.div
                        className="flex w-max items-center gap-8 whitespace-nowrap text-xs uppercase tracking-[0.2em] text-gray-500"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                    >
                        {[...marqueeTags, ...marqueeTags].map((tag, i) => (
                            <span key={i} className="flex flex-none items-center gap-8">
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