import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

function FloorPlans() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Sample floor plan images (replace with actual image URLs)
    const floorPlanImages = [
        "https://via.placeholder.com/500x400?text=2BHK+Premium",
        "https://via.placeholder.com/500x400?text=2BHK+Luxury",
        "https://via.placeholder.com/500x400?text=2.5BHK+Premium",
        "https://via.placeholder.com/500x400?text=3BHK+Premium",
        "https://via.placeholder.com/500x400?text=3BHK+Luxury",
    ];

    const floorPlans = [
        { rna: "661.67", typology: "2 BHK PREMIUM", price: "Check Price" },
        { rna: "778.45", typology: "2 BHK LUXURY", price: "Check Price" },
        { rna: "862.20", typology: "2.5 BHK PREMIUM (A)", price: "Check Price" },
        { rna: "862.52", typology: "2.5 BHK PREMIUM (B)", price: "Check Price" },
        { rna: "967.68", typology: "3 BHK PREMIUM (A)", price: "Check Price" },
        { rna: "966.82", typology: "3 BHK PREMIUM (B)", price: "Check Price" },
        { rna: "1128.82", typology: "3 BHK LUXURY", price: "Check Price" },
        { rna: "1300.61", typology: "3.5 BHK LUXURY", price: "Check Price" },
    ];

    const handlePrev = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? floorPlanImages.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentImageIndex((prev) => (prev === floorPlanImages.length - 1 ? 0 : prev + 1));
    };

    const isBlurred = currentImageIndex >= 2;

    return (
        <section className="px-7.5">
            <div className="py-16">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold">Floor Plans & Master Plan</h2>
                    <p className="mt-2 text-gray-600">Explore our thoughtfully designed spaces</p>
                </div>

                <div className="grid grid-cols-2 gap-12 items-center">
                    {/* LEFT - Image Carousel */}
                    <div className="relative">
                        <div className="relative rounded-lg overflow-hidden bg-gray-100 h-[500px] flex items-center justify-center">
                            <img
                                src={floorPlanImages[currentImageIndex]}
                                alt={`Floor Plan ${currentImageIndex + 1}`}
                                className={`w-full h-full object-cover ${isBlurred ? "blur-md" : ""}`}
                            />

                            {/* Blurred Overlay with View More Button */}
                            {isBlurred && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                    <a
                                        href="#enquire"
                                        className="inline-flex items-center justify-center rounded-lg bg-black px-8 py-4 text-sm font-medium text-white transition-opacity hover:opacity-80"
                                    >
                                        View More
                                    </a>
                                </div>
                            )}
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full hover:opacity-80 transition-opacity"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <button
                            onClick={handleNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full hover:opacity-80 transition-opacity"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Image Counter */}
                        <div className="text-center mt-4 text-sm text-gray-600">
                            {currentImageIndex + 1} / {floorPlanImages.length}
                        </div>
                    </div>

                    {/* RIGHT - Floor Plans Table */}
                    <div>
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="pb-4 font-bold">RNA (Sq. Ft.)</th>
                                    <th className="pb-4 font-bold">Typology</th>
                                    <th className="pb-4 font-bold">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {floorPlans.map((plan, index) => (
                                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="py-4 text-sm">{plan.rna}</td>
                                        <td className="py-4 text-sm font-medium">{plan.typology}</td>
                                        <td className="py-4 text-sm">
                                            <a href="#enquire" className="text-blue-600 hover:underline">
                                                {plan.price}
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FloorPlans;