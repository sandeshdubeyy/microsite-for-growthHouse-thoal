import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import enquireImg from "../../assets/images/enquire.png";
import { API_URL } from "../../configs/api.config";
import { useNavigate } from "react-router-dom";

function LeadForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        consent: true,
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const nameParts = formData.name.trim().split(/\s+/);

        if (nameParts.length < 2) {
            setMessage("Please enter your full name.");
            return;
        }

        setLoading(true);
        setMessage("");

        try {
            const response = await fetch(
                `${API_URL}/api/leads`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            if (response.ok) {
                setFormData({
                    name: "",
                    email: "",
                    mobile: "",
                    consent: true,
                });

                navigate("/thank-you");
            } else {
                setMessage(
                    data.message ||
                    "Error submitting form. Please try again."
                );
            }
        } catch (error) {
            setMessage(
                "Error submitting form. Please check your connection and try again."
            );

            console.error("Form submission error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="enquire" className="px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="py-6 sm:py-8 md:py-10">
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

                    {/* Dot-grid SVG pattern */}
                    <svg
                        width="100%"
                        height="100%"
                        className="pointer-events-none absolute inset-0 z-[2] text-white"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="enquire-dot-grid"
                                width="24"
                                height="24"
                                patternUnits="userSpaceOnUse"
                            >
                                <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" opacity="0.25" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#enquire-dot-grid)" />
                    </svg>

                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            <span className="text-green-500">Enquire</span>{" "}
                            <span className="text-white">Now</span>
                        </h2>
                        <p className="mt-2 text-sm text-gray-300 sm:text-base">
                            Get in touch with us for more information
                        </p>
                    </div>
                </div>

                {/* Split layout: form (left) + image (right) */}
                <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-8 md:grid-cols-2 md:gap-10">
                    {/* LEFT - Form */}
                    <div className="rounded-2xl border border-black p-6 sm:p-8">
                        <AnimatePresence mode="wait">
                            {success ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex flex-col items-center justify-center py-10 text-center"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                    >
                                        <CheckCircle2 className="h-14 w-14 text-green-500" />
                                    </motion.div>
                                    <p className="mt-4 text-lg font-bold">Enquiry Submitted!</p>
                                    <p className="mt-1 text-sm text-gray-600">{message}</p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    {/* Name Field - floating label */}
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder=" "
                                            required
                                            className="peer w-full rounded-lg border border-gray-300 px-4 pb-2 pt-5 transition-all focus:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-500/15"
                                        />
                                        <label
                                            htmlFor="name"
                                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 transition-all peer-focus:top-3 peer-focus:text-xs peer-focus:text-green-600 peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-xs"
                                        >
                                            Full Name
                                        </label>
                                    </div>

                                    {/* Email Field - floating label */}
                                    <div className="relative">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder=" "
                                            required
                                            className="peer w-full rounded-lg border border-gray-300 px-4 pb-2 pt-5 transition-all focus:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-500/15"
                                        />
                                        <label
                                            htmlFor="email"
                                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 transition-all peer-focus:top-3 peer-focus:text-xs peer-focus:text-green-600 peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-xs"
                                        >
                                            Email Address
                                        </label>
                                    </div>

                                    {/* Mobile Field - floating label */}
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            id="mobile"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            placeholder=" "
                                            required
                                            className="peer w-full rounded-lg border border-gray-300 px-4 pb-2 pt-5 transition-all focus:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-500/15"
                                        />
                                        <label
                                            htmlFor="mobile"
                                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 transition-all peer-focus:top-3 peer-focus:text-xs peer-focus:text-green-600 peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-xs"
                                        >
                                            Mobile Number
                                        </label>
                                    </div>

                                    {/* Consent Checkbox */}
                                    <div className="flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            id="consent"
                                            name="consent"
                                            checked={formData.consent}
                                            onChange={handleChange}
                                            className="mt-1 h-4 w-4 shrink-0 accent-black"
                                        />
                                        <label htmlFor="consent" className="text-sm leading-5 text-gray-600">
                                            By submitting an enquiry, I authorize HoABL to contact me via Call,
                                            SMS, WhatsApp, Emailer or any other relevant medium.
                                        </label>
                                    </div>

                                    {/* Error Message Display */}
                                    {message && !success && (
                                        <div className="rounded-lg bg-red-100 p-4 text-center text-sm text-red-700">
                                            {message}
                                        </div>
                                    )}

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full rounded-lg bg-black py-3 font-medium text-white transition-opacity hover:opacity-80 disabled:opacity-60"
                                    >
                                        {loading ? "Submitting..." : "Submit Enquiry"}
                                    </button>

                                    <p className="text-center text-xs text-gray-500">
                                        No spam. We'll only reach out about this project.
                                    </p>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* RIGHT - Image, centered, black border, not full height */}
                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center rounded-2xl border border-black p-2">
                            <img
                                src={enquireImg}
                                alt="Enquire"
                                className="max-h-full w-auto rounded-lg object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default LeadForm;