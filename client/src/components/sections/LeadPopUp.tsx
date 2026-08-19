import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2 } from "lucide-react";
import enquireImg from "../../assets/images/enquire.png";
import { API_URL } from "../../configs/api.config";
import { useNavigate } from "react-router-dom";

function LeadPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", mobile: "", consent: true });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    // Fires twice every page load, regardless of past visits/refreshes - no persistence.
    useEffect(() => {
        const firstTimer = setTimeout(() => setIsOpen(true), 20000);
        const secondTimer = setTimeout(() => setIsOpen(true), 70000);

        return () => {
            clearTimeout(firstTimer);
            clearTimeout(secondTimer);
        };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleClose = () => {
        setIsOpen(false);
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
                setSuccess(true);

                setFormData({
                    name: "",
                    email: "",
                    mobile: "",
                    consent: true,
                });

                setTimeout(() => {
                    navigate("/thank-you");
                }, 1500);
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

            console.error("Popup form submission error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
                    onClick={handleClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.92 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-black bg-white"
                    >
                        {/* Close button */}
                        <button
                            onClick={handleClose}
                            aria-label="Close"
                            className="absolute right-3 top-3 z-10 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-gray-100"
                        >
                            <X className="h-5 w-5 text-black" />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* LEFT/TOP - Image */}
                            <div className="hidden items-center justify-center bg-gray-50 p-6 sm:p-8 md:flex">
                                <img
                                    src={enquireImg}
                                    alt="Enquire"
                                    className="max-h-72 w-auto object-contain"
                                />
                            </div>

                            {/* RIGHT/BOTTOM - Form */}
                            <div className="p-6 sm:p-8">
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
                                            <p className="mt-1 text-sm text-gray-600">
                                                Thank you! Our team will reach out to you shortly.
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            onSubmit={handleSubmit}
                                            className="space-y-5"
                                        >
                                            <div>
                                                <h3 className="text-xl font-bold sm:text-2xl">
                                                    Don't Miss Out
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-600">
                                                    Get exclusive early access and pricing details.
                                                </p>
                                            </div>

                                            {/* Name Field - floating label */}
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="popup-name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder=" "
                                                    required
                                                    className="peer w-full rounded-lg border border-gray-300 px-4 pb-2 pt-5 transition-all focus:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-500/15"
                                                />
                                                <label
                                                    htmlFor="popup-name"
                                                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 transition-all peer-focus:top-3 peer-focus:text-xs peer-focus:text-green-600 peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-xs"
                                                >
                                                    Full Name
                                                </label>
                                            </div>

                                            {/* Email Field - floating label */}
                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    id="popup-email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder=" "
                                                    required
                                                    className="peer w-full rounded-lg border border-gray-300 px-4 pb-2 pt-5 transition-all focus:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-500/15"
                                                />
                                                <label
                                                    htmlFor="popup-email"
                                                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 transition-all peer-focus:top-3 peer-focus:text-xs peer-focus:text-green-600 peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-xs"
                                                >
                                                    Email Address
                                                </label>
                                            </div>

                                            {/* Mobile Field - floating label */}
                                            <div className="relative">
                                                <input
                                                    type="tel"
                                                    id="popup-mobile"
                                                    name="mobile"
                                                    value={formData.mobile}
                                                    onChange={handleChange}
                                                    placeholder=" "
                                                    required
                                                    className="peer w-full rounded-lg border border-gray-300 px-4 pb-2 pt-5 transition-all focus:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-500/15"
                                                />
                                                <label
                                                    htmlFor="popup-mobile"
                                                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 transition-all peer-focus:top-3 peer-focus:text-xs peer-focus:text-green-600 peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-xs"
                                                >
                                                    Mobile Number
                                                </label>
                                            </div>

                                            {/* Consent */}
                                            <div className="flex items-start gap-3">
                                                <input
                                                    type="checkbox"
                                                    id="popup-consent"
                                                    name="consent"
                                                    checked={formData.consent}
                                                    onChange={handleChange}
                                                    className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-black"
                                                />

                                                <label
                                                    htmlFor="popup-consent"
                                                    className="cursor-pointer text-xs leading-5 text-gray-500"
                                                >
                                                    By submitting an enquiry, I authorize HoABL to contact me via
                                                    Call, SMS, WhatsApp, Emailer or any other relevant medium.
                                                </label>
                                            </div>

                                            {message && (
                                                <div className="rounded-lg bg-red-100 p-3 text-center text-sm text-red-700">
                                                    {message}
                                                </div>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="w-full rounded-lg bg-black py-3 font-medium text-white transition-opacity hover:opacity-80 disabled:opacity-60"
                                            >
                                                {loading ? "Submitting..." : "Submit Enquiry"}
                                            </button>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default LeadPopup;