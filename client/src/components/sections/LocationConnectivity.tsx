import { motion, type Variants, useInView, animate } from "motion/react";
import { TrainFront, Building2, Route, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import train from "../../assets/images/train.png";

const connectivityInfo = [
    {
        icon: TrainFront,
        title: "Naigaon Railway Station",
        statValue: 2,
        statSuffix: " mins away",
        description: "Quick, everyday access to the local train network.",
    },
    {
        icon: Building2,
        title: "Mumbai's Business Districts",
        statValue: 30,
        statSuffix: " mins",
        description: "To major CBDs — Borivali, Goregaon, and Andheri.",
    },
    {
        icon: Route,
        title: "Upcoming Infrastructure",
        statValue: 6,
        statSuffix: "+ projects",
        description: "Bullet Train, Metro Line 7, Coastal Road, Twin Tunnel, and more.",
    },
    {
        icon: TrendingUp,
        title: "A Growth Corridor",
        statValue: 5,
        statSuffix: "% rental yield",
        description: "Within 5 years of possession, in Mumbai's fastest-growing corridor.",
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

const listVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -16 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

function CountUp({
    value,
    suffix = "",
    duration = 1.4,
}: {
    value: number;
    suffix?: string;
    duration?: number;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });
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
        <span ref={ref} className="font-bold text-black">
            {display}
            {suffix}
        </span>
    );
}

function LocationConnectivity() {
    return (
        <section id="location" className="px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="py-6 sm:py-8 md:py-10">
                {/* Header - black band, border beam, self-drawing green curve only */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={headerFade}
                    className="relative mb-10 overflow-hidden rounded-2xl bg-black px-6 py-12 text-center sm:mb-12 sm:px-10 sm:py-16"
                >
                    {/* Border beam */}
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

                    {/* Self-drawing accent route - the only background line now */}
                    <svg
                        className="pointer-events-none absolute inset-0 z-[2] hidden h-full w-full text-green-500 sm:block"
                        viewBox="0 0 800 200"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <motion.path
                            d="M0 160 Q 150 40 320 120 T 800 60"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            fill="none"
                            opacity="0.5"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.5 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2.2, ease: "easeInOut", delay: 0.3 }}
                        />
                    </svg>

                    <div className="relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                            className="text-3xl font-bold text-white sm:text-4xl"
                        >
                            Location &amp; Connectivity
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                            className="mt-2 text-sm text-gray-300 sm:text-base"
                        >
                            Perfectly placed in Mumbai's next growth corridor
                        </motion.p>
                    </div>
                </motion.div>

                {/* Map + Info split — map takes 2.5/4, text takes 1.5/4, both stretched to equal height */}
                <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-[2fr_2fr] md:gap-10">
                    {/* Map - animated draw-in border + fade/scale entrance */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="relative overflow-hidden rounded-2xl border border-gray-200"
                    >
                        <svg
                            className="pointer-events-none absolute inset-0 z-10 h-full w-full"
                            aria-hidden="true"
                        >
                            <motion.rect
                                x="1"
                                y="1"
                                width="calc(100% - 2px)"
                                height="calc(100% - 2px)"
                                rx="16"
                                fill="none"
                                stroke="#22c55e"
                                strokeWidth="2"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }}
                            />
                        </svg>
                        <iframe
                            className="h-[320px] w-full sm:h-[400px] md:h-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.1820501364004!2d72.85228907423065!3d19.361268411209416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7af8f6ffd06d1%3A0x281c06680b5be44b!2sGrowth%20Housing%20By%20The%20House%20of%20Abhinandan%20Lodha%2C%20Naigaon!5e0!3m2!1sen!2sus!4v1786811753814!5m2!1sen!2sus"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>

                    {/* Connectivity info - fills full height, items spread with justify-between */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={listVariants}
                        className="flex min-w-0 flex-col rounded-2xl border border-black p-5 sm:p-6"
                    >
                        <motion.h3 variants={itemVariants} className="mb-6 text-lg font-bold sm:text-xl">
                            Connectivity Highlights
                        </motion.h3>

                        <div className="flex flex-1 flex-col justify-between gap-5">
                            {/* Item 1 - Railway Station */}
                            <motion.div variants={itemVariants} className="flex items-start gap-4">
                                <TrainFront className="mt-1 h-5 w-5 shrink-0 text-black sm:h-6 sm:w-6" />
                                <div>
                                    <p className="text-sm font-bold sm:text-base">
                                        {connectivityInfo[0].title}
                                    </p>
                                    <p className="mt-1 text-xs leading-5 text-gray-600 sm:text-sm sm:leading-6">
                                        <CountUp value={connectivityInfo[0].statValue} suffix={connectivityInfo[0].statSuffix} />
                                        {" — "}
                                        {connectivityInfo[0].description}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Train marquee - images anchored to bottom, black baseline acts as the track */}
                            <motion.div
                                variants={itemVariants}
                                className="relative flex h-10 items-end overflow-hidden border-b-2 border-black"
                            >
                                <motion.div
                                    className="flex w-max items-end"
                                    animate={{ x: ["0%", "-150%"] }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                >
                                    {[...Array(16)].map((_, i) => (
                                        <img
                                            key={i}
                                            src={train}
                                            alt=""
                                            className="block h-6 w-auto shrink-0 object-contain object-bottom mr-8"
                                        />
                                    ))}
                                </motion.div>
                            </motion.div>

                            {/* Items 2–4 - Business Districts, Infrastructure, Growth Corridor */}
                            {connectivityInfo.slice(1).map(({ icon: Icon, title, statValue, statSuffix, description }) => (
                                <motion.div key={title} variants={itemVariants} className="flex items-start gap-4">
                                    <Icon className="mt-1 h-5 w-5 shrink-0 text-black sm:h-6 sm:w-6" />
                                    <div>
                                        <p className="text-sm font-bold sm:text-base">{title}</p>
                                        <p className="mt-1 text-xs leading-5 text-gray-600 sm:text-sm sm:leading-6">
                                            <CountUp value={statValue} suffix={statSuffix} />
                                            {" — "}
                                            {description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default LocationConnectivity;