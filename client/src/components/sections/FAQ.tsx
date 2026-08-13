import { ChevronDown } from "lucide-react";
import { useState } from "react";

function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What are the payment options available?",
            answer: "We offer flexible payment plans including down payment, construction linked payment, and post-possession payment options. Please contact us for detailed information about each plan.",
        },
        {
            question: "What is the possession timeline?",
            answer: "The estimated possession is expected in 2025-2026. We ensure timely delivery and keep our residents updated throughout the construction process.",
        },
        {
            question: "Are there any hidden charges?",
            answer: "No, we maintain complete transparency in pricing. All costs including registration, maintenance, and other charges are clearly mentioned upfront.",
        },
        {
            question: "What amenities are included in the project?",
            answer: "The project includes 25+ amenities such as gymnasium, swimming pool, community centers, gardens, parking, and more. All amenities are designed for modern living.",
        },
        {
            question: "Is the project eco-friendly?",
            answer: "Yes, we are committed to sustainability with green building practices, rainwater harvesting, waste management systems, and energy-efficient design throughout the project.",
        },
    ];

    const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
};
    return (
        <section className="px-7.5">
            <div className="py-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
                    <p className="mt-2 text-gray-600">Find answers to common questions about the project</p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto space-y-4 mb-12">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                            >
                                <h3 className="text-lg font-medium text-left">{faq.question}</h3>
                                <ChevronDown
                                    className={`w-5 h-5 text-black flex-shrink-0 transition-transform ${
                                        openIndex === index ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {openIndex === index && (
                                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* More Questions Button */}
                <div className="flex justify-center">
                    <a
                        href="#enquire"
                        className="inline-flex items-center justify-center rounded-lg bg-black px-8 py-4 text-sm font-medium text-white transition-opacity hover:opacity-80"
                    >
                        Have More Questions?
                    </a>
                </div>
            </div>
        </section>
    );
}

export default FAQ;