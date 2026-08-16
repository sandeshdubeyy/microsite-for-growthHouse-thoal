import { ChevronDown, Tag, CalendarClock, Sparkles, TrainFront, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";

function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            icon: Tag,
            question: "What is the starting price of HoABL Growth Housing Naigaon East?",
            answer: "The price starts from ₹34.99 Lacs* onwards for 1 BHK units.",
        },
        {
            icon: CalendarClock,
            question: "What is the possession date for HoABL Growth Housing The Great Western Mumbai?",
            answer: "Possession is expected by December 2030.",
        },
        {
            icon: Sparkles,
            question: "What amenities are offered at HoABL Growth Housing Naigaon East?",
            answer: "The project offers 80+ amenities including a swimming pool, amphitheatre, clubhouse, leisure zone, jogging track, cycling track, spa, salon, and mini theatre.",
        },
        {
            icon: TrainFront,
            question: "How far is HoABL Growth Housing from Naigaon Railway Station?",
            answer: "It is located just 10 minutes from Naigaon Railway Station and 5 minutes from Naigaon East Vasai Link Road.",
        },
        {
            icon: ShieldCheck,
            question: "Is HoABL Growth Housing RERA/MahaRERA registered?",
            answer: "Yes, this project is duly registered with MahaRERA, adhering to all regulatory norms and maintaining transparency in the construction process and delivery timeline.",
        },
    ];

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const listVariants: Variants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 16 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
    };

    return (
        <section id="faq" className="px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="py-12 sm:py-16 md:py-20">
                {/* Header - black band, border beam, SVG pattern, green accent */}
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

                    {/* Question-mark themed SVG pattern */}
                    <svg
                        width="100%"
                        height="100%"
                        className="pointer-events-none absolute inset-0 z-[2] text-white"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="faq-pattern"
                                width="60"
                                height="60"
                                patternUnits="userSpaceOnUse"
                            >
                                <text
                                    x="14"
                                    y="40"
                                    fontSize="26"
                                    fontWeight="bold"
                                    fill="currentColor"
                                    opacity="0.15"
                                >
                                    ?
                                </text>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#faq-pattern)" />
                    </svg>

                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            <span className="text-green-500">Frequently Asked</span>{" "}
                            <span className="text-white">Questions</span>
                        </h2>
                        <p className="mt-2 text-sm text-gray-300 sm:text-base">
                            Find answers to common questions about the project
                        </p>
                    </div>
                </div>

                {/* FAQ Accordion */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={listVariants}
                    className="mx-auto mb-10 max-w-3xl space-y-4 sm:mb-12"
                >
                    {faqs.map(({ icon: Icon, question, answer }, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`overflow-hidden rounded-lg border bg-white transition-colors duration-300 ${
                                    isOpen ? "border-green-500" : "border-gray-200"
                                }`}
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-gray-50 sm:px-6"
                                >
                                    {/* Active left accent bar */}
                                    <span
                                        className={`h-8 w-1 shrink-0 rounded-full transition-colors duration-300 ${
                                            isOpen ? "bg-green-500" : "bg-gray-200"
                                        }`}
                                        aria-hidden="true"
                                    />

                                    <Icon
                                        className={`h-5 w-5 shrink-0 transition-colors duration-300 ${
                                            isOpen ? "text-green-500" : "text-black"
                                        }`}
                                    />

                                    <h3 className="flex-1 text-sm font-medium sm:text-base md:text-lg">
                                        {question}
                                    </h3>

                                    <motion.span
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className="shrink-0"
                                    >
                                        <ChevronDown className="h-5 w-5 text-black" />
                                    </motion.span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <motion.div
                                                initial={{ y: -8 }}
                                                animate={{ y: 0 }}
                                                exit={{ y: -8 }}
                                                transition={{ duration: 0.25, ease: "easeOut" }}
                                                className="border-t border-gray-200 bg-gray-50 px-5 py-4 pl-[60px] sm:px-6 sm:pl-[68px]"
                                            >
                                                <p className="text-sm text-gray-600 sm:text-base">{answer}</p>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* More Questions Button */}
                <div className="flex justify-center">
                    <a
                        href="#enquire"
                        className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80 sm:px-8 sm:py-4"
                    >
                        Have More Questions?
                    </a>
                </div>
            </div>
        </section>
    );
}

export default FAQ;