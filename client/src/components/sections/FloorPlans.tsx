import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import floorPlan from "../../assets/images/floor-plan.png";
import bhk1 from "../../assets/images/bhk1.png";
import bhk2 from "../../assets/images/bhk2.png";
import bhk2rise from "../../assets/images/bhk2rise.png";

const slideVariants: Variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 60 : -60,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (direction: number) => ({
        x: direction > 0 ? -60 : 60,
        opacity: 0,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
    }),
};

const tableContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12 },
    },
};

const rowVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

function FloorPlans() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const floorPlanImages = [floorPlan, bhk1, bhk2, bhk2rise, bhk1];

    const floorPlans = [
        { config: "1 BHK Growth Home", carpet: "322 - 485 SqFt", price: "₹ 32.99 Lakh", showPrice: true },
        { config: "2 BHK Growth Home", carpet: "485 - 621 SqFt", price: "₹ 49.99 Lakh", showPrice: false },
        { config: "2 BHK Peak/XL Home", carpet: "620 - 700 SqFt", price: "₹ 60.00 Lakh", showPrice: false },
    ];

    const handlePrev = () => {
        setDirection(-1);
        setCurrentImageIndex((prev) => (prev === 0 ? floorPlanImages.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentImageIndex((prev) => (prev === floorPlanImages.length - 1 ? 0 : prev + 1));
    };

    const goToSlide = (index: number) => {
        setDirection(index > currentImageIndex ? 1 : -1);
        setCurrentImageIndex(index);
    };

    const isBlurred = currentImageIndex >= 2;

    return (
        <section id="floor-plans" className="px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="py-12 sm:py-16 md:py-20">
                {/* Header - black band, border beam, self-drawing green curve, green title */}
                <div className="relative mb-10 overflow-hidden rounded-2xl bg-black px-6 py-12 text-center sm:mb-12 sm:px-10 sm:py-16">
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

                    {/* Self-drawing green curve */}
                    <svg
                        className="pointer-events-none absolute inset-0 z-[2] hidden h-full w-full text-green-500 sm:block"
                        viewBox="0 0 800 200"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M0 160 Q 150 40 320 120 T 800 60"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            fill="none"
                            opacity="0.5"
                        />
                    </svg>

                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            <span className="text-green-500">Floor Plans</span>{" "}
                            <span className="text-white">&amp; Master Plan</span>
                        </h2>
                        <p className="mt-2 text-sm text-gray-300 sm:text-base">
                            Explore our thoughtfully designed spaces
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-2 md:gap-12">
                    {/* LEFT - Image Carousel */}
                    <div>
                        <div className="relative flex h-[280px] items-center justify-center overflow-hidden rounded-2xl bg-gray-100 sm:h-[360px] md:h-[440px]">
                            <AnimatePresence initial={false} custom={direction} mode="wait">
                                <motion.img
                                    key={currentImageIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    src={floorPlanImages[currentImageIndex]}
                                    alt={`Floor Plan ${currentImageIndex + 1}`}
                                    className={`absolute h-full w-full object-fill ${isBlurred ? "blur-lg" : ""}`}
                                />
                            </AnimatePresence>

                            {/* Blurred Overlay with View More Button */}
                            {isBlurred && (
                                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40">
                                    <a
                                        href="#enquire"
                                        className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80 sm:px-8 sm:py-4"
                                    >
                                        View More
                                    </a>
                                </div>
                            )}

                            {/* Navigation Arrows */}
                            <button
                                onClick={handlePrev}
                                aria-label="Previous floor plan"
                                className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black p-2 text-white transition-opacity hover:opacity-80 sm:left-4"
                            >
                                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                            </button>

                            <button
                                onClick={handleNext}
                                aria-label="Next floor plan"
                                className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black p-2 text-white transition-opacity hover:opacity-80 sm:right-4"
                            >
                                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                            </button>
                        </div>

                        {/* Progress dots */}
                        <div className="mt-4 flex items-center justify-center gap-2">
                            {floorPlanImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    aria-label={`Go to floor plan ${index + 1}`}
                                    className="p-1"
                                >
                                    <motion.span
                                        animate={{
                                            width: index === currentImageIndex ? 20 : 6,
                                            backgroundColor: index === currentImageIndex ? "#000000" : "#d1d5db",
                                        }}
                                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        className="block h-1.5 rounded-full"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT - Floor Plans Table */}
                    <div className="flex flex-col justify-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={tableContainerVariants}
                            className="rounded-2xl border border-black p-5 sm:p-6 md:p-8"
                        >
                            <table className="w-full border-collapse text-left">
                                <thead>
                                    <tr className="border-b-2 border-black">
                                        <th className="pb-4 text-xs font-bold uppercase tracking-wide sm:text-sm">
                                            Config.
                                        </th>
                                        <th className="pb-4 text-xs font-bold uppercase tracking-wide sm:text-sm">
                                            Carpet
                                        </th>
                                        <th className="pb-4 text-right text-xs font-bold uppercase tracking-wide sm:text-sm">
                                            Price
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {floorPlans.map((plan, index) => (
                                        <motion.tr key={index} variants={rowVariants}>
                                            <td className="py-4 pr-3 text-xs font-medium sm:text-sm">
                                                {plan.config}
                                            </td>
                                            <td className="py-4 pr-3 text-xs text-gray-600 sm:text-sm">
                                                {plan.carpet}
                                            </td>
                                            <td className="py-4 text-right">
                                                {plan.showPrice ? (
                                                    <span className="text-xs font-bold sm:text-sm">
                                                        {plan.price}
                                                    </span>
                                                ) : (
                                                    <motion.a
                                                        href="#enquire"
                                                        initial={{ scale: 1 }}
                                                        whileInView={{ scale: [1, 1.08, 1] }}
                                                        viewport={{ once: true, margin: "-60px" }}
                                                        transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-black px-4 py-2 text-xs font-medium text-white transition-opacity hover:opacity-80 sm:text-sm"
                                                    >
                                                        Click Here
                                                    </motion.a>
                                                )}
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FloorPlans;