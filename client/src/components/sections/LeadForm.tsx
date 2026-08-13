import { useState } from "react";

function LeadForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const response = await fetch("http://localhost:5000/api/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("✓ Thank you! Your enquiry has been submitted successfully.");
                setFormData({ name: "", email: "", mobile: "" });
                // Redirect to thank you page after 2 seconds
                setTimeout(() => {
                    window.location.href = "/thank-you";
                }, 2000);
            } else {
                setMessage(data.message || "Error submitting form. Please try again.");
            }
        } catch (error) {
            setMessage("Error submitting form. Please check your connection and try again.");
            console.error("Form submission error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="enquire" className="px-7.5">
            <div className="py-16">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold">Enquire Now</h2>
                        <p className="mt-2 text-gray-600">Get in touch with us for more information</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                            />
                        </div>

                        {/* Mobile Field */}
                        <div>
                            <label htmlFor="mobile" className="block text-sm font-medium mb-2">
                                Mobile Number
                            </label>
                            <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="Enter your mobile number"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                            />
                        </div>

                        {/* Message Display */}
                        {message && (
                            <div
                                className={`p-4 rounded-lg text-sm text-center ${
                                    message.includes("✓")
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                }`}
                            >
                                {message}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-black text-white py-3 rounded-lg font-medium transition-opacity hover:opacity-80 disabled:opacity-60"
                        >
                            {loading ? "Submitting..." : "Submit Enquiry"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default LeadForm;