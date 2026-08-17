import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

function ThankYou() {
    return (
        <>
            <main className="flex min-h-[70vh] items-center justify-center px-4 py-16 sm:px-6 sm:py-20 md:px-12 lg:px-16">
                <div className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-black px-6 py-14 text-center sm:px-10 sm:py-16">
                    {/* Border beam */}
                    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-3xl">
                        <div
                            className="absolute inset-[-50%] animate-[spin_6s_linear_infinite]"
                            style={{
                                background:
                                    "conic-gradient(from 0deg, transparent 0%, rgba(34,197,94,0.15) 30%, rgba(34,197,94,0.55) 55%, rgba(34,197,94,1) 68%, rgba(34,197,94,0.55) 78%, rgba(34,197,94,0.15) 90%, transparent 100%)",
                            }}
                        />
                    </div>
                    <div className="absolute inset-[5px] z-[1] rounded-3xl bg-black" />

                    {/* Dot-grid background */}
                    <svg
                        width="100%"
                        height="100%"
                        className="pointer-events-none absolute inset-0 z-[2] text-white"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="thankyou-dot-grid"
                                width="24"
                                height="24"
                                patternUnits="userSpaceOnUse"
                            >
                                <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" opacity="0.2" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#thankyou-dot-grid)" />
                    </svg>

                    {/* Corner brackets */}
                    <svg
                        className="pointer-events-none absolute left-4 top-4 z-[2] h-6 w-6 text-green-500"
                        viewBox="0 0 28 28"
                        fill="none"
                    >
                        <motion.path
                            d="M0 10 V0 H10"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                        />
                    </svg>
                    <svg
                        className="pointer-events-none absolute right-4 top-4 z-[2] h-6 w-6 rotate-90 text-green-500"
                        viewBox="0 0 28 28"
                        fill="none"
                    >
                        <motion.path
                            d="M0 10 V0 H10"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                        />
                    </svg>
                    <svg
                        className="pointer-events-none absolute bottom-4 left-4 z-[2] h-6 w-6 -rotate-90 text-green-500"
                        viewBox="0 0 28 28"
                        fill="none"
                    >
                        <motion.path
                            d="M0 10 V0 H10"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                        />
                    </svg>
                    <svg
                        className="pointer-events-none absolute bottom-4 right-4 z-[2] h-6 w-6 rotate-180 text-green-500"
                        viewBox="0 0 28 28"
                        fill="none"
                    >
                        <motion.path
                            d="M0 10 V0 H10"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                        />
                    </svg>

                    {/* Content */}
                    <div className="relative z-10">
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
                            className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10"
                        >
                            <CheckCircle2 className="h-12 w-12 text-green-500" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                            className="mt-6 text-2xl font-bold text-white sm:text-3xl"
                        >
                            Thank You!
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                            className="mt-3 text-sm text-gray-300 sm:text-base"
                        >
                            Our sales team has received your enquiry and will reach out to you soon.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                            className="mt-8"
                        >
                            <motion.a
                                href="/"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-200 sm:px-8 sm:py-4"
                            >
                                Go Back
                            </motion.a>
                        </motion.div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default ThankYou;